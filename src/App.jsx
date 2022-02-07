import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <marquee><h1>Ola mundo, hiragana</h1></marquee>
    </div>
  )
}

export default App
