import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import '@skeleton/shared/pages/style.scss';

class NotFoundPage extends Component<any, any> {
	render() {
		return (
			<section className="container">
				<div className="landing-form landing-box col-lg-6 col-md-10 col-sm-12 col-xs-12">
					<div className="landing-box logo">
						<i className="fa fa-exclamation-triangle" />
					</div>

					<h2 className="text-center"> Page Not Found </h2>

					<p className="text-center">
						The page you are looking cannot be found.
					</p>
				</div>

				<div className="text-center">
					Your page doesn't exists ?{' '}
					<NavLink to="#" onClick={() => this.props.history.goBack()}>
						{' '}
						Go back.{' '}
					</NavLink>
				</div>
			</section>
		);
	}
}

export default withRouter(NotFoundPage);
