import React from 'react'
import '../static/Home.css'
import HomeImage from '../assets/man-running-double-color-exposure-effect.jpg'

const Home = () => {

  return (
    <div>
      <div className="overlay"></div>
          <h1> Run Hard or Go Home </h1>
           <img src={HomeImage} alt={HomeImage} />

    </div>
  )
}

export default Home