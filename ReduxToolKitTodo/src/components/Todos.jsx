import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {

    const todos= useSelector((state)=>state.todos); //will have all the todos
    const dispatch = useDispatch();


  return (
    <>
      <div>Todos</div>
      {
        todos.map(todo=>(
            <li key={todo.id}>
                {todo.text}

                <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
            </li>
        ))
      }
    </>
  )
}

export default Todos
