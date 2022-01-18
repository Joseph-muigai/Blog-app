import "./sidebar.css";

const Sidebar = () => {
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
          <li className="sidebarlistitem">Life</li>
          <li className="sidebarlistitem">Music</li>
          <li className="sidebarlistitem">Cinema</li>
          <li className="sidebarlistitem">Style</li>
          <li className="sidebarlistitem">Tech</li>
          <li className="sidebarlistitem">Cinema</li>
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
