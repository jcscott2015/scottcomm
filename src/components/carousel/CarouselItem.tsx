/**
 * @description Carousel item for Scott Communications site.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     ./CarouselItem.scss
 *
 * @module Carousel
 */
import React, { ReactNode, useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import ProgressiveImage from '../progressive-image/ProgressiveImage';
import './CarouselItem.scss';

export interface ICarouselItemProps {
	className?: string;
	href?: string;
	imageClassName?: string;
	imageSrc: string;
	thumbnailSrc: string;
	imageAlt: string;
	itemCaptionClassName?: string;
	itemCaptionTitle?: ReactNode;
	itemCaption?: ReactNode;
};

export const CarouselItem = (props: ICarouselItemProps) => {
	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, { freezeOnceVisible: true });

	const {
		className = '',
		href = '',
		imageClassName = '',
		imageSrc,
		thumbnailSrc,
		imageAlt,
		itemCaptionClassName = '',
		itemCaptionTitle,
		itemCaption
	} = props;

	return (
		<div
			ref={ref}
			className={`item ${className}`}
			onClick={() => window.location.href = href}
		>
			<ProgressiveImage
				className={imageClassName}
				thumbUrl={thumbnailSrc}
				url={imageSrc}
				alt={imageAlt}
				isVisible={Boolean(!!entry?.isIntersecting)}
			/>
			<div className={`carousel-caption ${itemCaptionClassName}`}>
				{itemCaptionTitle}
				{itemCaption}
			</div>
		</div>
	);
};

export default CarouselItem;
