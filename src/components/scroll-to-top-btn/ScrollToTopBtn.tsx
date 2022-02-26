/**
 * @description Scroll to top button.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     ./ScrollToTopBtn.scss
 *
 * @module ScrollToTopBtn
 */
import React from 'react';
import './ScrollToTopBtn.scss';
export interface IScrollToTopBtnProps {
	children: React.ReactNode;
};

export const ScrollToTopBtn = (props: IScrollToTopBtnProps) => {
	const [btnDisplay, setBtnDisplay] = React.useState('none');
	const scrollFunction = () => {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			setBtnDisplay('inline-block');
		} else {
			setBtnDisplay('none');
		}
	};

	// When the user scrolls down 1.25rem from the top of the document, show the button
	window.onscroll = scrollFunction;

	const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();

		// When the user clicks on the button, scroll to the top of the document
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	};

	return (
		<button
			className="scroll-to-top-btn"
			style={{ display: btnDisplay }}
			onClick={clickHandler}
		>
			{props.children}
		</button>
	);
};

export default ScrollToTopBtn;