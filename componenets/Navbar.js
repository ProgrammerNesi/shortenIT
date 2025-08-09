import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <nav className='h-12 bg-[#A2AF9B] text-[#EEEEEE] flex justify-between items-center px-4'>
        <Link href={"/"}><div className='font-extrabold md:text-2xl text-xl'>Shorten<span className='text-[#DCCFC0]'>IT</span></div></Link>
        <ul className='flex gap-3'>
            <Link href={"/"}><li className='md:text-lg text-sm font-semibold'>Home</li></Link>
            <Link href={"/shorten"}><li className='md:text-lg text-sm font-semibold'>Github</li></Link>
            <Link href={"/shorten"}><li className='md:text-lg text-sm font-semibold'>Shorten</li></Link>
            
        </ul>
    </nav>
  )
}
