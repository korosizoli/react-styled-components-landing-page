import styled from "styled-components";

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	margin-block-start: 2rem;

	@media screen and (min-width: 576px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`

export const ServiceCard = styled.div`
	padding: 3rem;
	transition: background-color ${(props) => props.theme.transition.tr3};

	&:hover {
		background-color: rgb(255 255 255 / .5);
	}
`

export const CardIcon = styled.div`
	font-size: ${(props) => props.theme.fontSize.fs1};
	color: ${(props) => props.theme.palette.primary};
	margin-block-end: 1rem;
`

export const CardTitle = styled.h3`
	font-size: ${(props) => props.theme.fontSize.fs7};
	color: ${(props) => props.theme.palette.neutralDark};
	margin-block-end: 1rem;
`
