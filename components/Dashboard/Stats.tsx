import { Card } from '@nextui-org/react'
import React from 'react'

interface Props {}

const stats = [
    { name: 'Total Calories Burnt', value: '71,897' },
    { name: 'Streak', value: '588 Days 🔥' },
    { name: 'Avg. Streak', value: '24 Days' },
  ]

const Stats = (props: Props) => {
  return (
    <div className='container mx-auto p-4'>
    <h3 className="text-lg leading-6 font-medium text-gray-900">Total Stats</h3>
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      {stats.map((item) => (
        <Card key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <h1 className="text-sm font-medium text-gray-500 truncate">{item.name}</h1>
          <h1 className="mt-1 text-3xl font-semibold text-gray-900">{item.value}</h1>
        </Card>
      ))}
    </dl>
  </div>
  )
}

export default Stats