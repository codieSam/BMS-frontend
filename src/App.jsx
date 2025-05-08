// /blogs - Fetch blogs
//blogs - Add blogs
//blogs/:id - update & delete blogs

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddBlog from "./components/AddBlog";
import BlogList from "./components/BlogList";
import toast, { Toaster } from "react-hot-toast";
import EditBlog from "./components/EditBlog";
import { useAppContext } from "../contexts/BlogContext";
import { useEffect, useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import SideBarMenu from "./components/SideBarMenu";
import Footer from "./components/Footer";

function App() {
  // console.log("Samrat");
  const { searchValue, setSearchValue, allBlogs, setAllBlogs, fetchAllBlogs } =
    useAppContext();

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

  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
    console.log("Menu is", isMenu);
  };

  useEffect(() => {
    handleSearchBar();
    // fetchAllBlogs();
  }, [searchValue]);

  return (
    <div className="">
      {/* Navbar */}

      <nav className="bg-slate-700 p-4 text-white">
        <div className="flex justify-center space-x-12 md:space-x-0 items-center md:justify-between">
          <Link
            to={"/"}
            className="hover:text-gray-300 hover:transition-all duration-[500ms] font-bold text-2xl"
          >
            <img
              className="h-16 w-20 rounded-[100%] shadow-lg shadow-gray-800 "
              src="../assets/logo.png"
              alt=""
            />
          </Link>
          <div className="">
            <div className="flex items-center gap-3 max-w-md w-full ">
              <div className="flex items-center border w-50 p-1 md:w-full  md:pl-3 gap-1 bg-white border-gray-500/30 h-[46px] rounded-md overflow-hidden">
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
                  className="w-auto sm:w- md:w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm"
                />
              </div>
              <button
                onClick={handleSearchBar}
                type="submit"
                className="bg-slate-500 hover:bg-slate-600 transition-all duration-[500ms] cursor-pointer w-32 h-[46px] rounded-md text-sm text-white"
              >
                Search
              </button>
            </div>
          </div>
          <div className="">
            <span
              onClick={handleMenu}
              className="md:hidden cursor-pointer bg-transparent border px-3 py-2 rounded-e-full "
            >
              Menu
            </span>
          </div>

          <div className="hidden md:flex gap-4 mx-2 items-center justify-between">
            <Link to={"/blogs"} className="hover:text-gray-300 ">
              <span className="border px-4 py-2.5 bg-transparent hover:bg-slate-600 hover:border-0 transition duration-[400ms] rounded-md">
                New Byte
              </span>
            </Link>
            <div className="bo">
              <ThemeToggle />
            </div>
          </div>
        </div>
        {/* Side bar menu logic */}

        <div
          className={`${
            !isMenu
              ? "hidden "
              : "opacity-100 md:opacity-0 ease-in-out duration-[400ms] flex flex-col gap-12 mx-2 w-full items-center justify-center h-[200px] md:h-0"
          } `}
        >
          <Link to={"/blogs"} className="hover:text-gray-300 ">
            <span className="border px-4 py-2.5 bg-transparent hover:bg-slate-600 hover:border-0 transition duration-[400ms] rounded-md">
              New Byte
            </span>
          </Link>
          <div className="">
            <ThemeToggle />
          </div>
        </div>

        {/* Side bar menu logic */}
      </nav>

      <Toaster></Toaster>

      <div className="container mx-auto mt-8 px-4">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blogs" element={<AddBlog />} />
          <Route path="/blogs/:id" element={<EditBlog />} />
        </Routes>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
