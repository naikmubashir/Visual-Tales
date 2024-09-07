import React from 'react'
import {useParams} from 'react-router-dom'

const User = () => {
    const {id} = useParams(); //destructuring the "id" from parameters
  return (
    <div className="p-4 m-2 bg-gray-400 rounded-sm text-3xl">
    User: {id}
    </div>
  )
}

export default User