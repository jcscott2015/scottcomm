/**
 * @description Home page for Scott Communications web site.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     ../../components/carousel/Carousel
 * @requires     ../../components/highlight/Highlight
 * @requires     ../../featurettes/john-scott/JohnScott
 * @requires     ../../featurettes/contact/Contact
 * @requires     ./Home.scss
 *
 * @module Home
 */

import React from 'react';
import Carousel, { ICarouselItems } from '../../components/carousel/Carousel';
import Highlight, { IHighlights } from '../../components/highlight/Highlight';
import JohnScott from '../../featurettes/john-scott/JohnScott';
import Contact from '../../featurettes/contact/Contact';
// import './Home.scss';

export interface IHomeProps {
	className?: string;
};

export const Home = (props: IHomeProps) => {
	/* TODO: Dynamically load nav from JSON data. */
	const carouselItems: ICarouselItems[] = [
		{
			href: '/web',
			imageSrc: 'portfolio/web/paon/paon-home.jpg',
			thumbnailSrc: 'portfolio/web/paon/paon-home-thumbnail.jpg',
			imageAlt: 'Web Development Portfolio Image',
			itemCaptionTitle: '<h1>Full Stack Web Development</h1>',
			itemCaption: '<p>LAMP, Drupal CMS, or custom server applications. REST and client-side javascript. <span>HTML 5</span> and <span>CSS 3</span>.</p>'
		},
		{
			href: '/hardware',
			imageSrc: 'portfolio/hardware/jordan/web-ui/jordan-home.jpg',
			thumbnailSrc: 'portfolio/hardware/jordan/web-ui/jordan-home-thumbnail.jpg',
			imageAlt: 'Hardware UX and UI Development Portfolio Image',
			itemCaptionTitle: '<h1>Hardware UX and UI Development</h1>',
			itemCaption: '<p>Web and mobile UI access to hardware devices.</p>'
		},
		{
			href: '/production',
			imageSrc: 'portfolio/production/jones-bartlett/4199X_CVRx_comp_carousel.jpg',
			thumbnailSrc: 'portfolio/production/jones-bartlett/4199X_CVRx_comp_carousel_thumbnail.jpg',
			imageAlt: 'Production Artist Portfolio Image',
			itemCaptionTitle: '<h1>Production Artist</h1>',
			itemCaption: '<p>Images, illustrations, print layout and color separation.</p>'
		}
	];

	const highlights: IHighlights[] = [
		{
			header: 'Web',
			content: 'From straight HTML to full stack CMS sites, a wide array of projects designed, built, and published to the Internet. Apache server and PHP configured with many of these projects.',
			btnText: 'View details »',
			btnHref: '/web'
		},
		{
			header: 'Hardware UI/UX',
			content: '5 years at <a href="http://www.nvtl.com/">Novatel Wireless</a> designing and building user interfaces for MiFi commercial and consumer cellular routers. Part of team that developed a custom CMS and web server that operated on the MiFi&#8217;s chip.',
			btnText: 'View details »',
			btnHref: '/hardware'
		},
		{
			header: 'Production Artist',
			content: 'Designing and producing print layouts, illustrations, and photo composites for textbooks, marketing collateral, and branding. Primarily Adobe Creative Suite, but other document, image, and 3D software used.',
			btnText: 'View details »',
			btnHref: '/production'
		}
	];

	const {
		className = ''
	} = props;

	return (
		<div className={`home ${className}`}>
			<Carousel autoPlay={5000} carouselItems={carouselItems} />
			<Highlight data={highlights} />
			<JohnScott />
			<Contact />
		</div>
	);
};

export default Home;
