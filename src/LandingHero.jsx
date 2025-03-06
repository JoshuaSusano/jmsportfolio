import React from 'react';
import profilePic from './assets/joshua.png';
import { ReactTyped } from "react-typed";
import ParticlesComponent from './particles.jsx';  // Import it here

const LandingHero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[1100px] mx-auto mt-[-50px] w-full h-screen flex items-center justify-between px-9'>
        <div className='w-full lg:w-1/2'>
          <p className='text-xs font-bold font-sans '>LET'S BUILD SOMETHING TOGETHER</p>
          <h1 className='text-[white] text-4xl font-bold'>Hi, I'm Joshua Susano</h1>
          <div className="flex items-center space-x-2 mt-2">
            <h1 className="text-white text-base font-bold">An IT Developer who specialized as </h1>
            <ReactTyped
              className="text-base font-bold text-[white]"
              strings={['A Full Stack Developer', 'A Game Developer']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className='text-white text-base'>based in Pampanga, Philippines</p>
          <div className='mt-2 space-x-5'>
            <button className='border px-3 pb-1 rounded-sm hover:bg-[#8015f3]'>
              <a href='#' className='text-[10px]'>About Me</a>
            </button>
            <button className='border px-3 pb-1 rounded-sm hover:bg-[#8015f3]'>
              <a href='#' className='text-[10px]'>Contact Me</a>
            </button>
          </div>
        </div>
        <div className='hidden lg:flex justify-end w-1/2 relative'>
          <ParticlesComponent id="profileParticles" />
          <img
            src={profilePic}
            alt='Profile pic'
            className=' mr-[-30px] mt-[135px] h-[500px] w-[400px] rounded-lg object-cover relative z-10'
          />
        </div>

      </div>
    </div>
  );
};

export default LandingHero;
