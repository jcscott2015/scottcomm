/**
 * @description Contact featurette for Scott Communications web site.
 * @author John C. Scott
 * @copyright 2022 John C. Scott, Scott Communications
 * @license https://opensource.org/licenses/MIT MIT
 *
 * @requires     NPM:react
 * @requires     ./Contact.scss
 * @requires     ../../components/featurette/Featurette
 * @requires     ../../blocs/obfuscator
 *
 * @module Contact
 */
import React from 'react';
import Featurette from '../../components/featurette/Featurette';
import './Contact.scss';
import { decodeStr } from '../../blocs/obfuscator';

export const Contact = () => {
  const googleMap = (
    <div className="featurette-map map-responsive center-block">
      <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.203789724866!2d-117.16553368481908!3d32.73377898098515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954b7bf8d9a1d%3A0xe489c601d7c609ba!2s2710+2nd+Ave%2C+San+Diego%2C+CA+92103!5e0!3m2!1sen!2sus!4v1489450088563" width="400" height="300" frameBorder="0" allowFullScreen></iframe>
    </div>
  );

  return (
    <Featurette
      id="contact"
      className="contact"
      mediaContent={googleMap}
      contentHeader={<h2>Located in Downtown <span>San Diego</span></h2>}
    >
      {decodeStr('address', '=beesftt?=q?3821!3oe!Bwfovf-!$F2=cs0?Tbo!Ejfhp-!Dbmjgpsojb=cs0?:3214=0q?=q?=b!isfg>#nbjmup;kdtdpuuAtdpuudpnn/dpn#!ujumf>#Tfoe!bo!Fnbjm!up!Kpio!D/!Tdpuu#?kdtdpuuAtdpuudpnn/dpn=0b?=0q?=q?72:!848.8245!Npcjmf=cs0?969!987.92:8!Pggjdf=0q?=0beesftt?')}
    </Featurette>
  );
}

export default Contact;
