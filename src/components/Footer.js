import React from 'react';
import signature from '../assets/images/signaturev3.png'
import feather from '../assets/images/feather.png'

export default function Footer() {

  return (
    <footer className='footer'>
      <img src={feather} id="feather" alt="brown feather"></img>
      <img src={signature} id="signature" alt="Camille MacLaren' Signature"></img>

    </footer>
  );
}
