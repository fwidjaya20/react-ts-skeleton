import React, { PureComponent, Fragment, ReactNodeArray } from 'react';
import '@skeleton/web/modules/home/pages/home.page.scss';

class HomePage extends PureComponent<any, any> {
	render() {
		return (
			<Fragment>
				<section className="banner">
					<div className="container">
						<div className="banner-content">
							<div className="banner-text">
								<h1> Your application text </h1>
								<p className="col-12 col-lg-8 col-md-6">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. A accusantium ad alias
									aspernatur, corporis eius eos ipsum iure
									labore laudantium molestiae nostrum, omnis
									placeat quas quidem, quisquam quod ut vero.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="container boxes">
					<div className="row">{this.buildBoxes()}</div>
				</section>
			</Fragment>
		);
	}

	buildBoxes = (): ReactNodeArray => {
		let item: ReactNodeArray = [];

		for (let i = 0; i < 8; i++) {
			item.push(
				<div key={i} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
					<div className="box-item">Something Here</div>
				</div>,
			);
		}

		return item;
	};
}

export default HomePage;
