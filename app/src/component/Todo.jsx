import React from 'react'
import { Button, Input,Text,Heading } from '@chakra-ui/react'
// import { store } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, getTodo } from '../redux/action'
import { TodoItem } from './TodoItem'
import { useEffect } from 'react'



export const Todo = () => {
    const todos = useSelector((store) => store.todoManager)
    let data = todos.todo
    console.log(data)
    const dispatch = useDispatch();
    const [text,setText] = React.useState("")

    useEffect(()=>{
      dispatch(getTodo())
    },[dispatch])
    
    //adding text
    const handleChange = (e) => {
         setText(e.target.value)
    }
    
    //adding value to the todo
    const handleAdd = () => {
        if(text){
            dispatch(addTodo(text))
            setText("")
        }
    }
  return (
    <div>
        <Heading>TODO</Heading>
        <Input w={"20%"} placeholder='Add Todo' value={text} onChange={handleChange}/>
        <Button colorScheme='teal' variant='outline' onClick={()=>handleAdd()}>Add</Button>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)", gap:"20px",margin:"auto",width:"50%",marginTop:"50px"}}>
            {data.map((todo)=>(
                <TodoItem key={todo.id} {...todo}/>
            ))}
        </div>
    </div>
  )
}
