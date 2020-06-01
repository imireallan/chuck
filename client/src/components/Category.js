import React, { useContext } from 'react';
import { MyContext } from './Home';
import '../css/Category.css';

function Category({ data }) {
	const { handleCategory } = useContext(MyContext);

	const handleClick = (e) => {
		e.preventDefault();
		handleCategory(data);
	};
	return (
		<li className="category__item">
			<a href="#" onClick={handleClick}>
				{data}
			</a>
		</li>
	);
}

export default Category;
