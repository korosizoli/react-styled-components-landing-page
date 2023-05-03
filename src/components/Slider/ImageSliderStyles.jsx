import styled from "styled-components";
import { Section } from "../../GlobalStyles";

export const SliderSection = styled(Section)`
	padding-block: 0;
`

export const SliderContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: start;
	align-items: center;
	width: 100%;
	max-height: 650px;
	aspect-ratio: 16 / 9;
	overflow: hidden;
	background-color: ${(props) => props.theme.palette.neutralDark};
`

export const SliderBtnWrapper = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
	width: auto;
	height: auto;
	display: flex;
	z-index: 50;
`

export const SliderBtn = styled.button`
	cursor: pointer;
	display: grid;
	place-content: center;
	width: 50px;
	height: 50px;
	padding: 0;
	margin: 0;
	color: ${(props) => props.theme.palette.neutralDark};
	background-color: rgb(255 255 255 / .7);
	border: none;
	transition: background-color ${(props) => props.theme.transition.tr3};

	&:hover {
		background-color: rgb(255 255 255 / 1);
	}
`

export const ImageHolder = styled.div`
	&.activeSlide {
		animation: fadein .1s ease;
	}
	
	@keyframes fadein {
		from {opacity: .5;}
		to {opacity: 1;}
	}	
`

export const SliderImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`