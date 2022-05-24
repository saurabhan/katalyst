import { Card, Grid} from '@nextui-org/react'
import React, { useState } from 'react'
import Pomodoro from '../Pomodoro/Pomodoro'
import HabitModal from './HabitModal'
import Habits from './Habits'

interface Props {}

const Dashboard = (props: Props) => {
  const [showModal, setShowModal] = useState(false)

  const ModalHandler = () => {  
    setShowModal(!showModal)
  }

  return (
    <Grid.Container className=" container mx-auto relative" gap={1.5} >
      <Grid xs={12} md={8}>
        <Card className=" py-5 dark:bg-gray-900 bg-white min-h-[28rem] shadow rounded-lg overflow-hidden sm:p-6">
          <Card.Header className="flex justify-between">
            <h1 className="text-3xl font-bold">Daily Habits</h1>
            <button onClick={ModalHandler} className="mr-6 rounded-xl bg-rose-500 px-5 py-3 font-bold text-white">
              New Habit
            </button>
            {showModal ? <HabitModal updateModal={ModalHandler}/> : null}
          </Card.Header>
          <Card.Body>

          <Habits />
          </Card.Body>
        </Card>
      </Grid>

     

      <Grid xs={12} md={4}>
        <Pomodoro />
      </Grid>
    </Grid.Container>
  )
}

export default Dashboard
