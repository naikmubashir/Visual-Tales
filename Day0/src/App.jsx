import { useState } from "react"


function App() {

  let [counter, setCounter] = useState(0);
  return (
    <>
      <h1> {counter}</h1>
    </>
  )
}

export default App
