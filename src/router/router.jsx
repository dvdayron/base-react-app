/* eslint-disable no-unused-vars */
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AuthRoutes } from '../auth'
import { AppRoutes } from '../ui'

export const router = createBrowserRouter([
    AuthRoutes,
    AppRoutes,
    {
        path: '/*',
        element: <Navigate to='/'/>,
    },
]);
