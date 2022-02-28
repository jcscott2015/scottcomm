/**
 * @description Portfolio page portion for Scott Communications web site.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     NPM:react.useRef
 * @requires     ../../blocs/renderDomStr
 * @requires     ../../hooks/useIntersectionObserver
 * @requires     ../../components/progressive-image/ProgressiveImage
 * @requires     ./Portfolio.scss
 *
 * @module Portfolio
 */

import React, { useRef } from 'react';
import renderDomStr from '../../blocs/renderDomStr';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import ProgressiveImage from '../../components/progressive-image/ProgressiveImage'; import './Portfolio.scss';

export interface IPortfolios {
	header: string;
	desc: string;
	items: {
		imgSrc: string;
		imgThumbnailSrc: string;
		imgAlt: string;
		title: string;
	}[]
};

export interface IPortfolioProps {
	className?: string;
	headerClass?: string;
	descClass?: string;
	itemsClass?: string;
	data: IPortfolios[];
};

export const Portfolio = (props: IPortfolioProps) => {
	const {
		className = '',
		headerClass = '',
		descClass = '',
		itemsClass = '',
		data
	} = props;

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {});

	return (
		<div className={`portfolios ${className}`}>
			{data && data.map((p, i) => (
				<div className="portfolio" key={i}>
					<h2 className={headerClass}>
						{p.header}
					</h2>
					<div className={descClass}>
						{renderDomStr('p', `${p.desc} <em>(Click images to view detail.)</em>`)}
					</div>
					<div
						ref={ref}
						className={`portfolio-items ${itemsClass}`}
					>
						{p.items && p.items.map((pi, ii) => (
							<div
								key={ii}
								className="portfolio-item"
								onClick={() => console.info('Clicked Image!')}
							>
								<ProgressiveImage
									thumbUrl={pi.imgThumbnailSrc}
									url={pi.imgSrc}
									alt={pi.imgAlt}
									isVisible={Boolean(!!entry?.isIntersecting)} />
								<p>{pi.title}</p>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Portfolio;
