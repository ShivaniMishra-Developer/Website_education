import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt='' className='about-img'/>
        <img src={play_icon} alt='' className='play-icon'/>

      </div>
      <div className="about-right">
        <h3>About Univercity</h3>
        <h2>Nurturing Tomorrow's Laeders Today</h2>
        <p>With a rich legacy of 40 years in fostering world-class academic excellence and over 100,000 alumni across the globe, MIT-WPU is one of the premier institutions of higher learning in India offering Undergraduate, Postgraduate, Diploma, and Ph.D. programmes.

</p>
<p>With a rich legacy of 40 years in fostering world-class academic excellence and over 100,000 alumni across the globe, MIT-WPU is one of the premier institutions of higher learning in India offering Undergraduate, Postgraduate, Diploma, and Ph.D. programmes.

</p>
<p>With a rich legacy of 40 years in fostering world-class academic excellence and over 100,000 alumni across the globe, MIT-WPU is one of the premier institutions of higher learning in India offering Undergraduate, Postgraduate, Diploma, and Ph.D. programmes.

</p>
      </div>

    </div>
  )
}

export default About
