import { RouteContract } from '@skeleton/shared/router/contracts/route.contract';
import { AUTH_ROUTES } from '@skeleton/web/modules/auth/pages/auth.routes';

const routes: RouteContract[] = [
	{
		path: '/auth',
		children: [...AUTH_ROUTES],
	},
];

export const LANDING_ROUTES: RouteContract[] = routes;
