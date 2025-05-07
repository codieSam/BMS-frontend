import { useState } from "react";
import { useAppContext } from "../../contexts/BlogContext";

const EditBlog = () => {
  const {allBlogs title, setTitle, description, setDescription, editBlog, navigate } =
    useAppContext();

  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDesc, setUpdatedDesc] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleUpdate = () => {
    setEditingId = 
  };

  return (
    <div className="mt-12">
      <div className="max-w-sm mx-auto p-4 bg-white rounded shadow">
        <div className="">
          <h4 className="font-bold text-xl mb-2">Edit Blog</h4>
          <div className="mb-2">
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              className="border border-gray-300 w-full px-2 p-1"
              value={title}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1 font-medium">Description</label>
            <input
              type="text"
              className="border border-gray-300 w-full px-2 py-1"
              value={description}
              onChange={(e) => {
                setUpdatedDesc(e.target.value);
              }}
            />
          </div>

          <button
            className="bg-green-500 text-white cursor-pointer hover:bg-green-400 px-3 py-1.5 rounded mt-2"
            onClick={() => editBlog(updatedTitle, updatedDesc)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
