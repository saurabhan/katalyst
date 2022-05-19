import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import DashboardHeader from '../components/Dashboard/DashboardHeader'
import Stats from '../components/Dashboard/Stats'
import Navbar from '../components/Navbar/Navbar'

interface Props {}

const dashboard = (props: Props) => {
  return (
    <>
    <div className="dark:bg-gray-900 dark:text-white">

        <Navbar/>
        <DashboardHeader/>
        <Stats/>
        <Dashboard/>
    </div>
    </>
  )
}

export default dashboard