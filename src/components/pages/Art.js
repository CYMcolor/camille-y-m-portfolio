import React from 'react';

import Artpiece from './Artpiece'
export default function Art() {
  const artpieces = [
    { 
        name: 'Apple',
        img: require('../../assets/images/art-gallery/apple.png'),
        alt: "apple",
    },
    { 
        name: 'Scratch Spook Loop',
        description: 'Scratch from The Ghost and Molly McGee',
        img: require('../../assets/images/art-gallery/scratchspook3.gif'),
        alt: "Scratch the ghost is morphing into a scary version of himself",
    },
    { 
        name: 'Best Friend Lights',
        img: require('../../assets/images/art-gallery/mollylights.png'),
        description: 'Molly and Scratch from The Ghost and Molly McGee',
        alt: "Scratch the ghost resting on Molly McGee's head while enjoying pretty lights",
    },
    { 
        name: 'Cougar',
        img: require('../../assets/images/art-gallery/cougar.png'),
        alt: "Black and white drawing of a cougar",
    },
    { 
        name: 'Dancing Duo',
        img: require('../../assets/images/art-gallery/dancing-duo.png'),
        alt: "Black and white drawing of a woman and man dancing",
    },
    { 
        name: 'Looming Dragon',
        img: require('../../assets/images/art-gallery/dragon.png'),
        alt: "A giant dragon looming over a tower",
    },
    { 
        name: 'Horse Four',
        img: require('../../assets/images/art-gallery/horse-four.png'),
        alt: "Dour different horses: a pegasus, a unicorn, a normal hors, and a hippocampus",
    },
    
    
  ];

  return (
    <div className='page'>
      <h2>Art Gallery</h2>
      <div className='boxwrapper'>
        <div className='boxes'>
          {
            artpieces.map((artpiece) => (
              <Artpiece data={artpiece} />
          ))}
        </div>
      
      </div>
      
    </div>
  );
}
