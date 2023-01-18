import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBg from '../../assests/login-background.png';
import { AuthContext } from '../../Context/AuthProvider';
import './Login.css';

const Login = () => {
    const {userLogin} = useContext(AuthContext);
    //Naviagation hook
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    //Functionality for login user
    const handleUserLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogin(email, password)
        .then((result)=>{
            e.target.reset()
            toast.success('Account Login Successfull...')
            navigate(from, {replace: true})
        })
        .catch(err => console.error(err))

    }
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
                    <form onSubmit={handleUserLogin} className="space-y-6 ng-untouched ng-pristine ng-valid px-20">
                        <div className="space-y-2">
                            <div>
                                <label htmlFor="email" className="block mb-2">Email address</label>
                                <input type="email" name="email" id="email" placeholder="ajay@blackcoffer.com" className="w-full px-3 py-2 border rounded-md" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password">Password</label>
                                    <Link rel="noopener noreferrer" href="#" className="text-sm hover:underline">Forgot password?</Link>
                                </div>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className='flex justify-center'>
                                <button type="submit" className="w-32 py-3 font-semibold rounded-3xl bg-primary hover:bg-secondary duration-300 ease-in-out text-white">Sign in</button>
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