import React, { useEffect, useState } from 'react'

const BasicEffect = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('useEffect Called')
    document.title = 'BasicEffect'
  }, [])

  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  )
}

export default BasicEffect