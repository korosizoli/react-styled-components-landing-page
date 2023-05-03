import styled from "styled-components";

export const NavContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	width: 100dvw;
	height: 100px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-inline: 2rem;
	background-color: ${(props) => props.theme.palette.white};
	box-shadow: ${(props) => props.theme.boxShadow.neutral};
	z-index: 100;

	& .logoImg {
		cursor: pointer;
	}

	@media (min-width: 1024px) {
		width: 256px;
		height: 100vh;
		height: 100dvh;
		flex-direction: column;
		align-items: flex-start;
		padding-inline-start: 2rem;
		padding-block: 24px;
		background-color: ${(props) => props.theme.palette.white};
	}
`

export const Menu = styled.div`
	display: none;

	@media screen and (min-width: 1024px) {
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: center;
	}
`

export const MenuLink = styled.div`
	display: flex;
	font-family: ${(props) => props.theme.font.serif};
	font-size: ${(props) => props.theme.fontSize.fs8};
	
	& a {
		cursor: pointer;
		display: flex;
		flex-grow: 1;
		padding-block: 1rem;
		transition: all ${(props) => props.theme.transition.tr3};
	}

	& a:is(:hover, :focus) {
			color: ${(props) => props.theme.palette.primary};
		}

	@media screen and (min-width: 1024px) {
	
		& a:is(:hover, :focus) {
			padding-left: .25rem;
		}
	}
`

export const MobileMenu = styled.div`
	position: fixed;
	top: 100px;
	left: 0;
	width: 100%;
	display: block;
	z-index: 90;

	@media (min-width: 1024px) {
		display: none;
	}
`

export const MobileMenuLink = styled.div`
	display: flex;
	font-family: ${(props) => props.theme.font.serif};
	font-size: ${(props) => props.theme.fontSize.fs8};
  background-color: ${(props) => props.theme.palette.white};

	& a {
		cursor: pointer;
		display: flex;
		flex-grow: 1;
		justify-content: center;
		margin-inline: 2rem;
		padding-block: 1.5rem;
		transition: all ${(props) => props.theme.transition.tr3};
	}

	&:first-child {
		padding-top: 3rem;
	}

	&:last-child {
		padding-bottom: 3rem;
	}

	&:not(:last-child) a {
		border-bottom: 1px solid rgb(0 0 0 / .1);
	}

	& a:is(:hover, :focus) {
		color: ${(props) => props.theme.palette.primary};
	}
`

export const NavBtnWrapper = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`

export const NavButtons = styled.div`
	cursor: pointer;
	color: ${(props) => props.theme.palette.neutral};
	transition: color ${(props) => props.theme.transition.tr3};

	&:is(:hover, :focus) {
		color: ${(props) => props.theme.palette.neutralDark};
	}

	@media (min-width: 1024px) {
		display: none;
	}
`

export const SocialButtons = styled.div`
	display: flex;
	gap: 1rem;
`

export const SocialBtn = styled.a`
	overflow: hidden;
	height: 34px;
	width: 34px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 17px;
	color: ${(props) => props.theme.palette.neutral};
	background-color: ${(props) => props.theme.palette.neutralLight};
	border-radius: 60px;
	transition: all ${(props) => props.theme.transition.tr5};

	& .socialIcon {
		transform: translateY(4px);
		transition: transform ${(props) => props.theme.transition.tr5};
	}

	&:hover {
		background-color: ${(props) => props.bgColor};
		color: ${(props) => props.theme.palette.white};
	}

	&:hover .socialIcon {
		transform: translateY(-13px);
	}

	@media (max-width: 576px) {
		display: none;
	}
`

export const Icon = styled.span`
  display: inline-block;
	width: 34px;
	height: 18px;
	text-align: center;
`

export const Overlay = styled.div`
	position: fixed;
	inset: 0;
	background-color: ${(props) => props.theme.palette.black};
	z-index: 80;
`

export const MobileMenuLinkWrapper = styled.div`
	margin-top: ${({ toggle }) => toggle ? "0" : "-550px"};
	transition: all ${(props) => props.theme.transition.tr5};
`