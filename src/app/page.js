import React from 'react'
import Hero from './Components/Hero'
import Hero_section from './Components/Hero_section'
import Hero_skill from './Components/Hero_skill'


const page = () => {
  return (
    <div>
      <Hero/>
      <Hero_section/>
      <Hero_skill/>
      <img src="https://www.w3schools.com/w3images/map.jpg" alt="" className='w-screen' />
    </div>
  )
}

export default page
