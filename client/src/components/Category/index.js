import React, { useContext } from 'react';
import { MyContext } from '../Home';
import {CategoryItem, CategoryLink} from './style'

function Category({ data }) {
	const { handleCategory } = useContext(MyContext);

	const handleClick = (e) => {
		e.preventDefault();
		handleCategory(data);
	};
	return (
		<CategoryItem className="category__item">
			<CategoryLink href="#" onClick={handleClick}>
				{data}
			</CategoryLink>
		</CategoryItem>
	);
}

export default Category;
