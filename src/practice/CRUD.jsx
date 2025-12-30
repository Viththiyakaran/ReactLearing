import axios from "axios";
import React, { useEffect, useState } from "react";

const CRUD = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [editingPostId, setEditingPostId] = useState(null);

  const api = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

  // Fetch posts
  const getPosts = async () => {
    try {
      const res = await api.get("/posts");
      setPosts(res.data.slice(0, 10));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (post) => {
    setEditingPostId(post.id);
    setFormData({ title: post.title, body: post.body });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingPostId) {
        const res = await api.put(`/posts/${editingPostId}`, {
          ...formData,
          userId: 1,
        });
        setPosts(posts.map((p) => (p.id === editingPostId ? res.data : p)));
        setEditingPostId(null);
      } else {
        const res = await api.post("/posts", { ...formData, userId: 1 });
        setPosts([res.data, ...posts]);
      }
      setFormData({ title: "", body: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Modern Axios CRUD Table
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-8 bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          required
        />
        <textarea
          name="body"
          placeholder="Message"
          value={formData.body}
          onChange={handleChange}
          className="border border-gray-300 p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          required
        />
        <button
          type="submit"
          className={`w-full py-3 rounded-lg font-semibold text-white transition 
            ${
              editingPostId
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
        >
          {editingPostId ? "Update Post" : "Add Post"}
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-gray-600 font-medium">
                UserID
              </th>
              <th className="px-6 py-3 text-left text-gray-600 font-medium">
                ID
              </th>
              <th className="px-6 py-3 text-left text-gray-600 font-medium">
                Title
              </th>
              <th className="px-6 py-3 text-left text-gray-600 font-medium">
                Message
              </th>
              <th className="px-6 py-3 text-left text-gray-600 font-medium">
                Edit
              </th>
              <th className="px-6 py-3 text-left text-gray-600 font-medium">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr
                key={`${post.id}-${index}`}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 text-gray-700">{post.userId}</td>
                <td className="px-6 py-4 text-gray-700">{post.id}</td>
                <td className="px-6 py-4 text-gray-700">{post.title}</td>
                <td className="px-6 py-4 text-gray-700">{post.body}</td>
                <td
                  className="px-6 py-4 text-blue-500 font-semibold cursor-pointer hover:underline"
                  onClick={() => handleEdit(post)}
                >
                  Edit
                </td>
                <td
                  className="px-6 py-4 text-red-500 font-semibold cursor-pointer hover:underline"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CRUD;
