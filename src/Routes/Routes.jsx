import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CheckOut from "../Pages/CheckOut/CheckOut";


const router = createBrowserRouter([
     {
          path: "/",
          element: <Main></Main>,
          errorElement: <ErrorPage></ErrorPage>,
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
               },
               {
                    path: '/checkout/:id',
                    element: <CheckOut></CheckOut>,
                    loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
               }

          ]
     },
]);
export default router;