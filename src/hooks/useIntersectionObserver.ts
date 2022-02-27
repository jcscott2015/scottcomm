/**
 * @description Hook that lazy loads images.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 * @see {@link https://usehooks-ts.com/react-hook/use-intersection-observer}
 * @see {@link https://dev.to/shubhamreacts/progressively-loading-images-in-react-40lg}
 * @see {@link https://dev.to/shubhamreacts/progressively-loading-images-in-react-40lg}
 *
 * @requires     NPM:react.RefObject
 * @requires     NPM:react.useEffect
 * @requires     NPM:react.useState
 *
 * @module useIntersection
 */
import { RefObject, useEffect, useState } from 'react';

interface Args extends IntersectionObserverInit {
	freezeOnceVisible?: boolean;
}

const useIntersectionObserver = (
	elementRef: RefObject<Element>,
	{
		threshold = 0,
		root = null,
		rootMargin = '0%',
		freezeOnceVisible = true, // Once visible, don't repeat interaction effect.
	}: Args,
): IntersectionObserverEntry | undefined => {
	const [entry, setEntry] = useState<IntersectionObserverEntry>();
	const frozen = entry?.isIntersecting && freezeOnceVisible;

	const updateEntry = ([entry]: IntersectionObserverEntry[]) => {
		setEntry(entry);
	};

	useEffect(() => {
		const node = elementRef?.current; // DOM Ref
		const hasIOSupport = !!window.IntersectionObserver;

		if (!hasIOSupport || frozen || !node) return;

		const observer = new IntersectionObserver(
			updateEntry,
			{ threshold, root, rootMargin }
		);
		observer.observe(node);

		return () => observer.disconnect();
	}, [elementRef, threshold, root, rootMargin, frozen]);

	return entry;
}

export default useIntersectionObserver;
