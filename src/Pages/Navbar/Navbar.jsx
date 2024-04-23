import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='text-center '>
            <Link to={"/"} className='btn btn-success mr-5'>Home</Link>
            <Link to={"/signin"} className='btn btn-success mr-5'>Sign In</Link>
            <Link to={"/signup"} className='btn btn-success mr-5'>Sign Up</Link>
            <Link to={"/users"} className='btn btn-primary'>Users</Link>
        </div>
    );
};

export default Navbar;