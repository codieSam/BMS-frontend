import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json", //standard mime type, indicated that the data being sent or received is JSON data.
  },
});

const getAll = () => {
  return http.get("/blogs");
};

const create = (data) => {
  return http.post("/blogs", data);
};

const update = (id, data) => {
  return http.patch(`/blogs/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/blogs/${id}`);
};

export default { getAll, create, update, remove };
