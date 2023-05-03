import React, { useCallback, useState } from 'react'
import { Icon, Menu, MenuLink, MobileMenu, MobileMenuLink, MobileMenuLinkWrapper, NavBtnWrapper, NavButtons, NavContainer, Overlay, SocialBtn, SocialButtons } from './NavbarStyles'
import logo from "../../assets/logo.png"
import { HiMenu, HiX } from "react-icons/hi";
import { SocialLinks, navLinks } from '../../Data';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [toggle, setToggle] = useState(false)
	const toggleMenu = useCallback(() => setToggle(!toggle), [toggle])

	return (
		<header>
			<NavContainer>
				{/*
					<<<<<<<<<<<<<<<<<<<< Logo >>>>>>>>>>>>>>>>>>>>  
				*/}
				<Link
					to="home"
					spy={true}
					smooth={true}
					duration={500}
					offset={0}
				>
					<img 
						src={logo}
						width={192}
						alt="logo" 
						className='logoImg'
					/>			
				</Link>

				{/*
					<<<<<<<<<<<<<<<<<<<< Menu >>>>>>>>>>>>>>>>>>>>  
				*/}

				<Menu>
					{navLinks.map(({id, href, link}) => (
						<MenuLink key={id}>
							<Link
								to={href}
								spy={true}
								smooth={true}
								duration={500}
								offset={0}
							>
								{link}
							</Link>
						</MenuLink>
					))}
				</Menu>

				{/*
					<<<<<<<<<<<<<<<<<<<< Nav Buttons >>>>>>>>>>>>>>>>>>>>  
				*/}

				<NavBtnWrapper>
					{/*
						<<<<<<<<<<<<<<< Menu / X Button >>>>>>>>>>>>>>>  
					*/}

					<NavButtons>
						<HiMenu 
							onClick={toggleMenu}
							size={24}
							style={{
								display: toggle ? "none" : "block"
							}}
						/>

						<HiX 
							onClick={toggleMenu}
							size={24}
							style={{
								display: toggle ? "block" : "none"
							}}
						/>
					</NavButtons>

					{/*
						<<<<<<<<<<<<<<< Social Buttons >>>>>>>>>>>>>>>  
					*/}

					<SocialButtons>
						{SocialLinks.map(({id, bgColor, href, icon}) => (
							<SocialBtn
								key={id}
								bgColor={bgColor}
								href={href}
								target='_blank'
							>
								<Icon className='socialIcon'>
									{icon}
								</Icon>

								<Icon className='socialIcon'>
									{icon}
								</Icon>
							</SocialBtn>
						))}
					</SocialButtons>
				</NavBtnWrapper>
			</NavContainer>

			{/*
				<<<<<<<<<<<<<<<<<<<< Mobile Menu >>>>>>>>>>>>>>>>>>>>    
			*/}

			<MobileMenu>
				<MobileMenuLinkWrapper toggle={toggle}>
					{navLinks.map(({id, href, link}) => (
						<MobileMenuLink key={id}>
							<Link
								onClick={toggleMenu}
								to={href}
								spy={true}
								smooth={true}
								duration={500}
								offset={-50}
							>
								{link}
							</Link>
						</MobileMenuLink>
					))}
				</MobileMenuLinkWrapper>
			</MobileMenu>

			{/*
				<<<<<<<<<<<<<<<<<<<< Overlay >>>>>>>>>>>>>>>>>>>>   
			*/}
				
			<Overlay
				onClick={toggleMenu}
				style={{
					visibility: toggle ? "visible" : "hidden" ,
					transition: "all .4s ease",
					opacity: toggle ? .6 : 0,
				}}
			/>
		</header>
	)
}

export default Navbar