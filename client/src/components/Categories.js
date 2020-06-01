import React, {useState} from 'react';
import '../css/Categories.css'

function Categories() {
	const [ categories, _ ] = useState([
		'animal',
		'career',
		'celebrity',
		'dev',
		'explicit',
		'fashion',
		'food',
		'history',
		'money',
		'movie',
		'music',
		'political',
		'religion',
		'science',
		'sport',
		'travel'
	]);
	const categoriesElement = categories.map((category) => {
		return <li className="category__item" key={category}>{category}</li>;
	});
	return (
		<section className="categories">
			<ul className="category__list">{categoriesElement}</ul>
		</section>
	);
}

export default Categories;
