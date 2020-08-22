import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

interface Data {
  answer: string
  forced: boolean
  image: string
}

function App() {
  const [data, setData] = useState<Data>()
  const fetchData = async () => {
    const result = (await axios('https://yesno.wtf/api')) as any
    setData(result.data)
  }

  const handleOnClick = () => {
    fetchData()
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>お悩み相談所</p>
        <div>{data?.answer}</div>
        <img src={data?.image} />
        <button onClick={handleOnClick}>懺悔する！</button>
      </header>
    </div>
  )
}

export default App
