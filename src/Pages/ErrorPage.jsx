import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-10'>
            <h2 className='text-4xl text-center font-bold'>oopss..</h2>
            <p className='text-3xl text-center font-semibold pt-6'>404</p>
            <Link to="/"><button className='btn btn-lg rounded-full bg-[#9538E2] text-white hover:text-black'>Return Home</button></Link>
        </div>
    );
};

export default ErrorPage;