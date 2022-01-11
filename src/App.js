import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Todo from "./Pages/Todo";
const App = () => {

  const { currentUser } = useSelector((state) => ({ ...state.users }));

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path='/todo' element={currentUser.isAuthenticated?(<Todo/>):(<Home/>)}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
