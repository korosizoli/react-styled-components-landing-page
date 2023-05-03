import styled from "styled-components";
import { SectionHeading } from "../../GlobalStyles";

export const AboutSection = styled.section`
	background-color: ${(props) => props.bgColor};

	@media screen and (min-width: 1024px) {
		margin-inline-start: 256px;
	}
`

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	
	@media screen and (min-width: 768px) {
		gap: 60px;
		grid-template-columns: repeat(2, 1fr);
	}
`

export const AboutBanner = styled.div`
	width: 100%;
	height: 450px;

	& img {
		width: 100%;
		height: 450px;
		object-fit: cover;

	}
	@media screen and (min-width: 768px) {
		height: 800px;

		& img {
			height: 800px;
		}
	}
`

export const AboutContent = styled.div`
	padding-inline: 2rem;
	padding-block: 100px;
	margin-block: auto;

	@media screen and (min-width: 768px) {
		padding-inline: 0 60px;
	}

	& .aboutText {
		border-bottom: 1px solid rgb(130 130 130 / .5);
		padding-block-end: 3rem;
	}	
`

export const AboutStats = styled.div`
	margin-block-start: 50px;

	display: flex;
	justify-content: center;
	gap: 30px;
	flex-wrap: wrap;
	margin-block-start: 3rem;
`

export const StatCard = styled.div`
	flex-grow: 1;
	text-align: center;
`

export const StatNumber = styled.h3`
	color: ${(props) => props.theme.palette.primary};
	font-size: ${(props) => props.theme.fontSize.fs3};
`

export const StatTitle = styled.p`
	font-size: ${(props) => props.theme.fontSize.fs9};
`