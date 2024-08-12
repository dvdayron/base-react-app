/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Navigate } from 'react-router'

export const PrivateRoute = ({ children }) => { 
    /*return (
      logged
        ? children
        : <Navigate to='/auth/login' />
    )*/
   
   return children
}
