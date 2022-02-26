/**
 * @description John Scott featurette for Scott Communications web site.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     ./JohnScott.scss
 * @requires     ../../components/featurette/Featurette
 * @requires     ./me.jpg
 *
 * @module JohnScott
 */
import React from 'react';
import Featurette from '../../components/featurette/Featurette';
import './JohnScott.scss';
import me from './me.jpg';

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
	// const ref = useRef<HTMLDivElement | null>(null)
	// const entry = useIntersectionObserver(ref, { freezeOnceVisible: true });

	// const {
	// 	className = '',
	// 	href = '',
	// 	imageClassName = '',
	// 	imageSrc,
	// 	imageAlt,
	// 	itemCaptionClassName = '',
	// 	itemCaptionTitle,
	// 	itemCaption
	// } = props;

	// return (
	// 	<div ref={ref} className={`item ${className}`}>
	// 		<ProgressiveImage
	// 			className={imageClassName}
	// 			onImgClick={() => window.location.href = href}
	// 			url={imageSrc}
	// 			thumbUrl={imageSrc}
	// 			alt={imageAlt}
	// 			isVisible={Boolean(!!entry?.isIntersecting)} />
	// 		<div className={`carousel-caption ${itemCaptionClassName}`}>
	// 			{itemCaptionTitle}
	// 			{itemCaption}
	// 		</div>
	// 	</div>
	// );

  return (
    <Featurette
      id="about"
      className="johnscott"
      mediaContent={<img alt="John C. Scott" src={me} />}
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
