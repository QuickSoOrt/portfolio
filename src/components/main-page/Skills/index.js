import React from 'react';
import HTML from '../../../assets/html.png';
import JavaScript from '../../../assets/javascript.png';
import CSS from '../../../assets/css.png';
import PostgreSQL from '../../../assets/postgresql.png';
import ReactJS from '../../../assets/react.png';
import NodeJS from '../../../assets/node.png';
import MongoDB from '../../../assets/mongo.png';
import TailwindCSS from '../../../assets/tailwind.png';
import NestJS from '../../../assets/nestjs.png';
import Docker from '../../../assets/docker.png';
import WPF from '../../../assets/wpf.png';
import Devexpress from '../../../assets/devexpress.png';
import Github from '../../../assets/github.png';
import MUI from '../../../assets/mui.png';
import SkillItem from './SkillItem';

const Skills = () => {
  return (
    <div name='skills' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#1DB700]'>Skills</p>
                <p className='py-4'>// These are the technologies i've worked with</p>
            </div>
            <div className='w-ful grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>
                <SkillItem name={'PostgreSQL'} icon={PostgreSQL}/>
                <SkillItem name={'WPF'} icon={WPF}/>
                <SkillItem name={'ASP.NET'} icon={WPF}/>
                <SkillItem name={'Devexpress'} icon={Devexpress}/>
                <SkillItem name={'Docker'} icon={Docker}/>
                <SkillItem name={'Github'} icon={Github}/>
                <SkillItem name={'Material UI'} icon={MUI}/>
                <SkillItem name={'PostgreSQL'} icon={PostgreSQL}/>
                <SkillItem name={'NestJS'} icon={NestJS}/>
                <SkillItem name={'NodeJS'} icon={NodeJS}/>
                <SkillItem name={'MongoDB'} icon={MongoDB}/>
                <SkillItem name={'ReactJS'} icon={ReactJS}/>
                <SkillItem name={'JavaScript'} icon={JavaScript}/>
                <SkillItem name={'HTML'} icon={HTML}/>
                <SkillItem name={'CSS'} icon={CSS}/>
            </div>
        </div>
    </div>
  );
}

export default Skills;