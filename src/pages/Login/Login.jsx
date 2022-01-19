import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login </span>
      <form className="loginForm">
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter your email..." />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Enter your Password..." />
        <button className="loginbutton">Login</button>
      </form>
      <button className="registerbutton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
