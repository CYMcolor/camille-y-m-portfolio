import React from 'react';
import signature from '../assets/images/signaturev3.png'
import feather from '../assets/images/feather.png'

export default function Footer() {

  return (
    <footer className='footer'>
      <img src={feather} id="feather" alt="brown feather"></img>
      <img src={signature} id="signature" alt="Camille MacLaren' Signature"></img>
      
      <ul>
        <li>Email: camillemaclaren@gmail.com</li>
        <li>Phone: 713-205-3561</li>
        <li>LinkedIn:&nbsp; <a href="https://www.linkedin.com/in/camille-maclaren-161803">camille-maclaren-161803</a></li>
        <li>Github:&nbsp; <a href="https://github.com/CYMcolor">github.com/CYMcolor</a></li>
      </ul> 
    </footer>
  );
}
