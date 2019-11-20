import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@skeleton/web/styles.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppTemplate from '@skeleton/web/templates/apps/app.template';
import LandingTemplate from '@skeleton/web/templates/landing/landing.template';
import WebTemplate from '@skeleton/web/templates/web/web.template';

ReactDOM.render(
	<BrowserRouter basename="/">
		<Switch>
			<Route path="/apps" component={AppTemplate} />
			<Route path="/auth" component={LandingTemplate} />
			<Route path="/" component={WebTemplate} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root'),
);
