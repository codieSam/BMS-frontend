// /blogs - Fetch blogs
//blogs - Add blogs
//blogs/:id - update & delete blogs

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddBlog from "./components/AddBlog";
import BlogList from "./components/BlogList";
import toast, { Toaster } from "react-hot-toast";
import EditBlog from "./components/EditBlog";
import { useAppContext } from "../contexts/BlogContext";
import { useEffect } from "react";

function App() {
  // console.log("Samrat");
  const {
    toggleTheme,
    searchValue,
    setSearchValue,
    allBlogs,
    setAllBlogs,
    fetchAllBlogs,
  } = useAppContext();
  const handleSearchBar = () => {
    if (searchValue.length > 0) {
      const searchedBlogs = allBlogs.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      searchedBlogs.length > 0
        ? setAllBlogs(searchedBlogs)
        : toast.success("No blog found");
    } else {
      fetchAllBlogs();
    }

    // console.log("Searched Blogs are", allBlogs);
  };

  useEffect(() => {
    handleSearchBar();
    // fetchAllBlogs();
  }, [searchValue]);

  return (
    <>
      {/* Navbar */}

      <nav className="bg-orange-600 p-4 text-white">
        <div className="flex space-x-6 justify-between items-center">
          <Link to={"/"} className="hover:text-gray-300 font-bold text-2xl">
            Blogs
          </Link>
          <div className="">
            <div className="flex items-center gap-3 max-w-md w-full ">
              <div className="flex items-center w-full border pl-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-md overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 30 30"
                  fill="#6B7280"
                >
                  <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
                </svg>
                <input
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="text"
                  placeholder="Search by title"
                  className="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm"
                />
              </div>
              <button
                onClick={handleSearchBar}
                type="submit"
                className="bg-green-500 cursor-pointer w-32 h-[46px] rounded-md text-sm text-white"
              >
                Search
              </button>
            </div>
          </div>
          <Link to={"/blogs"} className="hover:text-gray-300 ">
            <span className="border px-4 py-2 bg-transparent hover:bg-amber-600 rounded-md">
              New Blog
            </span>
          </Link>
          <div className="bo">
            <span onClick={toggleTheme}>D</span>
            <span onClick={toggleTheme}>L</span>
          </div>
        </div>
      </nav>

      <Toaster></Toaster>

      <div className="container mx-auto mt-8 px-4">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blogs" element={<AddBlog />} />
          <Route path="/blogs/:id" element={<EditBlog />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
