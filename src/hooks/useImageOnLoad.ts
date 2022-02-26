/**
 * @description Hook that styles loading images.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 * @see {@link https://usehooks-ts.com/react-hook/use-image-on-load}
 *
 * @requires     NPM:react.CSSProperties
 * @requires     NPM:react.useState
 *
 * @module useImageOnLoad
 */
import { CSSProperties, useState } from 'react';

interface ImageStyle {
	thumbStyle: CSSProperties;
	fullImageStyle: CSSProperties;
}

interface ImageOnLoadType {
	handleImageOnLoad: () => void;
	css: ImageStyle;
}

export interface IImageOnLoadProps {
	filter?: string;
}

const useImageOnLoad = (props?: IImageOnLoadProps): ImageOnLoadType => {
	const filter = (props?.filter !== undefined) ? props?.filter : 'blur(8px)';
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	// Triggered when full image will be loaded.
	const handleImageOnLoad = () => {
		setIsLoaded(true);
	}

	const css: ImageStyle = {
		// thumbnail default style.
		thumbStyle: {
			visibility: isLoaded ? 'hidden' : 'visible',
			filter: filter,
			transition: 'visibility 0ms ease-out 500ms',
		},
		// Full image default style.
		fullImageStyle: {
			opacity: isLoaded ? 1 : 0,
			transition: 'opacity 500ms ease-in 0ms',
		},
	}

	return { handleImageOnLoad, css };
}

export default useImageOnLoad;
