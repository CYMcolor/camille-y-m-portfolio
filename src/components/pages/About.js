import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5 } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  return (
    <div className='page about-page'>
      
      <div className='about-section card p-2'>
        <h2>About Me</h2>
        <p>
        I'm Camille MacLaren, a full stack web developer who can learn and adapt to anything I set my mind to.
        I learned that I enjoyed problem solving when I first learned coding in high school. 
        I pursued  my passion for coding by getting a Bachelor's degree in Computer Science. 
        Soon after I gained web developer experience form Rice University Bootcamps.      
        My main goal is to obtain valuable working experience while working in the information technology field and gaining knowledge of the IT business.
        </p>
        <p>
        I am experienced with many technologies including Python, C++, JavaScript, React, and Node. 
        In different projects I adapted well to the different requirements being used such a using SQL for one project
        and then using a document base NoSql for another.
        I'm a team player and can lead a team when needed. 
        With the Cherry On Tech Cohort I gained experience working with a cross functional team.
        </p>
        <p>
        My other interests lie in digital art, animation, and video games. 
        I always had a love for robot characters, so I joined the Houston Robotics group in hopes to make my own robot one day.
        </p>
      </div>
      
      <br/>
      <p> Contact: </p>
      <ul id='contact'> 
        <li>Email: camillemaclaren@gmail.com</li>
        <li>Phone: 713-205-3561</li>
        <li>LinkedIn:&nbsp; <a href="https://www.linkedin.com/in/camille-maclaren-161803" target="_blank" rel="noopener noreferrer">camille-maclaren-161803</a></li>
        <li>Github:&nbsp; <a href="https://github.com/CYMcolor" target="_blank" rel="noopener noreferrer">github.com/CYMcolor</a></li>
      </ul> 
      <FontAwesomeIcon icon={faJs}  size='3x' />
      <FontAwesomeIcon icon={faHtml5}  size='3x'/>
    </div>
  );
}
