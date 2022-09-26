import React from 'react';
import Hamburger from './Hamburger';

function Navbar() {
  
 return (
  <div className='md:px-20 px-5 py-6 flex justify-between items-center'>
    <div className='text-3xl font-mono'>
     <h1 className='text-white'>Portfo<span className='text-red-500'>lio</span></h1>
    </div>
    <div>
      <div className="hidden md:block">
    <div className='text-white flex space-x-10 text-sm font-mono'>
     <h2 className='hover:text-red-500'>Home</h2>
     <h2 className='hover:text-red-500'>About</h2>
     <h2 className='hover:text-red-500'>Skill</h2>
     <h2 className='hover:text-red-500'>Work</h2>
     <h2 className='hover:text-red-500'>Contact Us</h2>
    </div>
    </div>
      <Hamburger />
    </div>
  </div>
 );
}

export default Navbar;


