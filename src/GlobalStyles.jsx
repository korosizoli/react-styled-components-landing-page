import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Inter', sans-serif;
		color: #828282;
		font-size: 1rem;
	}

	header {
		position: relative;
	}

	h1, h2, h3, h4, h5,h6 {
		font-family: 'Alice', serif;
	}
	
	a {
		text-decoration: none;
	}
`

export default GlobalStyles

export const Section = styled.section`
	padding-block: 120px;
	background-color: ${(props) => props.bgColor};

	@media screen and (min-width: 1024px) {
		margin-inline-start: 256px;
	}
`

export const Container = styled.div`
	width: 100%;
	max-width: 1200px;
	margin-inline: auto;
	padding-inline: 2rem;
`

export const SectionHeader = styled.div`
	text-align: ${({center}) => (center ? 'center' : '')};
	max-width: ${(props) => props.maxWidth};
`

export const MainHeading = styled.h1`
	color: ${(props) => props.theme.palette.primary};
	font-size: ${(props) => props.theme.fontSize.fs3};
	margin-block: 2rem;
	line-height: 1.5;

	@media screen and (min-width: 576px) {
		font-size: ${(props) => props.theme.fontSize.fs2};
	}

	@media screen and (min-width: 768px) {
		font-size: ${(props) => props.theme.fontSize.fs1};
	}
`

export const SectionHeading = styled.h2`
	color: ${({dark}) => (dark ? '#292929' : '#F5533D')};
	font-size: ${(props) => props.theme.fontSize.fs6};
	padding-block: 1.5rem;

	@media screen and (min-width: 576px) {
		font-size: ${(props) => props.theme.fontSize.fs5};
	}

	@media screen and (min-width: 768px) {
		font-size: ${(props) => props.theme.fontSize.fs4};
	}
`

export const Subtitle = styled.span`
	position: relative;
	font-size: ${(props) => props.theme.fontSize.fs10};
	color: ${({dark}) => (dark ? '#292929' : '#F5533D')};
	text-transform: uppercase;
	letter-spacing: 2px;
	padding-inline: 45px 0;

	&:before {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		width: 2rem;
		height: 1px;
		background-color: ${({dark}) => (dark ? '#292929' : '#F5533D')};
	}
`

export const Subtitle2 = styled.span`
	position: relative;
	font-size: ${(props) => props.theme.fontSize.fs10};
	color: ${({dark}) => (dark ? '#292929' : '#F5533D')};
	text-transform: uppercase;
	letter-spacing: 2px;
	padding-inline: 45px;

	&:before {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		width: 2rem;
		height: 1px;
		background-color: ${({dark}) => (dark ? '#292929' : '#F5533D')};
	}

	&:after {
		content: '';
		position: absolute;
		top: 50%;
		right: 0;
		width: 2rem;
		height: 1px;
		background-color: ${({dark}) => (dark ? '#292929' : '#F5533D')};
	}
`

export const ButtonPrimary = styled.a`
	cursor: pointer;
	max-width: max-content;
	padding: 1.15rem 1.75rem;
	color: ${(props) => props.theme.palette.white};
	letter-spacing: 2px;
	text-transform: uppercase;
	background-color: ${(props) => props.theme.palette.primary};
	border-radius: 5rem;
	transition: all ${(props) => props.theme.transition.tr3};
	line-height: 2rem;
	text-decoration: none;
	text-shadow: 1px 1px 1px rgb(0 0 0 / .4);
	font-size: ${(props) => props.theme.fontSize.fs10};
	box-shadow: ${(props) => props.theme.boxShadow.primary};

	&:is(:hover, :focus) {
		background-color: ${(props) => props.theme.palette.primary80};
		box-shadow: none;
	}
`

export const Text = styled.p`
	font-size: ${({fs8}) => (fs8 ? '1.125rem' : '1rem' )};
	line-height: 1.5;
	margin-block: ${(props) => props.marginBlock};
`
