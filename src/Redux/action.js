import * as types from './actionType'

export const createUser = (user)=>{
    return{
        type:types.CREATE_USER,
        payload:user
    }
    
}
export const loginUser = (user)=>({
    type:types.LOGIN_USER,
    payload:user
})
export const logoutUser = ()=>({
    type:types.LOGOUT_USER,
})


export const addTodo = (todo)=>{
  return{
    type:types.ADD_TODO,
    payload:todo
  }
}
export const deleteTodo = (todo)=>{
  return{
    type:types.DELETE_TODO,
    payload:todo
  }
}