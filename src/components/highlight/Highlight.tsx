/**
 * @description Highlight page portion for Scott Communications web site.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     ../../blocs/renderDomStr
 * @requires     ./Highlight.scss
 *
 * @module Highlight
 */

import React from 'react';
import renderDomStr from '../../blocs/renderDomStr';
import './Highlight.scss';

export interface IHighlights {
	className?: string;
	header: string;
	content: string;
	btnText: string;
	btnHref: string;
};

export interface IHighlightProps {
	className?: string;
	headerClass?: string;
	contentClass?: string;
	btnClass?: string;
	data: IHighlights[];
};

export const Highlight = (props: IHighlightProps) => {
	const {
		className = '',
		data,
		headerClass = '',
		contentClass = '',
		btnClass = ''
	} = props;
	return (
		<div className={`highlights ${className}`}>
			{data && data.map((h, i) => (
				<div className="highlight" key={i}>
					<h2 className={headerClass}>
						{h.header}
					</h2>
					<div className={contentClass}>
						{renderDomStr('p', h.content)}
					</div>
					<button
						className={btnClass}
						onClick={() => window.location.href = h.btnHref}
					>
						{h.btnText}
					</button>
				</div>
			))}
		</div>
	);
};

export default Highlight;
