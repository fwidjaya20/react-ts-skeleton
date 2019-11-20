import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteContract } from '@skeleton/shared/router/contracts/route.contract';
import { routeFactory } from '@skeleton/shared/router/utilities/factory';
import AsyncComponent from '@skeleton/shared/async-page/async.page';

interface OutletProps {
	routes: RouteContract[];
}

const Outlet = (props: OutletProps) => {
	return (
		<Switch>
			{routeFactory(props.routes)}
			<Route
				component={AsyncComponent(
					() => import('@skeleton/shared/pages/not-found.page'),
					[],
				)}
			/>
		</Switch>
	);
};

export const RouterOutlet = memo(Outlet);
