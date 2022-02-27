/**
 * @description No Image Icon.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     ./NoImage.scss
 *
 * @module NoImage
 */

import './NoImage.scss';

const NoImage = () => {
	return (
		<div className="noimage-wrapper">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" width="100%" height="100%" fill="currentColor" className="noimage"><path d="m12.75 13.013 2.557 2.004H3.957c-1.078 0-1.976-.896-1.976-2.004V4.574l6.705 5.253-.521.777-1.017-1.396a.5.5 0 0 0-.809 0l-2.192 3.009a.5.5 0 0 0 .404.794zm6.963 1.646a.75.75 0 0 1-.925 1.182L.29 1.343a.75.75 0 1 1 .926-1.18l1.56 1.223c.332-.25.74-.398 1.18-.398h12.027c1.135 0 2.006.896 2.006 2.005v10.02c0 .096-.008.188-.021.28zm-4.54-3.557L11.919 6.22a.504.504 0 0 0-.417-.223.474.474 0 0 0-.417.25L10.36 7.33ZM4.944 3.086l2.01 1.574A1.503 1.503 0 0 0 5.46 2.99c-.178 0-.352.034-.515.096z" /></svg>
		</div>
	);
};

export default NoImage;
