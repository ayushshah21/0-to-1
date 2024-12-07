
import Avatar from "./Avatar";

const SingBlogSkeleton = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 w-full max-w-screen-xl px-10 pt-5">
        <div className="col-span-8">
          <div className="flex flex-col justify-start w-full">
            <div className="font-bold text-5xl mt-2 h-5 bg-slate-200 mb-5 rounded-md"></div>
            <div className="flex flex-row items-center h-5 bg-slate-200 max-w-48 rounded-md">
              <div className="flex flex-row mt-2 mb-3 h-5 bg-slate-200">
                <div className=" text-slate-600 h-5 bg-slate-200"></div>
              </div>
            </div>
            <div className="mt-2 text-gray-700 h-3 w-full bg-slate-200"></div>
          </div>
          <div className="mt-3 text-slate-500 w-28 bg-slate-200 h-3"></div>
        </div>
        <div className="invisible md:visible col-span-4 ml-12 flex flex-col justify-start p-8 max-w-md">
          <div className="ml-1 font-small text-lg bg-slate-200 w-28 h-3"></div>
          <div className="flex flex-col p-3 ">
            <div className="flex flex-row">
              <div className="mt-3">
                <Avatar firstName="" />
              </div>
              <div className="flex flex-col ml-2">
                <div className="font-bold text-xl mb-3 mt-1 w-28 h-5 bg-slate-200"></div>
                <div className="text-slate-600 h-3 bg-slate-200 w-25">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingBlogSkeleton;
