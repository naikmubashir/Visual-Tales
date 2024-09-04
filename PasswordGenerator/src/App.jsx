import { useState, useCallback, useEffect ,useRef} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [allowedNums, setAllowedNums] = useState(false);
  const [allowedChars, setAllowedChars] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (allowedNums) str += "0123456789"
    if (allowedChars) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, allowedNums, allowedChars, setPassword]);
  
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(()=>{
    passwordGenerator()

  },[length, allowedNums, allowedChars, setPassword])

  //OR self: Instead of using both useCallback() and useEffect() , just use the useEffect()
  // const passwordGenerator = useEffect(() => {
  //   let pass = ""
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  //   if (allowedNums) str += "0123456789"
  //   if (allowedChars) str += "!@#$%^&*-_+=[]{}~`"

  //   for (let i = 1; i <= length; i++) {
  //     let char = Math.floor(Math.random() * str.length + 1)
  //     pass += str.charAt(char)
      
  //   }

  //   setPassword(pass)


  // }, [length, allowedNums, allowedChars, setPassword]); 


  return (
    <>
     <div className='bg-green-950 w-full h-screen flex justify-center items-center'>
      
      <div className='bg-yellow-500 h-auto rounded-xl  w-auto p-5 m-3 flex flex-col items-center'>
        <h1 className='text-purple-700'>Password Generator</h1>
        <div className='pt-2 mt-2'>

          <input type="text" className='w-auto overflow-hidden p-1 rounded-l-lg' value={password} readOnly ref={passwordRef}/>
          <button className='bg-sky-500 rounded-r-lg p-1 m-0.1 outline-none' onClick={copyPasswordToClipboard}>Copy</button>

        </div>


        <div className='p-2 m-2 flex justify-center items-center'>

          {/* Range of length: */}
          <input type="range" id="size" className='m-2 cursor-pointer'  min={5} max={20} value={length} onChange={(e)=>setLength((prev)=>prev=e.target.value)}/>
          <label htmlFor="size" className='pr-6 '>Length:{length} </label>

          {/* Include numbers in the password */}
          <input type="checkbox" id="nums" className='cursor-pointer' defaultChecked={allowedNums} onChange={()=>{
            setAllowedNums((prev)=>!prev)
          }}/>
          <label htmlFor="nums" className='pr-5 cursor-pointer'>Numbers</label>


          {/* Include characters in the password */}
          <input type="checkbox" id="chars" className='cursor-pointer' defaultChecked={allowedChars} onChange={()=>setAllowedChars((prev)=>!prev)}/>
          <label htmlFor="chars" className='cursor-pointer'>Characters</label>

        </div>
      </div>
     </div>
    </>
  )
}

export default App
