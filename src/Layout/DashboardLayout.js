import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import {RxDashboard} from 'react-icons/rx';
import {FaUserAstronaut} from 'react-icons/fa';
import {IoMdLogOut} from 'react-icons/io'
import { AuthContext } from '../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const DashboardLayout = () => {
    const {logOut} = useContext(AuthContext);

    //Fucntionality to logout
    const handleLogOut = () => {
        logOut()
        .then(()=> {
            toast.error('You are logged out...')
        })
        .catch(err => console.error(err))
    }
    return (
        <div>
            <div className='flex gap-10 max-w-6xl w-11/12 mx-auto py-10'>
                <div className='w-4/12 bg-primary rounded-lg p-10'>
                    <h1 className='flex items-center gap-1'><RxDashboard/>Dashboard</h1>
                    <h1 className='flex items-center gap-1'><FaUserAstronaut/>Profile</h1>
                    <button onClick={handleLogOut} className='flex items-center gap-1'><IoMdLogOut/>Logout</button>
                </div>
                <div className='w-8/12'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;