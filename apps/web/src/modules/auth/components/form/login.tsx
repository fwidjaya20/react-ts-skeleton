import React, { Component, Fragment, Ref } from 'react';
import { Form, Input } from 'antd';

interface LoginFormProps {
	formRef: Ref<any>;
}

class Login extends Component<LoginFormProps, any> {
	render() {
		return (
			<Fragment>
				<Form ref={this.props.formRef} noValidate layout="vertical">
					<Form.Item
						label="Email"
						name="email"
						rules={[{ required: true }]}>
						<Input
							id="form#email"
							type="email"
							placeholder="eg. foo@example.com"
						/>
					</Form.Item>
					<Form.Item
						label="Password"
						name="password"
						rules={[{ required: true }]}>
						<Input.Password id="form#password" />
					</Form.Item>
				</Form>
			</Fragment>
		);
	}
}

export default Login;
