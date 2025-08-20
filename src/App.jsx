import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';

import Background from './Components/Background';
import Projects from './Pages/Projects';
import Testimonials from './Pages/Testimonials';
import Contact from './Components/Contact';
import ScrollToTopButton from './Components/ScrollToTopButton';
import './Components/Videose.css';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />

      

      <div className="relative z-20">
        <Home />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer/>
      </div>

      <Background className="absolute -z-10 w-full h-full" />

      <ScrollToTopButton />

    </>
  );
}

export default App;
