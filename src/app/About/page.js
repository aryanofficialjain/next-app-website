import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const page = () => {
  return (
    <div className='flex flex-col gap-20 p-5 '>

      <div className='text-center py-5'>
        <h1 className='text-2xl'>ABOUT THE COMPANY</h1>
        <p className='text-l'>Key Features of our company</p>
      </div>

      <div className='flex gap-5 text-center'>
        
        <section className='flex flex-col gap-2'>
        <FontAwesomeIcon icon={faDesktop} width={100} height={100} className='m-auto' />
        <br />
          <h4 className='text-xl'>Responsive</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </section>

        <section className='flex flex-col gap-2'>
        <FontAwesomeIcon icon={faHeart} width={100} height={100} className='m-auto' />
        <br />
          <h4 className='text-xl'>Passive</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </section>

        <section className='flex flex-col gap-2'>
          <FontAwesomeIcon icon={faGem} width={100} height={100} className='m-auto' />
          <br />
          <h4 className='text-xl'>Design</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </section>

        <section className='flex flex-col gap-2'>
          <FontAwesomeIcon icon={faCog} width={100} height={100} className='m-auto' /><br />
          <h4 className='text-xl'>Support</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </section>

      </div>

    </div>
  )
}

export default page
// about