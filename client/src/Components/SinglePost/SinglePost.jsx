import React from "react";
import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="post">
      <img
        className="postimg"
        src="https://images.pexels.com/photos/2825384/pexels-photo-2825384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <div className="postinfo">
        <div className="postcats">
          <span className="postCat">Music</span>
          <span className="postCat">life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postdate"> 1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo repellat
        modi sed natus quisquam porro soluta omnis vitae sequi! Voluptatum.
      </p>
    </div>
  );
};

export default SinglePost;
