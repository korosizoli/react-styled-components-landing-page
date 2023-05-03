export const navLinks = [
	{
		id: 1,
		href: "home",
		link: "Home",
	},
	{
		id: 2,
		href: "about",
		link: "About Us",
	},
	{
		id: 3,
		href: "services",
		link: "Our Services",
	},
	{
		id: 4,
		href: "products",
		link: "Products",
	},
	{
		id: 5,
		href: "blog",
		link: "Blog",
	},
	{
		id: 6,
		href: "contact",
		link: "Contact",
	},
]

import { 
	FaFacebookF, 
	FaTwitter, 
	FaInstagram,
	FaYoutube
} from "react-icons/fa";

export const SocialLinks = [
	{
		id: 1,
		bgColor: '#3b5998',
		href: 'https://www.facebook.com/',
		icon: <FaFacebookF size={14} className='socialIcon'/>,
	},
	{
		id: 2,
		bgColor: '#00acee',
		href: 'https://twitter.com/home',
		icon: <FaTwitter size={14} className='socialIcon'/>,
	},
	{
		id: 3,
		bgColor: '#8a3ab9',
		href: 'https://www.instagram.com/',
		icon: <FaInstagram size={14} className='socialIcon'/>,
	},
	{
		id: 4,
		bgColor: '#ff0000',
		href: 'https://www.youtube.com/',
		icon: <FaYoutube size={14} className='socialIcon'/>,
	},
]

export const AboutStatItems = [
	{
		id: 1,
		number: "15+",
		title: "Years"
	},
	{
		id: 2,
		number: "123",
		title: "Employees"
	},
	{
		id: 3,
		number: "2500+",
		title: "Clients"
	},
]

import { 
	CiApple,
	CiAvocado,
	CiBowlNoodles,
	CiBurger,
	CiFries,
	CiPizza
 } from "react-icons/ci";

export const ServiceItems = [
	{
		id: 1,
		icon: <CiApple />,
		title: "Facial Care",
		text: "Dolores deleniti amet porro, odio totam quisquam ducimus omnis eaque perferendis minus."
	},
	{
		id: 2,
		icon: <CiAvocado />,
		title: "Massages",
		text: "Libero est eaque pariatur, omnis nesciunt eos eveniet suscipit modi et quae eum expedita recusandae!"
	},
	{
		id: 3,
		icon: <CiBowlNoodles />,
		title: "Hydro Therapy",
		text: "Sed, officiis incidunt. Ut saepe amet ipsum quos natus omnis facere labore iure ipsa optio sed."
	},
	{
		id: 4,
		icon: <CiBurger />,
		title: "Thermo Stone",
		text: "Accusantium earum, omnis mollitia ea est, voluptatem quos dolore obcaecati adipisci nisi harum."
	},
	{
		id: 5,
		icon: <CiFries />,
		title: "Salt & Aroma",
		text: "Ipsum iure veritatis voluptatem est, nisi aspernatur, debitis molestiae labore iure amet id."
	},
	{
		id: 6,
		icon: <CiPizza />,
		title: "Body Treatment",
		text: "Quia qui veritatis quis provident in velit tempore enim. Fuga facere deserunt blanditiis."
	},
]

import imageSlide1 from "./assets/imageSlide1.jpg"
import imageSlide2 from "./assets/imageSlide2.jpg"
import imageSlide3 from "./assets/imageSlide3.jpg"
import imageSlide4 from "./assets/imageSlide4.jpg"

export const ImageSliderItems = [
	{
		id: 1,
		image: imageSlide1,
	},
	{
		id: 2,
		image: imageSlide2,
	},
	{
		id: 3,
		image: imageSlide3,
	},
	{
		id: 4,
		image: imageSlide4,
	},
]

import product1 from "./assets/product1.jpg"
import product2 from "./assets/product2.jpg"
import product3 from "./assets/product3.jpg"
import product4 from "./assets/product4.jpg"

export const ProductItems = [
	{
		id: 1,
		image: product1,
		title: "The Ordinary Pack",
		price: "$48.49"
	},
	{
		id: 2,
		image: product2,
		title: "Nécessaire Cream",
		price: "$10.99"
	},
	{
		id: 3,
		image: product3,
		title: "The Ordinary Cream",
		price: "11.99"
	},
	{
		id: 4,
		image: product4,
		title: "Fabulous Body Oil",
		price: "$9.99"
	},
]

import blog1 from "./assets/blog1.jpg"
import blog2 from "./assets/blog2.jpg"
import blog3 from "./assets/blog3.jpg"

export const BlogItems = [
	{
		id: 1,
		image: blog1,
		date: "27.04.2023",
		title: "Spring is in the Air and and So Our These Amazing Spa Offers",
	},
	{
		id: 2,
		image: blog2,
		date: "20.04.2023",
		title: "Spring is in the Air and and So Our These Amazing Spa Offers",
	},
	{
		id: 3,
		image: blog3,
		date: "18.04.2023",
		title: "Spring is in the Air and and So Our These Amazing Spa Offers",
	},
]

export const FooterSocialLinks = [
	{
		id: 1,
		href: "https://www.facebook.com/",
		text: "Facebook",
	},
	{
		id: 2,
		href: "https://twitter.com/home",
		text: "Twitter",
	},
	{
		id: 3,
		href: "https://www.instagram.com/",
		text: "Instagram",
	},
	{
		id: 4,
		href: "https://www.youtube.com/",
		text: "YouTube",
	},
]