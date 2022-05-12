import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import DashboardHeader from '../components/Dashboard/DashboardHeader'
import Stats from '../components/Dashboard/Stats'
import Navbar from '../components/Navbar/Navbar'

interface Props {}

const dashboard = (props: Props) => {
  return (
    <>
        <Navbar/>
        <DashboardHeader/>
        <Stats/>
        <Dashboard/>
    </>
  )
}

export default dashboard