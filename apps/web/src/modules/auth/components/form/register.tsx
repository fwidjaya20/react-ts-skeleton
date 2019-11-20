import React, { Component, Fragment } from 'react';
import { Form, Input } from 'antd';

class RegisterForm extends Component<any, any> {
	render() {
		return (
			<Fragment>
				<Form layout="vertical">
					<Form.Item>
						<label> Name </label>
						<Input
							id="form#name"
							type="email"
							placeholder="eg. John Doe"
						/>
					</Form.Item>
					<Form.Item>
						<label> Email </label>
						<Input
							id="form#email"
							type="email"
							placeholder="eg. foo@example.com"
						/>
					</Form.Item>
					<Form.Item>
						<label> Password </label>
						<Input.Password id="form#password" />
					</Form.Item>
					<Form.Item>
						<label> Confirm Password </label>
						<Input.Password id="form#confirmation_password" />
					</Form.Item>
				</Form>
			</Fragment>
		);
	}
}

export default RegisterForm;
