import {
    LoginParams,
    // LoginResultModel
} from './model/usermodal'
import { ErrorMessageMode } from '/#/axios'

enum Api {
    Login = '/signin',
    Logout = '/signout',
    GetUserInfo = '/getUsers',
}

/**
 * @description: user login api
 */
export const loginApi = (params: LoginParams, mode: ErrorMessageMode = 'modal') => {
    return [
        {
            url: Api.Login,
            params,
        },
        {
            errorMessageMode: mode,
        },
    ]
}
