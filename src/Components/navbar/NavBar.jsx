import "./navbar.css";

const NavBar = () => {
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
          <li className="navlistItem">HOME</li>
          <li className="navlistItem">ABOUT</li>
          <li className="navlistItem">CONTACT</li>
          <li className="navlistItem">WRITE</li>
          <li className="navlistItem">LOGOUT</li>
        </ul>
      </div>
      <div className="navright">
        <img
          className="navbarimage"
          src="https://images.pexels.com/photos/9078210/pexels-photo-9078210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="profilepcture"
        />
        <i className=" navSearchIcon fa fa-search" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default NavBar;
