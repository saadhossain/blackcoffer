import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="w-20 h-20 border-6 border-dashed rounded-full animate-spin border-primary"></div>
        </div>
    );
};

export default Loader;