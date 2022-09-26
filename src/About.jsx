import React from 'react';
import Button from './Button';

function About() {
  
 return (
  <div className='px-20 md:flex items-center justify-center max-w-4xl mx-auto'>
    <div className='mx-auto mt-5 h-64 w-48 md:h-96 md:w-64 shrink-0'>
        <img className='h-full w-full object-cover' src="https://cdn.discordapp.com/attachments/937703716662943824/1023463505787093013/Screenshot_2022_0924_173351.jpg"/>
    </div>
    <div className='mt-4 md:mt-0 md:ml-8'>
        <h1 className='text-3xl md:text-5xl text-white text-bold font-sans font-semibold'>About Me</h1>
        <h2 className='text-white text-sm my-2 md:my-4'>Developer <span className='text-red-500'> & Designer</span></h2>
        <p className='text-sm text-white'>I am a front-end web developer. I can provide clean coad and pixel perfect design. I also make the website more & more interecting with web animations. A responsive design makes your website accessible to all users, regardless of their device. I will not let you down at any point. </p>
        <div className='mt-3'>
        <Button>Let's Talk</Button>
        </div>
    </div>
  </div>
 );
}

export default About;


