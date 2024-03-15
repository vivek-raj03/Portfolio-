import React from 'react'
import Navbar from './Navbar'


function Home() {
  
  return (
    <>
    <Navbar />
    <div className= "bg-black h-screen w-full z-[-99] text-white fixed">
      <div className="text-white">
       <div className=" mt-48 md:mt-60 md:ml-32 font-roberto">
       <p className=" text-5xl md:text-7xl w-full text-center md:text-left">Hi There</p>
       <p className='text-5xl md:text-7xl text-center md:text-left mt-3'>I'm Vivek <span className="text-orange-500">Raj</span></p>
       <p className='md:text-4xl text-3xl text-center md:text-left ml-1 mt-5'>I am a Web <span className="text-orange-500  ">Developer</span></p>
       </div>
      <div className='mt-6 md:w-1/4 w-full md:ml-32'>
      <ul className='flex justify-center md:justify-start space-x-7 '>
        <li className='md:text-6xl text-4xl text-orange-600	'><a href=''><ion-icon name="logo-linkedin"></ion-icon></a></li>
        <li className='md:text-6xl text-4xl text-orange-600'><a href=''><ion-icon name="logo-github"></ion-icon></a></li>
        <li className='md:text-6xl text-4xl text-orange-600'><a href=''><ion-icon name="mail-outline"></ion-icon></a></li>
        <li className='md:text-6xl text-4xl text-orange-600'><a href=''><ion-icon name="logo-instagram"></ion-icon></a></li>
       </ul>
      </div>
      </div>
    </div>
    </>
    
  )
}

export default Home