import React from 'react';
import Logo from '../../assets/logo.png';

const SimpleNavbar = () => {
  
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <a href='/'>
          <img src={Logo} alt= 'Skill Icon' className='cursor-pointer'></img>
        </a>
      </div>
    </div>
  );
}

export default SimpleNavbar;