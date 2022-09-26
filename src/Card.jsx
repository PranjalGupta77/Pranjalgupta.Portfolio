import React from 'react';

function Card({header, content, image}) {
    return (
        <div>
             <div className='flex flex-col justify-center items-center bg-gray-800 p-6 h-64 w-64 rounded-3xl aspect-square'>
                <div className=''>
                <img className='bg-red-500 h-12 w-12' src={image}/>
                </div>
        <h1 className='text-white font-mono font-bold text-xl'>{header}</h1>
        <p className='text-sm text-fuchsia-800 my-4 font-mono font-semibold'>{content}</p>
       </div>  
        </div>
    );
}

export default Card;