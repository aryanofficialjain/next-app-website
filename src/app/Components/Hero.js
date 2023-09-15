import React from 'react';

const Hero = () => {
  return (
    <div className='px-10 flex items-center justify-between w-full h-screen hero text-white ' id='1'>
      <div className='flex items-start flex-col gap-10'>
        <h1 className='text-6xl'>Start Something That Matters</h1>
        <p className='text-xl'>Stop wasting valuable time with projects that just isn&apos;t you.</p>
        <button className='text-l border-2 border-black p-3 bg-slate-500'>Learn more and start today</button>
      </div>
    </div>
  );
}

export default Hero;
