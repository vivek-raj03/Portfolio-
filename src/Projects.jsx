import React from 'react';
import Navbar from './Navbar';
import Pcard from './Pcard';

function Projects() {
  const cardData = [
    {
        title: "Portfolio",
        description: "Developed a versatile portfolio with React, Tailwind CSS, and JavaScript, showcasing proficiency in frontend technologies.",
        address: "http://vivek-raj-portfolio.vercel.app"
    },
    {
        title: "Another Title",
        description: "Another Description",
        address: "http://vivek-raj-portfolio.vercel.app"
    }
];
  return (
    <>
    <Navbar />
      <div className="bg-black w-full flex flex-row justify-center flex-wrap min-h-screen  text-white ">
        <div className='flex flex-wrap mt-[200px] justify-center md:space-x-2 md:space-y-0 space-y-2'>
          {cardData.map((data,index)=>(
            <Pcard key={index} data={data}></Pcard>
           ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
