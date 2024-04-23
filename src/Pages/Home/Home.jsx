import React, { useState } from 'react';
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
  const loadedcoffees = useLoaderData();
  const [coffees, setcoffees] = useState(loadedcoffees)
    
    return (
        <div className='text-center'>
            <h2>Hello world from home {coffees.length}</h2>
            <div className='grid grid-cols-1 mb-8 gap-5 md:grid-cols-3 px-10 mt-10'>
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffees={coffees} setcoffees={setcoffees}  coffee={coffee}></CoffeeCard>)
                }
            </div>

            <Link to={"/AddCoffee"}><button className='btn btn-accent'>Add Coffee</button></Link>
        </div>
    );
};

export default Home;