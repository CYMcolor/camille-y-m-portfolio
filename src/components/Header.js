import React, { useState } from 'react';
import Nav from './Nav';
export default function Header({ currentPage, handlePageChange }) {

  return (
    <header className='header'>
      <h1>Camille MacLaren</h1>  
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
    </header>
  );
}
