import styled from 'styled-components';
import media from '../../components/globalStyles';

const Header = styled.header`
	color: var(--color-white);
	background-color: var(--color-orange);
	padding: var(--header-padding);
`;

Header.NavListItem = styled.li`margin-left: 1em;`;

Header.Wrapper = styled.div`
	justify-content: space-between;
	${media('max-width').small`
        flex-direction: column;
		align-items: center;
`};
`;
Header.Logo = styled.a`
	color: inherit;
	${media('max-width').small`margin-bottom: 1em;`};
`;
Header.Logo.Sup = styled.sup`
	font-size: 0.6rem;
	font-weight: bold;
`;
Header.NavLink = styled.a`
	color: inherit;
	text-transform: uppercase;
    font-weight: bold;
    ${media('max-width').small`margin-bottom: 1em;`};
`;

Header.NavList = styled.u``;

export default Header;
