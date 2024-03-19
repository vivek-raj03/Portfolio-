import React, { useEffect } from 'react'
import Navbar from './Navbar'
import java from './assets/java.svg'
import C from './assets/C.svg'
import Python from './assets/Python.svg'
import CPP from './assets/CPP.svg'
import react from './assets/react.svg'
import mongo from './assets/mongo.svg'
import nodejs from './assets/nodejs.svg'
import express from './assets/express.svg'
import './svgcolor.css'
import giticon from './assets/giticon.svg'
import github from './assets/github.svg'
import mysql from './assets/mysql.svg'
import vec2 from './assets/vec2.png'
import './Border.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function About() {
  useEffect(()=>{
      AOS.init({duration:2000});
  },[]);
  return (
    <>
      <Navbar data-aos="fade-down"></Navbar>

      <div className="bg-black  w-full z-[-99]  flex md:flex-col flex-col   text-white  font-roberto overflow-x-hidden">
        <div className='w-full flex justify-center'>
          <div className=" mt-28 md:mt-40 flex w-3/4 flex-col font-roberto">
            <div className='text-4xl text-orange-600 mb-3 text-shadow'data-aos="fade-right">Hello, and welcome to my portfolio!</div>
            <div data-aos="fade-right">
            <p className='mb-3' >I am a passionate and driven B.Tech Computer Science student currently pursuing my education at Chitkara University. With a fervent curiosity for technology and a determination to make a meaningful impact in the world of computing, I immerse myself in every aspect of my field.</p>
            <p className='mb-3'>Throughout my academic journey, I have embraced challenges and sought out opportunities to expand my knowledge and skills. Whether it's delving into complex algorithms, exploring the latest developments in artificial intelligence, or honing my coding abilities, I approach each task with enthusiasm and a desire to learn.
            </p>
            <p className='mb-3'>Beyond the classroom, I am active not only in participating but also in organising extracurricular activities, from hackathons to coding competitions, where I thrive in collaborative environments and enjoy applying my skills to real-world problems. These experiences have not only enhanced my technical proficiency but also taught me the value of teamwork, communication, and adaptability.
            </p>
            <p className='mb-3'>As I continue to grow and evolve as a computer science enthusiast, I am excited about the endless possibilities that lie ahead. Whether it's developing innovative solutions to societal challenges, contributing to cutting-edge research, or creating transformative software, I am committed to making a difference in the ever-evolving landscape of technology.</p>
            <p className='mb-3'>Thank you for taking the time to learn a little bit about me. I invite you to explore my portfolio further and discover the projects and experiences that have shaped my journey thus far.</p>
            </div>

            <div className='text-4xl text-orange-600 mb-3 text-shadow'data-aos="fade-right">Skills</div>
            <div className='md:flex-row flex-col flex md:space-x-5 md:space-y-0 space-y-4 items-center'>
              <div className='bg-black w-96 h-96 text-white flex flex-col justify-center items-center border-2 box border-slate-50 rounded-xl' data-aos="fade-left">
                <span className='text-3xl font-roberto mb-4 text-orange-500'>Technical Skills</span>
                <ul className='flex space-x-5'>
                  <li><img src={java} alt='' className='w-12 mb-4' /></li>
                  <li><img src={C} alt='' className='w-12 mb-4' /></li>
                  <li><img src={CPP} alt='' className='w-12 mb-4' /></li>
                  <li><img src={Python} alt='' className='w-12 mb-4' /></li>
                </ul>
                <p className='text-center'>Proficient in<span className='text-orange-600'>Java</span>  with expertise in C, C++, and Python, showcasing versatile programming skills across multiple languages. adept at crafting robust solutions and leveraging diverse toolsets to tackle complex challenges.</p>
              </div>
              <div className='bg-black w-96 h-96 text-white flex flex-col justify-center items-center border-2 border-slate-50 rounded-xl box'data-aos="zoom-in">
                <span className='text-3xl font-roberto mb-4 text-orange-600'>Web Development</span>
                <ul className='flex space-x-5'>
                  <li><img src={mongo} alt='' className='w-12 mb-4' /></li>
                  <li><img src={express} alt='' className='w-12 mb-4 express-image' /></li>
                  <li><img src={react} alt='' className='w-12 mb-4' /></li>
                  <li><img src={nodejs} alt='' className='w-12 mb-4' /></li>
                </ul>
                <p className='text-center'>Skilled in <span className='text-orange-600'>MERN</span> stack development, adeptly utilizing<span className='text-orange-600'>HTML</span> ,<span className='text-orange-600'>CSS</span>, and <span className='text-orange-600'>Tailwind CSS</span> to craft dynamic and responsive web applications. Proficient in front-end design and back-end implementation.</p>
              </div>
              <div className='bg-black w-96 h-96 text-white flex flex-col justify-center items-center border-2 border-slate-50 rounded-xl box'data-aos="fade-right">
                <span className='text-3xl font-roberto mb-4 text-orange-600'> Version Control</span>
                <ul className='flex space-x-5'>
                  <li><img src={giticon} alt='' className='w-12 mb-4' /></li>
                  <li><img src={github} alt='' className='w-12 mb-4 express-image' /></li>
                </ul>
                <p className='text-center'>Proficient in version control utilizing  <span className='text-orange-600'>Git</span> and <span className='text-orange-600'>GitHub</span> , adept at managing code repositories and collaborating seamlessly within development teams. Experienced in leveraging Git's robust features.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='md:flex-row flex-col flex md:space-x-5 md:space-y-0 space-y-4 items-center justify-center mt-5'>
          <div className='bg-black w-96 h-96 text-white flex flex-col justify-center items-center border-2 border-slate-50 rounded-xl box'data-aos="fade-left">
            <span className='text-3xl font-roberto mb-4 text-orange-600'> Database</span>
            <ul className='flex space-x-5'>
              <li><img src={mysql} alt='' className=' w-20 mb-4' /></li>
              <li><img src={mongo} alt='' className='w-12 mb-4' /></li>
            </ul>
            <p className='text-center'>Experienced in database management with MongoDB, proficiently integrating it into projects for efficient data storage and retrieval. Additionally, possess foundational knowledge of MySQL, demonstrating versatility in database technologies and adaptability to diverse project requirements.</p>
          </div>
          <div className='bg-black w-96 h-96 text-white flex flex-col justify-center items-center border-2 border-slate-50 rounded-xl box'data-aos="fade-right">
            <span className='text-3xl font-roberto mb-4 text-orange-600'> Soft Skills</span>
            <ul className='flex space-x-5'>
              <li><img src={vec2} alt='' className='w-32 mb-4' /></li>
            </ul>
            <p className='text-center'> Emotional Intelligence, Time Management, Interpersonal Communication, Adaptability, Problem-solving, Teamwork,  Creativity, Multitasking, Leadership, Flexibility, Designing Skills Creativity.</p>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <div className=" mt-7 flex md:w-1/2 w-3/4 flex-col font-roberto border-2 items-center border-slate-50 pt-3 pb-3 rounded-xl box"data-aos="zoom-in">
           <div className='text-4xl text-orange-600 mb-3 text-shadow'>Education</div>
           <sapn className='text-2xl text-orange-600 '> B.E. in Computer Science Engineering:</sapn>Chitkara University - 2021-2025
           <sapn className='text-2xl text-orange-600 mt-3'> Higher Secondary School :</sapn>OP Jindal School, Ramgarh - 2019- 2021
           <sapn className='text-2xl text-orange-600 mt-3'> Secondary School :</sapn>OP Jindal School, Ramgarh - 2018- 2019
          </div>
        </div>
      </div>
    </>
  )
}

export default About