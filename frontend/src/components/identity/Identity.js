import React from 'react';
import Login from './login/Login';
import Logout from './logout/Logout';

class Identity extends React.Component {

	constructor () {
		super();
	}

	render () {

		const user = null;

		return (
			<div className="identity-component">
				{user ? <Logout/> : <Login/>}
			</div>
		);
	}

}

export default Identity;
