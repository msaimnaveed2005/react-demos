import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect Called')
    document.title = `Count: ${count}`
  }, [count])

  return (
    <div>
      <h1>Value: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default CounterEffect