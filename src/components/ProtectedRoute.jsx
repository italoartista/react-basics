import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, roles }) => {
    const { authState } = useContext(AuthContext);

    if (!authState.isAuthenticated) {
        return <Navigate to="/" />;
    }

    if (roles && !roles.includes(authState.user.role)) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;
