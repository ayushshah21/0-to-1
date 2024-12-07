import React from "react";
import { useParams } from "react-router-dom";
import useBlog from "../hooks/useBlog";
import SingleBlog from "../components/SingleBlog";

const Blog = () => {
  const { id } = useParams();
  const numId = Number(id);
  const { blogInfo, loading } = useBlog(numId);
  if(loading) return <div>Loading...</div>
  if(!blogInfo) return <div>Blog not found</div>
  return (
    <div className="flex flex-col p-10 items-center">
        <SingleBlog title={blogInfo.title} id={blogInfo.id} content={blogInfo.content} user={{firstName: blogInfo.user.firstName, lastName: blogInfo.user.lastName}} publishedDate={blogInfo.publishedDate}/>
    </div>
  )
};

export default Blog;
