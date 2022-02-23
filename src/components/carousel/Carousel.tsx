/**
 * Carousel for Scott Communications site.
 *
 * @category           Page_segment
 * @package            carousel
 * @author             John C. Scott <jcscott@scottcomm.com>
 * @copyright          2022 John C. Scott, Scott Communications
 * @license            https://opensource.org/licenses/MIT MIT
 * @link               http://www.scottcomm.com/
 */
import React from 'react';
import './Carousel.scss';
import CarouselItem, { ICarouselItemProps } from './CarouselItem';
import CarouselIndicator from './CarouselIndicator';
import { ChevronRight, ChevronLeft } from '../chevron/Chevron';
import useInterval from '../../hooks/useInterval';
import { renderDomStr } from '../../blocs/renderDomStr';
export interface ICarouselProps {
	autoPlay?: number;
	carouselItems: ICarouselItems[];
};

export interface ICarouselItems extends ICarouselItemProps {
	itemCaptionTitle?: string;
	itemCaption?: string;
}

export const Carousel = (props: ICarouselProps) => {
	interface ICarouselState {
		itemId?: number;
		active?: string;
		slide?: string;
		slot?: string;
	}
	// Build initial carousel state from carousel items.
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

	const getSlideItems = (jumpToIndex?: number) => {
		const carouselLen = carouselStates.length;
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

	const onSetNonActiveSlots = (slot: string = 'right') => {
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

	const onGoToSlide = (e?: React.MouseEvent<Element>, jumpToIndex: number = 0) => {
		if (e !== undefined) e.preventDefault();
		const { activeIndex } = getSlideItems();
		if (jumpToIndex < activeIndex) {
			onSetNonActiveSlots('left');
			setTimeout(() => {
				onPrev(undefined, jumpToIndex);
			}, 10);
		} else if (jumpToIndex > activeIndex) {
			onSetNonActiveSlots('right');
			setTimeout(() => {
				onNext(undefined, jumpToIndex);
			}, 10);
		}
	};

	const [looping, setLooping] = React.useState(true);
	const toggleAutoPlay = () => setLooping(!looping);

	useInterval(() => {
		setTimeout(() => {
			onSetNonActiveSlots('right');
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
						className={
							`${carouselStates[i].active} ${carouselStates[i].slide} ${carouselStates[i].slot}`
						}
						imageSrc={v.imageSrc}
						imageAlt={v.imageAlt}
						itemCaptionTitle={renderDomStr(undefined, v.itemCaptionTitle || '')}
						itemCaption={renderDomStr(undefined, v.itemCaption || '')}
					/>
				))}
			</div>
			<button
				aria-label="Previous"
				className="left carousel-control"
				onClick={onPrev}
				onMouseDown={() => onSetNonActiveSlots('left')}
			>
				<ChevronLeft />
			</button>
			<button
				aria-label="Next"
				className="right carousel-control"
				onClick={onNext}
				onMouseDown={() => onSetNonActiveSlots('right')}
			>
				<ChevronRight />
			</button>
		</div>
	);
};

export default Carousel;
