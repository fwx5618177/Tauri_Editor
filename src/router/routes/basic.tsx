import { lazy } from 'react'

// interface Router {
//     name?: string
//     path: string
//     children?: Array<Router>
//     element: any
// }

const BasicRoutes = [
    {
        path: '/signin',
        component: lazy(() => import('src/views/sys/signin/Signin')),
        auth: false,
    },
    {
        path: '/home',
        component: lazy(() => import('/@/views/sys/home/home')),
        auth: true,
    },
    {
        path: '/404',
        component: lazy(() => import('/@/views/sys/result')),
        auth: false,
    },
]

export default BasicRoutes
