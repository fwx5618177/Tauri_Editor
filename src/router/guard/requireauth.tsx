/**
 * @description
 * 封装拦截组件,如果已登录，返回包括的children组件；
 * 未登录，返回 <Navigate to="/user" /> 组件跳转到登录页面。
 *
 * @example
 * <RequireAuth>
 *   <ComponentNeedAuth />
 * </RequireAuth>
 */

import { message } from 'antd'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import AuthConsumer from './authprovide'

export const RequireAuth = (props: any): JSX.Element => {
    const { authed } = AuthConsumer()

    console.log(authed.valueOf(), !authed)

    useEffect(() => {
        if (!authed.valueOf()) message.warning('请先登录!')
    }, [])

    return authed ? props?.children : <Navigate to={'/signin'} replace />
}
