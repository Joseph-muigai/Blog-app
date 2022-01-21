import "./createpost.css";

const CreatePost = () => {
  return (
    <div className="createPost">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/1940040/pexels-photo-1940040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <form className="writeform">
        <div className="writeformGroup">
          <label htmlFor="fileinput">
            <i className=" writeicon fa fa-plus" aria-hidden="true"></i>
          </label>
          <input type="file" id="fileinput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeinput"
            autoFocus={true}
          />
        </div>
        <div className="writeformGroup">
          <textarea
            placeholder="Tell your story"
            type="text"
            className="writeinput writeText"
          ></textarea>
          <button className="writeSubmit">Publish</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
