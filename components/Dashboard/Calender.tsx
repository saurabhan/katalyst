import React, {  useEffect } from 'react'
import {
  eachDayOfInterval,
  endOfWeek,
  format,
  startOfWeek,
} from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { addProgress } from '../../app/slice/habitSlice'
interface Props {
  name : string
}

const Calender = (props: Props) => {
  const dispatch = useDispatch()
  const progress = useSelector((state : RootState) => state.habits.progress)
  const [days, setDays] = React.useState<string[]>([])
  const [checked, setChecked] = React.useState<any>(progress)
  const weekStart = startOfWeek(new Date())
  const weekEnd = endOfWeek(new Date())
  const datesWeek = eachDayOfInterval({ start: weekStart, end: weekEnd })
  const daysWeek = () => {
    datesWeek.map((date) => {
      const day = format(date, 'd')
    setDays((days) => [...days, day])
  })
}

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setChecked({
      [e.target.id]: {
        ...checked[e.target.id],
        ['day'+e.target.value]: e.target.checked,
      },
    })
    dispatch(addProgress(checked))
  }

  useEffect(() => {
    daysWeek()
  }, [])
  return (
    <div className="grid" key={props.name}>
      <div className="grid grid-cols-7 gap-6">
              {
                  days ? days.map((day) => (
                    
                      <>
                      <div className="grid-item font-semibold" key={day} >
                      <div className='relative'>


                        <input
                onChange={(e) =>
                  onChangeHandler(e)
                }
                className="peer flex h-4 w-4 appearance-none items-center justify-center rounded-full bg-gray-200   p-4 disabled:bg-gray-200 checked:bg-rose-500"
                type="checkbox"
                name="checkbox"
                checked={checked?.[`${props.name}`]?.[`day${day}`]}
                id={props.name}
                value={day}
              />
              <label
                className="pointer-events-none absolute inset-0 flex items-center justify-center font-bold  peer-checked:text-white"
                htmlFor={props.name}
              >
                {day}
              </label>
            
                      </div>
                      </div>
                      </>
                  )) :
                    <h1>Loading</h1>
              }
        </div>
      
    </div>
  )
}

export default Calender
