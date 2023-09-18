import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const page = () => {
  return (
    <div className='flex flex-col gap-5 p-10 '>

      <div className='text-center '>
        <h1 className='text-2xl my-1'>CONTACT</h1>
        <h4>Lets get in touch. Send us a message</h4>
      </div>

    <div className='flex flex-col gap-2 text-l'>

    <div className='flex gap-2 '>
    <FontAwesomeIcon icon={faMapMarkerAlt} width={30} height={30} />
        <h3>Chicago, US</h3>
    </div>

    <div className='flex gap-2'>
    <FontAwesomeIcon icon={faPhone} width={30} height={30} />

        <h3>Phone: +00 151515</h3>
    </div>

    <div className='flex gap-2'>
    <FontAwesomeIcon icon={faEnvelope} width={30} height={30} />

        <h3>Email: mail@mail.com</h3>
    </div>

    </div>

    <div>
      <form className='w-full p-2 gap-5 flex flex-col'>
        <input type="text"  placeholder='Name' className='border-grey border-2 p-2'/>
        <input type="email"  placeholder='Email'className='border-grey border-2 p-2' />
        <input type="text"  placeholder='Subject'className='border-grey border-2 p-2' />
        <input type="text"  placeholder='Message'className='border-grey border-2 p-2' />
        <button className='w-40 bg-black text-white p-2'>SEND MESSAGE</button>
      </form>
    </div>
      


    </div>
  )
}

export default page
