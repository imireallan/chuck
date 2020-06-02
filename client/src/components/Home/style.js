import styled from 'styled-components';
import media from '../../components/globalStyles';

const Home = styled.main`
	background-color: var(--color-white);
	height: calc(100vh - calc(var(--header-padding)*2));
	display: grid;
	grid: auto / 200px 1fr;
	height: 100vh;
	${media('max-width').small`
		display:flex;
		align-items:flex-start;
`};
`;

Home.Sidebar = styled.section`
	padding: 1em;
	border-right: 2px solid var(--color-grey-md);
	height: 100vh;
	${media('max-width').small`
		max-width: 150px;
`};
`;

Home.Main = styled.section`
	height: 100vh;
	${media('max-width').small`
        display: flex;
		align-items: flex-start;
		flex-direction:column;
`};
`;

Home.Title = styled.h2`
	text-align: center;
	margin: 1em 0;
	${media('max-width').small`
		font-size: 1rem;
		text-align:center;
		padding:1em
`};
`;

export default Home;
