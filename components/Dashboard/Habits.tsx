import React from 'react'
import ChevronRightIcon from 'react-icons/hi'
interface Props {}

const habit = [
    {
      id: 1,
      title: 'Running',
      closeDate: '2020-01-07',
      closeDateFull: 'January 7, 2020',
    },
    {
      id: 2,
      title: 'Cycling',
      closeDate: '2020-01-07',
      closeDateFull: 'January 7, 2020',
      
    },
    {
      id: 3,
      title: 'Meditation',
      closeDate: '2020-01-14',
      closeDateFull: 'January 14, 2020',
    },
  ]

const Habits = (props: Props) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
    <ul role="list" className="divide-y divide-gray-200">
      {habit.map((element) => (
        <li key={element.id}>
          <a href="#" className="block hover:bg-gray-50">
            <div className="px-4 py-4 flex items-center sm:px-6">
              <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div className="truncate">
                  <div className="flex text-sm">
                    <p className="font-medium text-rose-600 truncate">{element.title}</p>
                  </div>
                
                </div>
                <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                  <div className="flex overflow-hidden -space-x-1">
                   //add calender here
                  </div>
                </div>
              </div>
              <div className="ml-5 flex-shrink-0">
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Habits