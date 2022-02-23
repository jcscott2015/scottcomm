import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Carousel, { ICarouselItems } from './components/carousel/Carousel';
import JohnScott from './featurettes/john-scott/JohnScott';
import Contact from './featurettes/contact/Contact';
// import './App.css';

const App = () => {
	/* TODO: Dynamically load nav from JSON data. */
	const carouselItems: ICarouselItems[] = [
		{
			href: '/web',
			imageSrc: 'portfolio/web/paon/paon-home.jpg',
			imageAlt: 'Web Development Portfolio Image',
			itemCaptionTitle: '<h1>Full Stack Web Development</h1>',
			itemCaption: '<p>LAMP, Drupal CMS, or custom server applications. REST and client-side javascript. <span>HTML 5</span> and <span>CSS 3</span>.</p>'
		},
		{
			href: '/hardware',
			imageSrc: 'portfolio/hardware/jordan/web-ui/jordan-home.jpg',
			imageAlt: 'Hardware UX and UI Development Portfolio Image',
			itemCaptionTitle: '<h1>Hardware UX and UI Development</h1>',
			itemCaption: '<p>Web and mobile UI access to hardware devices.</p>'
		},
		{
			href: '/production',
			imageSrc: 'portfolio/production/jones-bartlett/4199X_CVRx_comp_carousel.jpg',
			imageAlt: 'Production Artist Portfolio Image',
			itemCaptionTitle: '<h1>Production Artist</h1>',
			itemCaption: '<p>Images, illustrations, print layout and color separation.</p>'
		}
	];

  return (
    <div className="App">
      <Header />
      <main>
        <Carousel autoPlay={5000} carouselItems={carouselItems}/>
        <JohnScott />
        <Contact />
      </main>
      <Footer />
    </div >
  );
}

export default App;
