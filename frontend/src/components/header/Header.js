import React from 'react';
import './header.scss';
import Identity from '../identity/Identity';
import {Link} from 'react-router';

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
						<Link to='/new-post'>Create new post</Link>
					</li>
				</ul>
				<Identity/>
			</div>
		);

	}

}

export default Header;
