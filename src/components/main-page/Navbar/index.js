import React from 'react';
import Logo from '../../../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-scroll';
import SocialNetworks from '../../SocialNetworks';


const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>

      <div>
        <a href='/'>
          <img src={Logo} alt='Skill Icon' className='cursor-pointer'></img>
        </a>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link className='hover:text-[#1DB700]' to="home" spy={true} smooth={true} duration={500} offset={-80}>
            Home
          </Link>
        </li>
        <li>
          <Link className='hover:text-[#1DB700]' to="about" spy={true} smooth={true} duration={500} offset={-80}>
            About
          </Link>
        </li>
        <li>
          <Link className='hover:text-[#1DB700]' to="journey" spy={true} smooth={true} duration={500} offset={-80}>
            Journey
          </Link>
        </li>
        <li>
          <Link className='hover:text-[#1DB700]' to="skills" spy={true} smooth={true} duration={500} offset={-80}>
            Skills
          </Link>
        </li>
        <li>
          <Link className='hover:text-[#1DB700]' to="work" spy={true} smooth={true} duration={500} offset={-80}>
            Work
          </Link>
        </li>
        <li>
          <Link className='hover:text-[#1DB700]' to="contacts" spy={true} smooth={true} duration={500} offset={-80}>
            Contacts
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile-menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="home" spy={true} smooth={true} duration={500} offset={-80}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="about" spy={true} smooth={true} duration={500} offset={-80}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="journey" spy={true} smooth={true} duration={500} offset={-80}>
            Journey
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="skills" spy={true} smooth={true} duration={500} offset={-80}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="work" spy={true} smooth={true} duration={500} offset={-80}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="contacts" spy={true} smooth={true} duration={500} offset={-80}>
            Contacts
          </Link>
        </li>
      </ul>

      <SocialNetworks />

    </div>
  );
}

export default Navbar;