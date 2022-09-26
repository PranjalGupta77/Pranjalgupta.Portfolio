import { resolveTo } from '@remix-run/router';
import React from 'react';

function Button({...rest}) {
  
 return (
    <button className='px-5 py-1 rounded-full border border-red-500 text-white bg-red-500 hover:bg-gray-800'{...rest}></button>
 );
}

export default Button;


