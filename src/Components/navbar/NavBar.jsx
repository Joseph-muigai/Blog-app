import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = false;

  return (
    <div className="navbar">
      <div className="navleft">
        <i className="Navicon fa fa-twitter-square" aria-hidden="true"></i>
        <i className="Navicon fa fa-facebook-square" aria-hidden="true"></i>
        <i className="Navicon fa fa-pinterest-square" aria-hidden="true"></i>
        <i className="Navicon fa fa-instagram" aria-hidden="true"></i>
      </div>
      <div className="navCenter">
        <ul className="navlist">
          <li className="navlistItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="navlistItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="navlistItem">
            <Link to="/about" className="link">
              CONTACT
            </Link>
          </li>
          <li className="navlistItem">
            <Link to="/about" className="link">
              WRITE
            </Link>
          </li>
          <li className="navlistItem">
            {user && (
              <Link to="/about" className="link">
                LOGOUT
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navright">
        {user ? (
          <img
            className="navbarimage"
            src="https://images.pexels.com/photos/9078210/pexels-photo-9078210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="profilepcture"
          />
        ) : (
          <ul className="navlist">
            <li className="navlistItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navlistItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className=" navSearchIcon fa fa-search" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default NavBar;
