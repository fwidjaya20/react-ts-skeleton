import React, { Component } from 'react';
import { GuardFunction } from '@skeleton/shared/router/contracts/middleware.contract';

const AsyncComponent = (component: Function, guards: GuardFunction[] = []) => {
	return class extends Component<any, any> {
		private mounted: boolean;

		constructor(props: any) {
			super(props);

			this.state = {
				component: null,
			};
		}

		async componentDidMount() {
			this.mounted = true;

			const { default: Component } = await component();

			let guardResult = await Promise.all(
				guards.map(async (guard) => {
					return new Promise(async (resolve) =>
						resolve(await guard()),
					);
				}),
			);

			let fallbackUrl = guardResult.find((result) => {
				return result !== true;
			});

			if (fallbackUrl) {
				window.location.href = fallbackUrl.toString();
			}

			if (this.mounted) {
				this.setState({
					component: <Component {...this.props} />,
				});
			}
		}

		render() {
			const { component } = this.state;

			return component || <div> Loading ... </div>;
		}

		componentWillUnmount(): void {
			this.mounted = false;
		}
	};
};

export default AsyncComponent;