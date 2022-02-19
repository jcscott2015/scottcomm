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

	const [ariaExpanded, setAriaExpanded] = React.useState(false);

	const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setAriaExpanded(!ariaExpanded);
	};

	return (
		<div className="responsive-nav">
			<button
				className={`responsive-nav-btn ${props.className || ''}`}
				type="button"
				aria-expanded={ariaExpanded}
				aria-haspopup="menu"
				aria-controls="navlist"
				onClick={clickHandler}
			>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			</button>
			<div
				id="navlist"
				className={
					`responsive-nav-list ${props.navListClassName || ''} ${ariaExpanded ? '' : 'closed'}`
				}>
				<ul>
					{navigation.map((v, i) => (
						<li key={i}>
							<a href={v.href} title={v.title}>{v.text}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default NavMenuBtn;