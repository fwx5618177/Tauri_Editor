import React, { ReactNode } from 'react'
import { Route, Navigate } from 'react-router-dom'
import BasicRoutes from '../routes/basic'

// React 组件懒加载

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
        const pathname = this.props.location.pathname
        const targetRouter = BasicRoutes.find(function (item) {
            return item.path === pathname
        })

        const isLogin = JSON.parse(sessionStorage.getItem('loginStatus') as string)
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
