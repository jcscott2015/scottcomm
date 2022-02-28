/**
 * @description Hardware page for Scott Communications web site.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     ../../components/portfolio/Portfolio
 * @requires     ../../components/portfolio/Portfolio.IPortfolios
 * @requires     ./Hardware.scss
 *
 * @module Hardware
 */

import React from 'react';
import Portfolio, { IPortfolios } from '../../components/portfolio/Portfolio';
import './Hardware.scss';

export interface IHardwareProps {
	className?: string;
};

export const Hardware = (props: IHardwareProps) => {
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
		<div className={`profile-page hardware ${className}`}>
			<h1>Hardware UI/UX Development</h1>
			<p className="lead">5 years at <a href="http://www.nvtl.com/">Novatel Wireless</a> designing and building user interfaces for MiFi commercial and consumer cellular routers. Part of team that developed a custom CMS and web server that operated on the MiFi’s chip. Worked closely with client on user interface and user experience.</p>
			<Portfolio data={portfolios} />
		</div>
	);
};

export default Hardware;
