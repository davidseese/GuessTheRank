import React, { Children } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import LogIn from './LogIn';
import { UserAuth } from '../Context/AuthContext';

const ProtectedRoute =({children})=>{
    const {user} = UserAuth()
    if(!user){
      return <Navigate to="/login"></Navigate>
    }
    return children
};

export default ProtectedRoute;
