import { ThemeProvider } from "styled-components";

const theme = {
	palette: {
		primary: 'rgb(245 83 61 / 1)',
		primary80: 'rgb(245 83 61 / .8)',
		neutral: '#828282',
		neutralLight: 'rgb(235 240 245 / 1)',
		neutralDark: '#292929',
		white: 'rgb(255 255 255 / 1)',
		white90: 'rgb(255 255 255 / .9)',
		white50: 'rgb(255 255 255 / .5)',
		black: '#000000',
		black90: '#00000090',
	},
	font: {
		sans: "Inter",
		serif: "Alice",
	},
	fontSize: {
		fs1: '3.125rem', //h1
		fs2: '2.875rem', //h1
		fs3: '2.5rem', //h1
		fs4: '2.25rem', //h2
		fs5: '2.125rem', //h2
		fs6: '2rem',  //h2
		fs7: '1.25rem', //h3
		fs8: '1.125rem', //h4, body2
		fs9: '1rem', //body1
		fs10: '.875rem', //subtitle
	},
	boxShadow: {
		primary: '0 8px 16px rgb(245 83 61 / .25)',
		neutral: '0 0 20px rgb(0 0 0 / .12)',
	},
	transition: {
		tr1: ".15s ease",
		tr3: ".3s ease",
		tr5: ".5s ease",
	},
}

export default function Theme({children}) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}