import React, {  useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { createUser, loginUser } from "../Redux/action";

const Home = () => {
  const [state, setState] = useState("login");
  const [error, setError] = useState([false, ""]);
  const [formData, setFormData] = useState({
    email: null,
    password: null,
    name: null,
  });
  const { users } = useSelector((state) => ({ ...state.users }));
  const dispatch = useDispatch();
   const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state === "register") {
      const checkUser = users.filter((user) => user.email === formData.email);
      if (checkUser.length === 0) {
        dispatch(createUser({ ...formData, userId: Date.now() }));
        setState("login");
        setError([false, ""]);

      } else {
        setError([true, "User with this email already exist"]);
      }
    }
    if (state === "login") {
      const newUser = users.filter((user) => user.email === formData.email);
      if (newUser[0]?.password === formData.password) {
        dispatch(loginUser({ name: newUser[0].name,id:newUser[0].userId, isAuthenticated: true }));
        navigate('/todo')
      } else {
        setError([true, "Username or password incorrect"]);
      }
    }
  };
  const handleChange = (e) => {
    setError([false, ""]);
    setFormData(() => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="login-page-wrapper">
      <div className="right"></div>
      <div className="left">
        <form onSubmit={handleSubmit}>
          {state === "login" ? (
            <>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                   value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                   value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div>
                <input type="submit" value="Login" />
                <div className='error'>{error[0] && <p>{error[1]}</p>}</div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div>
                <input type="submit" value="Register" />
                <div className='error'>{error[0] && <p>{error[1]}</p>}</div>
              </div>
            </>
          )}
          <div>
            {state === "login" ? (
              <p>
                Do not have an account?{" "}
                <span className="acct-act" onClick={() => setState("register")}>
                  Create account
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span className="acct-act" onClick={() => setState("login")}>
                  Login
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
