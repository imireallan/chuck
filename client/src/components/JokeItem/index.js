import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Loader from 'react-loader-spinner';

import { GET_JOKE } from '../../queries';
import { CategoryContext } from '../../Context/categoryContext';
import Joke from './style';
import { Button } from '../globalStyles';

function JokeItem() {
	const { category } = useContext(CategoryContext);
	const { loading, error, data, refetch, networkStatus } = useQuery(GET_JOKE, {
		variables: { category },
		skip: !category,
		notifyOnNetworkStatusChange: true
	});

	if (loading || networkStatus === 4) {
		return <Loader className="jokes__loader" type="Bars" color="rgb(255, 153, 0)" />;
	}

	if (error) return `Error! ${error}`;
	return (
		<div>
			{category ? (
				<Joke.Wrapper className="container flex">
					<Joke>
						<Joke.ImageContainer>
							<Joke.Image src={data.jokes.icon_url} alt="joke avatar" />
						</Joke.ImageContainer>
						<div className="joke__value">
							<p>{data.jokes.value}</p>
						</div>
						<Joke.Link href={data.jokes.url}>visit joke</Joke.Link>
					</Joke>
					<Button onClick={() => refetch()}>Fetch another joke</Button>
				</Joke.Wrapper>
			) : (
				<Joke.Subtitle>
					<h3>Click a Category</h3>
				</Joke.Subtitle>
			)}
		</div>
	);
}

export default JokeItem;
