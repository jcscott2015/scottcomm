/**
 * @description Footer page portion for Scott Communications web site.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     ../scroll-to-top-btn/ScrollToTopBtn
 * @requires     ./Footer.scss
 *
 * @module Footer
 */

import React from 'react';
import ScrollToTopBtn from '../scroll-to-top-btn/ScrollToTopBtn';
import './Footer.scss';

const Footer = () => {
	const currYear = new Date().getFullYear();
	return (
		<div className="footer">
			<div className="container">
				<p>&#169;1994 - {currYear} <span>Scott Communications.</span> <span>All rights reserved.</span>
				</p>
				<p>
					<ScrollToTopBtn>Back to top</ScrollToTopBtn>
				</p>
			</div>
		</div>
	);
};

export default Footer;