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

	const imageWrapper: CSSProperties = {
		overflow: 'hidden',
		paddingBottom: '100%',
		position: 'relative',
		width: 'auto',
		height: 'auto'
	};

	const imageStyle: CSSProperties = {
		objectFit: 'contain', // maintain aspect ratio of thumbnail to full image
		position: 'absolute',
		width: '100%',
		height: '100%',
		maxWidth: '100%', // scale to maintain largest aspect ratio
		maxHeight: '100%', // scale to maintain largest aspect ratio
		top: '50%',
		left: '50%',
		transform: 'translateX(-50%) translateY(-50%)'
	};

	return (
		<>
			{isVisible && (
				<div style={{ ...imageWrapper }}>
					<img
						style={{
							...css.thumbStyle, ...imageStyle
						}}
						data-testid="thumb-image"
						src={thumbUrl}
						alt={alt || ''}
						className={className || ''}
					/>
					<img
						onLoad={handleImageOnLoad}
						style={{
							...css.fullImageStyle, ...imageStyle
						}}
						data-testid="regular-image"
						src={url}
						alt={alt || ''}
						className={className || ''}
					/>
				</div>
			)}
		</>
	)
}

export default ProgressiveImage;