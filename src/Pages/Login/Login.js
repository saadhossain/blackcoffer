import React from 'react';
import { Link } from "react-router-dom";
import loginBg from '../../assests/login-background.png';
import './Login.css';

const Login = () => {
    return (
        <div className='login-bg min-h-screen'>
            <div className='flex max-w-6xl pt-10 mx-auto gap-10'>
                <div className='w-2/4'>
                    <img src={loginBg} alt='Login Background'/>
                </div>
                {/* Login Form */}
                <div className="w-2/4 flex flex-col justify-center bg-white rounded-lg text-primary font-semibold">
                    <h3 className='py-3 px-5 rounded-r-md bg-primary text-white w-48 shadow-lg'>Welcome Back</h3>
                    <h1 className="my-3 text-2xl font-bold text-center">Login your Account</h1>
                    <form className="space-y-6 ng-untouched ng-pristine ng-valid px-20">
                        <div className="space-y-2">
                            <div>
                                <label for="email" className="block mb-2">Email address</label>
                                <input type="email" name="email" id="email" placeholder="ajay@blackcoffer.com" className="w-full px-3 py-2 border rounded-md" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label for="password">Password</label>
                                    <Link rel="noopener noreferrer" href="#" className="text-sm hover:underline">Forgot password?</Link>
                                </div>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className='flex justify-center'>
                                <button type="button" className="w-32 py-3 font-semibold rounded-3xl bg-primary hover:bg-secondary duration-300 ease-in-out text-white">Sign in</button>
                            </div>
                            <p className="px-6 text-sm text-center  text-primary">Don't have an account yet? 
                                <Link to='/register' className="hover:underline"> Sign up</Link>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;