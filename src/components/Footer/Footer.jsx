import React from 'react'
import { 
	Column, 
	Contact, 
	Copyright, 
	FooterContainer, 
	FooterForm, 
	FooterHeading, 
	FooterLink, 
	FooterLinkWrapper, 
	FooterSection, 
	Grid 
} from './FooterStyles'
import logo from "../../assets/logo.png"
import { FooterSocialLinks, navLinks } from '../../Data'
import { Link } from 'react-scroll'
import { Text } from '../../GlobalStyles'

const Footer = () => {
	return (
		<>
		<FooterSection id='contact'>
			<FooterContainer>
				<Grid>

					<Column>
						<img 
							src={logo} 
							alt="logo" 
							width={180}
							className='footerLogo'
						/>

						<FooterHeading>
							Address:
						</FooterHeading>

						<Contact>
							2016 Palm Beach Drive <br />
							Miami, FL 33123
						</Contact>

						<FooterHeading>
							Call Us:
						</FooterHeading>

						<Contact>
							+1 (305) 555-3890
						</Contact>

						<FooterHeading>
							Send an Email:
						</FooterHeading>

						<Contact>
							<a href="mailto:">
								zephyr&email.com
							</a>
						</Contact>
					</Column>

					<Column marginTop="72px">
						<FooterHeading>
							Follow Us:
						</FooterHeading>

						{FooterSocialLinks.map(({id, href, text}) => (
							<FooterLinkWrapper key={id}>
								<FooterLink
								href={href}
								target='_blank'
								>
									{text}
								</FooterLink>
							</FooterLinkWrapper>
						))}
					</Column>

					<Column marginTop="72px">
						<FooterHeading>
							Links
						</FooterHeading>

						{navLinks.map(({id, href, link}) => (
							<FooterLinkWrapper key={id}>
								<Link
									to={href}
									spy={true}
									smooth={true}
									duration={500}
									offset={0}
									className='footerMenu'
								>
									{link}
								</Link>
						</FooterLinkWrapper>
						))}
					</Column>

					<Column marginTop="72px">
						<FooterHeading>
							Our Newsletter
						</FooterHeading>

						<Text>
							Subscribe to our newsletter to get our news & deals delivered to you.
						</Text>

						<FooterForm>
							<input 
								type="email" 
								name="" 
								id="" 
								className='footerInput'
								placeholder='Enter your e-mail here'
							/>

							<input type="submit" value="Subscribe" className='footerSubmit'/>
						</FooterForm>
					</Column>

				</Grid>

			</FooterContainer>
		</FooterSection>
		<Copyright>
			<Text>
				Copyrights © 2023 All Rights Reserved by Zephyr Inc.
			</Text>
		</Copyright>
		</>
	)
}

export default Footer