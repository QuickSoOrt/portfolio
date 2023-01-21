import React from 'react';
import SocialNetworkItem from './SocialNetworkItem';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SocialNetworks = () => {
  return (
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <SocialNetworkItem name={'Linkedin'} icon={<FaLinkedin size={30}/>}/>
            <SocialNetworkItem name={'Github'} icon={<FaGithub size={30}/>}/>
            <SocialNetworkItem name={'Email'} icon={<HiOutlineMail size={30}/>}/>
        </ul>
    </div>
  );
}

export default SocialNetworks;