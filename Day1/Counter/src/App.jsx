import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const upValue= ()=>{
    count<20?setCount(count+1):setCount(count);
  }

  const downValue=()=>{
    count>0?setCount(count-1):setCount(count);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={upValue}>Increase</button>
      <button onClick={downValue}>Decrease</button>
    </>
  )
}

export default App
