/**
 * @description Simple example of JSX obfuscation. Questionable benefits as this is a single page,
 * client-side application. The uglified javascript could be scraped.
 * Encoding would have to occur in nodejs server.

 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 * @see {@link https://usehooks-ts.com/react-hook/use-image-on-load}
 *
 * @requires     NPM:react
 * @requires     NPM:react.ReactNode
 *
 * @module blocs
 */

import React, { ReactNode } from 'react';

/**
 * Encode for obfuscation.
 * @param str string - string to encode
 * @param entity boolean - use entity encoding
 * @returns string
 */
export const encodeStr = (str: string, entity: boolean = false): string => {
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
 * @returns ReactNode
 */
export const decodeStr = (tag: string = 'div', encoded_str: string): ReactNode => {
	const rawHTML = Array.from(encoded_str).map((s, i) => {
		return String.fromCharCode(encoded_str.charCodeAt(i) - 1);
	}).join('');
	return React.createElement(tag, {
		dangerouslySetInnerHTML: { __html: rawHTML }
	});
};
