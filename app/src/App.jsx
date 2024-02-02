import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Splitter from './Spiller'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Splitter/>
    </>
  )
}

export default App
