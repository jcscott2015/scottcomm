/**
 * @description Navigation Bar for Scott Communications site.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     ./Navigation.scss
 * @requires     ../nav-menu-btn/NavMenuBtn
 * @requires     ../navbar/NavBar
 *
 * @module Navigation
 */
import React from 'react';
import './Navigation.scss';
import NavMenuBtn from '../nav-menu-btn/NavMenuBtn';
import NavBar from '../navbar/NavBar';

export interface INavigation {
	href: string;
	title: string;
	text: string;
}

export const Navigation = () => {
	const navigation: INavigation[] = [
		{
			href: '/',
			title: 'Scott Communications Home',
			text: 'Home'
		},
		{
			href: '/web',
			title: 'Web Application Development',
			text: 'Web'
		},
		{
			href: '/hardware',
			title: 'Hardware UI/UX Development',
			text: 'Hardware UI/UX'
		},
		{
			href: '/production',
			title: 'Image and Print Development',
			text: 'Production Artist'
		}
	];
	return (
		<div className="navigation">
			<NavBar navigation={navigation} />
			<NavMenuBtn
				navigation={navigation}
				className="nav-menu-btn" navListClassName="nav-menu-list" />
		</div>
	);
};

export default Navigation;