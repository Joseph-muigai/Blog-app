import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Enter your Username..." />
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter your email..." />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Enter your Password..." />
        <label htmlFor=""> Confirm Password</label>
        <input type="password" placeholder="Enter your Password..." />
        <button className="regbutton">Register</button>
      </form>
      <button className="reglogbutton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Register;
