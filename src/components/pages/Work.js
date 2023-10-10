import React, { useState } from 'react';
import gitHub from '../../assets/images/GitHub_logo.png'
export default function Work({data}) {

  const gitStyle = {
    width: '3rem',
    margin: '8px'
  };

  return (
    <div className='work'>
      <h3>
        {data.name}
        <a href={data.git}>
          <img className='git' src={gitHub} style={gitStyle} />
        </a>
      </h3>
      
      <a href={data.url}>
        <img className='thumbnail' src={data.img} alt={data.alt}/>
      </a>
      
    </div>
  );
}