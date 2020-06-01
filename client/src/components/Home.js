import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Loader from 'react-loader-spinner';

import { GET_CATEGORIES } from '../queries';
import JokeItem from './JokeItem';
import Categories from './Categories';
import '../css/Home.css';

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

function Home() {
	const { loading } = useContext(MyContext);
	return (
		<main className="main container">
			<section className="sidebar">
				{loading ? <Loader className="loader" type="Bars" color="rgb(255, 153, 0)" /> : <Categories />}
			</section>
			<section className="main-home">
				<h2 className="main__title">Chuck Noriss Jokes</h2>
				<JokeItem />
			</section>
		</main>
	);
}

export default () => {
	return (
		<MyProvider>
			<Home />
		</MyProvider>
	);
};
