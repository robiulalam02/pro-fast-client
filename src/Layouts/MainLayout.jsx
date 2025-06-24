import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar/Navbar'
import Footer from '../Pages/Shared/Footer/Footer';
import useAuth from '../Hooks/useAuth';
import Loader from '../components/Loader/Loader';

const MainLayout = () => {
    const {loading} = useAuth();

    if (loading) {
        return <Loader />
    }
    
    return (
        <div className='max-w-screen-xl mx-auto py-10'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;