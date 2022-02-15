/**
 * Featurette page portion for Scott Communications web site.
 *
 * @category           Page_Segment
 * @package            featurette
 * @author             John C. Scott <jcscott@scottcomm.com>
 * @copyright          2022 John C. Scott, Scott Communications
 * @license            https://opensource.org/licenses/MIT MIT
 * @link               http://www.scottcomm.com/
 */

import React from 'react';
import './Featurette.scss';

export interface IFeaturetteProps {
	id: string;
	className?: string;
	mediaContent: React.ReactNode;
	contentHeader:  React.ReactNode;
	children: React.ReactNode;
};

export const Featurette = (props: IFeaturetteProps) => {
	const { id, className = null, mediaContent, contentHeader, children } = props;
	return (
		<div id={id} className={`featurette ${className}`}>
			<div className="featurette-media-content">
				{mediaContent}
			</div>
			<div className="featurette-content">
				{contentHeader}
				{children}
			</div>
		</div>
	);
};

export default Featurette;