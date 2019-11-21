import { Route } from '@skeleton/shared/router/contracts/route.contract';
import { HOME_ROUTES } from '@skeleton/web/modules/home/pages/home.routes';

const routes: Route[] = [
	{
		path: '/',
		children: [...HOME_ROUTES],
	},
];

export const WEB_ROUTES: Route[] = routes;
