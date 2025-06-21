import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Authentication from "../Layouts/Authentication";
import Login from "../Pages/Home/Authentication/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
        path: '/',
        Component: Authentication,
        children: [
            {
                path: 'auth/login',
                Component: Login
            }
        ]
    }
]);