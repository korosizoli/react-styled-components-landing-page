import React from 'react'
import { ButtonPrimary, Container, Section, SectionHeader, SectionHeading, Subtitle, Text } from '../../GlobalStyles'
import { Grid, ProductCardBanner, ProductCard, ProductCardBtn, ProductCardTitle, ProductPrice, CardWrapper } from './ProductStyles'
import productImg from "../../assets/product0.jpg"
import { ProductItems } from '../../Data'

const Products = () => {
	return (
		<>
		<Section id='products'>
			<Container>
				<Grid>
					<SectionHeader>
						<Subtitle>
							Our products
						</Subtitle>

						<SectionHeading dark>
							Products to make your <br /> everyday life easier.
						</SectionHeading>

						<Text fs8>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laboriosam vero ipsum corporis nobis sapiente ipsa quas est ratione dignissimos!
						</Text>
					</SectionHeader>

					<ProductCard>
						<ProductCardBanner 
							ratio='5/3' 
							className='banner'
						>
							<a href="#">
								<img
									src={productImg}
									alt="product image"
								/>
							</a>
						</ProductCardBanner>

						<ProductCardTitle href='#'>
							Cosmetic Box
						</ProductCardTitle>

						<ProductPrice>
							$24.99
						</ProductPrice>

						<ProductCardBtn href='#'>
							Buy
						</ProductCardBtn>
					</ProductCard>
				</Grid>

				<CardWrapper>
					{ProductItems.map(({id, image, title, price}) => (
						<ProductCard key={id}>
							<ProductCardBanner 
								ratio='1/1'
								className='banner'
							>
									<a href="#">
										<img
											src={image}
											alt="product image"
										/>
									</a>
								</ProductCardBanner>

								<ProductCardTitle href='#'>
									{title}
								</ProductCardTitle>

								<ProductPrice>
									{price}
								</ProductPrice>

								<ProductCardBtn href='#'>
									Buy
								</ProductCardBtn>
						</ProductCard>
					))}
				</CardWrapper>
			</Container>
		</Section>
		</>
	)
}

export default Products