/**
 * Carousel item for Scott Communications site.
 *
 * @category           Page_segment
 * @package            carousel
 * @author             John C. Scott <jcscott@scottcomm.com>
 * @copyright          2022 John C. Scott, Scott Communications
 * @license            https://opensource.org/licenses/MIT MIT
 * @link               http://www.scottcomm.com/
 */
import React from 'react';
import './CarouselItem.scss';

export interface ICarouselItemProps {
	className?: string;
	href?: string;
	imageClassName?: string;
	imageSrc: string;
	imageAlt: string;
	itemCaptionClassName?: string;
	itemCaptionTitle?: React.ReactNode;
	itemCaption?: React.ReactNode;
	// onmouseover?: React.MouseEvent<HTMLDivEslement>;
};

export const CarouselItem = (props: ICarouselItemProps) => {
	const {
		className = '',
		href = '',
		imageClassName = '',
		imageSrc,
		imageAlt,
		itemCaptionClassName = '',
		itemCaptionTitle,
		itemCaption
	} = props;

	return (
		<div className={`item ${className}`}>
			<img
				className={imageClassName}
				onClick={() => window.location.href = href}
				src={imageSrc}
				alt={imageAlt} />
			<div className={`carousel-caption ${itemCaptionClassName}`}>
				{itemCaptionTitle}
				{itemCaption}
			</div>
		</div>
	);
};

export default CarouselItem;
