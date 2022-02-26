/**
 * @description Responsive menu button.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     ./NavMenuBtn.scss
 * @requires     ../navigation/Navigation.INavigation
 *
 * @module NavMenuBtn
 */

import React from 'react';
import { INavigation } from '../navigation/Navigation';
import './NavMenuBtn.scss';
export interface INavMenuBtnProps {
	className?: '' | string;
	navListClassName?: '' | string;
	navigation: INavigation[];
};

export const NavMenuBtn = (props: INavMenuBtnProps) => {
	const { className, navListClassName, navigation } = props;
	const [ariaExpanded, setAriaExpanded] = React.useState(false);

	const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setAriaExpanded(!ariaExpanded);
	};

	return (
		<div className="responsive-nav">
			<button
				className={`responsive-nav-btn ${className}`}
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
					`responsive-nav-list ${navListClassName} ${ariaExpanded ? '' : 'closed'}`
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