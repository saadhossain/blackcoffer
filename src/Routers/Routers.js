import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path:'/register',
        element: <Register></Register>
    },
    {
        path: '/',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/',
                element: <Dashboard></Dashboard>
            }
        ]
    }
])