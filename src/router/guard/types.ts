import { LoginParams } from '/@/api/sys/model/usermodal'

export interface AuthContextType<T> {
    authed: boolean
    login: (params: LoginParams) => Promise<T>
    logout: () => Promise<T>
    navigate: (dist: string) => void
}
