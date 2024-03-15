import React from 'react'
import Navbar from './Navbar'


function Home() {
  
  return (
    <>
    <Navbar />
    <div className= "bg-black h-screen w-full z-[-99] text-white fixed">
      <div className="text-white">
       <div className=" mt-48 md:mt-60 md:ml-32 ">
       <p className=" text-5xl md:text-7xl w-full text-center md:text-left">Hi There</p>
       <p className='text-5xl md:text-7xl text-center md:text-left mt-3'>I'm Vivek <span className="text-orange-500">Raj</span></p>
       <p className='md:text-4xl text-3xl text-center md:text-left ml-1 mt-3'>I am a Web <span className="text-orange-500  ">Developer</span></p>
       </div>
      </div>
    </div>
    </>
    
  )
}

export default Home