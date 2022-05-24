import { Card } from '@nextui-org/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

interface Props {}


const Stats = (props: Props) => {
  const progress = useSelector((state: RootState) => state.habits.progress)
  let count = 0
  let max = {}
  
 
  for (let k in progress) {
      let c = 0
      Object.values(progress[k]).forEach((element: any) => {
        element === true ? c++ : c = 0
        max = {...max, [k] : c} 
      })
      count += Object.values(progress[k]).filter(i => i === true).length

    }
  
  const streak : number[] = Object.values(max)

 

  const stats = [
      { name: 'Total Calories Burnt', value: `${Math.max(...streak) * count *100}` },
      { name: 'Streak', value: `${Math.max(...streak)} Days 🔥 `},
      { name: 'Points', value: `${count? count*10 : 0} Points` },
    ]

  return (
    <div className='container mx-auto p-4'>
    <h3 className="text-lg leading-6 font-medium dark:text-white text-gray-900">Total Stats</h3>
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      {stats.map((item) => (
        <Card key={item.name} className="px-4 py-5 dark:bg-gray-800  bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <h1 className="text-sm font-medium dark:text-gray-200 text-gray-500 truncate">{item.name}</h1>
          <h1 className="mt-1 text-3xl font-semibold dark:text-white text-gray-900">{item.value}</h1>
        </Card>
      ))}
    </dl>
  </div>
  )
}

export default Stats