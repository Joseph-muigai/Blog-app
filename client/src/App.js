import NavBar from "./Components/navbar/NavBar";
import Register from "./pages/register/Register";

import Setting from "./pages/setting/Setting";
import CreatePost from "./pages/createPost/CreatePost";
import Blogpost from "./pages/blogpost/Blogpost";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";


function App() {
  const user = false
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/register" element={user?<Home />:<Register/>}/>
      <Route path="/login" element={user?<Home />:<Login/>}/>
      <Route path="/setting" element={user?<Setting/>:<Home />}/>
      <Route path="/createpost" element={user?<CreatePost/>:<Home />}/>
      <Route path="/post/:postId" element={<Blogpost/>}/>

      </Routes>

     
      
    </Router>
  );
}

export default App;
