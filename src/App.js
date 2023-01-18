import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {


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
      </>
  );
}

export default App;
