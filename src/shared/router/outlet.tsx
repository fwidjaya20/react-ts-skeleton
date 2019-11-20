import React, { memo } from 'react';
import { Switch } from 'react-router-dom';
import { RouteContract } from '@skeleton/shared/router/contracts/route.contract';
import { routeFactory } from '@skeleton/shared/router/utilities/factory';

interface OutletProps {
	routes: RouteContract[];
}

const Outlet = (props: OutletProps) => {
	return <Switch>{routeFactory(props.routes)}</Switch>;
};

export const RouterOutlet = memo(Outlet);
