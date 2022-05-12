import { Card, Col, Grid, Row, Spacer } from '@nextui-org/react'
import React from 'react'
import Pomodoro from '../Pomodoro/Pomodoro'
import Habits from './Habits'

interface Props {}

const Dashboard = (props: Props) => {


  return (
    <Grid.Container className="container mx-auto" gap={1.5} >
      <Grid xs={12} md={8}>
        <Card className=" py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <Card.Header className="flex justify-between">
            <h1 className="text-3xl font-bold">Daily Habits</h1>
            <button className="mr-6 rounded-xl bg-rose-500 px-5 py-3 font-bold text-white">
              New Habit
            </button>
          </Card.Header>
          <Habits />
        </Card>
      </Grid>

     

      <Grid xs={12} md={4}>
        <Pomodoro />
      </Grid>
    </Grid.Container>
  )
}

export default Dashboard
