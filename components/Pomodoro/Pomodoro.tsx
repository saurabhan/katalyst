import { Card } from '@nextui-org/react'
import React, { useEffect } from 'react'

interface Props {}

const Pomodoro = (props: Props) => {
  const [timeleft, setTimeleft] = React.useState(25 * 60)
  const [timer, setTimer] = React.useState<number>()
  const [message, setMessage] = React.useState(false)
  const minutes = Math.floor(timeleft / 60)
  const seconds =
    timeleft - minutes * 60 < 10
      ? `0${timeleft - minutes * 60}`
      : timeleft - minutes * 60


  const startTimer = () => {
    const timer = window.setInterval(() => {
      setTimeleft((timeleft) => timeleft - 1)
      if (timeleft === 0) {
        let minutes = message ? 25 : 5
        setTimeleft(minutes * 60)
        setMessage(!message)
      }
    }, 1000)
    setTimer(timer)
  }

  const StopTimer = () => {
    clearInterval(timer)
    setTimer(undefined)
  }
  useEffect(() => {
      if (timeleft === 0) {
        window.clearInterval(timer)
        
        let minutes = message ? 25 : 5
        setTimeleft(minutes * 60)
        setMessage(!message)
    }
      
  }, [timeleft, timer])

  useEffect(() => {
    return () => window.clearInterval(timer)
  }, [timer])

  return (
    <Card className="px-4 py-5 bg-gray-700 text-white shadow rounded-lg overflow-hidden sm:p-6">
      <Card.Header>
        <h1 className="p-6 text-3xl  font-bold">Pomodoro Timer</h1>
      </Card.Header>
      <Card.Body className="p-6">
        <h1 className="text-center text-5xl font-bold">
          {minutes}:{seconds}
        </h1>
      </Card.Body>
      <Card.Footer className="flex justify-center gap-4 p-6">
        <button
          onClick={startTimer}
          className="gap-1 rounded-md border border-transparent bg-orange-100 px-5 py-3 text-base font-medium text-orange-700 hover:bg-orange-300"
        >
          Start
        </button>
        <button
          onClick={StopTimer}
          className="rounded-md border border-transparent bg-orange-100 px-5 py-3 text-base font-medium text-orange-700 hover:bg-orange-300"
        >
          Stop
        </button>
      </Card.Footer>
    </Card>
  )
}

export default Pomodoro
