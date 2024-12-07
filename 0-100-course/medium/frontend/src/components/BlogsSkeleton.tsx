import React from "react";
import Avatar from "./Avatar";

const BlogsSkeleton = () => {
  return (
    <div className="flex flex-col w-full sm:w-[560px] lg:w-[672px] cursor-pointer">
      <div className="flex flex-col justify-start w-full">
        <div className="flex flex-row items-center">
          <Avatar firstName='' />
          <div className="flex flex-row mt-2 ml-2 h-3">
            <div className="h-3 bg-slate-500">
             <div className="bg-slate-200 h-3 w-28"></div>
            </div>
            <div className="ml-3 text-slate-600 h-3">
            </div>
          </div>
        </div>
        <div className="font-bold text-2xl mt-2 h-3 bg-slate-200"></div>
        <div className="mt-2 text-gray-800 h-3  bg-slate-200"></div>
      </div>
      <div className="mt-3 mb-5 text-slate-500 h-2">
      </div>
      <div className="bg-slate-200 h-1 mb-7"></div>
    </div>
  );
};

export default BlogsSkeleton;
