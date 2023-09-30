import React from 'react';
import JourneyItem from './JourneyItem';

const journeyItems = [
    {
        title: "Bachelor's Degree in Computer Science and Engineering",
        company: "Instituto Superior Técnico",
        period: "Sep 2018 - Jun 2020",
        description: "I earned my Bachelor's Degree in Computer Science and Engineering from Instituto Superior Técnico, completing my studies with an outstanding average grade of 15."
    },
    {
        title: "Master's Degree in Software Engineering",
        company: "Faculdade de Engenharia da Universidade do Porto",
        period: "Sep 2020 - Oct 2022",
        description: "I earned my Master's Degree in Software Engineering from Faculdade de Engenharia da Universidade do Porto, completing my studies with an outstanding average grade of 16."
    },
    {
        title: "Desktop Developer",
        company: "Gestware",
        period: "Jan 2021 - Jul 2022",
        description: "As a desktop developer, I was responsible for the migration of two ERP desktop applications written in Delphi to the .NET framework and their corresponding databases. This was a challenging task as it required a thorough understanding of both the Delphi applications and the .NET framework. I worked closely with developers and clients to analyze the existing Delphi applications, design the new .NET applications, and ensure compatibility with the existing databases. I also built a converter to migrate the databases to the new version and made sure that all data was migrated correctly without any loss or errors."
    },
    {
        title: "Web Developer",
        company: "Gestware",
        period: "Aug 2022 - Present",
        description: "As a web developer, I am currently working on the development of a SaaS (Software as a Service) platform. The project involves creating a web‑based version of our existing desktop invoicing application that allows users to work online, offline, or both. The platform will have several advanced features such as automatic data syncing, real‑time updates, and offline data access. To achieve this goal, I am utilizing cutting‑edge technologies to ensure the platform is reliable, efficient, and user‑friendly."
    },
];

const Journey = () => {
    return (
        <div name="journey" className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-[#1DB700]">
                            Journey
                        </p>
                        <p className="py-6">// Check out some of my recent work</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-1 gap-8'>
                    {
                        journeyItems.map((journey, index) => (
                            <JourneyItem title={journey.title} company={journey.company} period={journey.period} description={journey.description}></JourneyItem>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default Journey;