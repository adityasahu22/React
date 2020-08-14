import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Skills from './components/Skills'
import Hobby from './components/Hobby'
import Bio from './components/Bio'


function App() {
  return (
    <div>
    <Bio name = "Aditya Sahu"> 
    <p>Focused and quick-learning Software Engineer with 3 years of experience in computer science, programming, and UX design for various projects and clients.</p>
    </Bio>

    <Skills>
      <ol>
        <li>Python</li>
        <li>Html</li>
        <li>Css</li>
      </ol>
    </Skills>
    <Hobby>

    <ol>
        <li>Travel</li>
        <li>Trekking</li>
        <li>Photography</li>
      </ol>
    </Hobby>
      
    </div>
  );
}

export default App;
