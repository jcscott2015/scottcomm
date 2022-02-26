/**
 * @description Carousel indicator for Scott Communications site.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     ./CarouselIndicator.scss
 *
 * @module Carousel
 */
import React from 'react';
import './CarouselIndicator.scss';

export interface ICarouselIndicatorProps {
	className?: string;
	goToSlide: React.MouseEventHandler;
};

export const CarouselIndicator = (props: ICarouselIndicatorProps) => {
	return (
		<li
			className={`carousel-indicator ${props.className}`}
			onClick={props.goToSlide}
			role="button"
		></li>
	);
};

export default CarouselIndicator;
