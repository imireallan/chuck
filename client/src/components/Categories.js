import React, { useContext, useState, useEffect } from 'react';

import Category from './Category';
import { MyContext } from './Home';
import '../css/Categories.css';

function Categories() {
	const { data, error } = useContext(MyContext);

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
			<h4 className="title">Categories</h4>
			<ul>{displayCategories()}</ul>
		</React.Fragment>
	);
}

export default Categories;
