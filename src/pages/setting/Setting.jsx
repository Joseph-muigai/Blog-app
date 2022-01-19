import "./Setting.css";
import Sidebar from "../../Components/sidebar/Sidebar";

const Setting = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="updateTitle">Update your account</span>
          <span className="deleteTitle">Delete your account</span>
        </div>
        <form className="settinsForm">
          <label> Profile Picture</label>
          <div className="settingPp">
            <img
              src="https://images.pexels.com/photos/2825384/pexels-photo-2825384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
              "
              alt=""
            />

            <label htmlFor="Fileinput">
              <i
                class=" settingPpIcon fa fa-user-circle"
                aria-hidden="true"
              ></i>
            </label>
            <input type="file" id="Fileinput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Jowie" />
          <label>Email</label>
          <input type="email" placeholder="jowie@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="password" />
          <button className="settingsUpdate">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
