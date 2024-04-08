import React from 'react';
import ReactImg from "../assets/react.png"
import NodeJs from "../assets/node.png"
import Mysql from "../assets/MySQL.png"
import Java from "../assets/java.png"
import SpringBoot from "../assets/Spring boot.png"
import Github from "../assets/github.png"
import Deluge from "../assets/Deluge.png"

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-2xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Amos Kimani, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div>
          <div className='mt-3'>
              <h3 className='text-red-600 text-2xl text-center font-semibold mb-3 p-3'>Tech Stack</h3>
              <ul className='mt-2 flex space-x-20 mb-8 font-semibold text-sm'>
                <div className='flex flex-col justify-center items-center space-y-2 cursor-pointer'>
                  <img src={ReactImg} className=' h-11 w-11 object-cover' alt="" />
                  <li className=' cursor-pointer hover:underline'>ReactJs </li>
                </div>
                <div className='flex flex-col justify-center items-center space-y-2 cursor-pointer'>
                  <img src={NodeJs} className=' h-11 w-11 object-cover' alt="" />
                  <li className=' cursor-pointer hover:underline'>Nodejs</li>
                </div>
                <div className='flex flex-col justify-center items-center space-y-2 cursor-pointer'>
                  <img src={Mysql} className=' h-11 w-11 object-cover' alt="" />
                  <li className=' cursor-pointer hover:underline'>SQL</li>
                </div>
              </ul>
                <ul className='mt-2 flex space-x-3 font-semibold text-lg'>

                <div className='flex flex-col justify-center items-center space-y-2 cursor-pointer'>
                  <img src={Java} className=' h-11 w-11 object-cover' alt="" />
                  <li className=' cursor-pointer hover:underline'>Java</li>
                </div>
                <div className='flex flex-col justify-center items-center space-y-2 cursor-pointer'>
                  <img src={SpringBoot} className=' h-11 w-11 object-cover' alt="" />
                  <li className=' cursor-pointer hover:underline'>Spring boot</li>
                </div>
                <div className='flex flex-col justify-center items-center space-y-2 cursor-pointer'>
                  <img src={Github} className=' h-11 w-11 object-cover' alt="" />
                  <li className=' cursor-pointer hover:underline'>Git/Github</li>
                </div>
                <div className='flex flex-col justify-center items-center space-y-2 cursor-pointer'>
                  <img src={Deluge} className=' h-11 w-11 object-cover' alt="" />
                  <li className=' cursor-pointer hover:underline'>Zoho Deluge</li>
                </div>
              </ul>
          </div>
      </div>
    </div>
  );
};

export default About;