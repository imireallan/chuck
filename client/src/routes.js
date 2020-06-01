import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import NotFoundPage from './components/NotFoundPage'

const Routes = () => (
	<Router>
		<Header />
		<Switch>
			<Route path="/home">
				<Redirect to="/" />
			</Route>
			<Route exact path="/" component={Home} />
			<Route path="*">
				<NotFoundPage />
			</Route>
		</Switch>
	</Router>
);

export default Routes;
