import React, { useContext } from 'react';
import { CategoryContext} from '../../Context/categoryContext'
import { CategoryItem, CategoryLink } from './style';

function Category({ data }) {
	const { handleCategory } = useContext(CategoryContext);

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
