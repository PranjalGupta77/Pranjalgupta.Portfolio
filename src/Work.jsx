import React from 'react';
import Button from './Button';

function Work() {
  
 return (
   <div className='mt-8'>
     <div className=' flex justify-center'>
       <h1 className='text-white text-4xl font-mono font-semibold'>My Work</h1>
     </div>
     <div className='px-28 md:flex md:flex-row flex flex-col items-center justify-center mt-8 md:space-x-4 md:space-y-0 space-y-4'>
       <div className='flex flex-col justify-center items-center bg-gray-800 p-6 h-64 w-64 rounded-3xl aspect-square shadow-md shadow-yellow-400'>
        <h1 className='text-white font-mono font-bold text-xl'>E-commers site</h1>
        <p className='text-sm text-yellow-400 my-4 font-mono font-semibold'>Made an ecommers site by using html, talwindcss and react. While working on it i have learn lot of things.</p>
        <a href='https://pranjal-shopping-store.netlify.app/'>
         <Button>View work</Button>
        </a>
       </div>  
       <div className='flex flex-col justify-center items-center bg-gray-800 p-6 h-64 w-64 rounded-3xl aspect-square shadow-md shadow-yellow-400'>
        <h1 className='text-white font-mono font-bold text-xl'>Web page</h1>
        <p className='text-sm text-yellow-400 my-4 font-mono font-semibold'>I have made this by using html and css. CoadYogi is a platform where, I have learned coading.</p>
        <a href='https://Assignment-1-PranjalGupta12.codeyogi-batch-2.repl.co'>
         <Button>View work</Button>
        </a>
       </div>  
       <div className='flex flex-col justify-center items-center bg-gray-800 p-6 h-64 w-64 rounded-3xl aspect-square shadow-md shadow-yellow-400'>
        <h1 className='text-white font-mono font-bold text-xl'>My Portfolio</h1>
        <p className='text-sm text-yellow-400 my-4 font-mono font-semibold'>This Portfolio is made by the help of figma in which i have used html and talwindcss. </p>
        <a href='https://Assignment-8-PranjalGupta12.codeyogi-batch-2.repl.co'>
         <Button>View work</Button>
        </a>
        </div>  
     </div>
  </div> 
  );
}

export default Work;


