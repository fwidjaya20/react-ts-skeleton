import { HttpClient } from '../../../cores/https/client.http';
import { AuthToken } from '@skeleton/domains/auth/models/auth_token';

export class AuthApiClient extends HttpClient {
	public async login(payload: any = {}): Promise<AuthToken> {
		return {
			token: 'asdf',
			refreshToken: 'asdf',
		};
	}

	public async logout(): Promise<void> {
		return;
	}

	public async me(): Promise<User> {
		return {
			id: '001ffgh',
			name: 'Fredrick Widjaya',
			email: 'f.widjaya20@gmail.com',
		};
	}
}
