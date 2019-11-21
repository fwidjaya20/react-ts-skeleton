import { GuardFunction } from './middleware.contract';

export interface Route {
	path: string;
	component?: string | null;
	children?: Array<Route>;
	canActivate?: Array<GuardFunction>;
}
