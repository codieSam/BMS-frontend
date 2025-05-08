import { createContext, useContext, useEffect, useState } from "react";
export const AppContext = createContext();
import blogServices from "../src/services/blog.services";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export const AppContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [allBlogs, setAllBlogs] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const [myTheme, setMyTheme] = useState(false);

  const toggleTheme = () => {
    setMyTheme(!myTheme);
  };

  const saveBlog = () => {
    console.log("Vlog Saved");
    const data = { title, description, isSubmitted };
    blogServices
      .create(data)
      .then((response) => {
        console.log(response.data);
        setIsSubmitted(true);
        navigate("/");
        fetchAllBlogs();
        toast.success("Blog added successfully !");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const fetchAllBlogs = () => {
    console.log("Fetching all blogs");
    blogServices
      .getAll()
      .then((response) => {
        // console.log("Full response", response.data.data);
        setAllBlogs("Response data ", response.data.data);
        if (Array.isArray(response.data.data)) {
          setAllBlogs(response.data.data);
        } else {
          console.error(
            "Expected an array, but got ",
            typeof response.data,
            response.data
          );
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const deleteBlog = (id) => {
    console.log("Deleting !");
    // console.log("All blogs", allBlogs);
    // console.log("Id is ", id);
    blogServices
      .remove(id)
      .then(() => {
        console.log("Deleted successfully");
        fetchAllBlogs();
        toast.success("Blog deleted successfully");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const editBlog = (id) => {
    navigate(`/blogs/${id}`);
  };

  const updateBlog = async (id, updatedData) => {
    console.log("Updating", id, updatedData);
    await blogServices
      .update(id, updatedData)
      .then(() => {
        // fetchAllBlogs();
      })
      .catch((e) => {
        console.error(e);
      });
    navigate("/");
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  const value = {
    toggleTheme,
    title,
    setTitle,
    description,
    setDescription,
    saveBlog,
    fetchAllBlogs,
    allBlogs,
    setAllBlogs,
    navigate,
    deleteBlog,
    editBlog,
    updateBlog,
    searchValue,
    setSearchValue,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

// --------->>>  Basic syntax of AppCOntext <<<-------\\

// const AppContext = createContext()
// export const AppCOntextProvider = ({childern})=>{
//    const value = {

//     }
//     <AppContext.Provider value={value}>{childern} </AppCOntext.Provider>
// }

// export const useAppContext = ()=>{
//     return useContext(AppContext)
// }
