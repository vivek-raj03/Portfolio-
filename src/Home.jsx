import { useState } from 'react'
import React from 'react'
import Navbar from './Navbar'
import './Glow.css'
import vec1 from './assets/vec1.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Home() {

  const [glow, setglow] = useState(false);
  function useHandleGlow() {
    setglow(glow => !glow)
    setTimeout(() => {
      setglow(glow => !glow);
    }, 2000);
  }

  const [text] = useTypewriter({
    words: ["Developer", "Designer", "Creator", "Programmer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  });

  console.log("Text:", text);



  return (
    <>
      <Navbar handleGlow={useHandleGlow} />
      <div className="bg-black  w-full z-[-99] md:space-x-96 flex md:flex-row flex-col h-screen  text-white ">
        <div className="text-white">
          <div className=" mt-28 md:mt-60 md:ml-32 font-roberto">
            <p className=" text-5xl md:text-7xl w-full text-center md:text-left">Hi There</p>
            <p className='text-5xl md:text-7xl text-center md:text-left mt-3'>I'm Vivek <span className="text-orange-500">Raj</span></p>
            <p className='md:text-4xl text-3xl text-center md:text-left ml-1 mt-5'>I am a <span className="text-orange-500">{text}</span><Cursor></Cursor></p>
            <div className='mt-3 md:flex w-full '>
              <ul className={`flex justify-center md:justify-start space-x-7 md:bg-black bg-white ${glow ? 'glowing-element' : 'bg-white'}`}>
                <li className='md:text-6xl text-4xl mt-2 text-orange-600'><a href='https://www.linkedin.com/in/code-vivek/' target='blank'><ion-icon name="logo-linkedin"></ion-icon></a></li>
                <li className='md:text-6xl text-4xl mt-2 text-orange-600'><a href='https://github.com/vivek-raj03' target='blank'><ion-icon name="logo-github"></ion-icon></a></li>
                <li className='md:text-6xl text-4xl mt-2 text-orange-600'><a href='mailto:vivekraj322003@gmail.com' target='blank'><ion-icon name="mail-outline"></ion-icon></a></li>
                <li className='md:text-6xl text-4xl mt-2 text-orange-600'><a href='https://www.instagram.com/invites/contact/?i=63miwptx8qy3&utm_content=6kpkpxl' target='blank'><ion-icon name="logo-instagram"></ion-icon></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex w-full md:w-fit justify-center'>
          <img className=' md:w-96 md:h-96 h-60 w-60 mt-5 md:mt-48 ' src={vec1} alt='' />
        </div>
      </div>
    </>

  )
}

export default Home