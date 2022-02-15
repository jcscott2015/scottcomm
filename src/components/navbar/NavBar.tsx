/**
 * Navigation Bar for Scott Communications site.
 *
 * @category           Page_segment
 * @package            navbar
 * @author             John C. Scott <jcscott@scottcomm.com>
 * @copyright          2022 John C. Scott, Scott Communications
 * @license            https://opensource.org/licenses/MIT MIT
 * @link               http://www.scottcomm.com/
 */
import React from 'react';
import './NavBar.scss';
import SCLink from '../scbtn/SCBtn';
import NavMenuBtn from '../nav-menu-btn/NavMenuBtn';

export interface INavBarProps {
};

export const NavBar = (props: INavBarProps) => {
	// const Controls: React.FC = () => (
	// 	<div id="navbar">
	// 		<ul>
	// 			<li><a href="/" title="Scott Communications Home">Home</a></li>
	// 			<li><a href="web.php" title="Web Application Development">Web</a></li>
	// 			<li><a href="hardware.php" title="Hardware UI/UX Development">Hardware UI/UX</a></li>
	// 			<li><a href="production.php" title="Image and Print Development">Production Artist</a></li>
	// 		</ul>
	// 	</div>
	// );
	return (
		<div className="navbar">
			<div className="navbar-header">
				<SCLink className="navbar-brand" href="/">Scott Communications</SCLink>
				<NavMenuBtn className="nav-menu-btn" navListClassName="nav-menu-list" />
			</div>
			{/* <Controls /> */}
		</div>
	);
};

export default NavBar;