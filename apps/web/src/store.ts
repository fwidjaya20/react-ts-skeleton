import { AuthState } from '@skeleton/domains/auth/state/auth.state';
import {
	applyMiddleware,
	combineReducers,
	createStore,
	Middleware,
	ReducersMapObject,
	Store,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AuthReducer } from '@skeleton/domains/auth/reducers/auth.reducer';

export interface AppState {
	auth: AuthState;
}

export const logger: Middleware = () => (next) => (action) => {
	if (process.env.NODE_ENV != 'production') {
		console.log(action);
	}
	return next(action);
};

function configure(): Store<any> {
	let middleware = applyMiddleware(logger);

	if (process.env.NODE_ENV != 'production') {
		middleware = composeWithDevTools(middleware);
	}

	let rootReducers: ReducersMapObject<AppState, any> = {
		auth: new AuthReducer().build(),
	};

	return createStore(
		combineReducers<AppState>(rootReducers),
		middleware,
	) as Store<AppState>;
}

export const AppStore = configure();
