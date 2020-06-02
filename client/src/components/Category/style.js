import styled from 'styled-components';

export const CategoryItem = styled.h4`
	text-transform: capitalize;
	font-weight: bold;
	margin: .3em;
	padding: .2em;
	font-size: 0.9rem;
	transition: background 300ms linear;
    &:hover,
    &:focus {
		background: var(--color-grey-lt);
	}
`;

export const CategoryLink = styled.a`color: rgba(0, 0, 0, 0.5);`;
