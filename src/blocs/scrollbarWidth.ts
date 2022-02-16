/**
 * @description Determine width of a browser's scrollbar, which
 * can vary from browser to browser and device to device.
 *
 * @category           Utility
 * @package            blocs
 * @author             John C. Scott <jcscott@scottcomm.com>
 * @copyright          2022 John C. Scott, Scott Communications
 * @license            https://opensource.org/licenses/MIT MIT
 * @see {@link https://davidwalsh.name/detect-scrollbar-width/}
 * @example
 * // Get the scrollbar dimension.
 * import scrollbarWidth from './blocs/scrollbarWidth';
 * // Set a custom CSS property with the calculated scrollbar width.
 * window.addEventListener('resize', () => {
 *   // Set a custom CSS property with the calculated scrollbar width.
 *   document.documentElement.style.setProperty('--scroll-bar-width',`${scrollbarWidth()}px`);
 * });
 */

/**
 * @description Determine width of a browser's scrollbar, which
 * can vary from browser to browser and device to device.
 *
 * @returns number
 */
const scrollbarWidth = (): number => {
	// Create a temporary div container and append it into the body
	const scrollDiv = document.createElement('div');
	scrollDiv.style.overflow = 'scroll';
	document.body.appendChild(scrollDiv);

	// Add ad fake div inside the container
	const scrollDivInner = document.createElement('div');
	scrollDiv.appendChild(scrollDivInner);

	const scrollbarWidth =
		scrollDiv.offsetWidth - scrollDivInner.offsetWidth;
	document.body.removeChild(scrollDiv);

	return scrollbarWidth;
};

export default scrollbarWidth;
