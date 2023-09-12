import React from 'react'

const Hero_skill = () => {
  return (
    <div className='flex flex-row-reverse items-center justify-between p-5 w-full h-full'>
      <div className=' flex flex-col gap-2 p-5'>
        <h1 className='text-2xl'>Our Skills</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptatem magni facilis, veritatis aspernatur quae architecto repellendus. Unde, nemo quia.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, odio?</p>
      </div>

      <div className='w-full  p-10 m-5'>
        
        <section className='mb-5 flex flex-col gap-2'>
            <h3 className='text-xl'>Photography</h3>
            <div className='w-full  bg-slate-300 '><h1 className='bg-red-400 text-center w-11/12 p-1'>90%</h1></div>
        </section>

        <section className='mb-5 flex flex-col gap-2'>
            <h3 className='text-xl'>Web Design</h3>
            <div className='w-full  bg-slate-300 '><h1 className='bg-red-400 text-center w-4/5 p-1'>80%</h1></div>
        </section>
        
        <section className='mb-5 flex flex-col gap-2'>
            <h3 className='text-xl'>Photoshop</h3>
            <div className='w-full  bg-slate-300 '><h1 className='bg-red-400 text-center w-3/4 p-1'>70%</h1></div>
        </section>
        
      </div>
    </div>
  )
}

export default Hero_skill
