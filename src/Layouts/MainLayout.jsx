import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar/Navbar'
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-screen-xl mx-auto py-10'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;