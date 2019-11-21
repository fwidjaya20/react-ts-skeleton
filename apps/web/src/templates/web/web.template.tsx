import React, { PureComponent, Fragment } from 'react';
import { RouterOutlet } from '@skeleton/shared/router/outlet';
import { WEB_ROUTES } from '@skeleton/web/templates/web/web.routes';
import '@skeleton/web/templates/web/web.template.scss';
import { NavLink } from 'react-router-dom';

class WebTemplate extends PureComponent<any, any> {
	constructor(props: any) {
		super(props);

		this.state = {
			ui: {
				isAuthenticate: false,
			},
		};
	}

	componentDidMount(): void {
		this.setState({
			ui: {
				...this.state.ui,
				isAuthenticate: !!localStorage.getItem('_token'),
			},
		});
	}

	render() {
		const { isAuthenticate } = this.state.ui;

		return (
			<Fragment>
				<section className="nav-bar">
					<NavLink to="/" className="logo">
						<img
							src="../../../../../public/images/logo-light.png"
							alt="Skeleton Logo"
						/>
					</NavLink>

					<nav>
						<ul>
							<li className="nav-item">
								<NavLink to="/" className="nav-link">
									Home
								</NavLink>
							</li>
						</ul>

						<div className="nav-group">
							{isAuthenticate ? (
								<ul>
									<li className="nav-item">
										<NavLink
											to="/apps/dashboard"
											className="nav-link">
											Dashboard
										</NavLink>
									</li>
								</ul>
							) : (
								<ul>
									<li className="nav-item">
										<NavLink
											to="/auth/login"
											className="nav-button">
											Login
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											to="/auth/register"
											className="nav-button transparent">
											Register
										</NavLink>
									</li>
								</ul>
							)}
						</div>
					</nav>
				</section>

				<RouterOutlet routes={WEB_ROUTES} />
			</Fragment>
		);
	}
}

export default WebTemplate;
