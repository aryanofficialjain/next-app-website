import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full gap-1  m-auto flex flex-col items-center justify-between py-10'>
      <h1 className='text-3xl'>Our Work</h1>
      <h3>What we done for people</h3>
      <br />
      <div className='flex gap-5'>
        <img src="https://www.w3schools.com/w3images/tech_mic.jpg" alt="" />
        <img src="https://www.w3schools.com/w3images/tech_phone.jpg" alt="" />
        <img src="https://www.w3schools.com/w3images/tech_drone.jpg" alt="" />
        <img src="https://www.w3schools.com/w3images/tech_sound.jpg" alt="" />
      </div>
      <br />

      <div className='flex gap-5'> 
        <img src="https://www.w3schools.com/w3images/tech_tablet.jpg" alt="" />
        <img src="https://www.w3schools.com/w3images/tech_camera.jpg" alt="" />
        <img src="https://www.w3schools.com/w3images/tech_typewriter.jpg" alt="" />
        <img src="https://www.w3schools.com/w3images/tech_tableturner.jpg" alt="" />
      </div>
    </div>
  )
}

export default page
