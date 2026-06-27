import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const result = await response.json()
      setData(result)
    }

    getData()
  }, [])

  return (
    <div>
      <h2>First Post Title</h2>
      {data.length > 0 ? <p>{data[0].title}</p> : <p>Loading...</p>}
    </div>
  )
}

export default FetchDataEffect