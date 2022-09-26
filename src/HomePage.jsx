import React from 'react';
import Navbar from './Navbar';
import Skill from './Skill';
import Work from './work';
import Intro from './Intro';
import About from './About';
import Footer from './Footer'
import Contact from './Contact';

function HomePage() {
  
 return (
    <div className='bg-gray-900 space-y-6'>
    <Navbar />
    <Intro />
    <About />
    <Skill />
    <Work />
    <Contact />
    <Footer />
  </div>
 );
}

export default HomePage;


