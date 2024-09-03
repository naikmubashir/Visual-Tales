import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  return (
      <div className='w-screen h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg--400 gap-6'>

        <button className='bg-red-400  hover:bg-red-600 m-0 hover:text-white  rounded-3xl outline-none shadow-md transition duration-300 px-4 py-2 hover:scale-125 hover:shadow-xl' onClick={()=>setColor("red")}>Red</button>
        <button className='bg-blue-400  hover:bg-blue-600 m-0 hover:text-white  rounded-3xl outline-none shadow-md transition duration-300 px-4 py-2 hover:scale-125 hover:shadow-xl' onClick={()=>setColor("blue")}>Blue</button>
        <button className='bg-green-400  hover:bg-green-600 m-0 hover:text-white  rounded-3xl outline-none shadow-md transition duration-300 px-4 py-2 hover:scale-125 hover:shadow-xl' onClick={()=>setColor("Green")}>Green</button>

        <button className='bg-purple-400  hover:bg-purple-600 m-0 hover:text-white  rounded-3xl outline-none shadow-md transition duration-300 px-4 py-2 hover:scale-125 hover:shadow-xl' onClick={()=>setColor("purple")}>Purple</button>
        <button className='bg-yellow-400  hover:bg-yellow-600 m-0 hover:text-white  rounded-3xl outline-none shadow-md transition duration-300 px-4 py-2 hover:scale-125 hover:shadow-xl' onClick={()=>setColor("yellow")}>Yellow</button>

        <button className='bg-sky-400  hover:bg-sky-600 m-0 hover:text-white  rounded-3xl outline-none shadow-md transition duration-300 px-4 py-2 hover:scale-125 hover:shadow-xl' onClick={()=>setColor("sky")}>Sky</button>


      </div>
      </div>
    
  )
}

export default App
