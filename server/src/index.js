import express from 'express';
import cookieParser from 'cookie-parser';
import graphqlHTTP from 'express-graphql';
import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
} from 'graphql';
import cmd from 'node-cmd';

const app = express();

app.use('/static', express.static('client/dist'));

app.use(cookieParser());

function renderHTML() {
	return `<!DOCTYPE html>
	<html lang="en">
	<head>
	  <meta charset="UTF-8">
	  <meta http-equiv="X-UA-Compatible" content="IE=edge">
	  <meta name="viewport" content="width=device-width, initial-scale=1">
	  <meta name="keywords" content="npm, panel">
	  <meta name="description" content="Npm Panel">
	  <meta name="web_author" content="Aleksei Schurak">
	  <title>Npm Panel</title>
	  <link rel="stylesheet" href="static/styles.css" charset="utf-8">
	  <!--[if lte IE 9]>
	   <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.4.1/es5-sham.min.js">
	   <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.4.1/es5-shim.min.js">
	  <![endif]-->
	</head>
	<body>
	  <div id="root"></div>
	  <script src="static/js/index.js" charset="utf-8"></script>
	</body>
	</html>
	`;
}

app.get('/', (req, res) => {
	res.end(renderHTML());
});

let npmGlobalData = '';

cmd.get('npm list -g --json', (data) => {
	npmGlobalData = data;
});

const MyGraphQLSchema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'globalPackages',
		fields: {
			globalPackages: {
				type: GraphQLString,
				resolve() {
					return npmGlobalData;
				},
			},
		},
	}),
});

app.use('/api', graphqlHTTP({
	schema: MyGraphQLSchema,
	graphiql: true,
}));

module.exports = app;
