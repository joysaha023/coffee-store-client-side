import React from 'react';
import Home from '../Pages/Home/Home';
import AddCoffee from '../Components/AddCoffee/AddCoffee';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;