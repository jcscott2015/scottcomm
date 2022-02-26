/**
 * @description Component that styles a progressively loading image.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 * @see {@link https://github.com/juliencrn/react-gallery/}
 *
 * @requires     NPM:react
 * @requires     NPM:react.CSSProperties
 * @requires     ../no-image/NoImage
 * @requires     ../../hooks/useImageOnLoad
 * @requires     ./ProgressiveImage.scss
 *
 * @module ProgressiveImage
 */
import React, { CSSProperties } from 'react';
import './ProgressiveImage.scss';
import NoImage from '../no-image/NoImage';
import useImageOnLoad from '../../hooks/useImageOnLoad';

export interface ProgressiveImageProps {
	url?: string;
	thumbUrl?: string;
	alt?: string;
	className?: string;
	onImgClick?: React.MouseEventHandler<HTMLImageElement>;
	isVisible: boolean;
}

const ProgressiveImage = ({
	url = '',
	thumbUrl = '',
	alt = '',
	className = '',
	onImgClick,
	isVisible
}: ProgressiveImageProps) => {
	const { handleImageOnLoad, css } = useImageOnLoad({ filter: 'saturate(0)' });

	const imageStyle: CSSProperties = {
		objectFit: 'cover',
		position: 'absolute'
	};

	const canLoad = isVisible && url && thumbUrl;

	return (
		<>
			{canLoad ? (
				<>
					<img
						style={{ ...css.thumbStyle, ...imageStyle }}
						data-testid="thumb-image"
						src={thumbUrl}
						alt={alt || ''}
						className={className || ''}
						onClick={() => (onImgClick ? onImgClick : null)}
					/>
					<img
						onLoad={handleImageOnLoad}
						style={{ ...css.fullImageStyle, ...imageStyle }}
						data-testid="regular-image"
						src={url}
						alt={alt || ''}
						className={className || ''}
						onClick={() => (onImgClick ? onImgClick : null)}
					/>
				</>
			) : (
				<div className={`noimage-wrapper ${className || ''}`}>
					<NoImage />
				</div>
			)}
		</>
	)
}

export default ProgressiveImage;