import React from 'react';
import { CalendarDays } from 'lucide-react';


import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 pb-8'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <h2 className='text-red-600 text-2xl font-semibold'>Software Developer Intern</h2>
            <hr />
            <div>
            <h3 className='text-red-600 text-lg font-semibold '>Elimn Limited</h3>
                <div className='flex gap-x-2  items-center justify-center'>
                <CalendarDays className='h-4 w-4 text-gray-200'/>
                    <p>06/2022 - 12/2023</p>
                </div>
            </div>
            <p className='mt-3'>
            As a Software Development Intern at Elimn limited (automotive company), I had a significant role in optimizing their operations using Zoho One. Here’s a brief summary of my contributions
            </p>
            <h2 className='mt-2 text-red-600 text-lg font-semibold'>Custom Functions using Zoho Deluge (Automation)</h2>
            <ul className='space-y-5 '>
                <li className=' list-disc'>Collaborated with a cross-functional team to develop a custom convert function, associated with a button, that automated the conversion of a lead to a deal, ensuring all relevant lead information was transferred to the deal. </li>
                <li className=' list-disc'>Integrated Zoho Books with Zoho CRM and created a function to push a deal in Zoho CRM to the closed-won stage whenever an invoice was generated in Zoho Books.</li>
                <li className=' list-disc'>In zoho crm Deals module, created a custom function that would autopopulate field values from the associated contact of a deal during deal creation. It would then be associated with a workflow rule that keeps track of when a deal is created or edited. This function improved the efficiency of data management within the CRM</li>
                <li className=' list-disc'>Contributed to the development of a custom function that would send a thank you sms notification to clients 3 hours after service delivery. The content of the message would also include a link to google where clients would leave a review. The function would also be associated with a workflow rule to track the customers who would receive the notification</li>
            </ul>

            <h2 className='mt-2 text-red-600 text-lg font-semibold'>Creation of workflow rules</h2>
            <ul>
                <li className=' list-disc'>Created workflow rules to help automate repetitive tasks within the sales, marketing, and support processes</li>
            </ul>

            <h2 className='mt-2 text-red-600 text-lg font-semibold'>Customization</h2>
            <ul>
                <li className=' list-disc'>Used built in canvas feature to redesign various modules such as job card module to better align with the company's needs</li>
            </ul>

            
      </div>
    </div>
  );
};

export default Skills;
