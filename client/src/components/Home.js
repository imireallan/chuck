import React, { useState } from 'react';

import JokesList from './JokesList';
import Categories from './Categories';
import '../css/Home.css';

function Home() {
	return (
		<main className="main container">
			<section className="sidebar">
				<Categories />
			</section>
			<section className="main-home">
				<h2 className="main__title">Chuck Noriss Jokes</h2>
				<JokesList />
			</section>
		</main>
	);
}

export default Home;
