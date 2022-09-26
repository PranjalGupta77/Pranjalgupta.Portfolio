import React from 'react';
import { useState } from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import MobileMenu from './MobileMenu';

function Hamburger() {

const [isMenuOpen, setMenuOpen] = useState(false);

 function handleMenuOpener() {
    setMenuOpen(!isMenuOpen);
 }

    return (
     <div>
        <GiHamburgerMenu  onClick={handleMenuOpener} 
        className="md:hidden text-white hover:text-red-500 text-3xl"
        />
        {isMenuOpen && <MobileMenu className="md:hidden"/>}
     </div>
    );
}

export default Hamburger;