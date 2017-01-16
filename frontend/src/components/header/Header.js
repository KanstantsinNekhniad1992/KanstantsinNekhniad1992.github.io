import React from 'react';
import './header.scss';
import Identity from '../identity/Identity';

class Header extends React.Component {

	constructor () {
		super();
	}

	render () {

		return (
			<div className="nav nav-bar clearfix">
				<ul className="nav-bar-menu clearfix">
					<li className="menu-item">
						<a href="/">Home</a>
					</li>
					<li className="menu-item">
						<a href="/new-post">Create new post</a>
					</li>
				</ul>
				<Identity/>
			</div>
		);

	}

}

export default Header;
