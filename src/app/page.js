"use client"
import React from 'react'
import Hero from './Components/Hero'
import Hero_section from './Components/Hero_section'
import Hero_skill from './Components/Hero_skill'
import Image from 'next/image'
import Footer from './Components/Footer'


const page = () => {
  return (
    <div>
      <Hero/>
      <Hero_section/>
      <Hero_skill/>
      <div>
        <Image src={'/map.jpg'} alt="map image" width={1440} height={200} />
      </div>
      <Footer/>
    </div>
  )
}

export default page
