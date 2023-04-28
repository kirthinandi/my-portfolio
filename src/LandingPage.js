import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function LandingPage() {
    const navigate = useNavigate();
    
    function handleClick() {
        navigate('/home');
    }

    return (
       <div className='landingPage'>
            <h1 className="hello">Hello!</h1>
            <p className="name">I'm Kirthi Nandi.</p>
            <p className="jobTitle">A Fullstack Software Engineer</p>
            <button className="landingButton" onClick={handleClick}>ENTER</button>
       </div>
    )
}