import React, { PureComponent, ReactNode } from 'react';
import '@skeleton/shared/loader/style.scss';

class PreLoader extends PureComponent<any, any> {
	render(): ReactNode {
		return (
			<section className="preloader-wrapper">
				<div className="preload-animation">
					<div className="image">
						<img
							src="../../../public/images/logo-dark.png"
							alt="Logo"
						/>
					</div>
				</div>
				<div className="loading-bar">
					<div className="tile" />
				</div>
			</section>
		);
	}
}

export default PreLoader;
