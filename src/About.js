import React, { useState } from 'react';
import {Link} from "react-router-dom";
import MyResume from './Kirthi Nandi Resume.pdf';
import flowerImg from './flower.png';
import { useNavigate } from 'react-router-dom';
import myPic from './mypic.png';

export default function About() {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    
    const techList = ['JavaScript (ES6)', 'React', 'Ruby on Rails', 'HTML', 'CSS'];
    const listItems = techList.map((myList) => {
        return <li>{myList}</li>
    });

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
         <div className="about">
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
            <h1 className="aboutTitle">About Me</h1>
            <img className="myPic" src={myPic} alt="Kirthi's Picture"/>
            <div className="aboutContent">
              <p>Hello! My name is Kirthi Nandi and I am based in the Bay Area in California. I am someone who enjoys spending time discovering new music, going on long walks with my dog, Simba, and picking up new hobbies such as reading or crocheting. My interest in web development started early on as my curious mind always imagined and questioned the inner workings of a simple computer able to compute complex tasks. My time at Flatiron School solidified my interest as I was given the opportunity to learn hands-on what it was like using different languages to build functioning and innovative web applications.</p>
              <h2>Technologies I've Been Working With:</h2>
              <ul className="techList">{listItems}</ul>
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