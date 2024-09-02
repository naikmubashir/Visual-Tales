import React from 'react'

const Card = ({name="User", rollNo, sem}) => { //destructuring props.name
  return (
    <div className="bg-cyan-600 text-black rounded-xl w-96 mb-8">
      <h1>The Profile</h1>
      <h3 className='bg-red-400 text- m-5 p-1 '>{name}</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam maxime quia accusamus corporis quo culpa, rem in architecto. Corrupti est porro explicabo cum temporibus, placeat velit aliquam beatae ut molestias?</p>
      <div>Semester: {sem}</div>
      <div>Roll no: {rollNo}</div>

    </div>
  )
}

export default Card
