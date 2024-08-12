import { Navigate } from 'react-router'
import { PrivateRoute } from '../../router'
import { Root } from '../layout'

export const AppRoutes = {
    path: '/',
    element: <PrivateRoute><Root/></PrivateRoute>,
    children: [
        {
            path: '',
            element: <Navigate to='index'/>,
        },
        {
            path: 'index',
            element: <h1>index page</h1>,
        }
    ],
}
