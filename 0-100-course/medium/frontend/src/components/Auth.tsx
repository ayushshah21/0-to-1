import { Link, useNavigate } from "react-router-dom";
import InputLabel from "./InputLabel";
import { useState } from "react";
import axios from 'axios'
import {BACKEND_URL} from '../../config'; 
import Loader from "./Loader";

const Auth = ({type}: {type: string}) => {
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(type == 'Signup' && (!username || !email || !password)){
            alert("Fill in all Fields");
            return;
        }
        if(type == 'Signin' && (!email || !password)){
            alert("Fill in all Fields");
            return;
        }
         try{
            setLoading(true);
            const res = type === 'Signin' ? await handleSignin() : await handleSignup();
            setLoading(false);
            localStorage.setItem('token', res.data.token);
            navigate('/blog/1');
            
         }
         catch(err){
            setLoading(false);
            console.log(err, "Auth Error")
         }
        if(type === 'Signin') handleSignin();
        else handleSignup();
    }

    async function handleSignin(){
        return await axios.post(`${BACKEND_URL}/api/user/signin`, null, {
            headers : {
                username: email, 
                password
            }
        });
    }

    async function handleSignup(){
        return await axios.post(`${BACKEND_URL}/api/user/signup`, {name: username, email, password});
    }

  return (
    <form onSubmit={handleSubmit} className="h-screen flex flex-col justify-center items-center">
       <div className="font-bold text-3xl max-w-md">{type === 'Signin'? "Sign In": "Create an account"}</div>
      {loading && <Loader />}
      {!loading && <div className="text-gray-500">{type === 'Signin'? "Don't have an account?": "Already have an account?"} <Link className="underline" to={type === 'Signin' ? '/signup' : '/signin'}> {type === 'Signup' ? 'Sign in': 'Sign Up'} </Link></div>}
      <div className="flex flex-col justify-center">
        
        {!loading && type === 'Signup' && <InputLabel value={username} onChange={setUsername} labelName="Username" placeholder="Enter your username" />}
        {!loading && <InputLabel value={email} onChange={setEmail} labelName="Email" placeholder="m@example.com" />}
        {!loading && <InputLabel value={password} onChange={setPassword} type="password" labelName="Password" placeholder="" />}
        <div>
          <button disabled={loading} className='w-full bg-gray-900 hover:bg-black text-white p-2 rounded-md mt-5'>
            {type === 'Signup' ? 'Sign up': 'Login'}
          </button>
        </div>
      </div>
    </form>
  );
};


export default Auth;
