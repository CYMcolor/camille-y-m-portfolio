import React, { useState } from 'react';

export default function Nav({ currentPage, handlePageChange }) {

  return (
    <nav className='nav'>
        <ul className="nav">
            <li className="nav-item">
                <a
                href="#about"
                onClick={() => handlePageChange('About')}
                >
                    About Me
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                >
                    Projects
                </a>
            </li>
            {/* <li className="nav-item">
                <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                >
                    Contact
                </a>
            </li> */}
            <li className="nav-item">
                <a
                href="#art"
                onClick={() => handlePageChange('Art')}
                >
                    Art Gallery
                </a>
            </li>
        </ul>
    </nav>
  );
}