import React from 'react';

const SmallSpinner = () => {
    return (
        <div className='flex items-center gap-1'>
            <div className="w-6 h-6 border-3 border-dashed rounded-full animate-spin border-white"></div>
            <h4>Processing</h4>
        </div>
    );
};

export default SmallSpinner;