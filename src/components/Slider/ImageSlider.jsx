import React, { useState } from 'react'
import { 
	ImageHolder, 
	SliderBtn, 
	SliderBtnWrapper, 
	SliderContainer, 
	SliderImg, 
	SliderSection 
} from './ImageSliderStyles'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ImageSliderItems } from '../../Data';

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0)
	const length = slides.length

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if(!Array.isArray(slides) || slides.length <= 0) {
		return null
	}

	return (
		<>
		<SliderSection>
			<SliderContainer>
				<SliderBtnWrapper>
						<SliderBtn onClick={prevSlide}>
							<BsChevronLeft size={20}/>
						</SliderBtn>

						<SliderBtn onClick={nextSlide}>
							<BsChevronRight size={20}/>
						</SliderBtn>
				</SliderBtnWrapper>

				{ImageSliderItems.map((slide, id) => (
					<ImageHolder
						key={slide.id}
						className={id === current ? "activeSlide" : ""}
					>
						{id === current && (
							<SliderImg
								src={slide.image}
								alt="image"
							/>
						)}
					</ImageHolder>
				))}
			</SliderContainer>
		</SliderSection>
		</>
	)
}

export default ImageSlider