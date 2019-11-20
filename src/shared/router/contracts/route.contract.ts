import { GuardFunction } from './middleware.contract';

export interface RouteContract {
	path: string;
	component?: string | null;
	children?: Array<RouteContract>;
	canActivate?: Array<GuardFunction>;
}
