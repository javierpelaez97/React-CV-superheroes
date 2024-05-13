import { useState } from 'react'
import './App.css'
import Hero from "./components/hero/Hero";
import Education from "./components/education/Education"
import About from "./components/about/About"

import {CV} from "./CV/CV"

const {hero, education, experience, languages, habilities, volunteer } = CV  /* Aqui hemos hecho un destructuring del componenete CV para tener el código mas limpio */

function App() {
  return (
    
      <div>
        <Hero hero={hero}></Hero>
        <About about = {hero.aboutMe}></About>
        <Education education ={education}></Education>
      </div>
    
    

    
    
    
  )
}

export default App
