import React, { useContext } from 'react';

import Category from '../Category';
import { CategoryContext } from '../../Context/categoryContext';
import Title from './style';

function Categories() {
	const { data, error } = useContext(CategoryContext);

	const displayCategories = () => {
		if (error) return `Refresh the browser to fetch categories`;
		return (
			data &&
			data.categories.map((category) => {
				return <Category key={category} data={category} />;
			})
		);
	};

	return (
		<React.Fragment>
			<Title>Categories</Title>
			<ul>{displayCategories()}</ul>
		</React.Fragment>
	);
}

export default Categories;
