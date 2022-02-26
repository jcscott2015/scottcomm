/**
 * @description Navigation Bar for Scott Communications site.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     ./NavBar.scss
 * @requires     ../navigation/Navigation.INavigation
 *
 * @module NavBar
 */
import React from 'react';
import { INavigation } from '../navigation/Navigation';
import './NavBar.scss';
export interface INavBarProps {
	navigation: INavigation[];
};

export const NavBar = (props: INavBarProps) => {
	return (
		<div className="navbar">
			<ul>
				{props.navigation.map((v, i) => (
					<li key={i}>
						<a href={v.href} title={v.title}>{v.text}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavBar;