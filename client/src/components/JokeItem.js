import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Loader from 'react-loader-spinner';


import { GET_JOKE } from '../queries';
import { MyContext } from './Home';

import '../css/JokeItem.css';

function JokeItem() {
	const { category } = useContext(MyContext);
	const { loading, error, data, refetch, networkStatus } = useQuery(GET_JOKE, {
		variables: { category },
		skip: !category,
		notifyOnNetworkStatusChange: true
	});
 
	if(loading || networkStatus === 4) {
		return <Loader className="jokes__loader" type="Bars" color="rgb(255, 153, 0)" />;
	}

	if (error) return `Error! ${error}`;
	return (
		<div>
			{category ? (
				<div className="container joke-container flex">
					<div className="joke">
						<figure className="joke__image__container">
							<img src={data.jokes.icon_url} alt="joke image" className="joke__image" />
						</figure>
						<div className="joke__value">
							<p>{data.jokes.value}</p>
						</div>
						<a className="joke__url" href={data.jokes.url}>
							visit joke
						</a>
					</div>
					<button onClick={() => refetch()} className="btn">Fetch another joke</button>
				</div>
			) : (
				<div className="container sub-title">
					<h3>Choose a category to seejokes</h3>
				</div>
			)}
		</div>
	);
}

export default JokeItem;
