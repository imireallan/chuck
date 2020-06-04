import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Auth from './components/Auth';
import Home from './components/Home';
import HeaderComponent from './components/Header';
import NotFoundPage from './components/NotFoundPage';

const Routes = () => (
	<Router>
		<HeaderComponent />
		<Switch>
			<Route exact path="/" component={Auth} />
			<Route exact path="/home" component={Home} />
			<Route path="*" component={NotFoundPage} />
		</Switch>
	</Router>
);

export default Routes;
