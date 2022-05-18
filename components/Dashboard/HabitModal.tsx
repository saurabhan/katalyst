import { Card, Input } from '@nextui-org/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addHabit } from '../../app/slice/habitSlice'
import { RootState } from '../../app/store'
import { useAuth } from '../../context/auth-context'

interface Props {}

const HabitModal = (props: any) => {

    const dispatch = useDispatch()
    const {user} = useAuth()
    const uid = user?.uid
    const [habitName, setHabitName] = React.useState<string>('')
    const [startDate, setStartDate] = React.useState<string>('')
    const [endDate, setEndDate] = React.useState<string>('')
    const [activeDays, setActiveDays] = React.useState<string[]>([])
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    


    console.log(startDate, endDate)
    const data =  {
            uid,
            habitName,
            startDate,
            endDate,
        }


  return (
    <Card className="absolute inset-0 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <Card.Header className="flex justify-between">
            <h1 className="text-3xl font-bold">Add New Habits</h1>
            <button onClick={props.updateModal} className="mr-6 rounded-xl bg-rose-500 px-5 py-3 font-bold text-white">
              Close
            </button>
          </Card.Header>
            <Card.Body>
                <div className="flex flex-col gap-3 items-center justify-between">
                    <div className='flex gap-5'>
                    <Input onChange={(e) => setHabitName(e.target.value)} className="w-50" label="Habit Name" />
                    <Input className="w-50" label="Goal" />

                    </div>
                    <div className='flex gap-5'>
                        
                    <Input onChange={(e) => setStartDate(e.target.value)} type="date" className="w-50" label="Start Date" />
                    <Input onChange={(e) => setEndDate(e.target.value)} type="date" className="w-50" label="End Date" />
                    </div>
                    <p className="w-50" >Days on which you want to perform the habit</p>
                    <div className="flex gap-5">
                    {weekdays.map((day) => (
                     <div className='grid-item  font-semibold '>
                        <div className='relative'>

                        <input onChange={(e) => setActiveDays({...activeDays, [e.target.value] : e.target.checked})} className='appearance-none peer h-4 w-4 p-4 rounded-full flex items-center justify-center   bg-gray-200 checked:bg-rose-500' type="checkbox" name="checkbox" id="checkbox" value={day}/>
                        <label className='pointer-events-none inset-0 flex items-center justify-center absolute font-bold  peer-checked:text-white'  htmlFor="checkbox">
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