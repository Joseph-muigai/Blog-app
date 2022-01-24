import "./singleblogpost.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleBlogpost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      console.log(res.data);
    };
    getPosts();
  }, [path]);
  return (
    <div className="singleblogpost">
      <div className="singleblogpost-wrapper">
        {post.photo && (
          <img className="singleblogpostimg" src={PF + post.photo} alt="" />
        )}
        <h1 className="singleblogposttitle">
          {post.title}
          <div className="singleblogEdit">
            <i
              className="singleblogicon fa fa-pencil-square-o"
              aria-hidden="true"
            ></i>
            <i className="singleblogicon fa fa-trash-o" aria-hidden="true"></i>
          </div>
        </h1>
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
        <p className="singleblogDesc">{post.desc}</p>
      </div>
    </div>
  );
};

export default SingleBlogpost;
