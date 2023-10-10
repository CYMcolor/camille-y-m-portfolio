import React, { useState } from 'react';
import Nav from './Nav';
export default function Header({ currentPage, handlePageChange }) {

  return (
    <div className='header'>
      <h1>Camille MacLaren</h1>  
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
  );
}
