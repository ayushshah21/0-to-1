import { Blog } from "../types/Blog";

const SingleBlog = ({ publishedDate, title, content }: Blog) => {
  return (
    <div className="flex flex-col w-full sm:w-[560px] lg:w-[672px] cursor-pointer">
      <div className="flex flex-col justify-start w-full">
        <div className="font-bold text-5xl mt-2">{title}</div>
        <div className="flex flex-row items-center">
          <div className="flex flex-row mt-2 mb-3">
            <div className=" text-slate-600">
              Posted on {new Date(publishedDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
        <div className="mt-2 text-gray-800">
          {content}
        </div>
      </div>
      <div className="mt-3 mb-5 text-slate-500">
        {Math.ceil(content.length / 200)} min read
      </div>
    </div>
  );
};

export default SingleBlog;
