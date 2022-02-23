/**
 * @description Hook function that runs an interval.
 * @author John C. Scott
 * @see {@link https://overreacted.io/making-setinterval-declarative-with-react-hooks/}
 *
 * @requires     NPM:react.useEffect
 * @requires     NPM:react.useLayoutEffect
 * @requires     NPM:react.useRef
 *
 * @module useInterval
 */

 import { useEffect, useRef } from 'react';

 /**
  * @description Hook function that runs a callback on an interval
  * with a set delay, and then clears the interval.
  * @function
  * @param {function} callback - callback function
  * @param {number} delay - milliseconds or null
  * @returns {function} clears interval
  *
  * @example
  * // Example demonstrates start and stop interval via useState.
  * import useInterval from '../hooks/useInterval';
  * const [delay, setDelay] = useState(1000);
  * const [isRunning, setIsRunning] = useState(true);
  * useInterval(() => {
  *     // Your custom logic here
  * }, isRunning ? delay : null);
  */
 const useInterval = (callback: () => void, delay: number | null) => {
   const savedCallback = useRef(callback);

   // Remember the latest callback.
   useEffect(() => {
	 savedCallback.current = callback;
   }, [callback]);

   // Set up the interval.
   useEffect(() => {
	 const tick = () => {
	   savedCallback.current();
	 };
	 if (delay !== null) {
	   let id = setInterval(tick, delay);
	   return () => clearInterval(id);
	 }
   }, [callback, delay]);
 };

 export default useInterval;
