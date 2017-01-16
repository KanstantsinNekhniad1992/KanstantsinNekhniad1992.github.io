import React from 'react';
import './login.scss';

class Login extends React.Component {

	constructor () {
		super();
	}

	render () {

		return (
			<div className="login-container">
				<form className="login-form" id="login-form" method="POST" action="/login" encType="application/x-www-form-urlencoded">
					<input type='text' name='username' className='username-field' placeholder='username'/>
					<input type='password' name='password' className='password-field' placeholder='password'/>
					<input type='submit' value='LogIn' id='login-buttom'/>
				</form>
				<a href='/register' className="register-link">SignUp</a>
			</div>
		);

	}

}

export default Login;
