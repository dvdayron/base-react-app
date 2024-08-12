/* eslint-disable no-unused-vars */
import { createBrowserRouter } from 'react-router-dom'

import { AuthRoutes } from '../auth'
import { AppRoutes } from '../ui'

export const router = createBrowserRouter([
    AuthRoutes,
    AppRoutes,
]);
