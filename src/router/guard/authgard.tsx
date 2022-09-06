// React 组件懒加载

import React, { ReactNode } from 'react'
import { Navigate, Route } from 'react-router-dom'
import BasicRoutes from '../routes/basic'

// 快速导入工具函数
const lazyLoad = (moduleName: React.LazyExoticComponent<React.ComponentType<any>>) => {
    const Module = moduleName
    return <Module />
}
// 路由鉴权组件
// const Appraisal = ({ children }: any) => {
//     const token = localStorage.getItem('token')
//     return token ? children : <Navigate to='/login' />
// }

class AuthGuard extends React.Component<any> {
    render(): ReactNode {
        const pathname = this.props.location?.pathname || window.location.pathname
        const targetRouter = BasicRoutes.find(function (item) {
            return item.path === pathname
        })

        const isLogin = JSON.parse(sessionStorage.getItem('loginStatus') as string)

        console.log(this.props, this.props.location, pathname, isLogin, targetRouter)

        if (pathname === '/') {
            return <Navigate to='login'></Navigate>
        }
        if (!targetRouter) {
            return <Navigate to='404' />
        }
        if (isLogin) {
            if (pathname === '/login') {
                return <Navigate to='/home' />
            } else {
                return <Route path={pathname} element={lazyLoad(targetRouter.component)} />
            }
        } else {
            if (targetRouter.auth) {
                console.log('请先登录')
                return <Navigate to='/login' />
            } else {
                return <Route path={pathname} element={lazyLoad(targetRouter.component)} />
            }
        }
    }
}

export default AuthGuard
