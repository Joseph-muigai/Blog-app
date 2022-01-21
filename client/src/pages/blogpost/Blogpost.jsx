import "./blogpost.css";
import SingleBlogpost from "../../Components/Blogpost/SingleBlogpost";
import Sidebar from "../../Components/sidebar/Sidebar";

const Blogpost = () => {
  return (
    <div className="blogpost">
      <SingleBlogpost />
      <Sidebar />
    </div>
  );
};

export default Blogpost;
