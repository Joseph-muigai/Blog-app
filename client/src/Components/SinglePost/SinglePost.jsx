import React from "react";
import "./singlePost.css";
import { Link } from "react-router-dom";

const SinglePost = ({ post }) => {
  return (
    <div className="post">
      {post.photo && <img className="postimg" src={post.photo} alt="" />}
      <div className="postinfo">
        <div className="postcats">
          {post.categories.map((c) => {
            return <span className="postCat">{c.name}</span>;
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
