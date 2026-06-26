import React from 'react'

const Greeting = ({ timeOfDay }) => {
  return timeOfDay ? 'Good Morning' : 'Good Afternoon'
}

export default Greeting