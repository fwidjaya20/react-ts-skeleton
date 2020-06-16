import { Service } from '@skeleton/cores/services/service';
import { AuthApiClient } from '@skeleton/domains/auth/https/api.client';
import { AuthToken } from '@skeleton/domains/auth/models/auth_token';
import {
	SET_AUTH_DATA,
	SET_LOADING,
} from '@skeleton/domains/auth/actions/auth.action';

export class AuthService extends Service {
	private authHttpClient: AuthApiClient;

	constructor() {
		super();
		this.authHttpClient = new AuthApiClient();
	}

	public async login(payload: any): Promise<AuthToken> {
		this.dispatch(SET_LOADING, true);

		let result: AuthToken = null;
		try {
			result = await this.authHttpClient.login(payload);
			localStorage.setItem('_token', result.token);
			localStorage.setItem('_refreshToken', result.refreshToken);
		} catch (e) {}

		this.dispatch(SET_LOADING, false);

		return result;
	}

	public async logout(): Promise<void> {
		await this.authHttpClient.logout();
		localStorage.removeItem('_token');
		localStorage.removeItem('_refreshToken');
	}

	public async me(): Promise<User> {
		this.dispatch(SET_LOADING, true);

		let result: User = null;
		try {
			result = await this.authHttpClient.me();
			this.dispatch(SET_AUTH_DATA, result);
		} catch (e) {}

		this.dispatch(SET_LOADING, false);

		return result;
	}
}
