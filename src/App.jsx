import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stopwatch from './components/Stopwatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        < Stopwatch />
        </div>
    </>
  )
}

export default App
