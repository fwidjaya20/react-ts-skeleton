import React, { PureComponent } from 'react';
import '@skeleton/web/modules/auth/pages/style.scss';
import { NavLink } from 'react-router-dom';
import RegisterFormContainer from '@skeleton/web/modules/auth/containers/register.container';

class RegisterPage extends PureComponent<any, any> {
	render() {
		return (
			<section className="container">
				<div className="landing-form landing-box">
					<div className="landing-box logo">
						<i className="fa fa-user" />
					</div>

					<h2 className="text-center"> Register </h2>

					<RegisterFormContainer />
				</div>

				<div className="text-center">
					Already have an account ?{' '}
					<NavLink to="/auth/login"> Sign Up Here. </NavLink>
				</div>
			</section>
		);
	}
}

export default RegisterPage;
