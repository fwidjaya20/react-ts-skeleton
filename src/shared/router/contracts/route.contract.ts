import { MiddlewareFunction } from './middleware.contract';

export interface RouteContract {
	path: string;
	component?: string | null;
	children?: Array<RouteContract>;
	canActivate?: Array<MiddlewareFunction>;
}
