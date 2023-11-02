import React from 'react';

import Work from './Work'
export default function Portfolio() {
  const works = [
    {
      name: 'Workout Tracker',
      url: 'https://still-fortress-13697-122e1b6f4e62.herokuapp.com/',
      img: require('../../assets/images/cards/gym-pic-1.png'),
      alt: "a man curling dumbells",
      git: 'https://github.com/reflexson/workout-tracker'
    },
    {
      name: 'Web Hunters',
      url: 'https://warm-harbor-86414-ad2e9c539fba.herokuapp.com/',
      img: require('../../assets/images/cards/fore-hire.jpg'),
      alt: "Red for hire sign",
      git: 'https://github.com/Willigrvy/HeadHunter'
    },
    { 
      name: 'Travel Agent App',
      url: 'https://coridane.github.io/travelagentapp/',
      img: require('../../assets/images/cards/travel.PNG'),
      alt: "magnifiyng glass over the globe",
      git: 'https://github.com/Coridane/travelagentapp'
    },
    { 
      name: 'Tech Blog',
      url: 'https://thrmex-1e6a18238950.herokuapp.com/',
      img: require('../../assets/images/cards/code-image.jpg'),
      alt: "screen of computer code",
      git: 'https://github.com/CYMcolor/Tech-Blog'
    },
    { 
      name: 'Weather Dashboard',
      url: 'https://cymcolor.github.io/Weather-Dashboard/',
      img: require('../../assets/images/cards/rain.jpg'),
      alt: "rain on a body of water",
      git: 'https://github.com/CYMcolor/Weather-Dashboard'
    },
    { 
      name: 'Password Generator',
      url: 'https://cymcolor.github.io/Password-Generator-CYM/',
      img: require('../../assets/images/cards/code-image.jpg'),
      alt: "screen of computer code",
      git: 'https://github.com/CYMcolor/Password-Generator-CYM'
    },
    { 
      name: 'Coding Game Quiz',
      url: 'https://cymcolor.github.io/Game-Quiz-Coding-Edition/',
      img: require('../../assets/images/cards/code-image.jpg'),
      alt: "screen of computer code",
      git: 'https://github.com/CYMcolor/Game-Quiz-Coding-Edition'
    },
    
  ];

  return (
    <div className='page'>
      <h2>Portfolio</h2>
      <div className='boxes'>
        {
          works.map((work) => (
            <Work data={work} />
        ))}
      </div>
      
    </div>
  );
}
