import { Input } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useAuth } from '../context/auth-context'

interface Props {}

const login = (props: Props) => {
    const [email, setEmail] = React.useState<string | ''>('')
    const [password, setPassword] = React.useState<string | ''>('')
    const [username, setUsername] = React.useState<string |''>('')
    const { signIn, signUp, user, logout } = useAuth()
    const [login, setLogin] = React.useState<boolean>(true)
    

    const handleSubmit =  (e: React.MouseEvent, email:string, password:string, username?:string) => {
      e.preventDefault()    
      if (login) {
        signIn(email, password)
      } else {
        signUp(email, password, username!)
      }
    }

    if(user) {
        return (
          <div className="dark:bg-gray-900 dark:text-white min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h1 className="text-2xl font-bold text-center mx-auto h-12 w-auto">KATALYST</h1>
          <div>
            <h1 className='font-bold text-2xl p-2'>Welcome, {user.displayName}</h1>
          
          <button
          onClick={() => logout()}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
      >
        Logout
      </button>
      </div>
      </div>
      </div>
        )
    }
  return (
    <>
    <div className="dark:bg-gray-900 dark:text-white min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h1 className="text-2xl font-bold text-center mx-auto h-12 w-auto">KATALYST</h1>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign {login ? 'in' : 'Up'} to your account</h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white dark:bg-gray-600 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6 justify-center" action="#" method="POST">
                <div className='flex flex-col space-y-10 justify-center'>
                  {login ? "" :
              <Input size='lg' width='360px' labelPlaceholder='Username' onChange={(e) => setUsername(e.target.value)}></Input>
                  }
              <Input size='lg' width='360px' labelPlaceholder='Enter your email' onChange={(e) => setEmail(e.target.value)}></Input>
              <Input.Password size='lg' width='360px' labelPlaceholder='Password' onChange={(e) => setPassword(e.target.value)}></Input.Password>

                </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm dark:text-white text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="dark:text-rose-300 font-medium text-rose-600 hover:text-rose-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
                <div className="text-sm">
                  <Link href="login" shallow={true} >
                    <a onClick={() => setLogin(!login)}  className="font-medium text-center dark:text-rose-300 text-rose-600 hover:text-rose-500">{login ? 'Create a new Account' : 'Sign In to Exisitng Account'}</a>
                  </Link>
                </div>

              <div>
                {login ? 
                <button
                    onClick={(e) => handleSubmit(e, email, password)}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                >
                  Sign in
                </button>:
                <button
                onClick={(e) => handleSubmit(e, email, password, username)}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
            >
              Sign Up
            </button>
                }
                <button
                onClick={(e) => handleSubmit(e, 'guest@guest.com', 'guest123')}
                  className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-300"
                >
                  Use Guest Login
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 flex justify-center ">
                  

                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <FaGoogle/>
                  </a>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default login