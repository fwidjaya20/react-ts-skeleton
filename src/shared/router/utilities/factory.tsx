import { Route } from '../contracts/route.contract';
import React, { ReactNode } from 'react';
import { Route as ReactRoute } from 'react-router-dom';
import AsyncComponent from '@skeleton/shared/async-page/async.page';

let collection: any = [];

const parseRoute = (routes: Route[], parent: Route = null) => {
	routes.forEach((route) => {
		let item = Object.assign({}, route);

		if (!item.children || item.children.length === 0) {
			if (parent) {
				item.path = parent.path + item.path;

				if (parent.canActivate && parent.canActivate.length > 0) {
					item.canActivate = [
						...parent.canActivate,
						...(item.canActivate || []),
					];
				}
			}

			collection.push(item);
		} else {
			parseRoute(item.children, item);
		}
	});
};

export const routeFactory = (routes: Route[]): ReactNode => {
	collection = [];
	parseRoute(routes, null);

	return collection.map((route) => {
		return (
			<ReactRoute
				key={route.path}
				exact
				component={AsyncComponent(
					() => import('@skeleton/web/' + route.component),
					route.canActivate,
				)}
				path={route.path}
			/>
		);
	});
};
