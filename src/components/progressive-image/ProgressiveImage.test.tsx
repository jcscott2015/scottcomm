/**
 * @description Component that styles a progressively loading image.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 * @see {@link https://github.com/juliencrn/react-gallery/}
 *
 * @requires     NPM:react
 * @requires     NPM:@testing-library/react
 *
 * @module ProgressiveImage
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
//  import { axe } from 'jest-axe';

import ProgressiveImage from './ProgressiveImage';
import { ProgressiveImageProps } from './ProgressiveImage';

describe('ProgressiveImage', () => {
	const image: ProgressiveImageProps = {
		url: 'https://via.placeholder.com/1500',
		thumbUrl: 'https://via.placeholder.com/150',
		alt: 'text alt',
		isVisible: true,
	};

	test('when is loading', () => {
		render(<ProgressiveImage {...image} isVisible={false} />);
		expect(screen.queryByTestId('image')).not.toBeInTheDocument();
		expect(screen.queryByTestId('thumb-image')).not.toBeInTheDocument();
	});

	test('when is visible', async () => {
		render(<ProgressiveImage {...image} />);
		expect(screen.queryByTestId('regular-image')).toHaveProperty('src', image.url);
		expect(screen.queryByTestId('thumb-image')).toHaveProperty('src', image.thumbUrl);
	});

	//    test('has no accessibility violations', async () => {
	// 	 const { container } = render(<ProgressiveImage {...image} />);
	// 	 const results = await axe(container);

	// 	 expect(results).toHaveNoViolations();
	//    });
})