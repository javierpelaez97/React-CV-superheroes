import { useState } from 'react'
import './App.css'
import Hero from "./components/hero/Hero";
import Education from "./components/education/Education"
import About from "./components/about/About"
import Experience from './components/experience/Experience';
import More from './components/more/More';

import {CV} from "./CV/CV"

const {hero, education, experience, languages, habilities, volunteer } = CV  /* Aqui hemos hecho un destructuring del componenete CV para tener el código mas limpio */

function App() {
  return (
    
      <div>
        <Hero hero={hero}></Hero>
        <About hero = {hero.aboutMe}></About>
        <button>Education</button>
        <button>Experience</button>
        <Education education ={education}></Education>
        <Experience experience = {experience}></Experience>
        <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
        ></More>

      </div>
    
    

    
    
    
  )
}

export default App
