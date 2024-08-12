/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Navigate } from 'react-router'

export const PublicRoute = ({ children }) => {
    /*return (
      !logged
        ? children
        : <Navigate to='/' />
    )*/

    return children
}
