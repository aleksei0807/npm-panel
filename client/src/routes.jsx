import React from 'react';
import { Route } from 'react-router';
import GeneralContainer from './containers/GeneralContainer';
import Home from './components/Home';
import Projects from './components/Projects';
import Global from './components/Global';

export default (
	<Route component={GeneralContainer}>
		<Route path="/" component={Home} />
		<Route path="/projects" component={Projects} />
		<Route path="/global" component={Global} />
	</Route>
);
