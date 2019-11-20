import React, { Fragment, PureComponent } from 'react';
import '@skeleton/web/templates/landing/landing.template.scss';
import { NavLink } from 'react-router-dom';
import { RouterOutlet } from '@skeleton/shared/router/outlet';
import { LANDING_ROUTES } from '@skeleton/web/templates/landing/landing.routes';

class LandingTemplate extends PureComponent<any, any> {
	render() {
		return (
			<Fragment>
				<section className="landing-top-bar d-flex justify-content-center align-items-center">
					<NavLink to="/" className="logo">
						<img
							src="../../../../../public/images/logo-light.png"
							alt="Skeleton Logo"
						/>
					</NavLink>
				</section>

				<RouterOutlet routes={LANDING_ROUTES} />
			</Fragment>
		);
	}
}

export default LandingTemplate;
