import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'
import { useAuth } from '../../context/auth-context'

interface Props {}

const Navbar = (props: Props) => {
    const [themetoggle, setThemetoggle] = useState(true)
    const { user, logout } = useAuth()
    const router = useRouter()

  return (
    <nav className='container mx-auto flex justify-between items-center p-6'>
        <Link href="/" >
           <h1 className='text-2xl tracking-wider uppercase font-bold cursor-pointer'>Katalyst</h1>
        </Link>
        {user !== null ? <div  className='flex items-center font-bold'><Link href="dashboard" ><a className='hover:text-pink-400 transition-all'>Dashboard</a></Link></div> : 
        
        <div className='hidden md:flex items-center justify-center gap-x-8 font-medium '>
            
                <Link  href="" ><a className='hover:text-pink-400 transition-all'>Features</a></Link>
            
            
                <Link  href=""><a className='hover:text-pink-400 transition-all'>What's New</a></Link>
            
            
                <Link  href=""><a className='hover:text-pink-400 transition-all'>Pricing</a></Link>
            
        </div>
        }
        <div className='flex items-center gap-x-8'>
            <button onClick={() => setThemetoggle(!themetoggle)}>{themetoggle === true ? <HiMoon/> : <HiSun/>}</button>
            {user ? 
            <button className='font-bold hover:text-pink-400 transition-all ' onClick={() => {logout()}}>Log Out</button> :
            <button className='font-bold hover:text-pink-400 transition-all ' onClick={() => router.push('/login')}>Log in</button>
          }
          {
            user? "" :

          <button className='font-bold py-2 px-4 rounded-xl shadow-sm shadow-pink-300 hover:shadow-md hover:scale-105 transition-all active:scale-95 bg-pink-500 text-white' onClick={() => router.push('/login')} >Sign up</button> 
          }
        </div>
    </nav>
  )
}

export default Navbar