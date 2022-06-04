import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0c1c35]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center align-center h-full'>
            <p className='text-[#ccd6f6]'>Hi, my name is</p>
            <h1 className='text-3xl sm:text-6xl font-bold text-[#ccd6f6] py-2'>Burhan Aj</h1>
            <h2 className='text-2xl sm:text-5xl  text-[#8892b0] py-2'>I'm a Full Stack Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                I’m a full-stack developer specializing in building (and occasionally
                designing) exceptional digital experiences. Currently, I’m focused on
                building responsive full-stack web applications.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ccd6f6] hover:border-[#ccd6f6] hover:text-[#0c1c35]'>View More 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-2'/>
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home