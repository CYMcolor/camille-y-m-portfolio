import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
export default function Work({data}) {

  const gitStyle = {
    width: '3rem',
    margin: '8px'
  };

  return (
    <div className='work'>
      <h3>
        {data.name}        
      </h3>
      <p className='description'>{data.description}</p>
      <a href={data.git} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size='2x' />Github link 
      </a>
      
      { data.url ? (
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          <img className='thumbnail hasLink' src={data.img} alt={data.alt}/>
        </a>
      ) : (
        <img className='thumbnail noLink' src={data.img} alt={data.alt}/>
      )}
    </div>
  );
}