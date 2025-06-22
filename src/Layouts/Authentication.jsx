import React from 'react';
import Logo from '../Pages/Shared/ProfastLogo/Logo';
import { Outlet } from 'react-router';
import loginPageImg from '../assets/authImage.png'

const Authentication = () => {
    return (
        <div className='flex justify-between h-dvh'>
            <div className='bg-base-100 w-6/12 p-10 '>
                 <Logo />
                 <Outlet />
            </div>
            <div className='w-6/12 flex items-center justify-center'>
                <img src={loginPageImg} alt="" />
            </div>
           
        </div>
    );
};

export default Authentication;