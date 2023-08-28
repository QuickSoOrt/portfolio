import React from 'react';
import { Link } from 'react-scroll';

import {HiArrowNarrowRight} from 'react-icons/hi';

const description = "I'm a dedicated Software Engineer driven by a passion for innovation and pushing the boundaries of technology. With a strong background in designing and developing software applications, I thrive in dynamic, collaborative environments. My expertise lies in programming languages like Java, Python, and JavaScript, and I have extensive experience in building web and mobile applications.";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#1DB700] font-medium'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Bruno Meira</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Engineer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                {description}
            </p>
            <div>
                <Link to="work" spy={true} smooth={true} duration={500}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#1DB700] hover-border hover:border-[#1DB700]'>
                        View Work 
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-1'/>
                        </span>
                    </button>
                </Link>
            </div>
        </div>

    </div>
  );
}

export default Home;