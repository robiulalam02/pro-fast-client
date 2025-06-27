import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Authentication from "../Layouts/Authentication";
import Login from "../Pages/Home/Authentication/Login";
import Register from "../Pages/Home/Authentication/Register";
import Coverage from "../Pages/Coverage/Coverage";
import AddParcel from "../Pages/AddParcel/AddParcel";
import PrivateRoute from "../routes/PrivateRoute"
import Dashboard from "../Layouts/Dashboard";
import MyParcels from "../Pages/Dashboard/MyParcels";
import Payment from "../Pages/Dashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import DashboardHome from "../Pages/Dashboard/DashboardHome";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/coverage',
                Component: Coverage,
                loader: ()=> fetch('servicelocation.json')
            },
            {
                path: '/pricing',
                Component: AddParcel,
                loader: ()=> fetch('servicelocation.json')
            }
        ]
    },
    {
        path: '/',
        Component: Authentication,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <Dashboard />
        </PrivateRoute>,
        children: [
            {
                index: true,
                Component: DashboardHome
            },
            {
                path: "myparcels",
                Component: MyParcels
            },
            {
                path: 'payment/:id',
                Component: Payment
            },
            {
                path: 'paymentHistory',
                Component: PaymentHistory
            }
        ]
    }

]);