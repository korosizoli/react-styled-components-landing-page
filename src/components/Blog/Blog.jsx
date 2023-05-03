import React from 'react'
import { ButtonPrimary, Container, Section, SectionHeader, SectionHeading, Subtitle2 } from '../../GlobalStyles'
import { BlogButton, BlogCard, CardBanner, CardDate, CardTitle, Grid } from './BlogStyles'
import { BlogItems } from '../../Data'

const Blog = () => {
	return (
		<Section id='blog' bgColor='#ebf0f5'>
			<Container>
				<SectionHeader center>
					<Subtitle2 dark>
						Blog
					</Subtitle2>

					<SectionHeading>
						Our latest posts
					</SectionHeading>
				</SectionHeader>

				<Grid>
					{BlogItems.map(({id, image, date, title}) => (
						<BlogCard>
							<a href="#">
								<CardBanner key={id}>
									<img src={image} />
								</CardBanner>
							</a>

							<CardDate>
								{date}
							</CardDate>

							<CardTitle href='#'>
								{title}
							</CardTitle>
						</BlogCard>
					))}
				</Grid>

				<BlogButton>
					<ButtonPrimary href='#'>
						View More
					</ButtonPrimary>
				</BlogButton>
			</Container>
		</Section>
	)
}

export default Blog