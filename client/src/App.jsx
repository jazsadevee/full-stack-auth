import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewPost from './pages/NewPost';
import PostDetails from './pages/PostDetails';
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to={"/new"}>New Twuut</Link>
      </p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:handle" element={<Profile />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/new" element={<NewPost />} />
      </Routes>
    </>
  );
}

export default App;
