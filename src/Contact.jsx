import React from 'react';
import { FaPaperPlane } from "react-icons/fa";
import { BsTelephoneFill, BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import Button from './Button';


function Contact() {
  
 return (
  <div className='flex flex-col justify-center space-y-3 md:space-y-0 md:flex  md:flex-row-reverse md:px-32 items-center'>
    
    <div className='flex flex-col space-y-4 w-1/2 md:ml-16'>
     <input placeholder='Your Name'/>
     <input placeholder='your Email'/>
     <textarea placeholder='Your Messege'/>
     <div className="items-start">
     <Button>Submite</Button>
     </div>
    </div>

    <div>
    <h1 className='text-3xl md:text-4xl text-white text-bold font-sans font-semibold'>Contact Me</h1>
    <div className='flex space-x-3 mt-5'>
      <FaPaperPlane className='text-red-500'></FaPaperPlane>
      <h2 className='text-white text-sm'>pranjalgupta3009@gmail.com</h2>
    </div>
    <div className='flex space-x-3 mt-5'>
      <BsTelephoneFill className='text-red-500' />
      <h2 className='text-white text-sm'>8958972977</h2>
    </div>
    <div className='flex space-x-3 mt-5'>
      <a href='https://www.facebook.com/people/Pranjal-Gupta/100026900690502/'>
       <BsFacebook className='text-gray-400'/>
      </a>
      <a href='https://twitter.com/Pranjal2379?t=EHE5Lj2dgW6AtD6tXr_V_Q&s=09'>
       <BsTwitter className='text-gray-400'/>
      </a>
      <a href='https://www.instagram.com/pranjal2397'>
       <BsInstagram className='text-gray-400'/>
      </a>
      <a href='https://www.linkedin.com/in/pranjal-gupta-5a0bb7235'>
       <BsLinkedin className='text-gray-400'/>
      </a>
    </div>

    <div className='mt-8'>
    <Button>Download CV</Button>
    </div>
    </div>


  </div>
 );
}

export default Contact;


