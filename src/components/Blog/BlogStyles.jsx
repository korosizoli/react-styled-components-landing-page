import styled from "styled-components";
import { ButtonPrimary } from "../../GlobalStyles";

export const Grid = styled.div`
	display: grid;
	gap: 60px;
	grid-template-columns: 1fr;
	margin-block: 4.5rem;

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
`

export const BlogCard = styled.div`

	&:hover img {
		transform: scale(1.1);
	}
`

export const CardBanner = styled.div`
	aspect-ratio: 3 / 2;
 	overflow: hidden;
 	margin-bottom: 1.5rem;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform ${(props) => props.theme.transition.tr5};
	}
`

export const CardTitle = styled.a`
	font-family: ${(props) => props.theme.font.serif};
	font-size: ${(props) => props.theme.fontSize.fs7};
	color: ${(props) => props.theme.palette.neutralDark};
	transition: color ${(props) => props.theme.transition.tr3};

	&:hover {
		color: ${(props) => props.theme.palette.primary};
	}
`

export const CardDate = styled.p`
	margin-bottom: .5rem;
	font-size: ${(props) => props.theme.fontSize.fs10};
`

export const BlogButton = styled.div`
	text-align: center;
`