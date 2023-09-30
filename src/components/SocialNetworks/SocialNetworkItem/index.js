import React from 'react';
import PropTypes from 'prop-types';

const SocialNetworkItem = props => {
  return (
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#1DB700]'>
      <a href={props.link} target='_blank' className='flex justify-between w-full items-center text-gray-300'>{props.name} {props.icon}</a>
    </li>
  );
}

SocialNetworkItem.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.element
}

export default SocialNetworkItem;