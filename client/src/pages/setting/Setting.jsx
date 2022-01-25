import "./Setting.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const Setting = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");

  const PF = "http://localhost:5000/images/";

  // useEffect(() => {}, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePicture = filename;
      try {
        await axios.post("upload", data);
      } catch (error) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      // window.location.replace("/post/" + res.data._id);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="updateTitle">Update your account</span>
          <span className="deleteTitle">Delete your account</span>
        </div>
        <form className="settinsForm" onSubmit={handleSubmit}>
          <label> Profile Picture</label>
          <div className="settingPp">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePicture}
              alt=""
            />

            <label htmlFor="Fileinput">
              <i
                class=" settingPpIcon fa fa-user-circle"
                aria-hidden="true"
              ></i>
            </label>
            <input
              type="file"
              id="Fileinput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsUpdate" type="submit">
            Update
          </button>
          {success && (
            <span style={{ color: "green" }}>
              Profile has been updated successfully.
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
