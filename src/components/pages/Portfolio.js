import React from 'react';

import Work from './Work'
export default function Portfolio() {
  const works = [
    { 
      name: 'SeaScribe',
      url: 'https://seascribe.netlify.app/',
      description: 'Journaling app with random prompts and a todo list',
      img: require('../../assets/images/cards/seascribe.PNG'),
      alt: "screen of computer code",
      git: 'https://github.com/cherryontech/comet-cruisers-spring2024'
    },
    {
      name: 'Workout Tracker',
      url: '',
      description: 'Records the max reps for workouts and see the progress thorugh a graph',
      img: require('../../assets/images/cards/gym-pic-1.png'),
      alt: "a man curling dumbells",
      git: 'https://github.com/reflexson/workout-tracker'
    },
    {
      name: 'Web Hunters',
      url: '',
      description: 'A job board for both headhunters and candidates',
      img: require('../../assets/images/cards/fore-hire.jpg'),
      alt: "Red for hire sign",
      git: 'https://github.com/Willigrvy/HeadHunter'
    },
    { 
      name: 'Travel Agent App',
      url: 'https://coridane.github.io/travelagentapp/',
      description: 'Find hotels, restaurants, and attractions for any city',
      img: require('../../assets/images/cards/travel.PNG'),
      alt: "magnifiyng glass over the globe",
      git: 'https://github.com/Coridane/travelagentapp'
    },
    { 
      name: 'Tech Blog',
      url: '',
      description: '',
      img: require('../../assets/images/cards/code-image.jpg'),
      alt: "screen of computer code",
      git: 'https://github.com/CYMcolor/Tech-Blog'
    },
    { 
      name: 'Weather Dashboard',
      url: 'https://cymcolor.github.io/Weather-Dashboard/',
      description: 'View the forcast of any city for the next 5 days',
      img: require('../../assets/images/cards/rain.jpg'),
      alt: "rain on a body of water",
      git: 'https://github.com/CYMcolor/Weather-Dashboard'
    },
    { 
      name: 'Password Generator',
      url: 'https://cymcolor.github.io/Password-Generator-CYM/',
      description: '',
      img: require('../../assets/images/cards/code-image.jpg'),
      alt: "screen of computer code",
      git: 'https://github.com/CYMcolor/Password-Generator-CYM'
    },
    { 
      name: 'Coding Game Quiz',
      url: 'https://cymcolor.github.io/Game-Quiz-Coding-Edition/',
      description: 'Quick quiz to test simple coding knowledge',
      img: require('../../assets/images/cards/code-image.jpg'),
      alt: "screen of computer code",
      git: 'https://github.com/CYMcolor/Game-Quiz-Coding-Edition'
    },
    
  ];

  return (
    <div className='page'>
      <h2>Projects</h2>
      <div className='boxwrapper'>
        <div className='boxes'>
          {
            works.map((work) => (
              <Work data={work} />
          ))}
        </div>
      
      </div>
      
    </div>
  );
}
