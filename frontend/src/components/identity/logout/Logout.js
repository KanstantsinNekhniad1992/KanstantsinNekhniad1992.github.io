import React from 'react';
import './logout.scss';

class Logout extends React.Component {

	constructor () {
		super();
	}

	render () {

		return (
			<div className="logout-container">
				<span className="user-info">User Name</span>
				<a href="/logout">LogOut</a>
			</div>
		);

	}

}

export default Logout;
