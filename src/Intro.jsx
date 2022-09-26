import React from 'react';

function Intro() {
  
 return (
  <div className='md:flex md:justify-between items-center md:flex-row-reverse md:px-32'>
    {/* <div className="flex justify-center ">
    <img className="aspect-square" src="https://cdn.discordapp.com/attachments/937703716662943824/1023465732102688808/IMG_20220925_105716.png"/>
    </div> */}
    <div className="mx-auto mt-5 h-64 w-64 md:h-96 md:w-96 shrink-0">
      <img className="h-full w-full rounded-full object-cover" src="https://cdn.discordapp.com/attachments/937703716662943824/1023465732102688808/IMG_20220925_105716.png" />
    </div>
    <div className='text-sm md:pl-20 mt-5 md:mt-0 flex flex-col justify-center md:items-start items-center md:mr-4'>
        <p className='text-sm text-white'>Hello, my name is</p>
        <h1 className='text-3xl md:text-5xl text-white text-bold font-mono'>PranJal <span className='text-red-500'>Gupta</span></h1>
        <p className='text-lg md:text-xl text-white mt-2'>I'am a web developer</p>
    </div>
  </div>
 );
}

export default Intro;


