import React from 'react';
import WorkImg from '../../assets/projects/workImg.jpeg';
import RealEstate from '../../assets/projects/realestate.jpg';
import WorkItem from './WorkItem';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#1DB700]'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
               <WorkItem name={'React JS Aplication'} image={WorkImg}/>
               <WorkItem name={'React JS Aplication'} image={RealEstate}/>
               <WorkItem name={'React JS Aplication'} image={WorkImg}/>
               <WorkItem name={'React JS Aplication'} image={RealEstate}/>
               <WorkItem name={'React JS Aplication'} image={WorkImg}/>
               <WorkItem name={'React JS Aplication'} image={RealEstate}/>
            </div>
        </div>
    </div>
  );
}

export default Work;