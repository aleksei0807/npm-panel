'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _graphql = require('graphql');

var _nodeCmd = require('node-cmd');

var _nodeCmd2 = _interopRequireDefault(_nodeCmd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/static', _express2.default.static('client/dist'));

app.use((0, _cookieParser2.default)());

function renderHTML() {
	return '<!DOCTYPE html>\n\t<html lang="en">\n\t<head>\n\t  <meta charset="UTF-8">\n\t  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n\t  <meta name="viewport" content="width=device-width, initial-scale=1">\n\t  <meta name="keywords" content="npm, panel">\n\t  <meta name="description" content="Npm Panel">\n\t  <meta name="web_author" content="Aleksei Schurak">\n\t  <title>Npm Panel</title>\n\t  <link rel="stylesheet" href="static/styles.css" charset="utf-8">\n\t  <!--[if lte IE 9]>\n\t   <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.4.1/es5-sham.min.js">\n\t   <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.4.1/es5-shim.min.js">\n\t  <![endif]-->\n\t</head>\n\t<body>\n\t  <div id="root"></div>\n\t  <script src="static/js/index.js" charset="utf-8"></script>\n\t</body>\n\t</html>\n\t';
}

app.get('/', function (req, res) {
	res.end(renderHTML());
});

var npmGlobalData = '';

_nodeCmd2.default.get('npm list -g --json', function (data) {
	npmGlobalData = data;
});

var MyGraphQLSchema = new _graphql.GraphQLSchema({
	query: new _graphql.GraphQLObjectType({
		name: 'globalPackages',
		fields: {
			globalPackages: {
				type: _graphql.GraphQLString,
				resolve: function resolve() {
					return npmGlobalData;
				}
			}
		}
	})
});

app.use('/api', (0, _expressGraphql2.default)({
	schema: MyGraphQLSchema,
	graphiql: true
}));

// app.get('/api/', (req, res) => {
// 	cmd.get('npm list -g --json', (data) => {
// 		res.write(data);
// 		res.end();
// 	});
// });

module.exports = app;