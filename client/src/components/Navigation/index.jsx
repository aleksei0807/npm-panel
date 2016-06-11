import React, { Component } from 'react';
import { Link } from 'react-router';
import './index.styl';

export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
				<Link to="/" activeClassName="active">Home</Link>
			</div>
        );
    }
}
