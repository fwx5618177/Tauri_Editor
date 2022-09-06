import { LoginParams } from '/@/api/sys/model/usermodal'

export const checkLogin = (params: LoginParams): boolean => {
    const { username, password } = params

    if (username === 'fwx' && password === '123') {
        return true
    }

    throw new Error('error')
}
