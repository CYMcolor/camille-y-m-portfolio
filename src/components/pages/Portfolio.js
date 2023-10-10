import React from 'react';
import test from '../../assets/images/cards/fore-hire.jpg'

export default function Portfolio() {
  const works = [
    {
      name: 'Web Hunters',
      url: 'https://polar-eyrie-61739-9351be926493.herokuapp.com/',
      img: '../../assets/images/fore-hire.jpg',
      alt: "Red for hire sign"
    },
    { 
      name: 'Web Hunters',
      url: 'https://polar-eyrie-61739-9351be926493.herokuapp.com/',
      img: '../../assets/images/fore-hire.jpg',
      alt: "Red for hire sign"
    }
  ];

  return (
    <div>
      <h2>Portfolio</h2>
      <p className='other-work custom-card'>
        test image
        <img src={test}>
      </img>
      </p>
    </div>
  );
}
