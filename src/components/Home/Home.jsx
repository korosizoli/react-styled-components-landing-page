import React from 'react'
import { ButtonPrimary, Container, MainHeading, SectionHeader, Subtitle, Text } from '../../GlobalStyles'
import { HomeSection } from './HomeStyles'


const Home = () => {
	return (
		<>
		<HomeSection id='home'>
			<Container>
				<SectionHeader maxWidth='576px'>
				<Subtitle dark>
					get started
				</Subtitle>

				<MainHeading>
				Beauty Inspired <br /> by Real Life
				</MainHeading>

				<Text fs8 marginBlock='0 2rem'>
					Iure nihil perferendis accusamus. Accusantium debitis, distinctio alias, dicta officiis perferendis recusandae ea dolorem necessitatibus assumenda repellat possimus eum impedit!
				</Text>

				<ButtonPrimary href='#'>
					Learn more
				</ButtonPrimary>
				</SectionHeader>
			</Container>
		</HomeSection>
		</>
	)
}

export default Home