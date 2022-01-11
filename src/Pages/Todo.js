import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logoutUser, addTodo,deleteTodo } from "../Redux/action";

const Todo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState("");
  const { currentUser } = useSelector((state) => ({ ...state.users }));
  const { todo } = useSelector((state) => ({ ...state.todos }));
  const handleAddTodoList = (e) => {
    e.preventDefault();
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  const handleChange = (e) => {
    setFormData(e.target.value);
  };
  const createTodo = () => {
    const newTodo = {
      userId: currentUser.id,
      id:Date.now(),
      todo: formData,
    };
    dispatch(addTodo(newTodo));
    setFormData("");
  };
  const showAllTodo = () => {
    const userTodoList = todo.filter((todo) => todo.userId === currentUser.id);
    return userTodoList.length > 0 ? (
      userTodoList.map((todo,i) => (
        <div key={i}>
          <span>{todo.todo}</span>
          <span>
            <i class="fa fa-trash" aria-hidden="true" onClick={()=>handleDelete(todo.id)}></i>
          </span>
        </div>
      ))
    ) : (
      <div className="empty">Your Todo List Is Empty</div>
    );
  };
  const handleDelete = (id)=>{
    const newTodoList = todo.filter((todo) => todo.id !== id);
    dispatch(deleteTodo(newTodoList))

  }
  return (
    <div className="todo_wrapper">
      <nav>
        <h2>TODO-List</h2>
        <div>
          <div>
            Welcome<span>{currentUser.name}</span>
          </div>
          <div className="logOut" onClick={handleLogout}>
            Logout
          </div>
        </div>
      </nav>
      <div className="todoBox_wrapper">
        <div className="todoBox">
          <h3>Your Todos</h3>
          <form onSubmit={handleAddTodoList}>
            <input
              type="text"
              name="todo"
              placeholder="Enter your todo"
              value={formData}
              onChange={handleChange}
              required
            />
            <button onClick={createTodo}>
              Add <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
          </form>
          <div className="todoList">
              {showAllTodo()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
