import React, { Component } from 'react';
import { Link } from 'react-router';
import { TiHomeOutline, TiClipboard, TiGlobeOutline } from 'react-icons/lib/ti';
import './index.styl';

export default class Navigation extends Component {
	render() {
		return (
			<div className="navigation">
				<div className="navigation__logo">
					<Link to="/">
						<svg viewBox="0 0 36 7">
							<path fill="#CB3837" d="M0,0v6h5v1h4v-1h9v-6" />
							<path
								fill="#FFF"
								d="M1,1v4h2v-3h1v3h1v-4h1v5h2v-4h1v2h-1v1h2v-4h1v4h2v-3h1v3h1v-3h1v3h1v-4"
								/>
						</svg>
						<div className="navigation__logo-panel"><span>panel</span></div>
					</Link>
				</div>
				<div className="navigation__list">
					<Link to="/" activeClassName="active">
						<span className="navigation__link-container">
							<i className="navigation__link-icon"><TiHomeOutline size={20} /></i>
							<span className="navigation__link-text">Home</span>
						</span>
					</Link>
				</div>
				<div className="navigation__list">
					<Link to="/projects" activeClassName="active">
						<span className="navigation__link-container">
							<i className="navigation__link-icon"><TiClipboard size={20} /></i>
							<span className="navigation__link-text">Projects</span>
						</span>
					</Link>
				</div>
				<div className="navigation__list">
					<Link to="/global" activeClassName="active">
						<span className="navigation__link-container">
							<i className="navigation__link-icon"><TiGlobeOutline size={20} /></i>
							<span className="navigation__link-text">Global</span>
						</span>
					</Link>
				</div>
			</div>
		);
	}
}
