import React, { Component } from 'react';
import '@skeleton/web/modules/auth/pages/style.scss';
import { NavLink } from 'react-router-dom';
import LoginFormContainer from '@skeleton/web/modules/auth/containers/login.container';

class LoginPage extends Component<any, any> {
	render() {
		return (
			<section className="container">
				<div className="landing-form landing-box">
					<div className="landing-box logo">
						<i className="fa fa-lock" />
					</div>

					<h2 className="text-center"> Login </h2>

					<LoginFormContainer />
				</div>

				<div className="text-center">
					Doesn't have an account ?{' '}
					<NavLink to="/auth/register"> Register Here. </NavLink>
				</div>
			</section>
		);
	}
}

export default LoginPage;
