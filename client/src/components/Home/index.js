import React, { useContext } from 'react';
import Loader from 'react-loader-spinner';
import JokeItem from '../JokeItem';
import Categories from '../Categories';
import Home from './style'

import { CategoryProvider, CategoryContext } from '../../Context/categoryContext';

function HomeComponent() {
	const { loading } = useContext(CategoryContext);
	return (
		<Home className="container">
			<Home.Sidebar>
				{loading ? <Loader className="loader" type="Bars" color="rgb(255, 153, 0)" /> : <Categories />}
			</Home.Sidebar>
			<Home.Main>
				<Home.Title>Chuck Noriss Jokes</Home.Title>
				<JokeItem />
			</Home.Main>
		</Home>
	);
}

export default () => {
	return (
		<CategoryProvider>
			<HomeComponent />
		</CategoryProvider>
	);
};
