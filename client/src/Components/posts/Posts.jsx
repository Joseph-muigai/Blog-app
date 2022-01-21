import SinglePost from "../SinglePost/SinglePost";
import "./posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((p) => {
        return <SinglePost post={p} />;
      })}
    </div>
  );
};

export default Posts;
