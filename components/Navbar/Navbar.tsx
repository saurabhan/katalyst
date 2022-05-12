import Link from 'next/link'
import React, { useState } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'

interface Props {}

const Navbar = (props: Props) => {
    const [themetoggle, setThemetoggle] = useState(true)

  return (
    <nav className='container mx-auto flex justify-between items-center p-6'>
        <Link href="/" >
           <h1 className='text-2xl tracking-wider uppercase font-bold cursor-pointer'>Katalyst</h1>
        </Link>
        <div className='hidden md:flex items-center justify-center gap-x-8 font-medium '>
            
                <Link  href="" ><a className='hover:text-pink-400 transition-all'>Features</a></Link>
            
            
                <Link  href=""><a className='hover:text-pink-400 transition-all'>What's New</a></Link>
            
            
                <Link  href=""><a className='hover:text-pink-400 transition-all'>Pricing</a></Link>
            
        </div>
        <div className='flex items-center gap-x-8'>
            <button onClick={() => setThemetoggle(!themetoggle)}>{themetoggle === true ? <HiMoon/> : <HiSun/>}</button>
            <button className='font-bold '>Log in</button>
            <button className='font-bold py-2 px-4 rounded-xl shadow-sm shadow-pink-300 hover:shadow-md hover:scale-105 transition-all active:scale-95 bg-pink-500 text-white' >Sign up</button>
        </div>
    </nav>
  )
}

export default Navbar