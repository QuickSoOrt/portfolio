import React from 'react';

const about = "I'm a young software engineer who loves to build web applications. I started my career in 2021 at Gestware while doing my master's degree and have been working on a variety of projects since then. I'm particularly interested in web development enjoying working with ASP.NET and React, but i also have experience in desktop development. One of my main goals as a software engineer is to develop web applications that are not only functional but also visually appealing and user-friendly. I believe that design and user experience play a crucial role in the success of a web application and I strive to make sure that the applications I build meet these standards. I also value teamwork and collaboration in my work and enjoy working with other developers, designers, and stakeholders to deliver high-quality projects. I'm always looking for new challenges and opportunities to improve my skills and take on more complex projects. In my free time, I like to stay up to date with the latest web development trends and technologies by reading articles and experimenting with new tools and frameworks.";

const About = () => {
    return (
        <div name="about" className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-[#1DB700]">
                            About
                        </p>
                        <p className="py-6">// This is me</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full'>
                    <p>
                        {about}
                    </p>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default About;