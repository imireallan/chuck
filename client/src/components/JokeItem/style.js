import styled from 'styled-components';
import media from '../../components/globalStyles';

const Joke = styled.div`
	background: var(--color-grey-lt);
	padding: 2em;
	margin: 1em 0;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, .23);
	transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
	min-width: 200px;
	&:hover {
		box-shadow: 0 0 2px rgba(0, 0, 0, .23);
		transform: perspective(100px) translateZ(3px);
	}
	${media('max-width').small`
        padding: 1em;

    `};
	${media('min-width').small`
        max-width: 300px;
        width: 70%;
        padding: 1em;
        margin: 0 0 .5em 0;
`};
`;

Joke.Wrapper = styled.section`
	padding: 3em;
	text-align: center;
	flex-direction: column;
	align-items: center;
	${media('max-width').small`
        padding: 1em;

    `};
`;

Joke.Subtitle = styled.div`
	padding: 5em 0;
	display: grid;
	place-items: center;
	color: var(--color-orange);
	${media('max-width').small`
        padding: 1em;
		font-size: 0.9rem

    `};
`;

Joke.Link = styled.a`
	display: inline-block;
	color: var(--color-white);
	font-weight: bold;
	padding: .5em 1em;
	background: var(--color-orange);
	margin: 1em 0;
`;

Joke.Value = styled.div`
	margin: 1em 0;
	color: rgb(0, 128, 128);
`;

Joke.Button = styled.button`
	padding: 1em 2em;
	color: #333;
	background: transparent;
	border: none;
	outline: none;
	text-transform: uppercase;
	font-weight: bold;
	border-radius: 3px;
	box-shadow: 0 0 4px 0 rgba(255, 153, 0, 0.7);
	transition: background 300ms linear;
	margin: 1em;
	&:hover,
	&:focus {
		color: var(--color-white);
		background: var(--color-orange);
	}
`;

Joke.ImageContainer = styled.figure`width: 100%;`;

Joke.Image = styled.img`width: 50%;`;

export default Joke;
