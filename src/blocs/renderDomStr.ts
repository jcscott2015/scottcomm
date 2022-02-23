/**
 * Render DOM strings, usually pulled from data or API, to React Node.
 *
 * @category           Utility
 * @package            blocs
 * @author             John C. Scott <jcscott@scottcomm.com>
 * @copyright          2022 John C. Scott, Scott Communications
 * @license            https://opensource.org/licenses/MIT MIT
 * @link               http://www.scottcomm.com/
 */

import React, { ReactNode } from 'react';

/**
 * Render a DOM string to a React Node.
 * @param tag string - element, 'div' is default for undefined
 * @param dom_str string - DOM string
 * @returns ReactNode
 */
export const renderDomStr = (tag: string = 'div', dom_str: string = ''): ReactNode | string => {
	if ((dom_str === '') || (dom_str === undefined)) {
		return '';
	} else {
		return React.createElement(tag, {
			dangerouslySetInnerHTML: { __html: dom_str }
		});
	}
};
