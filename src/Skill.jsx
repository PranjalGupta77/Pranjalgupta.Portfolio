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
       <div className='flex flex-col justify-center items-center bg-gray-800 p-6 h-64 w-64 rounded-3xl aspect-square shadow-black shadow-md'>
          <div className='flex'>
          <DiHtml5 className='text-red-500 mb-2 h-10 w-10'/>
          <DiCss3 className='text-red-500 mb-2 h-10 w-10'/>
          </div>
         <h1 className='text-white font-mono font-bold text-xl border border-red-500 rounded-full py-1 px-2'>html/Css</h1>
         <p className='text-sm text-gray-200 mt-4 font-mono font-semibold'>The first think i have learned was html and css. Generally i use Tailwindcss because it is esay to use. I know nearly 85% of html and css.</p>
       </div>  
       <div className='flex flex-col justify-center items-center bg-gray-800 p-6 h-64 w-64 rounded-3xl aspect-square shadow-md shadow-black'>
         <TbBrandJavascript className='text-red-500 mb-2 h-20 w-20'/>
        <h1 className='text-white font-mono font-bold text-xl border border-red-500 rounded-full py-1 px-2'>Javascript</h1>
        <p className='text-sm text-gray-200 mt-4 font-mono font-semibold'>The second think i have learned was Javascript. It was intersting to use because we can use logic and can make our website working.</p>
       </div>  
       <div className='flex flex-col justify-center items-center bg-gray-800 p-6 h-64 w-64 rounded-3xl aspect-square shadow-md shadow-black'>
        <DiReact className='text-red-500 mb-2 h-28 w-28'/>
        <h1 className='text-white font-mono font-bold text-xl border border-red-500 rounded-full py-1 px-2'>React</h1>
        <p className='text-sm text-gray-200 mt-4 font-mono font-semibold'>The third language i have learned was React.jsx. Working on it was very good experince, it gives us flexible component to work and reduces mistakes.</p>
       </div>  
     </div>
  </div>
 );
}

export default Skill;


