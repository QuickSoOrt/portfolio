import React from 'react';
import { Link } from 'react-scroll';

import {HiArrowNarrowRight} from 'react-icons/hi';

const description = "My career in software engineering has been a journey of continuous growth and exploration. With a strong foundation in coding and a passion for solving complex problems, I find joy in crafting elegant solutions that make a difference. My experience spans various domains, including web and desktop application development, as well as a proficiency in programming languages such as C# and JavaScript. I am committed to staying at the forefront of technology, and I look forward to leveraging my skills to contribute to exciting projects and drive innovation in the field.";

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