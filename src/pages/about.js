import React from 'react'
import './about.css'
import earth from '../images/earth.png'

const About = () => {
  return (
    <div className = "title">
        <h1>Ready</h1>
        <div className = "slogan">
          <h3> Learning English doesn't have to be tough. </h3>
          <div className = "problem">
            <h3>English is the most-spoken language in the world, and its influence can be found far and wide. Yet, to this day, there are still 781 million illiterate adults and 72 million children who will not be receiving their primary education. The lack of access to education is a crisis.</h3>
            <div className = "solution">
              <h3>But, it doesn't have to be that way. Ready is a platform that aims to make learning English accessible and make illiteracy a thing of the past. Users are able to learn the basic english alphabet, practice reading with the help of Red, our very own voice assistant, AND practice real-life speaking scenarios in english!</h3>
                <div className = 'earth'>
                  <img src={earth} alt='earth'></img>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About