import {nanoid, createSlice} from '@reduxjs/toolkit'

//initial state of store
const initialState={
   todos: [
    {id:1,text:"hello world"}
    ]
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo={
                id:nanoid(),
                text: action.payload 
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action)=>{
            state.todos= state.todos.filter(todo=>todo.id!==action.payload)
        }
    }
});

export const {addTodo, removeTodo} = todoSlice.actions //to use the reducers in the components

export default todoSlice.reducer // for the store