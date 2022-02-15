/**
 * Navigation Bar for Scott Communications site.
 *
 * @category           Page_segment
 * @package            navigation
 * @author             John C. Scott <jcscott@scottcomm.com>
 * @copyright          2022 John C. Scott, Scott Communications
 * @license            https://opensource.org/licenses/MIT MIT
 * @link               http://www.scottcomm.com/
 */
import React from 'react';
import './Navigation.scss';
import NavMenuBtn from '../nav-menu-btn/NavMenuBtn';

export interface INavigationProps {
};

export const Navigation = (props: INavigationProps) => {
	return (
		<div className="navigation">
			<NavMenuBtn className="nav-menu-btn" navListClassName="nav-menu-list" />
		</div>
	);
};

export default Navigation;