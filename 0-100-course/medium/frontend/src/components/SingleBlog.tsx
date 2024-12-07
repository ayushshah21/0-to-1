import { Blog } from "../types/Blog";
import Avatar from "./Avatar";

const SingleBlog = ({ publishedDate, title, content, user }: Blog) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 w-full max-w-screen-xl px-10 pt-5">
        <div className="col-span-8">
          <div className="flex flex-col justify-start w-full">
            <div className="font-bold text-5xl mt-2">{title}</div>
            <div className="flex flex-row items-center">
              <div className="flex flex-row mt-2 mb-3">
                <div className=" text-slate-600">
                  Posted on{" "}
                  {new Date(publishedDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </div>
            </div>
            <div className="mt-2 text-gray-700">{content}</div>
          </div>
          <div className="mt-3 text-slate-500">
            {Math.ceil(content.length / 200)} min read
          </div>
        </div>
        <div className="invisible md:visible col-span-4 ml-5 flex flex-col justify-start p-8 max-w-md">
          <div className="ml-1 font-small text-lg">Author</div>
          <div className="flex flex-col p-3">
            <div className="flex flex-row">
              <div className="mt-3">
                <Avatar firstName={user.firstName} />
              </div>
              <div className="flex flex-col ml-2">
                <div className="font-bold text-xl mb-3 mt-1">
                  {user.firstName} {user.lastName}
                </div>
                <div className="text-slate-600">
                  Jack of none, Master of all
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
