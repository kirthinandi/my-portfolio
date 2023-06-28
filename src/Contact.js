import React,{ useState } from 'react';
import { send } from 'emailjs-com';
import {Link} from "react-router-dom";
import MyResume from './Kirthi Nandi Resume.pdf';
import flowerImg from './flower.png';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });
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
  

    function handleSubmit(e) {
        e.preventDefault();
        send(
            'service_ptdplns',
            'template_7y6rfog',
            toSend,
            'SUT8gp32iKROKvhg2'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
        alert("Your email has been sent successfully");
    }

    function handleChange(e) {
        setToSend({...toSend, [e.target.name]: e.target.value });
    };

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
            <h3>Keep in Touch!</h3>
            <form onSubmit={handleSubmit}>
                <label>Your Name:</label>
                <input
                    type='text'
                    name='from_name'
                    placeholder='From Name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <label>Your Email:</label>
                <input
                    type='text'
                    name='reply_to'
                    placeholder='Your Email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                <label>My Name:</label>
                <input
                    type='text'
                    name='to_name'
                    placeholder='To Name'
                    value={toSend.to_name}
                    onChange={handleChange}
                />
                <label>Your Message:</label>
                <input
                    type='text'
                    name='message'
                    placeholder='Your Message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
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