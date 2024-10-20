import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";


const router = createBrowserRouter([
     {
          path: "/",
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/logIn',
                    element: <Login></Login>
               },
               {
                    path: '/singUp',
                    element: <SingUp></SingUp>
               }
          ]
     },
]);
export default router;