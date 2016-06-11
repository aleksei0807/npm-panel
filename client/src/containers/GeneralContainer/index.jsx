import React, { Component } from 'react';
import './index.styl';
import Navigation from '../../components/Navigation';

export default class GeneralContainer extends Component {
    render() {
        return (
            <div className="general-container">
				<Navigation />
				{this.props.children}
			</div>
        );
    }
}
