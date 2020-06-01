import React, { useState } from 'react';
import JokeItem from './JokeItem';
import '../css/JokesList.css';

function JokesList() {
	const [ jokes, _ ] = useState([
		{
			value: 'Chuck Norris can set ants on fire with a magnifying glass. At night.',
			icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
			url: 'https://api.chucknorris.io/jokes/o0sukejatqchi7oyjms6mw',
			created_at: '2020-01-05 13:42:19.104863',
			updated_at: '2020-01-05 13:42:19.104863',
			categories: [ 'animal' ]
		},
		{
			value: 'Chuck Norris can set ants on fire with a magnifying glass. At night.',
			icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
			url: 'https://api.chucknorris.io/jokes/o0sukejatqchi7oyjms6mw',
			created_at: '2020-01-05 13:42:19.104863',
			updated_at: '2020-01-05 13:42:19.104863',
			categories: [ 'animal' ]
		},
		{
			value: 'Chuck Norris can set ants on fire with a magnifying glass. At night.',
			icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
			url: 'https://api.chucknorris.io/jokes/o0sukejatqchi7oyjms6mw',
			created_at: '2020-01-05 13:42:19.104863',
			updated_at: '2020-01-05 13:42:19.104863',
			categories: [ 'animal' ]
		}
	]);

	const jokesListElement = jokes.map((joke) => {
		return <JokeItem key={joke.id} joke={joke} />;
	});
	return (
		<section className="jokes__list">
			<div className="main__body flex">{jokesListElement}</div>
		</section>
	);
}

export default JokesList;
