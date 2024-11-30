import React from 'react'
import { assets } from '../assets/assets'

const Content = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
        CONTACT
        <span  className = 'text-gray-700 font-semibold'> US</span>
        </p>
      </div>
      <div className='my-10 flex flex-col justify-center md :flex-row-gap-10 mb-28 text-sm'>
        <img   className='w-full md:max-w-[360px]' src   ={assets.contact_image} alt = ''/>
      </div>
      <div className=''>
        <p>OUR OFFICE</p>
        <p>00000 Willms Station<br/>Suite 000, Washington, USA</p>
        <p>Tel: (000) 000-0000 <br/>Email: greatstackdev@gmail.com</p>
        <p>CAREERS AT PRESCRIPTO</p>
        <p>Learn more about our teams and job openings.</p>
        <button>Explore Jobs</button>
      </div>

    </div>
  )
}

export default Content