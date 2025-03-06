import React from 'react';
import profilePic2 from './assets/miguel.png';

const About = () => {
    return (
        <div className='w-full py-10 px-4 bg-white'>
            <div className='max-w-[1100px] mx-auto flex flex-col md:flex-row items-start gap-6 md:gap-12 px-4 md:px-10'>
                <img
                    src={profilePic2}
                    alt='Profile pic'
                    className='h-[300px] sm:h-[350px] md:h-[420px] w-auto rounded-lg object-cover relative z-10'
                />
                <div className='flex-1'>
                    <div className='bg-white rounded-lg shadow-md h-full p-6 sm:p-8'>
                        
                       
                        <h2 className='font-black text-2xl sm:text-3xl text-[#3f31b4] text-center md:text-left'>
                            ABOUT ME
                        </h2>

                   
                        <p className='text-[12px] sm:text-[14px] font-medium mt-5 text-justify leading-relaxed'>
                            Hi! I'm <span className='text-[#3f31b4] font-bold'>Joshua Miguel Susano</span>, but you can call me "JM". 
                            I'm currently a 2nd-year student (soon to be 3rd year), and I have gained valuable experience in development projects. 
                            I'm eager to learn more and expand my knowledge because this industry is my passion and my dream.
                            I have hands-on experience in <span className='text-[#3f31b4] font-bold'>Web Development</span>, 
                            <span className='text-[#3f31b4] font-bold'> Game Development</span>, and 
                            <span className='text-[#3f31b4] font-bold'> UI/UX Design</span>.
                        </p>

                 
                        <h4 className='font-bold text-[12px] text-[#1c1c1d] mt-5'>Skills</h4>

                      
                        <p className='mt-3 text-[11px] font-semibold'>Design Tools</p>
                        <div className="flex space-x-3 mt-2">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop" className="w-6 h-6" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" alt="Illustrator" className="w-6 h-6" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="w-6 h-6" />
                        </div>
                        <p className='mt-3 text-[11px] font-semibold'>Development Tools</p>
                        <div className="flex flex-wrap gap-3 mt-2">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-8 h-8" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-8 h-8" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" className="w-8 h-8" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-8 h-8" />
                        </div>
                        <p className='mt-3 text-[11px] font-semibold'>Soft Skills</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {['Problem Solver', 'Teamwork', 'Communication', 'Adaptability', 'Creativity', 'Flexibility', 'Time Management'].map((skill, index) => (
                                <span key={index} className="bg-[#3f31b4] text-xs font-semibold px-3 py-1 rounded-full text-white">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
