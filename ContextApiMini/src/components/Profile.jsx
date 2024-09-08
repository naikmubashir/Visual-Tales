import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

const Profile = () => {
    const {user} = useContext(UserContext); //destructuring...OR we can write const user = useContext(UserContext).user;
    if(!user) return <h2 style={{color:"red"}}>Please login</h2>
    return (
    <h1>
        Welcome <span style={{color:"green"}}> {user}!!!! </span>
    </h1>
  )
}

export default Profile
