import { combineReducers } from "redux";
import { userReducer, todoListReducer } from "./reducer";

const rootReducer = combineReducers({
  users: userReducer,
  todos:todoListReducer
});

export default rootReducer;
