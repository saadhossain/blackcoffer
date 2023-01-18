import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <div className='flex gap-10'>
                <div>
                    <h1>Dashboard</h1>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;