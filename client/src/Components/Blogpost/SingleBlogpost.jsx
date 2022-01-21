import "./singleblogpost.css";

const singleBlogpost = () => {
  return (
    <div className="singleblogpost">
      <div className="singleblogpost-wrapper">
        <img
          className="singleblogpostimg"
          src="https://images.pexels.com/photos/226424/pexels-photo-226424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <h1 className="singleblogposttitle">
          Lorem ipsum dolor sit amet.
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
            Author: <b>Jowie</b>
          </span>

          <span className="singlepostdate">1 hour ago</span>
        </div>
        <p className="singleblogDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quos
          fugiat, non repellendus aut ullam minus aliquam similique beatae
          architecto cupiditate animi aspernatur et? Cupiditate consectetur
          quisquam placeat ipsam nostrum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis quos fugiat, non repellendus aut ullam minus
          aliquam similique beatae architecto cupiditate animi aspernatur et?
          Cupiditate consectetur quisquam placeat ipsam nostrum. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Debitis quos fugiat, non
          repellendus aut ullam minus aliquam similique beatae architecto
          cupiditate animi aspernatur et? Cupiditate consectetur quisquam
          placeat ipsam nostrum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis quos fugiat, non repellendus aut ullam minus
          aliquam similique beatae architecto cupiditate animi aspernatur et?
          Cupiditate consectetur quisquam placeat ipsam nostrum. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Debitis quos fugiat, non
          repellendus aut ullam minus aliquam similique beatae architecto
          cupiditate animi aspernatur et? Cupiditate consectetur quisquam
          placeat ipsam nostrum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis quos fugiat, non repellendus aut ullam minus
          aliquam similique beatae architecto cupiditate animi aspernatur et?
          Cupiditate consectetur quisquam placeat ipsam nostrum. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Debitis quos fugiat, non
          repellendus aut ullam minus aliquam similique beatae architecto
          cupiditate animi aspernatur et? Cupiditate consectetur quisquam
          placeat ipsam nostrum.
        </p>
      </div>
    </div>
  );
};

export default singleBlogpost;
