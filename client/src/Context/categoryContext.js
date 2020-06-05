import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CATEGORIES } from '../queries';

const CategoryContext = React.createContext();

function CategoryProvider({ children }) {
	const [ category, setCategory ] = useState();
    const { loading, error, data } = useQuery(GET_CATEGORIES);
    
    const handleCategory = category => setCategory(category)
	return <CategoryContext.Provider value={{loading, error, data, category, handleCategory}}>{children}</CategoryContext.Provider>;
}

export { CategoryProvider, CategoryContext };
