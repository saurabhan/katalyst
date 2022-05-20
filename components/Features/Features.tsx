import React from 'react'

import {FaBrain, FaPlus, FaBicycle, FaRunning, FaCog, FaDatabase} from 'react-icons/fa'

interface Props {}
const features = [
    {
      name: 'Meditaion',
      description: 'Track daily meditaions',
      icon: FaBrain,
    },
    {
      name: 'Multiple Habits',
      description: 'Track Multiple habits, as much as you want.',
      icon: FaPlus,
    },
    {
      name: 'Running Tracking',
      description: 'Track your Running records in one place',
      icon: FaRunning,
    },
    {
      name: 'Bycycle Tracking',
      description: 'Track your Cycle records in one place',
      icon: FaBicycle,
    },
    {
      name: 'Powerful API',
      description: 'Connect with Google Fit, Apple Watch and many more.',
      icon: FaCog,
    },
    {
      name: 'Database Backups',
      description: 'Secure and private database backups, so you can restore with a peace of mind.',
      icon: FaDatabase,
    },
  ]

const Features = (props: Props) => {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold uppercase tracking-wider text-rose-600">Features</h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to know about Katalyst
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Katalyst is the minimal and one stop solution for habit tracking.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-orange-500 p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features