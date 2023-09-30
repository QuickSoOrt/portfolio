import React from 'react';
import SocialNetworkItem from './SocialNetworkItem';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SocialNetworks = () => {
  return (
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <SocialNetworkItem name={'Linkedin'} link={"https://www.linkedin.com/in/bruno-meira-a90971174/"} icon={<FaLinkedin size={30}/>}/>
            <SocialNetworkItem name={'Email'} link={"mailto:brunorafaelfariameira@gmail.com"} icon={<HiOutlineMail size={30}/>}/>
        </ul>
    </div>
  );
}

export default SocialNetworks;