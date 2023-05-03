import styled from "styled-components";

export const HomeSection = styled.section`
	padding-block: 220px 120px;
	background-color: ${(props) => props.bgColor};

	@media screen and (min-width: 1024px) {
		padding-block: 120px;
		margin-inline-start: 256px;
	}
`