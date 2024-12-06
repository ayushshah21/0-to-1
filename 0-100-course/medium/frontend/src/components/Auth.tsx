import { Link } from "react-router-dom";
import InputLabel from "./InputLabel";
import { useState } from "react";

const Auth = ({type}: {type: string}) => {
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    function handleSubmit(){

    }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="font-bold text-3xl max-w-md">{type === 'Signin'? "Sign In": "Create an account"}</div>
      <div className="text-gray-500">{type === 'Signin'? "Don't have an account?": "Already have an account?"} <Link className="underline" to={type === 'Signin' ? '/signup' : '/signin'}> {type === 'Signup' ? 'Sign in': 'Sign Up'} </Link></div>
      <div className="flex flex-col justify-center">
        {type === 'Signup' && <InputLabel value={username} onChange={setUsername} labelName="Username" placeholder="Enter your username" />}
        <InputLabel value={email} onChange={setEmail} labelName="Email" placeholder="m@example.com" />
        <InputLabel value={password} onChange={setPassword} type="password" labelName="Password" placeholder="" />
        <div>
          <button onClick={handleSubmit} className='w-full bg-gray-950 text-white p-2 rounded-md mt-5'>
            {type === 'Signup' ? 'Sign up': 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};


export default Auth;
