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
	// data: IPortfolios[];
};

export const Portfolio = (props: IPortfolioProps) => {
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
		className = '',
		headerClass = '',
		descClass = '',
		itemsClass = ''
	} = props;

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {});

	return (
		<div className={`portfolios ${className}`}>
			{portfolios && portfolios.map((p, i) => (
				<div className="portfolio" key={i}>
					<h2 className={headerClass}>
						{p.header}
					</h2>
					<div className={descClass}>
						{renderDomStr('p', p.desc)}
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
/*
<div class="container portfolio">

<!-- Paon Restaurant and Wine Bar -->
<div>
	<h2>Paon Restaurant and Wine Bar</h2>
	<p><a href="https://www.drupal.org/">Drupal</a> 6 site that allows the owner to administer menus and wine lists. <strong>(Click images to view detail.)</strong></p>
</div>

<!-- Four columns of gallery images. -->
<div class="row">
	<div class="portfolio-item col-xs-3">
		<div class="img-wrapper">
			<img class="img img-responsive full-width lazyloaded" data-src="assets/img/portfolio/web/paon/paon-home.jpg" alt="Paon Restaurant and Wine Bar Home Page" data-toggle="modal" data-target="#pic-modal" src="assets/img/portfolio/web/paon/paon-home.jpg">
		</div>
		<p>Home Page</p>
	</div><!-- /.col-xs-3 -->
	<div class="portfolio-item col-xs-3">
		<div class="img-wrapper">
			<img class="img img-responsive full-width lazyloaded" data-src="assets/img/portfolio/web/paon/paon-bar-lounge-menu.jpg" alt="Paon Restaurant and Wine Bar and Lounge Menu" data-toggle="modal" data-target="#pic-modal" src="assets/img/portfolio/web/paon/paon-bar-lounge-menu.jpg">
		</div>
		<p>Bar Lounge Menu</p>
	</div><!-- /.col-xs-3 -->
	<div class="portfolio-item col-xs-3">
		<div class="img-wrapper">
			<img class="img img-responsive full-width lazyloaded" data-src="assets/img/portfolio/web/paon/paon-wine-list.jpg" alt="Paon Restaurant and Wine Bar Wine List" data-toggle="modal" data-target="#pic-modal" src="assets/img/portfolio/web/paon/paon-wine-list.jpg">
		</div>
		<p>Wine List</p>
	</div><!-- /.col-xs-3 -->
	<div class="portfolio-item col-xs-3">
		<div class="img-wrapper">
			<img class="img img-responsive full-width lazyloaded" data-src="assets/img/portfolio/web/paon/paon-reservations-directions.jpg" alt="Paon Restaurant and Wine Bar Reservations &amp; Directions" data-toggle="modal" data-target="#pic-modal" src="assets/img/portfolio/web/paon/paon-reservations-directions.jpg">
		</div>
		<p>Reservations &amp; Directions</p>
	</div><!-- /.col-xs-3 -->
</div><!-- /.row -->
<!-- End Paon Restaurant and Wine Bar -->

<!-- USA/Canadian HiFi -->
<div>
	<h2>USA and Canadian HiFi</h2>
	<p><a href="https://www.drupal.org/">Drupal</a> 6 site using the <a href="https://www.drupal.org/project/ubercart">Ubercart</a> e-commerce modules. The customer can create sale items with badges automatically added to product images. International currencies, taxes, and shipping are dynamically handled depending on locale of the shopper. Multiple language support. Same database and Drupal framework support both the United States and Canada sites. The site seen is determined by URL. <strong>(Click images to view detail.)</strong></p>
</div>

<!-- Two columns of gallery images. -->
<div class="row">
	<div class="portfolio-item col-xs-6">
		<div class="img-wrapper">
			<img class="img img-responsive full-width lazyloaded" data-src="assets/img/portfolio/web/hifi/usa-hifi-home.jpg" alt="USA HiFi Home Page" data-toggle="modal" data-target="#pic-modal" src="assets/img/portfolio/web/hifi/usa-hifi-home.jpg">
		</div>
		<p>USA HiFi Home Page</p>
	</div><!-- /.col-xs-6 -->
	<div class="portfolio-item col-xs-6">
		<div class="img-wrapper">
			<img class="img img-responsive full-width lazyloaded" data-src="assets/img/portfolio/web/hifi/canadian-hifi-home.jpg" alt="Canadian HiFi Home Page" data-toggle="modal" data-target="#pic-modal" src="assets/img/portfolio/web/hifi/canadian-hifi-home.jpg">
		</div>
		<p>Canadian HiFi Home Page</p>
	</div><!-- /.col-xs-6 -->
</div><!-- /.row -->
<!-- End USA/Canadian HiFi -->

<!-- California Avocado Commission -->
<div>
	<h2>California Avocado Commission</h2>
	<p>A <a href="https://symfony.com/">Symfony</a> site built with <a href="http://www.reddoor.biz/">Red Door Interacive</a>. The site has customer, grower, and seller views. The recipe section allows the user to change portions and print the recipe in several sizes dynamically — using CSS with @media queries. The grower locator page uses the <a href="https://developers.google.com/maps/">Google Maps API</a> to interactively map the grower’s location in their biography. <strong>(Click images to view detail.)</strong></p>
</div>

<!-- Three columns of gallery images. -->
<div class="row">
	<div class="portfolio-item col-xs-4">
		<div class="img-wrapper">
			<img class="img img-responsive full-width lazyloaded" data-src="assets/img/portfolio/web/cac/cac_home_page.jpg" alt="California Avocado Commission Home Page" data-toggle="modal" data-target="#pic-modal" src="assets/img/portfolio/web/cac/cac_home_page.jpg">
		</div>
		<p>Home Page</p>
	</div><!-- /.col-xs-4 -->
	<div class="portfolio-item col-xs-4">
		<div class="img-wrapper">
			<img class="img img-responsive full-width lazyloaded" data-src="assets/img/portfolio/web/cac/cac_recipe_detail.jpg" alt="California Avocado Commission Recipe Detail" data-toggle="modal" data-target="#pic-modal" src="assets/img/portfolio/web/cac/cac_recipe_detail.jpg">
		</div>
		<p>Recipe Detail</p>
	</div><!-- /.col-xs-4 -->
	<div class="portfolio-item col-xs-4">
		<div class="img-wrapper">
			<img class="img img-responsive full-width lazyloaded" data-src="assets/img/portfolio/web/cac/cac_grower_detail.jpg" alt="California Avocado Commission Grower Detail" data-toggle="modal" data-target="#pic-modal" src="assets/img/portfolio/web/cac/cac_grower_detail.jpg">
		</div>
		<p>Grower Detail</p>
	</div>
</div><!-- /.row -->
<!-- End California Avocado Commission -->

<!-- Verrado -->
<div>
	<h2>Verrado</h2>
	<p>Marketing sites for <a href="http://verrado.com/">Verrado, Arizona</a> planned community, still in development at the time. These sites are simple HTML and CSS. The form posts to a server-side CGI. <strong>(Click images to view detail.)</strong></p>
</div>

<!-- Two columns of gallery images. -->
<div class="row">
	<div class="portfolio-item col-xs-6">
		<div class="img-wrapper">
			<img class="img img-responsive full-width lazyloaded" data-src="assets/img/portfolio/web/verrado/verrado_discover_series.jpg" alt="Verrado Discover Series" data-toggle="modal" data-target="#pic-modal" src="assets/img/portfolio/web/verrado/verrado_discover_series.jpg">
		</div>
		<p>Verrado Discover Series</p>
	</div><!-- /.col-xs-6 -->
	<div class="portfolio-item col-xs-6">
		<div class="img-wrapper">
			<img class="img img-responsive full-width lazyloaded" data-src="assets/img/portfolio/web/verrado/verrado_weekend_getaway.jpg" alt="Verrado Weekend Getaway" data-toggle="modal" data-target="#pic-modal" src="assets/img/portfolio/web/verrado/verrado_weekend_getaway.jpg">
		</div>
		<p>Verrado Weekend Getaway</p>
	</div><!-- /.col-xs-6 -->
</div><!-- /.row -->
<!-- End Verrado -->

<!-- Acartha Technologies Partners -->
<div>
	<h2>Acartha Technologies Partners</h2>
	<p>Simple HTML and CSS informational site. <strong>(Click images to view detail.)</strong></p>
</div>

<!-- Four columns of gallery images. -->
<div class="row">
	<div class="portfolio-item col-xs-3">
		<div class="img-wrapper">
			<img class="img img-responsive full-width lazyloaded" data-src="assets/img/portfolio/web/acartha_technologies/acartha_technologies_home.jpg" alt="Acartha Technologies Partners Home Page" data-toggle="modal" data-target="#pic-modal" src="assets/img/portfolio/web/acartha_technologies/acartha_technologies_home.jpg">
		</div>
		<p>Home Page</p>
	</div><!-- /.col-xs-3 -->
	<div class="portfolio-item col-xs-3">
		<div class="img-wrapper">
			<img class="img img-responsive full-width lazyloaded" data-src="assets/img/portfolio/web/acartha_technologies/acartha_technologies_opportunity.jpg" alt="Acartha Technologies Partners Market Opportunity" data-toggle="modal" data-target="#pic-modal" src="assets/img/portfolio/web/acartha_technologies/acartha_technologies_opportunity.jpg">
		</div>
		<p>Market Opportunity</p>
	</div><!-- /.col-xs-3 -->
	<div class="portfolio-item col-xs-3">
		<div class="img-wrapper">
			<img class="img img-responsive full-width lazyloaded" data-src="assets/img/portfolio/web/acartha_technologies/acartha_technologies_team.jpg" alt="Acartha Technologies Partners Management Team" data-toggle="modal" data-target="#pic-modal" src="assets/img/portfolio/web/acartha_technologies/acartha_technologies_team.jpg">
		</div>
		<p>Management Team</p>
	</div><!-- /.col-xs-3 -->
	<div class="portfolio-item col-xs-3">
		<div class="img-wrapper">
			<img class="img img-responsive full-width lazyloaded" data-src="assets/img/portfolio/web/acartha_technologies/acartha_technologies_companies.jpg" alt="Acartha Technologies Partners Portfolio Companies" data-toggle="modal" data-target="#pic-modal" src="assets/img/portfolio/web/acartha_technologies/acartha_technologies_companies.jpg">
		</div>
		<p>Portfolio Companies</p>
	</div><!-- /.col-xs-3 -->
</div><!-- /.row -->
<!-- End Acartha Technologies Partners -->

</div>
*/