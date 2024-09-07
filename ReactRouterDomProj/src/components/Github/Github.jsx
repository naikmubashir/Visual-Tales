import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

const Github = () => {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/naikmubashir")
    //     .then(res=>res.json())
    //     .then(resData=>setData(resData))
    // },[])

  return (
    <div className='p-4 m-2 bg-gray-900 rounded-lg text-3xl flex justify-evenly items-center'>
        <img src={data.avatar_url} alt='GitHub Photo' className='rounded-full'></img>
        <div className='text-6xl text-cyan-400'>
            GitHub Followers: {data.followers}
        </div>
    </div>
  )
}

export default Github

export const githubInfoLoader= async()=>{
    const response = await fetch("https://api.github.com/users/naikmubashir");
    return response.json();
}