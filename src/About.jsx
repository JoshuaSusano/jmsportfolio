import React from 'react'
import profilePic2 from './assets/miguel.png';

import useIntersectionObserver from './hooks/IntersectionObserver.js';
const About = () => {
  return (
    <div className='w-full py-5 px-4 '>
<div className=' max-w-[1100px] mx-auto px-10 mt-8 flex items-start'> 
   <img
    src={profilePic2}
    alt='Profile pic'
    className=' mr-[-30px] mt-[-20px] h-[420px] w-[430px] rounded-lg object-cover relative z-10'  />
    <div className='ml-30 flex-1' > 
        <div className='bg-white rounded h-[420px] w-full mt-[-20px] p-7'> 
        <div className='font-black text-4xl text-[#3f31b4] ml-[70px]'> ABOUT ME</div>
        <p className='text-[10px] font-medium mt-5 text-justify'> Hi! Im <span className=' text-[#3f31b4] font-bold'> Joshua Miguel Susano </span>but you can call me "JM". I am a 2nd year student 
        incoming 3rd year student. I have many experiences when it comes development stuff. I am eager to learn more about this industry and 
        i want to expand my knowledge because this is my dream.
        <span className=' text-[#3f31b4] font-bold'> Web Development </span> , <span className=' text-[#3f31b4] font-bold'> Game Development </span> and <span className=' text-[#3f31b4] font-bold'> UI / UX Design</span> i have background with this kind of 
        stuff.
        </p>    
        <h4 className='font-bold text-[11px] text-[#1c1c1d] mt-3' > Skills </h4>
        <p className='mt-3 text-[10px] font-semibold '> Design Tools</p>
        <div className="flex space-x-4 mt-2">
   
    <div className=" text-white p-2 rounded-md flex items-center justify-center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop" className="w-6 h-6" />
    </div>
    <div className=" text-white p-2 rounded-md flex items-center justify-center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" alt="Illustrator" className="w-6 h-6" />
    </div>
    <div className="b text-white p-2 rounded-md flex items-center justify-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="w-6 h-6" />
    </div>
</div>

<p className='mt-3 text-[10px] font-semibold'>Development Tools</p>
<div className="flex space-x-4 mt-2">

    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-8 h-8" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-8 h-8" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" className="w-8 h-8" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-8 h-8" />
</div>

<p className='mt-3 text-[10px] font-semibold'>Soft Skills</p>
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