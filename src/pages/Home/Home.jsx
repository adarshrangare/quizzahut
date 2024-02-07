import React from 'react'
import Developers from './sections/Developers'
import {HeroSection }from './sections/HeroSection'
import Quizes from './sections/Quizes'

const Home = () => {
  return (
    <div className='container'>
      
      <HeroSection/>
      <Quizes/>
      <Developers/>
    
    </div>
  )
}

export default Home