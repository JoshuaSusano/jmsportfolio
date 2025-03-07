import React from 'react';
import profilePic from './assets/joshua.png';
import { ReactTyped } from "react-typed";
import ParticlesComponent from './particles.jsx';

const LandingHero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[1100px] mx-auto w-full h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 md:px-9 pt-16 lg:pt-0'>
        <div className='w-full text-center lg:text-left lg:w-1/2'>
          <p className='text-xs font-bold font-sans'>LET'S BUILD SOMETHING TOGETHER</p>
          <h1 className='text-white text-3xl sm:text-4xl font-bold mt-2'>
            Hi, I'm Joshua Susano
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 mt-3">
            <h1 className="text-white text-sm sm:text-base font-bold">An IT Developer who specialized as </h1>
            <ReactTyped
              className="text-sm sm:text-base font-bold text-[white]"
              strings={['A Full Stack Developer', 'A Game Developer']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className='text-white text-sm sm:text-base mt-2'>based in Pampanga, Philippines</p>
          <div className='mt-5 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4'>
            <button className='border px-4 py-2 text-xs sm:text-sm rounded-sm hover:bg-[#8015f3]'>
              <a href='#' className='text-[12px] sm:text-[14px]'>About Me</a>
            </button>
            <button className='border px-4 py-2 text-xs sm:text-sm rounded-sm hover:bg-[#8015f3]'>
              <a href='#' className='text-[12px] sm:text-[14px]'>Contact Me</a>
            </button>
          </div>
        </div>
        <div className='w-full lg:w-1/2 flex justify-center lg:justify-end relative mb-6 lg:mb-0'>
          <div className='hidden lg:block absolute inset-0'>
            <ParticlesComponent id="profileParticles" />
          </div>
          <img
            src={profilePic}
            alt='Profile pic'
            className='h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] w-auto rounded-lg object-cover relative z-10'
          />
        </div>

      </div>
    </div>
  );
};

export default LandingHero;
