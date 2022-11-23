import React from 'react'
import { useState } from 'react'

export default function Time() {

  const [time, setTime] = useState()
  const [date, setDate] = useState()
  const clock = () => {
    let ctime = new Date().toLocaleTimeString()
    let cdate = new Date().toLocaleDateString()
    setTime(() => {
      return ctime
    }, [])
    setDate(() => {
      return cdate
    }, [])
  }
  setInterval(clock)
  return (
    <>
      <h1>{time}</h1>
      <h1>{date}</h1>
    </>
  )
}
