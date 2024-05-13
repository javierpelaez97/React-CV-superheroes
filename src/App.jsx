import { useState } from 'react'
import './App.css'
import Hero from "./components/hero/Hero";

import {CV} from "./CV/CV"

const {hero, education, experience, languages, habilities, volunteer } = CV  /* Aqui hemos hecho un destructuring del componenete CV para tener el código mas limpio */

function App() {
  return (
    
      <div>
        <Hero hero={hero}></Hero>
      </div>
    
    

    
    
    
  )
}

export default App
