import * as types from "./actionType";

const initialState = {
  users: [],
  currentUser: {
    name: null,
    isAuthenticated: false,
    id:null
  },
};
const todoInitialState = {
  todo:[]
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case types.LOGIN_USER:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          name: action.payload.name,
          id:action.payload.id,
          isAuthenticated: action.payload.isAuthenticated,
        },
      };
      case types.LOGOUT_USER:
      return {
        ...state,
        currentUser: {
          name: null,
          id:null,
          isAuthenticated:false,
        },
      };
    default:
      return state;
  }
};
export const todoListReducer = (state = todoInitialState, action)=>{
  switch(action.type){
   case types.ADD_TODO:
     return{
       todo:[...state.todo,action.payload]
     }
     case types.DELETE_TODO:
     return{
       todo:[...action.payload]
     }
     default:
      return state;
  }
}
