import { Navigate } from 'react-router'
import { LoginPage } from '../pages'
import { RootBlank } from '../../ui'
import { PublicRoute } from '../../router'

export const AuthRoutes = {
    path: 'auth',
    element: <PublicRoute><RootBlank/></PublicRoute>,
    children: [
        {
            path: '',
            element: <Navigate to='login'/>,
        },
        {
            path: 'login',
            element: <LoginPage/>,
        },
    ],
}
