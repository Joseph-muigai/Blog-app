import "./singleblogpost.css";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

const SingleBlogpost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      console.log(res.data);
    };
    getPosts();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + path, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {}
  };
  const handleEdit = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      // window.location.reload();
      setUpdateMode(false);
    } catch (error) {}
  };

  return (
    <div className="singleblogpost">
      <div className="singleblogpost-wrapper">
        {post.photo && (
          <img className="singleblogpostimg" src={PF + post.photo} alt="" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singleblogposttitleInput"
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singleblogposttitle">
            {title}
            {post.username === user?.username && (
              <div className="singleblogEdit">
                <i
                  className="singleblogicon fa fa-pencil-square-o"
                  aria-hidden="true"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singleblogicon fa fa-trash-o"
                  aria-hidden="true"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singleblogInfo">
          <span className="postAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>

          <span className="singlepostdate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singleblogDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        ) : (
          <p className="singleblogDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singleblogButton" onClick={handleEdit}>
            update
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleBlogpost;
