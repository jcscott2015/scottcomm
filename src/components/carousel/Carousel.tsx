/**
 * @description Carousel for Scott Communications site.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 * @see {@link https://github.com/juliencrn/react-gallery/}
 *
 * @requires     NPM:react
 * @requires     ./Carousel.scss
 * @requires     ./Carousel
 * @requires     ./Carousel.ICarouselItemProps
 * @requires     ./CarouselIndicator
 * @requires     ../chevron/Chevron.ChevronRight
 * @requires     ../chevron/Chevron.ChevronLeft
 * @requires     ../../hooks/useInterval
 * @requires     ../../blocs/renderDomStr
 *
 * @module Carousel
 */
import React from 'react';
import './Carousel.scss';
import CarouselItem, { ICarouselItemProps } from './CarouselItem';
import CarouselIndicator from './CarouselIndicator';
import { ChevronRight, ChevronLeft } from '../chevron/Chevron';
import useInterval from '../../hooks/useInterval';
import renderDomStr from '../../blocs/renderDomStr';
export interface ICarouselProps {
	autoPlay?: number;
	carouselItems: ICarouselItems[];
};

export interface ICarouselItems extends ICarouselItemProps {
	itemCaptionTitle?: '' | string;
	itemCaption?: '' | string;
}

const Carousel = (props: ICarouselProps) => {
	interface ICarouselState {
		itemId?: number;
		active?: '' | 'active';
		slide?: '' | 'prev' | 'next';
		slot?: '' | 'right' | 'left';
	}
	/**
	 * Build initial carousel state from all carousel items.
	 * @param items ICarouselItems[]
	 * @returns ICarouselState[]
	 */
	const carouselState = (items: ICarouselItems[]) => {
		let ret: ICarouselState[] = [];
		items.forEach((v, i) => {
			ret.push({
				itemId: i,
				active: i === 0 ? 'active' : '',
				slide: '',
				slot: ''
			});
		});
		return ret;
	};

	const [
		carouselStates,
		setCarouselStates
	] = React.useState(carouselState(props.carouselItems));

	const carouselLen = carouselStates.length;

	/**
	 * Get previous and next slide ids from carouselStates
	 * using the active slide as a base. If jumpToIndex is specified,
	 * set previous and next ids to it.
	 * @param jumpToIndex number
	 * @returns object
	 */
	const getSlideItems = (jumpToIndex?: number) => {
		const lastIndex = carouselLen - 1;
		let activeIndex = 0,
			nextIndex = 0,
			prevIndex = 0;

		for (let i = 0; i < carouselLen; i++) {
			if (carouselStates[i].active === 'active') {
				activeIndex = carouselStates[i].itemId || 0;
				break;
			}
		}

		if (jumpToIndex !== undefined) {
			nextIndex = jumpToIndex;
			prevIndex = jumpToIndex;
		} else {
			nextIndex = ((activeIndex + 1) > lastIndex) ? 0 : activeIndex + 1;
			prevIndex = ((activeIndex - 1) < 0) ? lastIndex : activeIndex - 1;
		}

		return { prevIndex, activeIndex, nextIndex };
	};

	/**
	 * Find all non-active items in carouselStates and update the slot
	 * property to the passed slot string value.
	 * Slot position must be set BEFORE attempting a slide transition,
	 * or the new active item could slide in from the wrong side.
	 * Use a "pre-event" to trigger this handler, or use setTimeout
	 * to delay the slide action.
	 * @param slot string 'right' | 'left' defaults tp 'right'
	 */
	const onPositionNonActiveSlots = (slot: 'right' | 'left' = 'right') => {
		let states: ICarouselState[] = [];
		carouselStates.forEach(so => {
			let state = { ...so };
			if (state.active !== 'active') {
				state.slide = '';
				state.slot = slot
			} else {
				state.slot = '';
			}
			states.push(state);
		});
		setCarouselStates(states);
	};

	/**
	 * onClick handler that slides to the previous or "jumpToIndex" item.
	 * @param e React.MouseEvent<Element>
	 * @param jumpToIndex number
	 */
	const onPrev = (e?: React.MouseEvent<Element>, jumpToIndex?: number) => {
		if (e !== undefined) e.preventDefault();
		const { prevIndex, activeIndex } = getSlideItems(jumpToIndex);
		let states = [...carouselStates];
		states[prevIndex].active = 'active';
		states[prevIndex].slide = '';
		states[prevIndex].slot = '';
		states[activeIndex].active = '';
		states[activeIndex].slide = 'prev';
		states[activeIndex].slot = '';
		setCarouselStates(states);
	};

	/**
	 * onClick handler that slides to the next or "jumpToIndex" item.
	 * @param e React.MouseEvent<Element>
	 * @param jumpToIndex number
	 */
	const onNext = (e?: React.MouseEvent<Element>, jumpToIndex?: number) => {
		if (e !== undefined) e.preventDefault();
		const { nextIndex, activeIndex } = getSlideItems(jumpToIndex);
		let states = [...carouselStates];
		states[nextIndex].active = 'active';
		states[nextIndex].slide = '';
		states[nextIndex].slot = '';
		states[activeIndex].active = '';
		states[activeIndex].slide = 'next';
		states[activeIndex].slot = '';
		setCarouselStates(states);
	};

	/**
	 * onClick handler that slides directly to the "jumpToIndex" item.
	 * @param e React.MouseEvent<Element>
	 * @param jumpToIndex number default 0
	 */
	const onGoToSlide = (e?: React.MouseEvent<Element>, jumpToIndex: number = 0) => {
		if (e !== undefined) e.preventDefault();
		const { activeIndex } = getSlideItems();
		if (jumpToIndex < activeIndex) {
			onPositionNonActiveSlots('left');
			setTimeout(() => {
				onPrev(undefined, jumpToIndex);
			}, 10);
		} else if (jumpToIndex > activeIndex) {
			onPositionNonActiveSlots('right');
			setTimeout(() => {
				onNext(undefined, jumpToIndex);
			}, 10);
		}
	};

	const [looping, setLooping] = React.useState(true);
	const toggleAutoPlay = () => setLooping(!looping);

	useInterval(() => {
		setTimeout(() => {
			onPositionNonActiveSlots('right');
		}, 1000);
		onNext(undefined);
	}, looping ? props.autoPlay || null : null);

	return (
		<div
			className="carousel"
			onMouseEnter={toggleAutoPlay}
			onMouseLeave={toggleAutoPlay}
		>
			<ol className="carousel-indicators">
				{props.carouselItems.map((v, i) => (
					<CarouselIndicator
						key={i}
						goToSlide={(e) => onGoToSlide(e, i)}
						className={carouselStates[i].active}
					/>
				))}
			</ol>
			<div className="carousel-inner" role="listbox">
				{props.carouselItems.map((v, i) => (
					<CarouselItem
						key={i}
						href={v.href}
						className={[carouselStates[i].active, carouselStates[i].slide, carouselStates[i].slot].join(' ')}
						thumbnailSrc={v.thumbnailSrc}
						imageSrc={v.imageSrc}
						imageAlt={v.imageAlt}
						itemCaptionTitle={renderDomStr(undefined, v.itemCaptionTitle)}
						itemCaption={renderDomStr(undefined, v.itemCaption)}
					/>
				))}
			</div>
			{(carouselLen > 1) && <>
				<button
					aria-label="Previous"
					className="left carousel-control"
					onClick={onPrev}
					onMouseDown={() => onPositionNonActiveSlots('left')}
				>
					<ChevronLeft />
				</button>
				<button
					aria-label="Next"
					className="right carousel-control"
					onClick={onNext}
					onMouseDown={() => onPositionNonActiveSlots('right')}
				>
					<ChevronRight />
				</button>
			</>}
		</div>
	);
};

export default Carousel;
