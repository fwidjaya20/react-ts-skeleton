import React, { memo } from 'react';
import { Route as ReactRoute, Switch } from 'react-router-dom';
import { Route } from '@skeleton/shared/router/contracts/route.contract';
import { routeFactory } from '@skeleton/shared/router/utilities/factory';
import AsyncComponent from '@skeleton/shared/async-page/async.page';

interface OutletProps {
	routes: Route[];
}

const Outlet = (props: OutletProps) => {
	return (
		<Switch>
			{routeFactory(props.routes)}
			<ReactRoute
				component={AsyncComponent(
					() => import('@skeleton/shared/pages/not-found.page'),
					[],
				)}
			/>
		</Switch>
	);
};

export const RouterOutlet = memo(Outlet);
