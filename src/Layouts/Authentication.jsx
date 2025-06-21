import React from 'react';
import Logo from '../Pages/Shared/ProfastLogo/Logo';
import { Outlet } from 'react-router';

const Authentication = () => {
    return (
        <div className='max-w-screen-xl mx-auto min-h-dvh py-10'>
            <Logo />
            <Outlet />
        </div>
    );
};

export default Authentication;