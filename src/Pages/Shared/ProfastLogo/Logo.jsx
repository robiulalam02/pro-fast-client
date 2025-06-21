import React from 'react';
import logo from '../../../assets/logo.png';
import { useNavigate } from 'react-router';

const Logo = () => {
    const navigate = useNavigate();
    return (
        <button onClick={()=>navigate('/')} className='flex items-end'>
            <img className='mb-2' src={logo} alt="" />
            <p className='text-3xl -ml-3 font-extrabold'>Profast</p>
        </button>
    );
};

export default Logo;