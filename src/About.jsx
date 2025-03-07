import React from 'react'
import profilePic2 from './assets/miguel.png';

import useIntersectionObserver from './hooks/IntersectionObserver.js';

const About = () => {
  return (
    <div className='w-full py-5 px-4'>
      <div className='max-w-[1100px] mx-auto px-4 sm:px-10 mt-8 flex flex-col lg:flex-row items-center lg:items-start space-y-5 lg:space-y-0 lg:space-x-5'>
        <div className='w-full flex justify-center lg:block'>
          <img
            src={profilePic2}
            alt='Profile pic'
            className='h-[300px] sm:h-[350px] md:h-[400px] lg:h-[420px] w-auto rounded-lg object-cover relative z-10'
          />
        </div>
        <div className='w-full lg:flex-1'>
          <div className='bg-white rounded h-auto lg:h-[420px] w-full p-5 sm:p-7'>
            
            <div className='font-black text-2xl sm:text-3xl md:text-4xl text-[#3f31b4] text-center lg:text-left'>ABOUT ME</div>

            <p className='text-[12px] sm:text-[14px] font-medium mt-4 text-justify'>
              Hi! I'm <span className='text-[#3f31b4] font-bold'>Joshua Miguel Susano</span>, but you can call me "JM". 
              I am a 2nd year incoming 3rd year student. I have many experiences when it comes to development stuff. 
              I am eager to learn more about this industry and I want to expand my knowledge because this is my dream.
              <span className='text-[#3f31b4] font-bold'> Web Development</span>, 
              <span className='text-[#3f31b4] font-bold'> Game Development</span>, and 
              <span className='text-[#3f31b4] font-bold'> UI/UX Design</span> — I have a background with these.
            </p>

            <h4 className='font-bold text-[12px] sm:text-[14px] text-[#1c1c1d] mt-5'>Skills</h4>

            <p className='mt-3 text-[10px] sm:text-[12px] font-semibold'>Design Tools</p>
            <div className="flex flex-wrap gap-3 mt-2">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop" className="w-6 h-6" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" alt="Illustrator" className="w-6 h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="w-6 h-6" />
            </div>

            <p className='mt-3 text-[10px] sm:text-[12px] font-semibold'>Development Tools</p>
            <div className="flex flex-wrap gap-3 mt-2">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-8 h-8" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-8 h-8" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" className="w-8 h-8" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-8 h-8" />
            </div>

            <p className='mt-3 text-[10px] sm:text-[12px] font-semibold'>Soft Skills</p>
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
  )
}

export default About
