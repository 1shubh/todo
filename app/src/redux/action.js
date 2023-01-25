
import {ADD_TODO, DELETE_TODO, GET_TODO,ERROR, UPDATE_TODO} from "./type"
import axios from "axios"


export const getTodo = (disptach) => {
    return {
        type: GET_TODO,
        payload : [
            {id:1,title:"hello", isCompleted:false},
            {id:2,title:"name", isCompleted:false}
        ]
    }
    
}

export const addTodo = (value) => {
    return {
        type : ADD_TODO,
        payload : {
           id : Date.now(),
           title : value,
           isCompleted:false
        }
    }
    
}

export const deleteTodo = (id) => {
    return {
        type : DELETE_TODO,
        payload : id
    }
}

export const updateTodo = (id,change) => {
    return {
        type :UPDATE_TODO,
        payload : {
            id,
            change
        }
    }
}