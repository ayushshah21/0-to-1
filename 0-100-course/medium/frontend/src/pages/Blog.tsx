import { useParams } from "react-router-dom";
import useBlog from "../hooks/useBlog";
import SingleBlog from "../components/SingleBlog";
import SingBlogSkeleton from "../components/SingBlogSkeleton";

const Blog = () => {
  const { id } = useParams();
  const numId = Number(id);
  const { blogInfo, loading, error } = useBlog(numId);

  if (loading) {
    return (
      <div className="flex flex-col p-10 mr-10 mt-5 items-center">
        <SingBlogSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col p-10 items-center">
        <div className="text-slate-900 text-xl">{error}</div>
      </div>
    );
  }

  if (!blogInfo) {
    return (
      <div className="flex flex-col p-10 items-center">
        <div>Blog not found</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-10 items-center">
      <SingleBlog
        title={blogInfo.title}
        id={blogInfo.id}
        content={blogInfo.content}
        user={{
          firstName: blogInfo.user.firstName,
          lastName: blogInfo.user.lastName,
        }}
        publishedDate={blogInfo.publishedDate}
      />
    </div>
  );
};

export default Blog;
