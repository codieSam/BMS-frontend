// /blogs - Fetch blogs
//blogs - Add blogs
//blogs/:id - update & delete blogs

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddBlog from "./components/AddBlog";
import BlogList from "./components/BlogList";
import { Toaster } from "react-hot-toast";

function App() {
  console.log("Samrat");
  return (
    <>
      {/* Navbar */}

      <nav className="bg-orange-600 p-4 text-white">
        <div className="flex space-x-4">
          <Link to={"/"} className="hover:text-gray-300 font-bold">
            Blogs
          </Link>
          <Link to={"/blogs"} className="hover:text-gray-300">
            Add
          </Link>
        </div>
      </nav>

      <Toaster></Toaster>

      <div className="container mx-auto mt-8 px-4">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blogs" element={<AddBlog />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
