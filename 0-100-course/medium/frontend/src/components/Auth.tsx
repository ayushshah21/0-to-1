import { Link, useNavigate } from "react-router-dom";
import InputLabel from "./InputLabel";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import Loader from "./Loader";
import { useUser } from "../context/useUser";

const Auth = ({ type }: { type: string }) => {
  const { setUser } = useUser();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (type == "Signup" && (!firstName || !lastName || !email || !password)) {
      alert("Fill in all Fields");
      return;
    }
    if (type == "Signin" && (!email || !password)) {
      alert("Fill in all Fields");
      return;
    }
    try {
      setLoading(true);
      const res =
        type === "Signin" ? await handleSignin() : await handleSignup();
      console.log(res);
      setLoading(false);
      localStorage.clear();
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("token", JSON.stringify(res.data.token));
      setUser(res.data.userData);
      navigate("/blogs");
    } catch (err) {
      setLoading(false);
      console.log(err, "Auth Error");
    }
  }

  async function handleSignin() {
    return await axios.post(`${BACKEND_URL}/api/user/signin`, null, {
      headers: {
        username: email,
        password,
      },
    });
  }

  async function handleSignup() {
    return await axios.post(`${BACKEND_URL}/api/user/signup`, {
      firstName,
      lastName,
      email,
      password,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen flex flex-col justify-center items-center"
    >
      <div className="font-bold text-3xl max-w-md">
        {type === "Signin" ? "Sign In" : "Create an account"}
      </div>
      <div className="text-gray-500">
        {type === "Signin"
          ? "Don't have an account?"
          : "Already have an account?"}{" "}
        {!loading && (
          <Link
            className="underline"
            to={type === "Signin" ? "/signup" : "/signin"}
          >
            {" "}
            {type === "Signup" ? "Sign in" : "Sign Up"}{" "}
          </Link>
        )}
        {loading && (
          <span className="underline cursor-pointer">
            {type === "Signup" ? "Sign in" : "Sign Up"}
          </span>
        )}
      </div>
      <div className="flex flex-col justify-center">
        {type === "Signup" ? (
          <InputLabel
            value={firstName}
            onChange={setFirstName}
            labelName="First Name"
            placeholder="Enter first name"
          />
        ) : null}
        {type === "Signup" ? (
          <InputLabel
            value={lastName}
            onChange={setLastName}
            labelName="Last Name"
            placeholder="Enter last name"
          />
        ) : null}
        <InputLabel
          value={email}
          onChange={setEmail}
          labelName="Email"
          placeholder="m@example.com"
        />
        <InputLabel
          value={password}
          onChange={setPassword}
          type="password"
          labelName="Password"
          placeholder=""
        />
        <div>
          {!loading && (
            <button className="w-full bg-gray-900 hover:bg-black text-white p-2 rounded-md mt-5">
              {type === "Signup" ? "Sign up" : "Login"}
            </button>
          )}
          {loading && (
            <div className="w-full bg-gray-900 hover:bg-black text-white p-2 rounded-md mt-5 flex justify-center">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default Auth;
