import React from 'react';
import {Link} from "react-router-dom";
import MyResume from './Kirthi Nandi Resume.pdf';


export default function Home() {

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

    return (
        <div className="home">
            <nav>
                <Link to="/home">Home </Link>
                <Link to="/about">About </Link>
                <Link to="/projects">Projects </Link>
                <Link to="/contact">Contact </Link>
            </nav>

            <button onClick={openResume}>Resume</button>
            <button onClick={handleClick}>LinkedIn</button>
            <button onClick={handleGithub}>Github</button>
            <button onClick={handleBlog}>Blog</button>
            <p>kirthi.nandi@gmail.com</p>
         </div>
    )
}