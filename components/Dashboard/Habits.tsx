import React, { useEffect, useState } from 'react'
import { HiChevronDoubleRight, HiDotsCircleHorizontal, HiDotsVertical, HiPencil, HiTrash } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { removeHabit } from '../../app/slice/habitSlice'
import { RootState } from '../../app/store'
import { useAuth } from '../../context/auth-context'
import Calender from './Calender'
import HabitModal from './HabitModal'
interface Props {}

  const Habits = (props: Props) => {
    const dispatch = useDispatch()
  const habits = useSelector((state: RootState) => [state.habits])
  const [habitname, setHabitName] = React.useState<string[] | []>([])
  const [currentHabit, setCurrentHabit] = React.useState<string>()
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

   const [showModal, setShowModal] = useState(false)

   const ModalHandler = (e : React.MouseEvent) => {  
     e.preventDefault()
     setShowModal(!showModal)
     setCurrentHabit(e.currentTarget.id)
   }
  
  useEffect(() => {
    if(habits.length > 0){
      data(userID!)
    }else{
      console.log('no data')
    }
  })

  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  return (
    <div className="dark:bg-gray-900 dark:text-white">
    
      <div className='flex  flex-wrap  gap-5 md:px-2 justify-between items-center'>
        <div className='px-4 font-semibold'>MAY</div>
        <div className='flex  gap-5 px-5 md:gap-9 md:mr-14'>

      {weekdays.map((day, index) => (

          <div className='font-bold' key={index}>{day}</div>
          ))}
        </div>
          </div>
    <div className="bg-white shadow dark:bg-gray-900  sm:rounded-md">
    <ul role="list" className="divide-y divide-gray-200">
      {
      habitname.length > 0 ? 
      habitname?.map((element:string) => (
        <li key={element} >
          <div className="block dark:hover:bg-gray-700 hover:bg-gray-50">
            <div className="px-4 py-4 flex items-center sm:px-6">
              <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div className="truncate">
                  <div className="flex items-center gap-4 text-sm">
                    <p className="font-medium dark:text-rose-300 text-rose-600 truncate">{element}</p>
                    <HiPencil onClick={(e) => ModalHandler(e)} id={element} className='text-gray-400 cursor-pointer'/>
                    {showModal ? <HabitModal habitname={currentHabit} updateModal={ModalHandler} /> : null}
                  </div>
                
                </div>
                <div className="mt-4  sm:mt-0 sm:ml-5">
                  <div className="flex items-center gap-5 -space-x-1">
                    {showModal ? "" :
                    <Calender name={element} key={element}/>
                    }
                  <HiTrash className='dark:text-white cursor-pointer' onClick= {() => {dispatch(removeHabit(element))}}/>
                  </div>
                </div>
              </div>
              <div className="ml-5 flex-shrink-0">
              </div>
            </div>
          </div>
        </li>
      ))
      :
      <div className='flex justify-center items-center mt-10'>
        <h1 className='font-bold text-2xl'>Please add some Habits</h1> </div>
    }
    </ul>
  </div>
  </div>
  )
}

export default Habits