import React from 'react'
import axios from 'axios';

const page = () => {
  return (
    <div className='py-7 w-screen flex flex-col gap-5 p-4 bg-zinc-200'>

      <div className=' text-center'>
        <h1 className='text-2xl'>PRICING</h1>
        <p>Choose your princing plan to fits your needs</p>
      </div>

      <div className='flex items-center justify-between text-center gap-7'>

        <section className='w-1/3 flex flex-col gap-1 bg-white '>
          <h1 className='p-5 bg-black text-white'>Basic</h1>
          <br />
          <ul className='flex flex-col gap-4 p-5'> 
            <li>10GB Storage</li>
            <li>10 Emails</li>  
            <li>10 Domains</li>
            <li>Endless Support</li>
          </ul>

          <div className='p-4'>
            <h1 className='text-2xl'>$ 10</h1>
            <p>per month</p>
          </div>

          <div className='p-6'>
            <button className='p-3 bg-black text-white'>Sign Up</button>
          </div>

        </section>
        

        <section className='w-1/3 gap-1 flex-col bg-white '>
        <h1 className='p-5 bg-black text-white'>Pro</h1>
        <br />
          <ul className='flex flex-col gap-4 p-5'>
            <li>25GB Storage</li>
            <li>25 Emails</li>  
            <li>25 Domains</li>
            <li>Endless Support</li>
          </ul>

          <div className='p-4'>
            <h1 className='text-2xl'>$ 25</h1>
            <p>per month</p>
          </div>

          <div className='p-6'>
            <button className='p-3 bg-black text-white'>Sign Up</button>
          </div>
        </section>

        <section className='w-1/3 mt-4 bg-white '>
        <h1 className='p-5 bg-black text-white'>Premium</h1>
        <br />
          <ul className='flex flex-col gap-4 p-5'>
            <li>50GB Storage</li>
            <li>50 Emails</li>  
            <li>50 Domains</li>
            <li>Endless Support</li>
          </ul>

          <div className='p-4'>
            <h1 className='text-2xl'>$ 50</h1>
            <p>per month</p>
          </div>

          <div className='py-6'>
            <button className='p-3 bg-black text-white'>Sign Up</button>
          </div>
        </section>

      </div>
      
    </div>
  )
}

export default page
