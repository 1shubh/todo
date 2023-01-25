import React from 'react'
import { Heading,Button,Input } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../redux/action';
import { useState } from 'react';


export const TodoItem = ({id,title,isCompleted}) => {
    const [edit,setEdit] = useState(false)
  const dispatch = useDispatch();
  return (
    <div style={{border:"1px solid black",padding:"20px"}}>
        <Heading size={"sm"} key={id}>
            { edit ? (
                <Input placeholder='Text'/>
            ) : (
            <>
            {title} - {isCompleted ? "Completed" : "Not Completed"}
            </>)
            }
        </Heading>
        {/* <Button onClick={()=>setEdit(!edit)}>Edit</Button> */}
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <Button onClick={()=>{
            dispatch(deleteTodo(id))
        }}>Delete</Button>
        <Button onClick={()=>{
            dispatch(updateTodo(id, {isCompleted : !isCompleted}))
        }}>Toggle</Button>
        </div>
    </div>
  )
}
