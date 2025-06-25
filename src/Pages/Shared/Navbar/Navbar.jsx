import React from 'react';
import Logo from '../ProfastLogo/Logo';
import { NavLink, useNavigate } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Navbar = () => {

    const { user, signOutUser } = useAuth();
    const navigate = useNavigate();
    console.log(user);

    const navItems = <>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/coverage">Coverage</NavLink></li>
        <li><NavLink to="/pricing">Pricing</NavLink></li>
        <li><NavLink to="/dashboard">About us</NavLink></li>
        <li><NavLink to="/be-a-rider">Be a Rider</NavLink></li>
    </>
    return (
        <div className="navbar shadow-sm border border-black/20 bg-white/0 backdrop-blur-3xl rounded-2xl mb-10 px-5 sticky w-full z-50 top-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <Logo />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <button onClick={signOutUser} className='border border-secondary px-6 py-2 rounded-md bg-secondary font-semibold'>Logout</button>
                        :
                        <div className="flex items-center gap-4">
                            <button onClick={() => navigate('/auth/login')} className='border border-secondary px-6 py-2 rounded-md bg-base-100 font-semibold'>Sign In</button>
                            <button className='border border-secondary px-6 py-2 rounded-md bg-secondary font-semibold'>Be a Rider</button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;