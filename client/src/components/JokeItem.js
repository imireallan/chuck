import React from 'react';

import '../css/JokeItem.css'

function JokeItem({joke:{value, icon_url, url }}) {
    console.log(value);
	return (
		<div className="joke">
			<figure className="joke__image__container">
				<img src={icon_url} alt="joke image" className="joke__image" />
			</figure>
			<div className="joke__value">
				<p>
					{value}
				</p>
			</div>
			<a className="joke__url" href={url}>
				visit joke
			</a>
		</div>
	);
}

export default JokeItem;
