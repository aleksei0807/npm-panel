import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import './styl/index.styl';
import routes from './routes';

let rootElement = document.getElementById('root');

ReactDOM.render(
	<Router children={routes} history={browserHistory} />,
    rootElement
);
