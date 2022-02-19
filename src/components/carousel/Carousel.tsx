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
import { ChevronRight, ChevronLeft } from '../chevron/Chevron';

export interface ICarouselProps {
};

export const Carousel = (props: ICarouselProps) => {
	return (
		<div className="carousel">
			<ol className="carousel-indicators">
				<li data-target="#scCarousel" data-slide-to="0" className=""></li>
				<li data-target="#scCarousel" data-slide-to="1" className=""></li>
				<li data-target="#scCarousel" data-slide-to="2" className="active"></li>
			</ol>
			<div className="carousel-inner" role="listbox">
				<div className="item" data-href="web.php">
					<img className="first-slide" src="portfolio/web/paon/paon-home.jpg" alt="First slide" />
					<div className="carousel-caption">
						<h1>Full Stack Web Development</h1>
						<p>LAMP, Drupal CMS, or custom server applications. REST and client-side javascript. <span>HTML 5</span> and <span>CSS 3</span>.</p>
					</div>
				</div>
			</div>
			<button
				aria-label="Previous"
				className="left carousel-control"
				data-slide="prev"
			>
				<ChevronLeft />
			</button>
			<button
				aria-label="Next"
				className="right carousel-control"
				data-slide="next"
			>
				<ChevronRight />
			</button>
		</div>
	);
};

export default Carousel;

/*
<div id="scCarousel" class="carousel slide" data-ride="carousel">
	<!-- Indicators -->
	<ol class="carousel-indicators">
		<li data-target="#scCarousel" data-slide-to="0" class=""></li>
		<li data-target="#scCarousel" data-slide-to="1" class=""></li>
		<li data-target="#scCarousel" data-slide-to="2" class="active"></li>
	</ol>
	<div class="carousel-inner" role="listbox">
		<div class="item" data-href="web.php">
			<img class="first-slide" src="assets/img/portfolio/web/paon/paon-home.jpg" alt="First slide">
			<div class="container">
				<div class="carousel-caption">
					<h1>Full Stack Web Development</h1>
					<p>LAMP, Drupal CMS, or custom server applications. REST and client-side javascript. <span class="keep-together">HTML 5</span> and <span class="keep-together">CSS 3</span>.</p>
				</div>
			</div>
		</div>
		<div class="item" data-href="hardware.php">
			<img class="second-slide" src="assets/img/portfolio/hardware/jordan/web-ui/jordan-home.jpg" alt="Second slide">
			<div class="container">
				<div class="carousel-caption">
					<h1>Hardware UX and UI Development</h1>
					<p>Web and mobile UI access to hardware devices.</p>
				</div>
			</div>
		</div>
		<div class="item active" data-href="production.php">
			<img class="third-slide" src="assets/img/portfolio/production/jones-bartlett/4199X_CVRx_comp_carousel.jpg" alt="Third slide">
			<div class="container">
				<div class="carousel-caption">
					<h1>Production Artist</h1>
					<p>Images, illustrations, print layout and color separation.</p>
				</div>
			</div>
		</div>
	</div>
	<a class="left carousel-control" href="#scCarousel" role="button" data-slide="prev">
		<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		<span class="sr-only">Previous</span>
	</a>
	<a class="right carousel-control" href="#scCarousel" role="button" data-slide="next">
		<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		<span class="sr-only">Next</span>
	</a>
</div>
*/