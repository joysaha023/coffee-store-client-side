import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layouts/Root";
import Errorpage from "../Pages/Errorpage/Errorpage";
import AddCoffee from "../Components/AddCoffee/AddCoffee";
import CoffeeCard from "../Pages/CoffeeCard/CoffeeCard";
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile";


const loader = async () => {
  const response = await fetch('http://localhost:5000/coffee');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
};

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Errorpage></Errorpage>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
          loader: loader
        },
        {
          path: "/AddCoffee",
          element: <AddCoffee></AddCoffee>,
          
        },
        {
          path: "/coffeeCard",
          element: <CoffeeCard></CoffeeCard>,
        },
        {
          path: "/UpdateProfile/:id",
          element: <UpdateProfile></UpdateProfile>,
          loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`) 
        }
      ]
    },
]);

export default router;