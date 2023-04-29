import React from 'react';
import {Link} from "react-router-dom";
import MyResume from './Kirthi Nandi Resume.pdf';
import flowerImg from './flower.png';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();

    function handleClick()  {
        window.open("https://www.linkedin.com/in/kirthi-nandi/", "_blank");
      }
    
      function handleGithub() {
        window.open("https://github.com/kirthinandi", "_upblank");
      }
    
      function handleBlog() {
        window.open("https://dev.to/kirthinandi", "_blank");
      }
    
      function openResume() {
        window.open(MyResume);
      }

      function handleLogoClick() {
        navigate('/');
      }

    return (
        <div className="home">
            <nav className="navBar">
                <div className="logo">
                  <img src={flowerImg} alt="logo" onClick={handleLogoClick}/>
                  <h1 className="backToLP" onClick={handleLogoClick}>Kirthi Nandi</h1>
                </div>
                <Link to="/home" className="homeLink">Home </Link>
                <Link to="/about" className="links">About </Link>
                <Link to="/projects" className="links">Projects </Link>
                <Link to="/contact" className="links">Contact </Link>
            </nav>
            <button onClick={openResume}>Resume</button>
            <button onClick={handleClick}>LinkedIn</button>
            <button onClick={handleGithub}>Github</button>
            <button onClick={handleBlog}>Blog</button>
            <p>kirthi.nandi@gmail.com</p>
         </div>
    )
}