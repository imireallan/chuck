import styled from 'styled-components';
import media from '../../components/globalStyles';

const Home = styled.main`
	color: var(--color-white);
	background-color: var(--color-orange);
	padding: var(--header-padding);
`;

Home.NavListItem = styled.li`margin-left: 1em;`;

Home.Wrapper = styled.div`
	justify-content: space-between;
	${media.small`
        flex-direction: column;
		align-items: center;
`};
`;
Home.Logo = styled.a`
	color: inherit;
	${media.small`margin-bottom: 1em;`};
`;
Home.Logo.Sup = styled.sup`
	font-size: 0.6rem;
	font-weight: bold;
`;
Home.NavLink = styled.a`
	color: inherit;
	text-transform: uppercase;
    font-weight: bold;
    ${media.small`margin-bottom: 1em;`};
`;

Home.NavList = styled.u``;

export default Home;
