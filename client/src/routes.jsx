import React from 'react';
import { Route } from 'react-router';
import GeneralContainer from './containers/GeneralContainer';
import Home from './containers/Home';
import Projects from './containers/Projects';
import Global from './containers/Global';

export default (
	<Route component={GeneralContainer}>
		<Route path="/" component={Home} />
		<Route path="/projects" component={Projects} />
		<Route path="/global" component={Global} />
	</Route>
);
