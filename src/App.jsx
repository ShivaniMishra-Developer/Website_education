import React, { useState } from 'react'
import  './index.css'
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Program from './Component/Program/Program';
import Title from './Component/Title/Title';
import About from './Component/About/About';
import Campus from './Component/Campus/Campus';
import Testimonials from './Component/Testimonials/Testimonials';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import VideoPlayer from './Component/VideoPlayer/VideoPlayer';

const App = () => {
  const [playState,setPlayState] = useState(false);
  
  return (
    <div>
      <Navbar/>
      <Hero/> 
      <div className='container'>
      <Title subTitle='Our Program' title='what we offer'/>

      <Program/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallary' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What Student Says'/>
<Testimonials/>
<Title subTitle='Contact us' title='Getting in Touch'/>
<Contact/>
<Footer/>

      </div>
      {playState == true ?  <VideoPlayer playState={playState} setPlayState={setPlayState}/> : "" } 

      </div>
  )
}

export default App