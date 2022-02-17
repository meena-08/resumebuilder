import React from 'react'
import './LandingPage.css'
import {useNavigate} from 'react-router-dom';

function LandingPage() {

    const navigate = useNavigate();
    function handleClick(){
        navigate("/personaldetails");
    }

  return (
    <div className='landing'>
        <div className='up-landing'>
            <div className='heading'>
                <h1>Create your professional CV online with CV Builder</h1>
            </div>
        </div>
        <div className='down-landing'>
            <div className='para'>
                <p>Create your very own professional CV and download it within 15 minutes.</p>
            </div>
            <button onClick={handleClick}>Create CV</button>
        </div>
    </div>
  )
}

export default LandingPage