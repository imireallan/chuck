import React from 'react';
import  ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Routes from './routes';

// const cache = new InMemoryCache();
const uri = '/graphql'

// Apollo client
const client = new ApolloClient({
	uri
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Routes />;
		</ApolloProvider>
	);
}

export default App;
