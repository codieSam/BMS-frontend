// import { useState } from "react";
import { useAppContext } from "../../contexts/BlogContext";
// import axios from "axios";

const AddBlog = () => {
  const { title, setTitle, description, setDescription, saveBlog, navigate } =
    useAppContext();

  // const [file, setFile] = useState();

  // const upload = () => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   axios
  //     .post("http://localhost:3000/blogs", formData)
  //     .then((res) => {})
  //     .catch((e) => console.log(e));
  // };

  return (
    <div className="mt-12">
      <div className="max-w-sm mx-auto p-4 bg-white rounded shadow">
        <div className="">
          <h4 className=" font-extrabold text-gray-500 text-2xl mb-2">
            Create ⬇️
          </h4>
          <form action="/blogs" method="post" encType="multipart/form-data">
            <div className="mb-2">
              <label className="block mb-1 font-medium text-gray-800">
                Title
              </label>
              <input
                type="text"
                className="border border-gray-300 w-full px-2 p-1 outline-none"
                // value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1 font-medium text-gray-800">
                Description
              </label>
              <input
                type="text"
                className="border border-gray-300 w-full px-2 py-1 outline-none"
                // value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="my-4 ">
              <input
                className="cursor-pointer hover:bg-gray-200 border border-gray-300 text-center rounded py-2 px-1 text-gray-800"
                type="file"
                name="poster"
                id=""
              />
              <button>Upload</button>
            </div>

            <button
              className="bg-slate-500 text-white cursor-pointer hover:bg-slate-400 px-3 py-1.5 rounded mt-2"
              onClick={saveBlog}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
