/**
 * Carousel indicator for Scott Communications site.
 *
 * @category           Page_segment
 * @package            carousel
 * @author             John C. Scott <jcscott@scottcomm.com>
 * @copyright          2022 John C. Scott, Scott Communications
 * @license            https://opensource.org/licenses/MIT MIT
 * @link               http://www.scottcomm.com/
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
