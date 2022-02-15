/**
 * Header for Scott Communications site.
 *
 * @category           Page_segment
 * @package            header
 * @author             John C. Scott <jcscott@scottcomm.com>
 * @copyright          2022 John C. Scott, Scott Communications
 * @license            https://opensource.org/licenses/MIT MIT
 * @link               http://www.scottcomm.com/
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