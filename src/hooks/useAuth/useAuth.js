import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../../AuthProvider/AuthProvider';
const useAuth = () => {
   return useContext(AuthContext)
}

export default useAuth;