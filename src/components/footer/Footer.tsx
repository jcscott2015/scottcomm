/**
 * Footer page portion for Scott Communications web site.
 *
 * @category           Page_Segment
 * @package            Footer
 * @author             John C. Scott <jcscott@scottcomm.com>
 * @copyright          2022 John C. Scott, Scott Communications
 * @license            https://opensource.org/licenses/MIT MIT
 * @link               http://www.scottcomm.com/
 */

import React from 'react';
import ScrollToTopBtn from '../scroll-to-top-btn/ScrollToTopBtn';
import './Footer.scss';

const Footer = () => {
	const currYear = new Date().getFullYear();
	return (
		<div className="footer">
			<div className="container">
				<p>&#169;1994 - {currYear} Scott Communications.&nbsp;
					<span>All rights reserved.</span>
				</p>
				<p>
					<ScrollToTopBtn>Back to top</ScrollToTopBtn>
					{/* <a href="#">Back to top</a> */}
				</p>
			</div>
		</div>
	);
};

export default Footer;