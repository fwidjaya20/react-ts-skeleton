import React, { Component, ReactNode, Fragment, RefObject } from 'react';
import { Button } from 'antd';
import Login from '@skeleton/web/modules/auth/components/form/login';
import { withRouter } from 'react-router';

class LoginFormContainer extends Component<any, any> {
	private formRef: RefObject<any> = React.createRef<any>();

	render(): ReactNode {
		return (
			<Fragment>
				<Login formRef={this.formRef} />

				<Button
					block
					htmlType="button"
					type="primary"
					onClick={this.handleOnLogin}>
					Login
				</Button>
			</Fragment>
		);
	}

	handleOnLogin = async () => {
		await this.formRef.current
			.validateFields()
			.then((value) => {
				console.log(value);
				localStorage.setItem('_token', 'demo');
				this.props.history.replace('/');
			})
			.catch((error) => {
				console.log(error);
			});
	};
}

export default withRouter(LoginFormContainer);
