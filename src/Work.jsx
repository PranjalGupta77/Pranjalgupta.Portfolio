import React from 'react';
import Button from './Button';
import SkillCard from './SkillCard';

function Work() {
  
 return (
   <div className='mt-8'>
     <div className=' flex justify-center'>
       <h1 className='text-white text-4xl font-mono font-semibold'>My Work</h1>
     </div>
     <div className='px-28 md:flex md:flex-row flex flex-col items-center justify-center mt-8 md:space-x-4 md:space-y-0 space-y-4'>
        <SkillCard thumbnail="https://cdn.discordapp.com/attachments/937703716662943824/1028599135097597962/Screenshot_2022_1009_145350.jpg"
                   title="E-commers site"
                   description="Made an ecommers site by using html, talwindcss and react. While working on it i have learn lot of things."
                   link="https://pranjal-shopping-store.netlify.app/"
        />
        <SkillCard thumbnail="https://cdn.discordapp.com/attachments/937703716662943824/1028599134879494244/Screenshot_2022_1009_145457.jpg"
                   title="Web page"
                   description="I have made this by using html and css only. CoadYogi is a platform where, I have learned coading."
                   link="https://Assignment-1-PranjalGupta12.codeyogi-batch-2.repl.co"
        />
        <SkillCard thumbnail="https://cdn.discordapp.com/attachments/937703716662943824/1028599134606852136/Screenshot_2022_1009_145524.jpg"
                   title="My Portfolio"
                   description="This Portfolio is made by the help of figma in which i have used html and talwindcss.It is fully responsive design."
                   link="https://Assignment-8-PranjalGupta12.codeyogi-batch-2.repl.co"
        />
        
     </div>
  </div> 
  );
}

export default Work;


