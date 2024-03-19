import React from 'react'
import Navbar from './Navbar'
import Pcard from './Pcard'
function Projects() {
  return (
    <>
    <Navbar></Navbar>
    <div className='w-full h-[100vh] bg-black 
    mt-[75px] md:mt-19'>
      <Pcard></Pcard>
    </div>
    </>
  )
}

export default Projects