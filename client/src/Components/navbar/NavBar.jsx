import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

const NavBar = () => {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

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
            <Link to="/createpost" className="link">
              WRITE
            </Link>
          </li>
          <li className="navlistItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="navright">
        {user ? (
          <img
            className="navbarimage"
            src={user.profilePicture}
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
