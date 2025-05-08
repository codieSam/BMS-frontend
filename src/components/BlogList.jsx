import React from "react";
import { useAppContext } from "../../contexts/BlogContext";

const BlogList = () => {
  const { allBlogs, deleteBlog, editBlog } = useAppContext();
  // console.log(allBlogs);
  return (
    <div className=" flex-row gap-2 md:gap-4 lg:gap-3 overflow-hidden grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
      {allBlogs &&
        allBlogs.map((blog, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md text-sm max-w-80 min-h-50"
          >
            <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">
              {blog.title}
            </p>
            <p className="text-gray-500 mt-3 ml-2">{blog.description}</p>
            <button
              onClick={() => editBlog(blog.id, blog)}
              type="button"
              className="bg-green-500 cursor-pointer mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded text-white"
            >
              Edit
            </button>
            <button
              onClick={() => deleteBlog(blog.id)}
              type="button"
              className="bg-red-500 cursor-pointer mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded text-white"
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default BlogList;
