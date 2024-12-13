"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Appbar = () => {
  const session = useSession();
  return (
    <div>
      <button
        onClick={() => {
          signIn();
        }}
      >
        Signin
      </button>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </button>
      {JSON.stringify(session)}
    </div>
  );
};

export default Appbar;
