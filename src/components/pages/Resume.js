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
        <h3>Summary</h3>
        <p>
          A web developer that wants to obtain valuable working experience while working in the information technology field and gaining knowledge of the IT business. Earned a computer science bachelor’s degree and a certificate in Full Stack Development from Rice University. Known to be attentive and eager to find solutions to unique problems and aim to create projects that will be intuitive for the users.
        </p>
        <h3>Skills</h3>
        <ul>

          <li>HTML</li>
          <li>CSS</li>
          <li>MtSQL</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Node</li>
          <li>Express</li>
          <li>React</li>
          <li>React</li>
          <li>C++</li>
          <li>Python</li>
          <li>Digital Art</li>
          <li>Video Editing</li>
        </ul>

        <h3>Projects</h3>
        
        <p>
          <b>Headhunter</b> | Github:  https://github.com/Willigrvy/HeadHunter | Team leader in charge of the overall design and delegated roles to other members. It Is a website that allows headhunters to post jobs and view the candidates that applied to their jobs. Candidates can also view a job list and apply to any job a headhunter has posted. The site is a full stack using MySQL, Node.js, Express, Sequelize, and many other tools. 
        </p>

        <p>
          <b>Workout Tracker</b> | Github: https://github.com/reflexson/workout-tracker | Front end designer in a team project using the MERN structure using MongoDB, React, Express, Node.js and other tools. Helps the user log and track the max reps of exercises and displays the progress with a line graph.
        </p>

        <p>
          <b>Weather Dashboard</b> | Github: https://github.com/CYMcolor/Weather-Dashboard | A solo project where the user can search a city and it will show the current weather of the location on the main card and the next five days below. It was created using the OpenWeather API, HTML/CSS, and JavaScript.
        </p>

        <h3>Education</h3>
        <p> Computer Science Major | University of Houston |2017 – 2021 | 3.343 GPA </p>
        <p> Mathematics Minor | University of Houston | 2017 - 2021 | Houston, Texas </p>
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
        
        

        <h3>Interests	</h3>
        <ul>
          <li>Digital Art</li>
          <li>Animation</li>
          <li>Videogames</li>
        </ul>

      </section>
      
    </div>
  );
}
