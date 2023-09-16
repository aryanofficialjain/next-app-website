"use client"
import axios from 'axios'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { images } from '../../../next.config'

const Page = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get("https://picsum.photos/v2/list?page=1&limit=10"); // You can adjust the page and limit as needed
        const data = response.data;
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    getImages(); // Call the function to fetch images when the component mounts

  }, []); // Empty dependency array means this effect runs only once, on component mount

  return (
    <div className='w-full h-full gap-1  m-auto flex flex-col items-center justify-between py-8'>
      <h1 className='text-3xl'>Our Work</h1>
      <h3>What weve done for people</h3>

      <div className='flex items-center justify-evenly flex-wrap gap-5'>
        {images.map((image, i=2) => (
          <Image key={image.id} src={image.download_url} alt='images' width={400} height={300}/>
        ))}
      </div>
    </div>
  )
}

export default Page;
