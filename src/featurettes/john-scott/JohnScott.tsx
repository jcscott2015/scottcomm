/**
 * @description John Scott featurette for Scott Communications web site.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     NPM:react.useRef
 * @requires     ../../blocs/renderDomStr
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
import renderDomStr from '../../blocs/renderDomStr';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Featurette from '../../components/featurette/Featurette';
import ProgressiveImage from '../../components/progressive-image/ProgressiveImage';
import './JohnScott.scss';

export interface IJohnScottProps {
  // id: string;
  // className?: string;
  // mediaContent: React.ReactNode;
  // contentHeader: React.ReactNode;
  // children: React.ReactNode;
};

export const JohnScott = (props: IJohnScottProps) => {
  interface IImage {
    thumbUrl: string;
    url: string;
  }
  interface ILinks {
    href: string;
    title: string;
    text: string;
  }
  interface IJohnScott {
    title: string;
    desc: string;
    image: IImage;
    links: ILinks[];
  }

  const data: IJohnScott = {
    'title': '<h2>John C. Scott <small>Principal</small></h2>',
    'desc': '<p>10+ years experience in web application development, image and graphics production, and pre-press design and layout. Mass Communication / Print Journalism major from Emerson College in Boston, migrated to digital publishing when journalism jobs dried up. Still inquisitive and maintains skills current with the state of the art.</p>',
    'image': {
      thumbUrl: 'john-scott-img/john-scott-thumbnail.jpg',
      url: 'john-scott-img/john-scott.jpg'
    },
    'links': [
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
    ]
  };

  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {});

  return (
    <Featurette
      id="about"
      className="johnscott"
      mediaContent={(
        <div ref={ref}>
          <ProgressiveImage
            thumbUrl={data.image.thumbUrl}
            url={data.image.url}
            alt="John C. Scott"
            isVisible={Boolean(!!entry?.isIntersecting)} />
        </div>
      )}
      contentHeader={renderDomStr(undefined, data.title)}
    >
      <>
        {renderDomStr('p', data.desc)}
        {data.links.map((v, i) => (
          <p key={i}>
            <a href={v.href} title={v.title}>{v.text}</a>
          </p>
        ))}
      </>
    </Featurette>
  );
}

export default JohnScott;
