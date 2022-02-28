/**
 * @description Production page for Scott Communications web site.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     ../../components/portfolio/Portfolio
 * @requires     ../../components/portfolio/Portfolio.IPortfolios
 * @requires     ./Production.scss
 *
 * @module Production
 */

import React from 'react';
import Portfolio, { IPortfolios } from '../../components/portfolio/Portfolio';
import './Production.scss';

export interface IProductionProps {
	className?: string;
};

export const Production = (props: IProductionProps) => {
	/* TODO: Dynamically load nav from JSON data. */
	const portfolios: IPortfolios[] = [
		{
			'header': 'Paon Restaurant and Wine Bar',
			'desc': '<a href="https://www.drupal.org/">Drupal</a> 6 site that allows the owner to administer menus and wine lists.',
			'items': [
				{
					'imgSrc': 'portfolio/web/paon/paon-home.jpg',
					'imgThumbnailSrc': 'portfolio/web/paon/paon-home-thumbnail.jpg',
					'imgAlt': 'Paon Restaurant and Wine Bar Home Page',
					'title': 'Home Page'
				},
				{
					'imgSrc': 'portfolio/web/paon/paon-bar-lounge-menu.jpg',
					'imgThumbnailSrc': 'portfolio/web/paon/paon-bar-lounge-menu-thumbnail.jpg',
					'imgAlt': 'Paon Restaurant and Wine Bar Menu',
					'title': 'Bar Lounge Menu'
				},
				{
					'imgSrc': 'portfolio/web/paon/paon-wine-list.jpg',
					'imgThumbnailSrc': 'portfolio/web/paon/paon-wine-list-thumbnail.jpg',
					'imgAlt': 'Paon Restaurant and Wine Bar Wine List',
					'title': 'Wine List'
				},
				{
					'imgSrc': 'portfolio/web/paon/paon-reservations-directions.jpg',
					'imgThumbnailSrc': 'portfolio/web/paon/paon-reservations-directions-thumbnail.jpg',
					'imgAlt': 'Paon Restaurant and Wine Bar Reservations & Directions',
					'title': 'Reservations & Directions'
				}
			]
		}
	];

	const {
		className = ''
	} = props;

	return (
		<div className={`profile-page production ${className}`}>
			<h1>Production Artist</h1>
			<p className="lead">Designing and producing print layouts, illustrations, and photo composites for textbooks, marketing collateral, and branding. Primarily Adobe Creative Suite, but other document, image, and 3D software used.</p>
			<Portfolio data={portfolios} />
		</div>
	);
};

export default Production;
