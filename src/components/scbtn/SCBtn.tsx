/**
 * Logo and button for Scott Communications web site.
 *
 * @category           component
 * @package            SCBtn
 * @author             John C. Scott <jcscott@scottcomm.com>
 * @copyright          2022 John C. Scott, Scott Communications
 * @license            https://opensource.org/licenses/MIT MIT
 * @link               http://www.scottcomm.com/
 */

import React from 'react';
import './SCBtn.scss';
import sclogo from './sclogo.svg';

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
			<img src={sclogo} alt="Scott Communications" />
			{props.children}
		</button>
	);
};

export default SCBtn;