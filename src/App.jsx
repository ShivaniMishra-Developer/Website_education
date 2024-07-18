import React from 'react'
import  './index.css'
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Program from './Component/Program/Program';
import Title from './Component/Title/Title';
import About from './Component/About/About';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/> 
      <div className='container'>
      <Title subTitle='Our Program' title='what we offer'/>

      <Program/>
      <About/>
      </div>
      </div>
  )
}

export default App