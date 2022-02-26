/**
 * @description Logo and button for Scott Communications web site.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     ./SCBtn.scss
 * @requires     ../sclogo/SCLogo
 *
 * @module SCBtn
 */
import React from 'react';
import './SCBtn.scss';
import SCLogo from '../sclogo/SCLogo';

export interface ISCBtnProps {
	children: React.ReactNode;
	className?: string;
	href: string;
};

export const SCBtn = (props: ISCBtnProps) => {
	return (
		<button
			className={`scbtn ${props.className || ''}`}
			onClick={() => window.location.href = props.href}
		>
			<SCLogo />
			{props.children}
		</button>
	);
};

export default SCBtn;