import styled from "styled-components";
import { Container, Section } from "../../GlobalStyles";

export const FooterSection = styled(Section)`
	padding-block: 100px 60px;
`

export const FooterContainer = styled(Container)`
	max-width: 1200px;
`

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 30px;

	@media screen and (min-width: 576px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: 992px) {
		grid-template-columns: repeat(4, 1fr);
	}
`

export const Column = styled.div`
	margin-bottom: 1.5rem;

	& .footerLogo {
		margin-bottom: 1.5em;
	}

	& .footerMenu {
		cursor: pointer;
		color: ${(props) => props.theme.palette.neutral};
		font-size: ${(props) => props.theme.fontSize.fs9};
		transition: all ${(props) => props.theme.transition.tr5} ;

		&:hover {
			color: ${(props) => props.theme.palette.primary};
			margin-left: .25rem;
		}
	}

	@media screen and (min-width: 768px) {
		margin-top: ${(props) => props.marginTop};
	}
`

export const FooterHeading = styled.h3`
	color: ${(props) => props.theme.palette.neutralDark};
	font-size: ${(props) => props.theme.fontSize.fs7};
	margin-bottom: .5em;
`

export const Contact = styled.p`
	color: ${(props) => props.theme.palette.primary};
	font-size: ${(props) => props.theme.fontSize.fs9};
	line-height: 1.5;
	margin-bottom: 1.5em;

	& a {
		color: inherit;
	}
`

export const FooterLink = styled.a`
	color: ${(props) => props.theme.palette.neutral};
	font-size: ${(props) => props.theme.fontSize.fs9};
	transition: all ${(props) => props.theme.transition.tr5} ;

	&:hover {
		color: ${(props) => props.theme.palette.primary};
		margin-left: .25rem;
	}
`

export const FooterLinkWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-block: 1rem;
`

export const FooterForm = styled.form`
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	& .footerInput,
	.footerSubmit {
		padding: 1rem 1.5rem;
		outline: none;
		border: none;
		border-radius: 30px;
	}
	
	& .footerInput {
		box-shadow: ${(props) => props.theme.boxShadow.neutral};
		max-width: 500px;
	}

	& .footerSubmit {
		cursor: pointer;
		width: max-content;
		background-color: ${(props) => props.theme.palette.primary80};
		color: ${(props) => props.theme.palette.white};
		text-shadow: 1px 1px 1px rgb(0 0 0 / .4);
		text-transform: uppercase;
		transition: ${(props) => props.theme.transition.tr3};
		
		&:hover {
			background-color: ${(props) => props.theme.palette.primary};
		}
	}
`

export const Copyright = styled.div`
	padding-block: 1.5rem;
	background-color: ${(props) => props.theme.palette.white};
	text-align: center;
	border-top: 1px solid rgb(0 0 0 / .15);

	@media screen and (min-width: 1024px) {
		margin-inline-start: 256px;
	}
`