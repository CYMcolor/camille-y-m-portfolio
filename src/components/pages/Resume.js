import React from 'react';
import  resume from '../../assets/resume.docx'
export default function Resume() {
  //target attribute tells where to open downloaded document
  return (
    <div className='page'>
      <h2>Resume</h2>
      <a href={resume} download="Camille-Resume" target='_blank' rel="noreferrer">
        <button className='btn btn-success'>
          Download Resume
        </button>
      </a>
      
      <section>
        <br/>
        <h3>OBJECTIVE</h3>
        <p>
          Obtain valuable working experience while working in the information technology field and gaining knowledge of the IT business.
        </p>
        <h3>EDUCATION</h3>
        Computer Science Major | University of Houston |2017 – 2021 | 3.343 GPA
        <ul>
          <li>COSC 2440 Computer Organization & Architecture</li>
          <li>COSC 3340 Algorithms & Data Structures</li>
          <li>MATH 4315 Graph Theory with Applications</li>
          <li>COSC 3340 Introduction to Automata & Computability </li>
          <li>COSC 3360 Operating Systems</li>
          <li>COSC 2430 Programming & Data Structures </li>
          <li>COSC 4393 Digital Image Processing</li>
          <li>COSC 4324 Entrepreneurship for CS</li>
          <li>COSC 3880 Design of File & Database Systems</li>
          

        </ul>
        
        <h3>SKILLS</h3>
        <ul>
          <li>Java</li>
          <li>C++</li>
          <li>Python</li>
          <li>Digital Art</li>
          <li>Video Editing</li>
        </ul>

        <h3>INTERESTS	</h3>
        <ul>
          <li>Digital Art</li>
          <li>Animation</li>
          <li>Videogames</li>
        </ul>

      </section>
      
    </div>
  );
}
