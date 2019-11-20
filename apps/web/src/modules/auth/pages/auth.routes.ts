import { RouteContract } from '@skeleton/shared/router/contracts/route.contract';

const routes: RouteContract[] = [
	{
		path: '/login',
		component: 'modules/auth/pages/login.page',
	},
	{
		path: '/register',
		component: 'modules/auth/pages/register.page',
	},
];

export const AUTH_ROUTES: RouteContract[] = routes;
