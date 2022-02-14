import React from 'react'
import Navbar from './navbar'
import './homepage.css'

function homepage() {
  return (
    <div>
      <Navbar/>
      <div className='homepage'>
      <div className='hp'>
       <div className='homepage-heading'>
          <h4>Create your professional CV online with Resume Builder</h4>
        </div>
        <div className='homepage-subHeading'>
          <p>Create your very own professional Resume and download it within 15 minutes.</p>
        </div>
        <div className='homepage-button'>
          <button>Create Resume</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default homepage