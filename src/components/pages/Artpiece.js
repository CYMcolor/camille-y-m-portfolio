import React, { useState } from 'react';
export default function Work({data}) {

  const gitStyle = {
    width: '3rem',
    margin: '8px'
  };

  return (
    <div className='artpiece-card'>
      <h3>  {data.name} </h3>
      <p>{data.description} </p>
      <img className='artpiece' src={data.img} alt={data.alt} />
    </div>
  );
}