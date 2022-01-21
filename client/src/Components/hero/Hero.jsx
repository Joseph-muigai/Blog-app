import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroTitles">
        <span className="herotitlesm">Informa</span>
        <span className="herotitlelg">Blog</span>
      </div>
      <img
        className="heroImage"
        src="https://images.pexels.com/photos/678028/pexels-photo-678028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
    </div>
  );
};

export default Hero;
