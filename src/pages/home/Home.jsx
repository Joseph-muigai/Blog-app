import Hero from "../../Components/hero/Hero";
import Posts from "../../Components/posts/Posts";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
