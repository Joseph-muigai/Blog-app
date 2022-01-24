import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./createpost.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newpost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newpost.photo = filename;
      try {
        await axios.post("upload", data);
      } catch (error) {}
    }
    try {
      const res = await axios.post("/posts", newpost);
      window.location.replace("/post/" + res.data._id);
    } catch (error) {}
  };

  return (
    <div className="createPost">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeform" onSubmit={handleSubmit}>
        <div className="writeformGroup">
          <label htmlFor="fileinput">
            <i className=" writeicon fa fa-plus" aria-hidden="true"></i>
          </label>
          <input
            type="file"
            id="fileinput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeinput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeformGroup">
          <textarea
            placeholder="Tell your story"
            type="text"
            className="writeinput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
