import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Logo from '../Pages/Shared/ProfastLogo/Logo';
import "./Styles/dashboard.css"
import { BiHomeAlt2, BiPackage } from 'react-icons/bi';
import { BsCashCoin } from 'react-icons/bs';


const Dashboard = () => {
    const links = <>
        <Logo />
        <li className='mt-5'>
            <NavLink
                to="/dashboard"
                end
                className={({ isActive }) => isActive ? "active flex items-center gap-2" : "flex items-center gap-2"}
            >
                <BiHomeAlt2 className="text-lg" />
                Dashboard Home
            </NavLink>
        </li>
        <li className='mt-5'>
            <NavLink
                to="/dashboard/myparcels"
                className={({ isActive }) => isActive ? "active flex items-center gap-2" : "flex items-center gap-2"}
            >
                <BiPackage className="text-lg" />
                My Parcels
            </NavLink>
        </li>
        <li className='mt-5'>
            <NavLink
                to="/dashboard/paymentHistory"
                className={({ isActive }) => isActive ? "active flex items-center gap-2" : "flex items-center gap-2"}
            >
                <BsCashCoin className="text-lg" />
                Payment History
            </NavLink>
        </li>
    </>

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar w-full lg:hidden">
                    <div className="flex-none ">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2">Navbar Title</div>
                </div>
                {/* Page content here */}
                <Outlet />
            </div>
            <div className="drawer-side bg-base-100 ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;