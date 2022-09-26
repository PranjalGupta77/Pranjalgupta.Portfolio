import React from 'react';

function MobileMenu({className}) {
    return (
     <div className={'bg-gray-900 text-white text-sm flex flex-col space-y-4 ' + className}>
      <a className='hover:text-red-500'>Home</a>
     <a className='hover:text-red-500'>About</a>
     <a className='hover:text-red-500'>Skill</a>
     <a className='hover:text-red-500'>Work</a>
     <a className='hover:text-red-500'>Contact Us</a>
     </div>
    );
}

export default MobileMenu;