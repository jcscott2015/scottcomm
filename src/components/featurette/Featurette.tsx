/**
 * @description Featurette page portion for Scott Communications web site.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     ./Featurette.scss
 *
 * @module Featurette
 */

import React from 'react';
import './Featurette.scss';

export interface IFeaturetteProps {
	id: string;
	className?: string;
	mediaContent: React.ReactNode;
	contentHeader: React.ReactNode;
	children: React.ReactNode;
};

export const Featurette = (props: IFeaturetteProps) => {
	const { id, className = '', mediaContent, contentHeader, children } = props;
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