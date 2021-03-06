import React from "react";
import "./singlePost.css";
import { Link } from "react-router-dom";

const SinglePost = ({ post }) => {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && <img className="postimg" src={PF + post.photo} alt="" />}
      <div className="postinfo">
        <div className="postcats">
          {post.categories.map((c) => {
            return <span className="postCat">{c}</span>;
          })}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postdate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default SinglePost;
