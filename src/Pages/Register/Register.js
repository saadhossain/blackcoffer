import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from "react-router-dom";
import registerBg from '../../assests/registration.png';
import { AuthContext } from '../../Context/AuthProvider';
import '../Login/Login.css';

const Register = () => {
    const { userRegister, updateUser } = useContext(AuthContext);
    //Naviagation hook
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    //Functionality to create new user account
    const handleUserRegistration = (e) => {
        e.preventDefault()
        const form = e.target;
        const fullName = form.fullname.value;
        const profileImage = form.profile.files[0];
        const email = form.email.value;
        const password = form.password.value;
        //Upload file to imgbb
        const formData = new FormData()
        formData.append('image', profileImage)
        const imgbbURL = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB}`
        fetch(imgbbURL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                const profilePic = data.data.url;
                userRegister(email, password)
                    .then((result) => {
                        updateUser(fullName, profilePic)
                            .then(() => { })
                            .catch(err => console.error(err))
                        toast.success('Your Account Registration Successful...')
                        form.reset()
                        navigate(from, {replace: true})
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='login-bg min-h-screen'>
            <div className='flex max-w-6xl pt-10 mx-auto gap-10 items-center'>
                <div className='w-2/4'>
                    <img src={registerBg} alt='Registration Background' />
                </div>
                {/* Login Form */}
                <div className="w-2/4 py-10 flex flex-col justify-center bg-white rounded-lg text-primary font-semibold">
                    <h3 className='py-3 px-5 rounded-r-md bg-primary text-white w-56 shadow-lg mb-3'>Create an Account Now</h3>
                    <form onSubmit={handleUserRegistration} className="space-y-6 ng-untouched ng-pristine ng-valid px-20">
                        <div className="space-y-2">
                            <div>
                                <label htmlFor="fullname" className="block mb-2">Full Name</label>
                                <input type="text" name="fullname" id="fullname" placeholder="Ajay Bidyarthy" className="w-full px-3 py-2 border rounded-md" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2">Email address</label>
                                <input type="email" name="email" id="email" placeholder="ajay@blackcoffer.com" className="w-full px-3 py-2 border rounded-md" />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md" />
                            </div>
                            <div>
                                <label htmlFor="profile" className="block mb-2">Upload Profile Image</label>
                                <input type="file" name="profile" id="profile" className="w-full px-3 py-2 border rounded-md" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className='flex justify-center'>
                                <button type="sumbit" className="w-32 py-3 font-semibold rounded-3xl bg-primary hover:bg-secondary duration-300 ease-in-out text-white">Sign up</button>
                            </div>
                            <p className="px-6 text-sm text-center  text-primary">Already have an account?
                                <Link to='/login' className="hover:underline"> Sign in</Link>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;