import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { useAuth } from '../../context/auth-context'
import Calender from './Calender'
interface Props {}

  const Habits = (props: Props) => {
  const habits = useSelector((state: RootState) => [state.habits])
  const [habitname, setHabitName] = React.useState<string[] | []>([])
  const { user } = useAuth()
  const userID = user?.uid
   const data = (id: string) => {
     try {
       if(habits.find((habit:any) => habit.user === id)){
         const index = habits.findIndex((habit:any) => habit.user === id)
          setHabitName(habits[index].habitNames!)
       }
     } catch (error) {
       console.log(error)
     }
   }
  
  useEffect(() => {
    if(habits.length > 0){
      data(userID!)
    }else{
      console.log('no data')
    }
  })

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return (
    <div className="bg-white shadow overflow-y-scroll sm:rounded-md">
      <div className='flex  flex-wrap  gap-5 md:px-6 justify-between items-center'>
        <div className='px-4 font-semibold'>MAY</div>
        <div className='flex  gap-5 px-5 md:gap-9 md:px-7'>

      {weekdays.map((day, index) => (

          <div className='font-bold' key={index}>{day}</div>
          ))}
        </div>
          </div>
    <ul role="list" className="divide-y divide-gray-200">
      {
      habitname.length > 0 ? 
      habitname?.map((element:string) => (
        <li key={element}>
          <a href="#" className="block hover:bg-gray-50">
            <div className="px-4 py-4 flex items-center sm:px-6">
              <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div className="truncate">
                  <div className="flex text-sm">
                    <p className="font-medium text-rose-600 truncate">{element}</p>
                  </div>
                
                </div>
                <div className="mt-4  sm:mt-0 sm:ml-5">
                  <div className="flex  -space-x-1">
                    <Calender name={element} key={element}/>
                  </div>
                </div>
              </div>
              <div className="ml-5 flex-shrink-0">
              </div>
            </div>
          </a>
        </li>
      ))
      :
      <div className='flex justify-center items-center mt-10'>
        <h1 className='font-bold text-2xl'>Please add some Habits</h1> </div>
    }
    </ul>
  </div>
  )
}

export default Habits