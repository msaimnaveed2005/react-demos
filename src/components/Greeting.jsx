import React from 'react'

const Greeting = () => {
  const date=new Date()
  const greet='hello'
  return (
    <div>
      {greet}
      <br/>
      date: {date.getDate()}
    </div>
  )
}

export default Greeting