import React from 'react'
import PropTypes from 'prop-types';

const SkillItem = props => {
  return (
    <div className='shadow-md shadow-[#1DB700] hover:scale-110 duration-500'>
        <img className='w-20 mt-4 mx-auto' src={props.icon} alt= 'Skill Icon'></img>
        <p className='mt-2 mb-4'>{props.name}</p>
    </div>
  );
}

SkillItem.prototype = {
    name: PropTypes.string,
    icon: PropTypes.object
}

export default SkillItem;