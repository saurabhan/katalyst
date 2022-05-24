import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Subhero from '../components/Subhero/Subhero'
import Features from '../components/Features/Features'
import Footer from '../components/Footer/Footer'
import { useAuth } from '../context/auth-context'
const Home: NextPage = () => {

  const {user} = useAuth()

  return (
    <div className="dark:bg-gray-900 dark:text-white">
        <Head>
          <title>Katalyst | Habit Tracker</title>
        </Head>
        <Navbar/>
        <Hero/>
        <Subhero/>
        <Features/>
        <Footer/>
    </div>
  )
}

export default Home
