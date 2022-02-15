/**
 * Responsive menu button.
 *
 * @category           button
 * @package            nav-menu-btn
 * @author             John C. Scott <jcscott@scottcomm.com>
 * @copyright          2022 John C. Scott, Scott Communications
 * @license            https://opensource.org/licenses/MIT MIT
 * @link               http://www.scottcomm.com/
 */

import React from 'react';
import './NavMenuBtn.scss';

export interface INavMenuBtnProps {
	className?: string;
	navListClassName?: string;
};

export const NavMenuBtn = (props: INavMenuBtnProps) => {
	const [ariaExpanded, setAriaExpanded] = React.useState(false);

	const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setAriaExpanded(!ariaExpanded);
	};

	return (
		<div className="responsive-nav">
			<button
				className={`responsive-nav-btn ${props.className}`}
				type="button"
				aria-expanded={ariaExpanded}
				aria-controls="navlist"
				onClick={clickHandler}
			>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			</button>
			<div id="navlist" className={`responsive-nav-list ${props.navListClassName} ${ariaExpanded ? '' : 'closed'}`}>
				<ul>
					{/* Dynamically load nav from JSON data. */}
					<li><a href="/" title="Scott Communications Home">Home</a></li>
					<li><a href="web.php" title="Web Application Development">Web</a></li>
					<li><a href="hardware.php" title="Hardware UI/UX Development">Hardware UI/UX</a></li>
					<li><a href="production.php" title="Image and Print Development">Production Artist</a></li>
				</ul>
			</div>
		</div>
	);
};

export default NavMenuBtn;