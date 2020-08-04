import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  const [res, setRes] = useState({ data: 'No Response' })

  const onClick = async () => {
    try {
      const res = await axios.post('http://localhost:5000/subscription')
      setRes(res.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="app">
      <button onClick={() => onClick()}>Send Push Notifications</button>
      {JSON.stringify(res)}
    </div>
  )
}

export default App
