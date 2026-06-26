import React from 'react'

const Greeting = ({ timeOfDay }) => {
  return timeOfDay === 'good morning' ? <h1>Good Morning</h1> : <h1>Good Afternoon</h1>
}

export default Greeting