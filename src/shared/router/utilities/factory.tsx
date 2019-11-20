import { RouteContract } from '../contracts/route.contract';
import React, { ReactNode } from 'react';
import { Route } from 'react-router-dom';
import AsyncComponent from '@skeleton/shared/async-page/async.page';

let collection: any = [];

const parseRoute = (routes: RouteContract[], parent: RouteContract = null) => {
	routes.forEach((route) => {
		if (!route.children || route.children.length === 0) {
			if (!route.path.startsWith('/')) {
				route.path = `/${route.path}`;
			}

			if (parent) {
				route.path = parent.path + route.path;

				if (parent.canActivate && parent.canActivate.length > 0) {
					route.canActivate = [
						...parent.canActivate,
						...(route.canActivate || []),
					];
				}
			}

			collection.push(route);
		} else {
			parseRoute(route.children, route);
		}
	});
};

export const routeFactory = (routes: RouteContract[]): ReactNode => {
	collection = [];
	parseRoute(routes, null);

	return collection.map((route) => {
		return (
			<Route
				key={route.path}
				exact
				component={AsyncComponent(
					() => import(`@skeleton/web/${route.component}`),
					route.canActivate,
				)}
				path={route.path}
			/>
		);
	});
};
