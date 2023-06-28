import React, { useState } from 'react';
import {Link} from "react-router-dom";
import MyResume from './Kirthi Nandi Resume.pdf';
import flowerImg from './flower.png';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
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
        <div className="projects">
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
            <h2>Some Projects I've Worked On!</h2>
                <div>
                    <h3>SKINATIC.</h3>
                    <p>A sleek and innovative full stack web application that provides a one-stop-shop for American, Korean, and Japanese skincare enthusiasts, featuring a wide range of products, authentic user reviews, and custom features that cater to individual user needs and preferences.</p>
                    <p>React   Ruby on Rails   CSS   HTML</p>
                </div>
                <div>
                    <h3>Rory's Online Diary</h3>
                    <p>A dynamic diary application that puts users in control, with a simple and intuitive interface that allows them to create, edit, and delete personalized entry posts for their thoughts and emotions with ease, fostering a more meaningful and engaging journaling experience</p>
                    <p>React   Ruby on Rails   Sinatra   CSS   HTML</p>
                </div>
                <div>
                    <h3>The Rick and Morty Hub</h3>
                    <p>An engaging and informative platform for fans of Rick and Morty, featuring detailed character profiles, interactive content, and a seamless user experience that encourages users to explore the show's universe and connect with its richly-drawn characters.</p>
                    <p>React   CSS   HTML</p>
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