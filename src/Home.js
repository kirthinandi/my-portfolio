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

      function handleContact() {
        navigate('/contact')
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
            <div>
              <h1>Welcome!</h1>
              <h2>I'm Kirthi Nandi</h2>
              <p>Here you can learn more about me, what I have worked on, and what I have contributed to. It is a place from which you can contact me.</p> 
            </div>
            <div className='footer'>
              <button onClick={openResume} className="footerButtons">Resume</button>
              <button onClick={handleClick} className="footerButtons">LinkedIn</button>
              <button onClick={handleGithub} className="footerButtons">Github</button>
              <button onClick={handleBlog} className="footerButtons">Blog</button>
              <p className="footerContact" onClick={handleContact}>Contact me at kirthi.nandi@gmail.com</p>
            </div>
         </div>
    )
}