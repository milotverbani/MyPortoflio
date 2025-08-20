import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Video from './Components/Video';
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

      <div className="video-wrapper absolute left-1/2 transform -translate-x-1/2 z-10 w-full max-w-3xl">
        <Video />
      </div>

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
