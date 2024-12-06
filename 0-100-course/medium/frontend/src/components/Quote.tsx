import React from "react";

const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center flex-col">
        <div className="max-w-lg">
          <div className="font-bold text-2xl mb-3">
            "The customer service I received was exceptional. The support team
            went above and beyond to address my concerns"
          </div>
        </div>
          <div className="font-semibold text-xl mb-1">Jules Winnfield</div>
          <div className="font-light text-sm text-slate-500">CEO, Acme Inc</div>
      </div>
    </div>
  );
};

export default Quote;
