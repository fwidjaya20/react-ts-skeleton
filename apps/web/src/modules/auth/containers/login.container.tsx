import React, { Component, ReactNode, Fragment } from 'react';
import Login from '@skeleton/web/modules/auth/components/form/login';
import { Button } from 'antd';

class LoginFormContainer extends Component<any, any> {
	render(): ReactNode {
		return (
			<Fragment>
				<Login />

				<Button htmlType="button" type="primary" block>
					Login
				</Button>
			</Fragment>
		);
	}
}

export default LoginFormContainer;
