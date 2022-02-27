/**
 * @description Component that styles a progressively loading image.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 * @see {@link https://github.com/juliencrn/react-gallery/}
 *
 * @requires     NPM:react
 * @requires     NPM:react.CSSProperties
 * @requires     ../../hooks/useImageOnLoad
 *
 * @module ProgressiveImage
 */
import React, { CSSProperties } from 'react';
import useImageOnLoad from '../../hooks/useImageOnLoad';

export interface ProgressiveImageProps {
	url?: string;
	thumbUrl?: string;
	alt?: string;
	className?: string;
	isVisible: boolean;
}

const ProgressiveImage = ({
	url = '',
	thumbUrl = '',
	alt = '',
	className = '',
	isVisible
}: ProgressiveImageProps) => {
	const { handleImageOnLoad, css } = useImageOnLoad();

	const imageStyle: CSSProperties = {
		objectFit: 'cover',
		position: 'absolute'
	};

	return (
		<>
			{isVisible && (
				<>
					<img
						style={{ ...css.thumbStyle, ...imageStyle }}
						data-testid="thumb-image"
						src={thumbUrl}
						alt={alt || ''}
						className={className || ''}
					/>
					<img
						onLoad={handleImageOnLoad}
						style={{ ...css.fullImageStyle, ...imageStyle }}
						data-testid="regular-image"
						src={url}
						alt={alt || ''}
						className={className || ''}
					/>
				</>
			)}
		</>
	)
}

export default ProgressiveImage;