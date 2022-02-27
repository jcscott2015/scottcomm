import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Carousel, { ICarouselItems } from './components/carousel/Carousel';
import Highlight, { IHighlights } from './components/highlight/Highlight';
import JohnScott from './featurettes/john-scott/JohnScott';
import Contact from './featurettes/contact/Contact';

const App = () => {
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
			content: '5 years at <a href="http://www.nvtl.com/">Novatel Wireless</a> designing and building user interfaces for MiFi commercial and consumer cellular routers. Part of team that developed a custom CMS and web server that operated on the MiFi\'s chip.',
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

	return (
		<div className="App">
			<Header />
			<main>
				<Carousel autoPlay={5000} carouselItems={carouselItems} />
				<Highlight data={highlights} />
				<JohnScott />
				<Contact />
			</main>
			<Footer />
		</div >
	);
}

export default App;
