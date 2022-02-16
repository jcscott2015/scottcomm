/**
 * Simple example of JSX obfuscation. Questionable benefits as this is a single page,
 * client-side application. The uglified javascript could be scraped.
 * Encoding would have to occur in nodejs server.
 *
 * @category           Business Logic
 * @package            blocs
 * @author             John C. Scott <jcscott@scottcomm.com>
 * @copyright          2022 John C. Scott, Scott Communications
 * @license            https://opensource.org/licenses/MIT MIT
 * @link               http://www.scottcomm.com/
 */

import React from 'react';

/**
 * Encode for obfuscation.
 * @param str string - string to encode
 * @param entity boolean - use entity encoding
 * @returns string
 */
export const encodeStr = (str: string, entity: boolean = false) => {
	if (entity) {
		// Unicode entity encoding.
		return Array.from(str).map((s, i) => {
			return '&#x' + str.charCodeAt(i).toString(16);
		}).join(';') + ';';
	} else {
		// Plus 1 charCode encoding (shorter string).
		return Array.from(str).map((s, i) => {
			return String.fromCharCode(str.charCodeAt(i) + 1);
		}).join('');
	}
};

/**
 * Decode and render in JSX.
 * @param tag string - element, 'div' is default for undefined
 * @param encoded_str string - encoded string
 * @returns ReactElement
 */
export const decodeStr = (tag: string = 'div', encoded_str: string) => {
	const rawHTML = Array.from(encoded_str).map((s, i) => {
		return String.fromCharCode(encoded_str.charCodeAt(i) - 1);
	}).join('');
	return React.createElement(tag, {
		dangerouslySetInnerHTML: { __html: rawHTML }
	});
};
