import React, { Component, ReactNode, Fragment } from 'react';
import { Button } from 'antd';
import RegisterForm from '@skeleton/web/modules/auth/components/form/register';

class RegisterFormContainer extends Component<any, any> {
	render(): ReactNode {
		return (
			<Fragment>
				<RegisterForm />

				<Button htmlType="button" type="primary" block>
					Register
				</Button>
			</Fragment>
		);
	}
}

export default RegisterFormContainer;
