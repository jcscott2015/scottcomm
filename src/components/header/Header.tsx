/**
 * @description Header for Scott Communications site.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     ./Header.scss
 * @requires     ../navigation/Navigation
 * @requires     ../scbtn/SCBtn
 *
 * @module Header
 */

import React from 'react';
import './Header.scss';
import Navigation from '../navigation/Navigation';
import SCBtn from '../scbtn/SCBtn';

export interface IHeaderProps {
};

export const Header = (props: IHeaderProps) => {
	return (
		<div className="header">
			<SCBtn href="/">Scott Communications</SCBtn>
			<Navigation />
		</div>
	);
};

export default Header;