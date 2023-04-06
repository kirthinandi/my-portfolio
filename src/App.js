import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';


function App() {

  function handleClick()  {
    window.open("https://www.linkedin.com/in/kirthi-nandi/", "_blank");
  }

  function handleGithub() {
    window.open("https://github.com/kirthinandi", "_upblank");
  }

  function handleBlog() {
    window.open("https://dev.to/kirthinandi", "_blank");
  }

  return (
      <>
        <Router>
          <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>

        <button onClick={handleClick}>LinkedIn</button>
        <button onClick={handleGithub}>Github</button>
        <button onClick={handleBlog}>Blog</button>
        <p>kirthi.nandi@gmail.com</p>
      </>
  );
}

export default App;
