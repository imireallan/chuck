import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Loader from 'react-loader-spinner';

import { GET_CATEGORIES } from '../../queries';
import JokeItem from '../JokeItem';
import Categories from '../Categories';
import Home from './style'

export const MyContext = React.createContext();

function MyProvider({ children }) {
	const [ category, setCategory ] = useState();
	const { loading, error, data } = useQuery(GET_CATEGORIES);

	const handleCategory = (category) => {
		setCategory(category);
	};
	return (
		<MyContext.Provider value={{ category, loading, error, data, handleCategory }}>{children}</MyContext.Provider>
	);
}

function HomeComponent() {
	const { loading } = useContext(MyContext);
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
		<MyProvider>
			<HomeComponent />
		</MyProvider>
	);
};
