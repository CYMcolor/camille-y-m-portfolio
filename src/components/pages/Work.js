import React, { useState } from 'react';

export default function Work({data}) {

  return (
    <div className='work'>
      <h3>{data.name}</h3>
      <a href={data.url}>
        <img src={data.img}/>
      </a>
      
    </div>
  );
}