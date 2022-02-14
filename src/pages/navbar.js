import React from 'react'
import './navbar.css'

function navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-heading'>
           <a href="/"><h2>Resume Builder</h2></a> 
        </div>
        <div className='navbar-tabs'>
                <a href="Create CV">Create CV</a>
                <a href="Template">Template</a>
                <a href="Login/Sign-up">Login/Sign-up</a>   
        </div>
    </nav>
  )
}

export default navbar