import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkLogin } from './checklogin'
import { AuthContextType } from './types'
import { LoginParams } from '/@/api/sys/model/usermodal'

const AuthContext = createContext<AuthContextType<unknown>>(null as any)

/**
 * 自定义hook，函数返回 Context 值，包括 authed状态、login、logout函数来修改authed状态
 */
const useAuth = (): AuthContextType<null> => {
    const navigate = useNavigate()

    const [authed, setAuthed] = useState<boolean>(false)

    return {
        authed,
        login: (params: LoginParams): Promise<null> =>
            new Promise(async (res, rej) => {
                try {
                    checkLogin(params)
                    setAuthed(true)
                    navigate('/home')
                    res(null)
                } catch (err) {
                    rej(err)
                }
            }),
        logout: (): Promise<null> =>
            new Promise(res => {
                setAuthed(false)
                res(null)
            }),
        navigate: (dist: string) => navigate(dist),
    }
}

// 将context值传递给了Context Provider，并返回该组件用于广播context值
export const AuthProvider = (props: any): JSX.Element => {
    const auth = useAuth()

    return <AuthContext.Provider value={auth}>{props?.children}</AuthContext.Provider>
}

const AuthConsumer = (): AuthContextType<unknown> => {
    return useContext(AuthContext)
}

export default AuthConsumer
