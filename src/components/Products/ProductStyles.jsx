import styled from "styled-components";
import { ButtonPrimary } from "../../GlobalStyles";

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 60px;
	align-items: center;

	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}
`

export const ProductCard = styled.div`
margin-inline: auto;
text-align: center;
padding: 1.5rem 1.5rem 2.5rem;
transition: all ${(props) => props.theme.transition.tr5};

	& a {
		margin-inline: auto;
	}

	& img {
		transition: all ${(props) => props.theme.transition.tr5};
	}

	&:hover {
		background-color: rgb(235 240 245 / .65);
	}

	&:hover img {
		transform: scale(1.2);
	}
`

export const ProductCardBanner = styled.div`
 aspect-ratio: ${(props) => props.ratio};
 max-height: 300px;
 overflow: hidden;
 margin-bottom: 1.5rem;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
 	}
`

export const ProductCardTitle = styled.a`
	font-family: ${(props) => props.theme.font.serif};
	text-decoration: none;
	font-size: ${(props) => props.theme.fontSize.fs7};
	color: ${(props) => props.theme.palette.neutralDark};
 	transition: color ${(props) => props.theme.transition.tr3};

	&:hover {
		color: ${(props) => props.theme.palette.primary};
	}
`

export const ProductPrice = styled.p`
	margin-block: .75rem 1.5rem;
	color: ${(props) => props.theme.palette.primary};
	font-size: ${(props) => props.theme.fontSize.fs7};
`

export const ProductCardBtn = styled(ButtonPrimary)`
	padding: .75rem 1.5rem;
`

export const CardWrapper = styled.div`
	display: grid;
	gap: 30px;
	grid-template-columns: 1fr;
	margin-top: 60px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
	}
`