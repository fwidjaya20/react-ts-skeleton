import { AuthState } from '@skeleton/domains/auth/state/auth.state';
import {
	SET_AUTH_DATA,
	SET_LOADING,
} from '@skeleton/domains/auth/actions/auth.action';
import { Reducer } from '../../../cores/contracts/redux/reducers/reducer';

export class AuthReducer extends Reducer<AuthState> {
	constructor() {
		super({
			authUser: null,
			authLoading: false,
		});
	}

	private setAuthLoading(state: AuthState, payload: boolean): AuthState {
		return {
			...state,
			authLoading: payload,
		};
	}

	private setAuthUser(state: AuthState, payload: User): AuthState {
		return {
			...state,
			authUser: payload,
		};
	}

	get actions(): { [p: string]: (state: any, payload?: any) => any } {
		return {
			[SET_LOADING]: this.setAuthLoading,
			[SET_AUTH_DATA]: this.setAuthUser,
		};
	}
}
