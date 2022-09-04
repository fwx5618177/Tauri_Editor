import { getThemeVariables, ThemeSelectVar } from 'antd/dist/theme.js'
import { resolve } from 'path'

export const generateModifyVars = (dark = false) => {
    const modifyVars: ThemeSelectVar = getThemeVariables({ dark })

    return {
        ...modifyVars,
        hack: `${modifyVars.hack} @import (reference) "${resolve('src/design/config.less')}"`,
    }
}
