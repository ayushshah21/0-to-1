import axios from "axios";
import React, { useState } from "react";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import SingBlogSkeleton from "../components/SingBlogSkeleton";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function handlePublish() {
    if (!title || !content) {
      alert("Fill in all fields");
      return;
    }
    console.log(title);
    console.log(content);
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please sign in");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post(
        `${BACKEND_URL}/api/blog`,
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        }
      );
      setLoading(false);
      navigate(`/blog/${res.data.id}`);
    } catch (err) {
      console.log(err, "Error creating Blog");
    }
  }
  if (loading) return <SingBlogSkeleton />;
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[800px] p-5 m-5">
        <div className="mb-6">
          <label className="block mb-2 text-md font-bold text-gray-900 dark:text-white mt-5">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
          >
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            id="large-input"
            rows={4}
            className="block text-md w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          onClick={handlePublish}
          type="submit"
          className="items-center px-5 py-2.5 w-25 text-md font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          Publish post
        </button>
      </div>
    </div>
  );
};

export default Publish;
