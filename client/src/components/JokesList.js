// import React from 'react';

// import JokeItem from './JokeItem';
// import '../css/JokesList.css';

// function JokesList() {
// 	const category = 'animal';
// 	const { loading, error, data, refetch, networkStatus } = useQuery(GET_JOKE, {
// 		variables: { category },
// 		skip: !category,
// 		notifyOnNetworkStatusChange: true
// 	});

// 	console.log(data);

// 	if (networkStatus === 4) return 'Refetching!';
// 	if (loading) return null;
// 	if (error) return `Error! ${error}`;

// 	// const jokesListElement = data.jokes.map((joke) => {
// 	// 	return <JokeItem key={joke.id} joke={joke} />;
// 	// });
// 	return (
// 		<section className="jokes__list">
// 			{data.jokes ? (
// 				<div className="main__body flex">
// 					<JokeItem joke={data.jokes} />
// 				</div>
// 			) : (
// 				<h3>Choose a category to see a joke</h3>
// 			)}
// 		</section>
// 	);
// }

// export default JokesList;
