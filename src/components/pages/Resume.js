import React from 'react';
import  resume from '../../assets/resume.docx'
export default function Resume() {
  return (
    <div className='page'>
      <h2>Resume</h2>
      <a href={resume} download="Camille-Resume" target='_blank'>
        <button className='btn btn-success'>
          Download Resume
        </button>
      </a>
      <section>
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
      
      RTF Film & Media Camp | University of Texas |2016
      •	Animation Camp | Produced an independent short animated film. 

      Computer Science Major | University of Houston
      •	COSC 1430 Introduction to Programming |Created a program which encrypted messages of the users which could only be transcribed by giving permission with an encryption key. Also learned the basics to make simple applications using Java swing.
      •	COSC 4531 Fundamental of Software Engineering| Worked with a team to create a portal website and was in charge of the front-end design.  
      •	COSC 3360 Fundamental of Operating Systems | Created a server and client program using sockets.
      On-Call Work | Customer Service and Babysitting|2014 – 2020
      •	Snobunny Snoballs| Learned to cooperate with a team in order to efficiently provide to customers the product in a timely manner.
      •	Babysitting | Guided siblings to communicate effectively and make reasonable compromises to satisfy both parties involved.
      Volunteering | Emergency Aid Coalition|2015 – 2020
      •	Food Services | Made an efficient system to enhance the speed of lunch assembly and optimize work area for the volunteers.
      •	Clothing Services | Reorganized the area to be easier to find specific articles of clothing which increased space of smaller storage rooms.
      

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
//target attribute tells where to open downloaded document