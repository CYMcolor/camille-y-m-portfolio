import React, { useState } from 'react';
import signature from '../assets/images/signaturev3.png'
import feather from '../assets/images/feather.png'

export default function Footer() {

  return (
    <div className='footer'>
      
      <img src={signature} id="signature" alt="Camille MacLaren' Signature"></img>
      <img src={feather} id="feather" alt="brown feather"></img>
    </div>
  );
}
