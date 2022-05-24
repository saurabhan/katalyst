import { Card, Input } from '@nextui-org/react'
import React from 'react'
import { useDispatch, useSelector,} from 'react-redux'
import { addHabit } from '../../app/slice/habitSlice'
import { RootState } from '../../app/store'
import { useAuth } from '../../context/auth-context'
import { formatISO, parseISO } from 'date-fns'

interface Props {
  uid : string
  habitName : string
  habitDescription : string
  habitFrequency : string
  startDate : string
  endDate : string
}

const HabitModal = (props: any) => {
    const habits = useSelector((state : RootState) => state.habits)
    
    const dispatch = useDispatch()
    const {user} = useAuth()
    const uid = user?.uid
    const [habitName, setHabitName] = React.useState<string>(props.habitname)
    const [startDate, setStartDate] = React.useState<string>(habits.startDate!)
    const [endDate, setEndDate] = React.useState<string>(habits.endDate!)
    const [activeDays, setActiveDays] = React.useState<string[]>([])
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    console.log(habitName)
    
    const data =  {
            uid,
            habitName,
            startDate,
            endDate,
        }


  return (
    <Card className="absolute inset-0 py-5  dark:bg-gray-500 bg-white shadow rounded-lg  sm:p-6">
          <Card.Header className="flex justify-between">
            <h1 className="text-3xl font-bold">
              {habitName ? habitName : 'Add Habit'}
            </h1>
            <button onClick={props.updateModal} className="mr-6 rounded-xl bg-rose-500 px-5 py-3 font-bold text-white">
              Close
            </button>
          </Card.Header>
            <Card.Body>
                <div className="flex flex-col gap-3 items-center  justify-between">
                    <div className='flex gap-5'>
                    <Input onChange={(e) => setHabitName(e.target.value)} className="w-50" label="Habit Name" value={habitName} />
                    <Input className="w-50 " label="Goal" value={habitName}/>

                    </div>
                    <div className='flex gap-5'>
                        
                    <Input onChange={(e) => setStartDate(e.target.value)} type="date" className="w-50" label="Start Date"   value={startDate}/>
                    <Input onChange={(e) => setEndDate(e.target.value)} type="date" className="w-50" label="End Date"  value={endDate}  />
                    </div>
                    <p className="w-50" >Days on which you want to perform the habit</p>
                    <div className="flex gap-5">
                    {weekdays.map((day) => (
                     <div className='grid-item  font-semibold '>
                        <div className='relative'>

                        <input onChange={(e) => setActiveDays({...activeDays, [e.target.value] : e.target.checked})} className='appearance-none peer h-4 w-4 p-4 rounded-full flex items-center justify-center   bg-gray-200 checked:bg-rose-500' type="checkbox" name="checkbox" id="checkbox" value={day}/>
                        <label className='pointer-events-none inset-0 flex items-center justify-center absolute font-bold dark:text-black peer-checked:text-white'  htmlFor="checkbox">
                            {day}
                            </label>
                        </div>
                        </div>))}

                    </div>
                    <button onClick={() => dispatch(addHabit(data))} className="mr-6 rounded-xl bg-rose-500 px-5 py-3 font-bold text-white">Create Habit</button>
                    </div>
            </Card.Body>
        </Card>
  )
}

export default HabitModal