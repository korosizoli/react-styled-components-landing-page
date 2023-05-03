import React from 'react'
import { Section, SectionHeader, SectionHeading, Subtitle, Text } from '../../GlobalStyles'
import { AboutBanner, AboutContent, AboutSection, AboutStats, Grid, StatCard, StatNumber, StatTitle } from './AboutStyles'
import img from "../../assets/about.jpg"
import { AboutStatItems } from '../../Data'

const About = () => {
	return (
		<AboutSection id='about' >
				<Grid>
					<AboutBanner>

						<img 
							src={img} 
							alt="about" 
						/>

					</AboutBanner>

					<AboutContent>

						<SectionHeader>
							<Subtitle >
								our story
							</Subtitle>

							<SectionHeading dark>
								About Us
							</SectionHeading>
						</SectionHeader>

						<Text
							className='aboutText'
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quia tenetur porro enim! Aperiam iure totam modi quibusdam voluptatem! Repellat accusamus mollitia quia, labore voluptate laudantium magnam facere blanditiis, culpa voluptates, assumenda fugit illum odio!
						</Text>

						<AboutStats>
							{AboutStatItems.map(({id, number, title}) => {
								return (
									<StatCard key={id}>
										<StatNumber>
											{number}
										</StatNumber>

										<StatTitle>
											{title}
										</StatTitle>
									</StatCard>
								)
							})}
						</AboutStats>

					</AboutContent>
				</Grid>

		</AboutSection>
	)
}

export default About