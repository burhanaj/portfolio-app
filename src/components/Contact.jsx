import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0c1c35] flex justify-center align-items-center items-center p-8' id='contact'>
        <form method='POST' action="https://getform.io/f/eb7178cc-4a4f-455e-bdda-604bfce64b61" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#1E3F66] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - <a className='underline hover:underline-offset-6 text-white hover:bg-[#ccd6f6] hover:text-[#0c1c35]' href="mailto:burhanajmer95@gmail.com" target="_blank"> burhanajmer95@gmail.com</a></p>
            </div>
            <input className='rounded-md my-4 bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='rounded-md my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <input className='rounded-md my-4 p-2 bg-[#ccd6f6]' type="tel" placeholder='Phone Number' name='phoneNumber' />
            <textarea className='rounded-md my-4 bg-[#ccd6f6] p-2' name="message" rows="8" placeholder='Message'></textarea>
            <button className='rounded-md text-white border-2 hover:bg-[#ccd6f6] hover:border-[#ccd6f6] hover:text-[#0c1c35] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact