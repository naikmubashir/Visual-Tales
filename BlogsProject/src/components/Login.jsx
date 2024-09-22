import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

const Login = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm(); //handleSubmit is a keyword
  const [error, setError] = useState();

  const login = async (data) => {//handleSubmit is a keyword , dont make a function of that name
    try {
      // Check if the email and password are correct, and attempt to create a session
      const session = await authService.login(data);

      if (session) {
        // If a session is created, the user is logged in
        // Fetch the current user's data after successfully logging in
        const userData = await authService.getCurrentUser();

        if (userData) {
          // Dispatch the action to update the global state with the logged-in user's data
          dispatch(authLogin(userData));
        }

        // Redirect the user to the homepage after successful login
        navigate("/");
      }
    } catch (err) {
      // Catch any error during login and set an appropriate error message
      setError(err.message);
    }
  };

  return (
  <div className='flex items-center justify-center w-full'>
    <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
    </div>
  </div>
  )
};

export default Login;
