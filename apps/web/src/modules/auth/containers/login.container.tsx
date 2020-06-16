import React, { Component, ReactNode, Fragment, RefObject } from 'react';
import { Button } from 'antd';
import Login from '@skeleton/web/modules/auth/components/form/login';
import { RouteComponentProps, withRouter } from 'react-router';
import { AuthService } from '@skeleton/domains/auth/services/auth.service';
import { AppState } from '@skeleton/web/store';
import { connect } from 'react-redux';

interface LoginFormContainerProps extends RouteComponentProps {
	isLoading: boolean;
}

class LoginFormContainer extends Component<LoginFormContainerProps, any> {
	private authService: AuthService;
	private formRef: RefObject<any>;

	constructor(props: LoginFormContainerProps) {
		super(props);

		this.authService = new AuthService();
		this.formRef = React.createRef<any>();
	}

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
			.then(async (value) => {
				console.log(value);
				await this.authService.login(value);
				this.props.history.replace('/');
			})
			.catch((error) => {
				console.log(error);
			});
	};
}

const mapStateToProps = (state: AppState) => ({
	isLoading: state.auth.authLoading,
});

export default connect(mapStateToProps)(withRouter(LoginFormContainer));
