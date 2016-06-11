import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import GeneralContainer from './containers/GeneralContainer';
import Home from './components/Home';

export default (
	<Route path="/" component={GeneralContainer}>
		<IndexRoute component={Home} />
	</Route>
);
