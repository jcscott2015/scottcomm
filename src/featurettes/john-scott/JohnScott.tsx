/**
 * @description John Scott featurette for Scott Communications web site.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     NPM:react.useRef
 * @requires     ../../hooks/useIntersectionObserver
 * @requires     ../../components/featurette/Featurette
 * @requires     ../../components/progressive-image/ProgressiveImage
 * @requires     ./JohnScott.scss
 * @requires     ./me.jpg
 * @requires     ./me-thumbnail.jpg
 *
 * @module JohnScott
 */
import React, { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Featurette from '../../components/featurette/Featurette';
import ProgressiveImage from '../../components/progressive-image/ProgressiveImage';
import './JohnScott.scss';
import me from './me.jpg';
import meThumbnail from './me-thumbnail.jpg';

export interface IJohnScottProps {
  // id: string;
  // className?: string;
  // mediaContent: React.ReactNode;
  // contentHeader: React.ReactNode;
  // children: React.ReactNode;
};

export const JohnScott = (props: IJohnScottProps) => {
  interface ILinks {
    href: string;
    title: string;
    text: string;
  }
  const links: ILinks[] = [
    {
      href: 'resumes/jcscott.pdf',
      title: 'Download Current PDF Résumé',
      text: 'Résumé'
    },
    {
      href: 'https://www.linkedin.com/in/johnscott/',
      title: 'LinkedIn Profile',
      text: 'LinkedIn Profile'
    },
    {
      href: 'https://github.com/jcscott2015/',
      title: 'GitHub',
      text: 'GitHub'
    }
  ];

  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { freezeOnceVisible: true });

  return (
    <Featurette
      id="about"
      className="johnscott"
      mediaContent={(
        <div ref={ref}>
          <ProgressiveImage
            url={me}
            thumbUrl={meThumbnail}
            alt="John C. Scott"
            isVisible={Boolean(!!entry?.isIntersecting)} />
        </div>
      )}
      contentHeader={<h2>John C. Scott <small>Principal</small></h2>}
    >
      <>
        <p>10+ years experience in web application development, image and graphics production, and pre-press design and layout. Mass Communication / Print Journalism major from Emerson College in Boston, migrated to digital publishing when journalism jobs dried up. Still inquisitive and maintains skills current with the state of the art.</p>
        {links.map((v, i) => (
          <p key={i}>
            <a href={v.href} title={v.title}>{v.text}</a>
          </p>
        ))}
      </>
    </Featurette>
  );
}

export default JohnScott;
