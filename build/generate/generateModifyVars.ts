import { getThemeVariables, ThemeSelectVar } from 'antd/dist/theme'
import { resolve } from 'path'

export const generateModifyVars = (dark = false) => {
    const modifyVars: ThemeSelectVar = getThemeVariables({ dark })

    return {
        ...modifyVars,
        hack: `true; @import (reference) "${resolve('src/design/config.less')}"`,
    }
}
