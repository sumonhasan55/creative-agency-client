import Cart from "../Cart/Cart";
import Login from "../Home/Account/Login/Login";
import Register from "../Home/Account/Register/Register";
import Dashboard from "../layout/Main/Dashboard";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main/Main");
const { default: Home } = require("../Home/Home/Home");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },

        ],


    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard',
                element: <Cart></Cart>
            }
        ]
    }
])
export default router;