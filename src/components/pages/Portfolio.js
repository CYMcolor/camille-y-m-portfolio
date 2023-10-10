import React from 'react';

import Work from './Work'
export default function Portfolio() {
  const works = [
    {
      name: 'Web Hunters',
      url: 'https://polar-eyrie-61739-9351be926493.herokuapp.com/',
      img: require('../../assets/images/cards/fore-hire.jpg'),
      alt: "Red for hire sign"
    },
    { 
      name: 'Travel Agent App',
      url: 'https://coridane.github.io/travelagentapp/',
      img: require('../../assets/images/cards/travel.PNG'),
      alt: "magnifiyng glass over the globe"
    }
  ];

  return (
    <div className='page'>
      <h2>Portfolio</h2>
      {
        works.map((work) => (
          <Work data={work} />
      ))}
    </div>
  );
}
