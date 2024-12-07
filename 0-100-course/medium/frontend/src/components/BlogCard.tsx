import { Blog } from "../types/Blog";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

const BlogCard = ({ publishedDate, title, content, user, id }: Blog) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="flex flex-col w-full sm:w-[560px] lg:w-[672px] cursor-pointer">
      <div className="flex flex-col justify-start w-full">
        <div className="flex flex-row items-center">
          <Avatar firstName={user.firstName} />
          <div className="flex flex-row mt-2 ml-2">
            <div>
              {user.firstName} {user.lastName.charAt(0).toUpperCase()}.{" "}
            </div>
            <div className="ml-3 text-slate-600">
              {new Date(publishedDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
        <div className="font-bold text-2xl mt-2">{title}</div>
        <div className="mt-2 text-gray-800">{content.substring(0,100)}{content.length > 100 ? '...' : ''}</div>
      </div>
      <div className="mt-3 mb-5 text-slate-500">
        {Math.ceil(content.length / 200)} min read
      </div>
      <div className="bg-slate-200 h-1 mb-7"></div>
    </div>
    </Link>
  );
};

export default BlogCard;
