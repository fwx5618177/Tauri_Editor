/**
 * 翻译集合
 */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en/menu.json'
import zh from './zh/menu.json'

export const multipleLanguages = [
    {
        label: '中文',
        value: 'zh',
    },
    {
        label: 'English',
        value: 'en',
    },
]

const resources = () => {
    return {
        zh: {
            translation: zh,
        },
        en: {
            translation: en,
        },
    }
}

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: resources(),
        lng: 'zh',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    })

export default i18n
