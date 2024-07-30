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
          <img className='git' src={gitHub} style={gitStyle} alt='Github Link' />
        </a>
        <p className='description'>{data.description}</p>
      </h3>
      { data.url ? (
        <a href={data.url}>
          <img className='thumbnail hasLink' src={data.img} alt={data.alt}/>
        </a>
      ) : (
        <img className='thumbnail noLink' src={data.img} alt={data.alt}/>
      )}
    </div>
  );
}