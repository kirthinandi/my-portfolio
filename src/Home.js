import React, { useState } from 'react';
import {Link} from "react-router-dom";
import MyResume from './Kirthi Nandi Resume.pdf';
import flowerImg from './flower.png';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    const handleMenuClick = () => {
      setShowMenu(!showMenu);  /*everytime the navbar lines are clicked, it will set the show menu to the opposite of the original state of show menu (will set to true) */
    }

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
            <nav className="navbar">
                <div className="navbar__menu-icon" onClick={handleMenuClick}>
                  <div className="navbar__menu-icon__line"></div>
                  <div className="navbar__menu-icon__line"></div>
                  <div className="navbar__menu-icon__line"></div>
                </div>    
                <div className="logo">
                  <img src={flowerImg} alt="logo" onClick={handleLogoClick}/>
                  <h1 onClick={handleLogoClick}>Kirthi Nandi</h1>
                </div>
                <div className={`navbar__menu ${showMenu ? 'navbar__menu--show' : ''}`}>
                  <Link to="/home" className="links">Home </Link>
                  <Link to="/about" className="links">About </Link>
                  <Link to="/projects" className="links">Projects </Link>
                  <Link to="/contact" className="links">Contact </Link>
                </div>
            </nav>
            <button onClick={openResume}>Resume</button>
            <button onClick={handleClick}>LinkedIn</button>
            <button onClick={handleGithub}>Github</button>
            <button onClick={handleBlog}>Blog</button>
            <p>kirthi.nandi@gmail.com</p>
         </div>
    )
}