import React from 'react';
import { DiHtml5, DiCss3, DiReact } from "react-icons/di";
import {TbBrandJavascript} from "react-icons/tb";


function Skill() {
  
 return (
  <div>
     <div className=' flex justify-center'>
       <h1 className='text-white text-4xl font-mono font-semibold'>My Skill</h1>
     </div>
     <div className='px-28 md:flex md:flex-row flex flex-col items-center justify-center mt-8 md:space-x-4 md:space-y-0 space-y-4'>
       <div className='flex flex-col justify-center items-center bg-gray-800 p-6 h-64 w-64 rounded-3xl aspect-square shadow-green-400 shadow-md'>
          <div className='flex'>
          <DiHtml5 className='text-red-500 mb-2 h-10 w-10'/>
          <DiCss3 className='text-red-500 mb-2 h-10 w-10'/>
          </div>
         <h1 className='text-white font-mono font-bold text-xl'>html/Css</h1>
         <p className='text-sm text-green-400 mt-4 font-mono font-semibold'>The first think i have learned was html and css. Generally i use Tailwindcss because of it esay uses. I know 85% of html and css.</p>
       </div>  
       <div className='flex flex-col justify-center items-center bg-gray-800 p-6 h-64 w-64 rounded-3xl aspect-square shadow-md shadow-green-400'>
         <TbBrandJavascript className='text-red-500 mb-2 h-10 w-10'/>
        <h1 className='text-white font-mono font-bold text-xl'>Javascript</h1>
        <p className='text-sm text-green-400 mt-4 font-mono font-semibold'>The second think i have learned was Javascript. It was intersting to use because know we can use logic and can make our website working.</p>
       </div>  
       <div className='flex flex-col justify-center items-center bg-gray-800 p-6 h-64 w-64 rounded-3xl aspect-square shadow-md shadow-green-400'>
        <DiReact className='text-red-500 mb-2 h-10 w-10'/>
        <h1 className='text-white font-mono font-bold text-xl'>React</h1>
        <p className='text-sm text-green-400 mt-4 font-mono font-semibold'>The third language i have learned was React.jsx. Working on it was very good experince, it give us flexible component which reduces our coad length.</p>
       </div>  
     </div>
  </div>
 );
}

export default Skill;


