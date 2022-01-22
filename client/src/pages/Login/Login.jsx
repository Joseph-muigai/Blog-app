import { Link } from "react-router-dom";
import "./login.css";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const Login = () => {
  const userRef = useRef();
  const passRef = useRef();

  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(user);

  return (
    <div className="login">
      <span className="loginTitle">Login </span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Enter your username..." ref={userRef} />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter your Password..."
          ref={passRef}
        />
        <button className="loginbutton" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="registerbutton" type="submit">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
