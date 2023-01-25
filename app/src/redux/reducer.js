// import { addTodo, deleteTodo, getTodo } from "./action"
import { ADD_TODO, DELETE_TODO, GET_TODO, UPDATE_TODO } from "./type"

let initialState = {
    todo:[]
}

export const reducer = (state=initialState,{type,payload}) => {
    switch(type) {
        case ADD_TODO : {
             return {
                ...state,
                todo : [...state.todo,payload]
             }
        }
        case GET_TODO : {
          return {
            ...state,
            todo : payload
          }
        }
        case DELETE_TODO : {
             return{ ...state,
                todo : state.todo.filter((todos)=> todos.id !==payload)}
        }
        case UPDATE_TODO : {
            return {
                ...state,
                todo : state.todo.map((ele)=>{
                    if(ele.id === payload.id){
                        return {
                            ...ele,
                            ...payload.change
                        }
                    }
                    return ele;
                })
            }
        }
        default : {
            return state
        }
    }
}