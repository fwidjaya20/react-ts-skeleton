import { Route } from '@skeleton/shared/router/contracts/route.contract';
import { AUTH_ROUTES } from '@skeleton/web/modules/auth/pages/auth.routes';
import { GuestGuard } from '@skeleton/domains/auth/guards/guest.guard';

const routes: Route[] = [
	{
		path: '/auth',
		children: [...AUTH_ROUTES],
		canActivate: [GuestGuard],
	},
];

export const LANDING_ROUTES: Route[] = routes;
