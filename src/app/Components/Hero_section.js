import React from 'react'

const Hero_section = () => {
  return (
    <div className='flex flex-row-reverse items-center justify-between p-10 gap-10 bg-slate-300' w-full h-full>
      {/* <img src="https://www.w3schools.com/w3images/phone_buildings.jpg" alt="" /> */}

      <div className='flex flex-col gap-5 '>
        <h1 className='text-2xl text-left'>We know design</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse eius recusandae fugit commodi neque odit nam adipisci tenetur pariatur ipsum.</p>
        <button className='border-2 border-black w-1/4 p-2 m-auto '>View Our Work</button>
      </div>
    </div>
  )
}

export default Hero_section
