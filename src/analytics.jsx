import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay, faGamepad, faHardDrive } from "@fortawesome/free-solid-svg-icons";
import useIntersectionObserver from './hooks/IntersectionObserver.js';

const ServiceBox = ({ icon, title, description, delay }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  
    return (
      <div
        ref={ref}
        style={{
          transitionDelay: `${delay}ms`,  
        }}
        className={`h-[200px] bg-[#3f31b4] items-center justify-center rounded-md p-6 
        transition-transform duration-700 ease-out 
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
      >
        <FontAwesomeIcon className="h-16 w-16 text-white ml-[-20px]" icon={icon} />
        <p className="text-white mt-3 font-bold">{title}</p>
        <p className='text-xs text-white mt-3'>{description}</p>
        <button className='border border-gray-400 flex items-center justify-center px-3 py-1 rounded-md mt-4 hover:bg-[#8015f3]'>
          <a href='#' className='text-[#e0e0e0] text-[8px] font-semibold'>
            View Sample
          </a>
        </button>
      </div>
    );
  };
  
const Analytics = () => {
  return (
    <div className='w-full py-10 px-4 bg-white'>
      <div className='text-center mt-[-10px]'>
        <h1 className='text-3xl font-black'>
          <span>"ALLOW YOUR PASSION</span>
          <br />
          <span className='text-[#3f31b4]'>BECOME YOUR PURPOSE"</span>
        </h1>
      </div>
      <h2 className='text-center mt-12 text-xl text-[#6e6d6e]'>What I Do?</h2>
      <div className='max-w-[1100px] mx-auto px-9 mt-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full p-3'>
          <ServiceBox
            icon={faDisplay}
            title="WEB DEVELOPMENT"
            description="Transforming vision into captivating and responsive websites that engage and inspire."
           delay={100}/>
          <ServiceBox
            icon={faGamepad}
            title="GAME DEVELOPMENT"
            description="Making games is like fighting a war. A creative, wonderful war."
            delay={500}/>
          <ServiceBox
            icon={faHardDrive}
            title="UI / UX DESIGN"
            description="Designing intuitive user experiences that bring concepts to life."
            delay={800}/>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
