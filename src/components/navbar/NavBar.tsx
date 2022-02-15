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

export interface INavBarProps {
};

export const NavBar = (props: INavBarProps) => {
	/* TODO: Dynamically load nav from JSON data. */
	interface INavigation {
		href: string;
		title: string;
		text: string;
	}
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
		<div className="navbar">
			<ul>
				{navigation.map((v, i) => (
					<li key={i}>
						<a href={v.href} title={v.title}>{v.text}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavBar;