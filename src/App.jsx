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
  const [showEducation, setShowEducation] = useState(true)
  return (
    
      <div className='background'>
        <Hero hero={hero}></Hero>
        <About hero = {hero.aboutMe}></About>
        <div className='custom-btn'>
          
          <button 
            className=' btn-4'
            onClick={()=> setShowEducation(true)}
            >Education
            </button>
              <button
              className=' btn-4'
              onClick={()=> setShowEducation(false)}>Experience</button>
        </div>
        
        <div>
          {showEducation ? (
            <Education education ={education}></Education>
          ):(
            <Experience experience = {experience}></Experience>
          )}
          
        </div>
        
        
        <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
        ></More>

      </div>
    
    

    
    
    
  )
}

export default App
