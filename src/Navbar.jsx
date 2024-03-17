import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({handleGlow}) => {
    let Links =[
      { name: "HOME", link: "/" },
      { name: "PROJECTS", link: "/projects" },
      { name: "ABOUT", link: "/about" },
    ];
    let [open,setOpen]=useState(false);
    
    
  return (
    <div className='  w-full fixed top-0 left-0 font-roberto'>
      <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl font-roberto text-white mr-1 pt-2'>
        Vivek
        </span>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <span className={`text-3xl ${open ? "text-orange-400":"text-white"} mr-1 pt-2`}>
      <ion-icon name={open ? 'close-outline':'menu-outline'}></ion-icon>
      </span>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.link} className='text-white hover:text-orange-400 duration-500'>{link.name}</Link>
            </li>
          ))
        }
        <button className='bg-orange-600 text-white py-2 px-6 rounded-full md:ml-8 hover:bg-orange-400 
    duration-500 hover:text-black font-roberto' onClick={handleGlow}>
      Contacts
    </button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar