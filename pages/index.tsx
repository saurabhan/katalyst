import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Subhero from '../components/Subhero/Subhero'
import Features from '../components/Features/Features'
import Footer from '../components/Footer/Footer'
const Home: NextPage = () => {
  return (
    <div className=''>
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
