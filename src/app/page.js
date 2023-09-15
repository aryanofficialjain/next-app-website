"use client"
import React from 'react'
import Hero from './Components/Hero'
import Hero_section from './Components/Hero_section'
import Hero_skill from './Components/Hero_skill'
import Image from 'next/image'


<time datetime="2016-10-25" suppressHydrationWarning />



const page = () => {
  return (
    <div>
      <Hero/>
      <Hero_section/>
      <Hero_skill/>
      <div>
        <Image src={'/map.jpg'} alt="map image" width={1280} height={720} />
      </div>
    </div>
  )
}

export default page
