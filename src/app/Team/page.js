import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-5 p-2.5 '>
      <div className='text-center py-5'>
        <h1 className='text-3xl py-2'>Our Teams</h1>
        <p className='text-l'>The ones who run this company</p>
      </div>

      <div className='flex items-center justify-evenly gap-10'>
        
        <section>
          <Image src={'/1.jpg'} alt={'Teams'} width={300} height={300} />
          <div className='p-2 flex flex-col gap-3'>
            <h1>John Doe</h1>
            <p>CEO & Founder</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <br/>
            <button className='bg-black text-white p-1.5'>Contact</button>
          </div>
        </section>

        <section>
          <Image src={'/2.jpg'} alt={'Teams'} width={300} height={300} />
          <div className='p-2 flex flex-col gap-3'>
            <h1>Anja Doe</h1>
            <p>Art Director</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <br/>
            <button className='bg-black text-white p-1.5'>Contact</button>
          </div>
        </section>

        <section>
          <Image src={'/3.jpg'} alt={'Teams'} width={300} height={300} />
          <div className='p-2 flex flex-col gap-3'> 
            <h1>Mike Ross</h1>
            <p>Web Designer</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <br/>
            <button className='bg-black text-white p-1.5'>Contact</button>
          </div>
        </section>

        <section>
          <Image src={'/4.jpg'} alt={'Teams'} width={300} height={300} />
          <div className='p-2 flex flex-col gap-3'>
            <h1>Dan Star</h1>
            <p>Designer</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <br/>
            <button className='bg-black text-white p-1.5'>Contact</button>
          </div>
        </section>

      </div>
    </div>
  )
}

export default page
