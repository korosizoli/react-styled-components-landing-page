import React from 'react'
import { Container, Section, SectionHeader, SectionHeading, Subtitle2, Text } from '../../GlobalStyles'
import { CardIcon, CardTitle, Grid, ServiceCard } from './ServiceStyles'

import { CiApple } from "react-icons/ci";
import { ServiceItems } from '../../Data';

const Services = () => {
	return (
		<>
		<Section id='services' bgColor='#ebf0f5'>
			<Container>
				<SectionHeader center>
					<Subtitle2 dark>
						our services
					</Subtitle2>

					<SectionHeading>
						What we do?
					</SectionHeading>
				</SectionHeader>

				<Grid>
						{ServiceItems.map(({id, icon, title, text}) => {
							return (
								<ServiceCard key={id}>
									<CardIcon>
										{icon}
									</CardIcon>

									<CardTitle>
										{title}
									</CardTitle>

									<Text>
										{text}
									</Text>
								</ServiceCard>
							)
						})}
				</Grid>
			</Container>
		</Section>
		</>
	)
}

export default Services