import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCat(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarimage"
          src="https://images.pexels.com/photos/8705258/pexels-photo-8705258.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ullam
          molestiae, tenetur autem nostrum saepe pariatur atque voluptas earum
          voluptatem numquam voluptate,
        </p>
      </div>
      <div className="sidebaritem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((c) => {
            return (
              <Link to={`/?cat=${c.name}`} className="link">
                <li className="sidebarlistitem">{c.name}</li>;
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i
            className="sidebaricon fa fa-twitter-square"
            aria-hidden="true"
          ></i>
          <i
            className="sidebaricon fa fa-facebook-square"
            aria-hidden="true"
          ></i>
          <i
            className="sidebaricon fa fa-pinterest-square"
            aria-hidden="true"
          ></i>
          <i className="sidebaricon fa fa-instagram" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
