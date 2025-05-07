import { useAppContext } from "../../contexts/BlogContext";

const AddBlog = () => {
  const { title, setTitle, description, setDescription, saveBlog, navigate } =
    useAppContext();

  return (
    <div className="mt-12">
      <div className="max-w-sm mx-auto p-4 bg-white rounded shadow">
        <div className="">
          <h4 className="font-bold text-xl mb-2">Add Blog</h4>
          <div className="mb-2">
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              className="border border-gray-300 w-full px-2 p-1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1 font-medium">Description</label>
            <input
              type="text"
              className="border border-gray-300 w-full px-2 py-1"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>

          <button
            className="bg-green-500 text-white cursor-pointer hover:bg-green-400 px-3 py-1.5 rounded mt-2"
            onClick={saveBlog}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
