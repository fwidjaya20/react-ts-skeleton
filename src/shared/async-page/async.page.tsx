import React, { Component } from 'react';

const AsyncComponent = (component: Function) => {
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
