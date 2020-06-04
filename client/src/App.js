import React from 'react';
import  ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Routes from './routes';

// Apollo client
const client = new ApolloClient();

function App() {
	return (
		<ApolloProvider client={client}>
			<Routes />;
		</ApolloProvider>
	);
}

export default App;
