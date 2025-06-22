import React from 'react';
import useAuth from '../Hooks/useAuth';
import Loader from '../components/Loader/Loader';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();

    if (loading) {
        return <Loader />
    }

    if (!user) {
        return <Navigate to="/auth/login" />
    }

    return children
};

export default PrivateRoute;