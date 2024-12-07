import React from "react";

interface name {
  firstName?: string;
}

const Avatar = ({ firstName }: name) => {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600 mr-2">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {firstName ? firstName.charAt(0): ''}
      </span>
    </div>
  );
};

export default Avatar;
