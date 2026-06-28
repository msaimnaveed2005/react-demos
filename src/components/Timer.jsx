import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1)
    }, 1000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return <div>
    <h1>Timer: {seconds}s</h1>
    <button onClick={()=>clearInterval(intervalRef.current)}>Stop Timer</button>
    </div>
}

export default Timer