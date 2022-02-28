/**
 * @description Web page for Scott Communications web site.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     ../../components/portfolio/Portfolio
 * @requires     ../../components/portfolio/Portfolio.IPortfolios
 * @requires     ./Web.scss
 *
 * @module Web
 */

import React from 'react';
import Portfolio, { IPortfolios } from '../../components/portfolio/Portfolio';
import './Web.scss';

export interface IWebProps {
	className?: string;
};

export const Web = (props: IWebProps) => {
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
		<div className={`profile-page web ${className}`}>
			<h1>Web Application Development</h1>
			<p className="lead">From straight HTML to full stack CMS sites, a wide array of projects designed, built, and published to the Internet. Apache server and PHP configured with many of these projects.</p>
			<Portfolio data={portfolios} />
		</div>
	);
};

export default Web;
