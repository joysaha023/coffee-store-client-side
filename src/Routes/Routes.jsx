import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layouts/Root";
import Errorpage from "../Pages/Errorpage/Errorpage";
import AddCoffee from "../Components/AddCoffee/AddCoffee";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Errorpage></Errorpage>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/AddCoffee",
          element: <AddCoffee></AddCoffee>
        }
      ]
    },
]);

export default router;