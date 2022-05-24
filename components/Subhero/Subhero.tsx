import React from 'react'
import {FaGoogle, FaApple, FaFacebook, FaTwitter, FaSpotify, FaMicrosoft} from 'react-icons/fa'

interface Props {}

const Subhero = (props: Props) => {
  return (
    <div className="bg-rose-50 dark:bg-rose-900 dark:text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold dark:text-white text-gray-900 sm:text-4xl">
              Used by the world's most loved companies
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-white">
              Katalyst provides a great feature set that makes it easy to and create second brain which helps users create knowledge base.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
                >
                  Create Account
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2 ">
            <div className="col-span-1 flex justify-center items-center gap-3 py-8 px-8 dark:bg-gray-500 bg-gray-50">
            

                <FaGoogle className='h-10 w-10'/>
                <h1 className='font-bold text-gray-400 text-2xl'>Google</h1>
               
            </div>
            <div className="col-span-1 flex justify-center items-center gap-3 py-8 px-8 dark:bg-gray-500 bg-gray-50">
               <FaApple className='h-10 w-10'/>
               <h1 className='font-bold text-gray-400 text-2xl'>Apple</h1>
            </div>
            <div className="col-span-1 flex justify-center items-center gap-3 py-8 px-8 bg-gray-50 dark:bg-gray-500">
              <FaFacebook className='h-10 w-10'/>
              <h1 className='font-bold text-gray-400 text-2xl'>Facebook</h1>
            </div>
            <div className="col-span-1 flex justify-center  items-center gap-3 py-8 px-8 bg-gray-50 dark:bg-gray-500">
             <FaTwitter className='h-10 w-10'/>
             <h1 className='font-bold text-gray-400 text-2xl'>Twitter</h1>
            </div>
            <div className="col-span-1 flex justify-center items-center gap-3 py-8 px-8 bg-gray-50 dark:bg-gray-500">
             <FaSpotify className='h-10 w-10'/>
             <h1 className='font-bold text-gray-400 text-2xl'>Spotify</h1>
            </div>
            <div className="col-span-1 flex justify-center items-center gap-3 py-8 px-8 bg-gray-50 dark:bg-gray-500">
            <FaMicrosoft className='h-10 w-10'/>
             <h1 className='font-bold text-gray-400 text-2xl'>Microsoft</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subhero