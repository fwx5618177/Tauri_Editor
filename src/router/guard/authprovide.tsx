import { createContext, useContext, useState } from 'react'

interface AuthContextType<T> {
    authed: boolean
    login: () => Promise<T>
    logout: () => Promise<T>
}

const AuthContext = createContext<AuthContextType<unknown>>(null as any)

// /**
//  * 自定义hook，函数返回 Context 值，包括 authed状态、login、logout函数来修改authed状态
//  */
const useAuth = () => {
    const [authed, setAuthed] = useState<boolean>(false)

    return {
        authed,
        login: () =>
            new Promise(res => {
                setAuthed(true)
                res(null)
            }),
        logout: () =>
            new Promise(res => {
                setAuthed(false)
                res(null)
            }),
    }
}

// 将context值传递给了Context Provider，并返回该组件用于广播context值
export const AuthProvider = (props: any) => {
    const auth = useAuth()

    return <AuthContext.Provider value={auth}>{props?.children}</AuthContext.Provider>
}

const AuthConsumer = () => {
    return useContext(AuthContext)
}

export default AuthConsumer
