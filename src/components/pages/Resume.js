import React from 'react';
import  resume from '../../assets/resume.docx'
export default function Resume() {
  //target attribute tells where to open downloaded document
  return (
    <div className='page'>
      <h2>Resume</h2>
      {/* <a href={resume} download="Camille-Resume" target='_blank' rel="noreferrer">
        <button className='btn btn-success'>
          Download Resume
        </button>
      </a> */}
      <section>
        <br/>
        <div>
          <h3>Summary</h3>
          <p>
          A dedicated full stack developer that earned a computer science bachelor’s degree and a certificate in Full Stack Development. Experience with teamwork, planning, and problem solving. Known to have great attention to detail and can create intuitive designs for the users. Ability to adapt to new technologies and eagerness to find solutions to problems in a team environment.
          </p>
          <h3>Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>MtSQL</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>React.js</li>
            <li>C++</li>
            <li>Python</li>
            <li>Digital Art</li>
            <li>Video Editing</li>
          </ul>
        </div>
        
        <div>
          <h3>Projects</h3>
          
          <p>
            <b>Headhunter</b> | Github:  https://github.com/Willigrvy/HeadHunter 
            <ul>
              <li>Team leader, overall design, frontend and backend</li>
              <li>It Is a website that allows headhunters to post jobs and view the candidates that applied to their jobs</li>
              <li>Candidates can also view a job list and apply to any job a headhunter has posted</li>
              <li>Uses MySQL, Node.js, Express, Sequelize, and other tools</li>
            </ul>
          </p>

          <p>
            <b>Workout Tracker</b> | Github: https://github.com/reflexson/workout-tracker 
            <ul>
              <li>Frontend designer</li>
              <li>Uses MongoDB, React, Express, Node.js and other tools</li>
              <li>Helps the user log and track the max reps of exercises and displays the progress with a line graph</li>
            </ul>
          </p>

          <p>
            <b>Weather Dashboard</b> | Github: https://github.com/CYMcolor/Weather-Dashboard
            <ul>
              <li>A solo project </li>
              <li>Uses OpenWeather API, HTML/CSS, and JavaScript</li>
              <li>The user can search a city and it will show the current weather of the location on the main card and the next five days below</li> 
            </ul>
          </p>
        </div>

        <div>
          <h3>Experience</h3>
            <p>
              <b>Snobunny Snoballs | 2014 – 2020 | Houston, Texas </b>
              <ul>
                  <li>Received orders, made snoballs, and handled cashier duties </li>
                  <li>Cooperated with a team to provide customers with the product in a timely manner</li>.
              </ul>
            </p>
            <p>
              <b>Babysitting/Pet Sitting  | 2014 – 2022 | Houston, Texas </b>
              <ul>
                <li> Guided siblings to communicate effectively and make reasonable compromises</li>
                <li>Maintained a schedule to ensure the clients' pets were properly fed and taken out</li>
              </ul>
            </p>
            <p>
              <b>Volunteering | Emergency Aid Coalition | 2015 – 2020 | Houston, Texas </b>
              <ul>
                <li>Made an efficient system to enhance the speed of lunch assembly</li>
                <li>Reorganized the clothing area to make it easier to find specific articles of clothing</li>
                <li>Occasionally took the lead position for organizing inventory for events</li>
              </ul>
            </p>
        </div>
        
        <div>
          <h3>Education</h3>
          <p>Full Stack Bootcamp Certificate| Rice University | 2023 | Houston, Texas </p>
          <p>Bachelor’s Degree in Computer Science Major, Mathematics Minor | University of Houston |  2017 - 2021 | 3.343 GPA | Houston, Texas </p>
        </div>
        
      </section>
      
    </div>
  );
}
