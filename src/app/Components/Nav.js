import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='w-100 flex items-center justify-between p-5 bg-black text-white sticky top-0'>
        <div className='cursor-pointer'>
            L O G O
        </div>

        <div className='flex gap-10 mr-10'>
            <Link href="http://localhost:3000/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact</Link>
            <Link href="/Team">Team</Link>
            <Link href="/Work">Work</Link>
            <Link href="/Pricing">Pricing</Link>
        </div>
    </div>
  )
}

export default Nav
