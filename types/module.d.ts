declare module 'antd/dist/theme.js' {
    import { darkThemeSingle, compactThemeSingle, getThemeVariables } from 'antd/dist/theme.js'
    import defaultTheme from 'antd/dist/default-theme.js'

    export interface ThemeOption {
        dark?: boolean
        compact?: boolean
        [key: string]: any
    }

    export interface DefaultTheme {
        'blue-base': '#1890ff' | string
        'blue-1': "color(~`colorPalette('@{blue-6}', 1) `)" | string
        'blue-2': "color(~`colorPalette('@{blue-6}', 2) `)" | string
        'blue-3': "color(~`colorPalette('@{blue-6}', 3) `)" | string
        'blue-4': "color(~`colorPalette('@{blue-6}', 4) `)" | string
        'blue-5': "color(~`colorPalette('@{blue-6}', 5) `)" | string
        'blue-6': '@blue-base' | string
        'blue-7': "color(~`colorPalette('@{blue-6}', 7) `)" | string
        'blue-8': "color(~`colorPalette('@{blue-6}', 8) `)" | string
        'blue-9': "color(~`colorPalette('@{blue-6}', 9) `)" | string
        'blue-10': "color(~`colorPalette('@{blue-6}', 10) `)" | string
        'purple-base': '#722ed1' | string
        'purple-1': "color(~`colorPalette('@{purple-6}', 1) `)" | string
        'purple-2': "color(~`colorPalette('@{purple-6}', 2) `)" | string
        'purple-3': "color(~`colorPalette('@{purple-6}', 3) `)" | string
        'purple-4': "color(~`colorPalette('@{purple-6}', 4) `)" | string
        'purple-5': "color(~`colorPalette('@{purple-6}', 5) `)" | string
        'purple-6': '@purple-base' | string
        'purple-7': "color(~`colorPalette('@{purple-6}', 7) `)" | string
        'purple-8': "color(~`colorPalette('@{purple-6}', 8) `)" | string
        'purple-9': "color(~`colorPalette('@{purple-6}', 9) `)" | string
        'purple-10': "color(~`colorPalette('@{purple-6}', 10) `)" | string
        'cyan-base': '#13c2c2' | string
        'cyan-1': "color(~`colorPalette('@{cyan-6}', 1) `)" | string
        'cyan-2': "color(~`colorPalette('@{cyan-6}', 2) `)" | string
        'cyan-3': "color(~`colorPalette('@{cyan-6}', 3) `)" | string
        'cyan-4': "color(~`colorPalette('@{cyan-6}', 4) `)" | string
        'cyan-5': "color(~`colorPalette('@{cyan-6}', 5) `)" | string
        'cyan-6': '@cyan-base' | string
        'cyan-7': "color(~`colorPalette('@{cyan-6}', 7) `)" | string
        'cyan-8': "color(~`colorPalette('@{cyan-6}', 8) `)" | string
        'cyan-9': "color(~`colorPalette('@{cyan-6}', 9) `)" | string
        'cyan-10': "color(~`colorPalette('@{cyan-6}', 10) `)" | string
        'green-base': '#52c41a' | string
        'green-1': "color(~`colorPalette('@{green-6}', 1) `)" | string
        'green-2': "color(~`colorPalette('@{green-6}', 2) `)" | string
        'green-3': "color(~`colorPalette('@{green-6}', 3) `)" | string
        'green-4': "color(~`colorPalette('@{green-6}', 4) `)" | string
        'green-5': "color(~`colorPalette('@{green-6}', 5) `)" | string
        'green-6': '@green-base' | string
        'green-7': "color(~`colorPalette('@{green-6}', 7) `)" | string
        'green-8': "color(~`colorPalette('@{green-6}', 8) `)" | string
        'green-9': "color(~`colorPalette('@{green-6}', 9) `)" | string
        'green-10': "color(~`colorPalette('@{green-6}', 10) `)" | string
        'magenta-base': '#eb2f96' | string
        'magenta-1': "color(~`colorPalette('@{magenta-6}', 1) `)" | string
        'magenta-2': "color(~`colorPalette('@{magenta-6}', 2) `)" | string
        'magenta-3': "color(~`colorPalette('@{magenta-6}', 3) `)" | string
        'magenta-4': "color(~`colorPalette('@{magenta-6}', 4) `)" | string
        'magenta-5': "color(~`colorPalette('@{magenta-6}', 5) `)" | string
        'magenta-6': '@magenta-base' | string
        'magenta-7': "color(~`colorPalette('@{magenta-6}', 7) `)" | string
        'magenta-8': "color(~`colorPalette('@{magenta-6}', 8) `)" | string
        'magenta-9': "color(~`colorPalette('@{magenta-6}', 9) `)" | string
        'magenta-10': "color(~`colorPalette('@{magenta-6}', 10) `)" | string
        'pink-base': '#eb2f96' | string
        'pink-1': "color(~`colorPalette('@{pink-6}', 1) `)" | string
        'pink-2': "color(~`colorPalette('@{pink-6}', 2) `)" | string
        'pink-3': "color(~`colorPalette('@{pink-6}', 3) `)" | string
        'pink-4': "color(~`colorPalette('@{pink-6}', 4) `)" | string
        'pink-5': "color(~`colorPalette('@{pink-6}', 5) `)" | string
        'pink-6': '@pink-base' | string
        'pink-7': "color(~`colorPalette('@{pink-6}', 7) `)" | string
        'pink-8': "color(~`colorPalette('@{pink-6}', 8) `)" | string
        'pink-9': "color(~`colorPalette('@{pink-6}', 9) `)" | string
        'pink-10': "color(~`colorPalette('@{pink-6}', 10) `)" | string
        'red-base': '#f5222d' | string
        'red-1': "color(~`colorPalette('@{red-6}', 1) `)" | string
        'red-2': "color(~`colorPalette('@{red-6}', 2) `)" | string
        'red-3': "color(~`colorPalette('@{red-6}', 3) `)" | string
        'red-4': "color(~`colorPalette('@{red-6}', 4) `)" | string
        'red-5': "color(~`colorPalette('@{red-6}', 5) `)" | string
        'red-6': '@red-base' | string
        'red-7': "color(~`colorPalette('@{red-6}', 7) `)" | string
        'red-8': "color(~`colorPalette('@{red-6}', 8) `)" | string
        'red-9': "color(~`colorPalette('@{red-6}', 9) `)" | string
        'red-10': "color(~`colorPalette('@{red-6}', 10) `)" | string
        'orange-base': '#fa8c16' | string
        'orange-1': "color(~`colorPalette('@{orange-6}', 1) `)" | string
        'orange-2': "color(~`colorPalette('@{orange-6}', 2) `)" | string
        'orange-3': "color(~`colorPalette('@{orange-6}', 3) `)" | string
        'orange-4': "color(~`colorPalette('@{orange-6}', 4) `)" | string
        'orange-5': "color(~`colorPalette('@{orange-6}', 5) `)" | string
        'orange-6': '@orange-base' | string
        'orange-7': "color(~`colorPalette('@{orange-6}', 7) `)" | string
        'orange-8': "color(~`colorPalette('@{orange-6}', 8) `)" | string
        'orange-9': "color(~`colorPalette('@{orange-6}', 9) `)" | string
        'orange-10': "color(~`colorPalette('@{orange-6}', 10) `)" | string
        'yellow-base': '#fadb14' | string
        'yellow-1': "color(~`colorPalette('@{yellow-6}', 1) `)" | string
        'yellow-2': "color(~`colorPalette('@{yellow-6}', 2) `)" | string
        'yellow-3': "color(~`colorPalette('@{yellow-6}', 3) `)" | string
        'yellow-4': "color(~`colorPalette('@{yellow-6}', 4) `)" | string
        'yellow-5': "color(~`colorPalette('@{yellow-6}', 5) `)" | string
        'yellow-6': '@yellow-base' | string
        'yellow-7': "color(~`colorPalette('@{yellow-6}', 7) `)" | string
        'yellow-8': "color(~`colorPalette('@{yellow-6}', 8) `)" | string
        'yellow-9': "color(~`colorPalette('@{yellow-6}', 9) `)" | string
        'yellow-10': "color(~`colorPalette('@{yellow-6}', 10) `)" | string
        'volcano-base': '#fa541c' | string
        'volcano-1': "color(~`colorPalette('@{volcano-6}', 1) `)" | string
        'volcano-2': "color(~`colorPalette('@{volcano-6}', 2) `)" | string
        'volcano-3': "color(~`colorPalette('@{volcano-6}', 3) `)" | string
        'volcano-4': "color(~`colorPalette('@{volcano-6}', 4) `)" | string
        'volcano-5': "color(~`colorPalette('@{volcano-6}', 5) `)" | string
        'volcano-6': '@volcano-base' | string
        'volcano-7': "color(~`colorPalette('@{volcano-6}', 7) `)" | string
        'volcano-8': "color(~`colorPalette('@{volcano-6}', 8) `)" | string
        'volcano-9': "color(~`colorPalette('@{volcano-6}', 9) `)" | string
        'volcano-10': "color(~`colorPalette('@{volcano-6}', 10) `)" | string
        'geekblue-base': '#2f54eb' | string
        'geekblue-1': "color(~`colorPalette('@{geekblue-6}', 1) `)" | string
        'geekblue-2': "color(~`colorPalette('@{geekblue-6}', 2) `)" | string
        'geekblue-3': "color(~`colorPalette('@{geekblue-6}', 3) `)" | string
        'geekblue-4': "color(~`colorPalette('@{geekblue-6}', 4) `)" | string
        'geekblue-5': "color(~`colorPalette('@{geekblue-6}', 5) `)" | string
        'geekblue-6': '@geekblue-base' | string
        'geekblue-7': "color(~`colorPalette('@{geekblue-6}', 7) `)" | string
        'geekblue-8': "color(~`colorPalette('@{geekblue-6}', 8) `)" | string
        'geekblue-9': "color(~`colorPalette('@{geekblue-6}', 9) `)" | string
        'geekblue-10': "color(~`colorPalette('@{geekblue-6}', 10) `)" | string
        'lime-base': '#a0d911' | string
        'lime-1': "color(~`colorPalette('@{lime-6}', 1) `)" | string
        'lime-2': "color(~`colorPalette('@{lime-6}', 2) `)" | string
        'lime-3': "color(~`colorPalette('@{lime-6}', 3) `)" | string
        'lime-4': "color(~`colorPalette('@{lime-6}', 4) `)" | string
        'lime-5': "color(~`colorPalette('@{lime-6}', 5) `)" | string
        'lime-6': '@lime-base' | string
        'lime-7': "color(~`colorPalette('@{lime-6}', 7) `)" | string
        'lime-8': "color(~`colorPalette('@{lime-6}', 8) `)" | string
        'lime-9': "color(~`colorPalette('@{lime-6}', 9) `)" | string
        'lime-10': "color(~`colorPalette('@{lime-6}', 10) `)" | string
        'gold-base': '#faad14' | string
        'gold-1': "color(~`colorPalette('@{gold-6}', 1) `)" | string
        'gold-2': "color(~`colorPalette('@{gold-6}', 2) `)" | string
        'gold-3': "color(~`colorPalette('@{gold-6}', 3) `)" | string
        'gold-4': "color(~`colorPalette('@{gold-6}', 4) `)" | string
        'gold-5': "color(~`colorPalette('@{gold-6}', 5) `)" | string
        'gold-6': '@gold-base' | string
        'gold-7': "color(~`colorPalette('@{gold-6}', 7) `)" | string
        'gold-8': "color(~`colorPalette('@{gold-6}', 8) `)" | string
        'gold-9': "color(~`colorPalette('@{gold-6}', 9) `)" | string
        'gold-10': "color(~`colorPalette('@{gold-6}', 10) `)" | string
        'preset-colors':
            | 'pink, magenta, red, volcano, orange, yellow, gold, cyan, lime, green, blue, geekblue,\n  purple'
            | string
        theme: 'default' | string
        'ant-prefix': 'ant' | string
        'html-selector': 'html' | string
        'primary-color': '@blue-6' | string
        'primary-color-hover': "color(~`colorPalette('@{primary-color}', 5) `)" | string
        'primary-color-active': "color(~`colorPalette('@{primary-color}', 7) `)" | string
        'primary-color-outline': 'fade(@primary-color, @outline-fade)' | string
        'processing-color': '@blue-6' | string
        'info-color': '@primary-color' | string
        'info-color-deprecated-bg': "color(~`colorPalette('@{info-color}', 1) `)" | string
        'info-color-deprecated-border': "color(~`colorPalette('@{info-color}', 3) `)" | string
        'success-color': '@green-6' | string
        'success-color-hover': "color(~`colorPalette('@{success-color}', 5) `)" | string
        'success-color-active': "color(~`colorPalette('@{success-color}', 7) `)" | string
        'success-color-outline': 'fade(@success-color, @outline-fade)' | string
        'success-color-deprecated-bg': "color(~`colorPalette('@{success-color}', 1) `)" | string
        'success-color-deprecated-border': "color(~`colorPalette('@{success-color}', 3) `)" | string
        'warning-color': '@gold-6' | string
        'warning-color-hover': "color(~`colorPalette('@{warning-color}', 5) `)" | string
        'warning-color-active': "color(~`colorPalette('@{warning-color}', 7) `)" | string
        'warning-color-outline': 'fade(@warning-color, @outline-fade)' | string
        'warning-color-deprecated-bg': "color(~`colorPalette('@{warning-color}', 1) `)" | string
        'warning-color-deprecated-border': "color(~`colorPalette('@{warning-color}', 3) `)" | string
        'error-color': '@red-5' | string
        'error-color-hover': "color(~`colorPalette('@{error-color}', 5) `)" | string
        'error-color-active': "color(~`colorPalette('@{error-color}', 7) `)" | string
        'error-color-outline': 'fade(@error-color, @outline-fade)' | string
        'error-color-deprecated-bg': "color(~`colorPalette('@{error-color}', 1) `)" | string
        'error-color-deprecated-border': "color(~`colorPalette('@{error-color}', 3) `)" | string
        'highlight-color': '@red-5' | string
        'normal-color': '#d9d9d9' | string
        white: '#fff' | string
        black: '#000' | string
        'primary-1': "color(~`colorPalette('@{primary-color}', 1) `)" | string
        'primary-2': "color(~`colorPalette('@{primary-color}', 2) `)" | string
        'primary-3': "color(~`colorPalette('@{primary-color}', 3) `)" | string
        'primary-4': "color(~`colorPalette('@{primary-color}', 4) `)" | string
        'primary-5': "color(\n  ~`colorPalette('@{primary-color}', 5) `\n)" | string
        'primary-6': '@primary-color' | string
        'primary-7': "color(~`colorPalette('@{primary-color}', 7) `)" | string
        'primary-8': "color(~`colorPalette('@{primary-color}', 8) `)" | string
        'primary-9': "color(~`colorPalette('@{primary-color}', 9) `)" | string
        'primary-10': "color(~`colorPalette('@{primary-color}', 10) `)" | string
        'body-background': '#fff' | string
        'component-background': '#fff' | string
        'popover-background': '@component-background' | string
        'popover-customize-border-color': '@border-color-split' | string
        'font-family':
            | "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n  'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n  'Noto Color Emoji'"
            | string
        'code-family':
            | "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace"
            | string
        'text-color': 'fade(@black, 85%)' | string
        'text-color-secondary': 'fade(@black, 45%)' | string
        'text-color-inverse': '@white' | string
        'icon-color': 'inherit' | string
        'icon-color-hover': 'fade(@black, 75%)' | string
        'heading-color': 'fade(@black, 85%)' | string
        'text-color-dark': 'fade(@white, 85%)' | string
        'text-color-secondary-dark': 'fade(@white, 65%)' | string
        'text-selection-bg': '@primary-color' | string
        'font-variant-base': 'tabular-nums' | string
        'font-feature-settings-base': 'tnum' | string
        'font-size-base': '14px' | string
        'font-size-lg': '@font-size-base + 2px' | string
        'font-size-sm': '12px' | string
        'heading-1-size': 'ceil(@font-size-base * 2.71)' | string
        'heading-2-size': 'ceil(@font-size-base * 2.14)' | string
        'heading-3-size': 'ceil(@font-size-base * 1.71)' | string
        'heading-4-size': 'ceil(@font-size-base * 1.42)' | string
        'heading-5-size': 'ceil(@font-size-base * 1.14)' | string
        'line-height-base': '1.5715' | string
        'border-radius-base': '2px' | string
        'border-radius-sm': '@border-radius-base' | string
        'control-border-radius': '@border-radius-base' | string
        'arrow-border-radius': '2px' | string
        'padding-lg': '24px' | string
        'padding-md': '16px' | string
        'padding-sm': '12px' | string
        'padding-xs': '8px' | string
        'padding-xss': '4px' | string
        'control-padding-horizontal': '@padding-sm' | string
        'control-padding-horizontal-sm': '@padding-xs' | string
        'margin-lg': '24px' | string
        'margin-md': '16px' | string
        'margin-sm': '12px' | string
        'margin-xs': '8px' | string
        'margin-xss': '4px' | string
        'height-base': '32px' | string
        'height-lg': '40px' | string
        'height-sm': '24px' | string
        'item-active-bg': '@primary-1' | string
        'item-hover-bg': '#f5f5f5' | string
        'iconfont-css-prefix': 'anticon' | string
        'link-color': '@primary-color' | string
        'link-hover-color': "color(~`colorPalette('@{link-color}', 5) `)" | string
        'link-active-color': "color(~`colorPalette('@{link-color}', 7) `)" | string
        'link-decoration': 'none' | string
        'link-hover-decoration': 'none' | string
        'link-focus-decoration': 'none' | string
        'link-focus-outline': '0' | string
        'ease-base-out': 'cubic-bezier(0.7, 0.3, 0.1, 1)' | string
        'ease-base-in': 'cubic-bezier(0.9, 0, 0.3, 0.7)' | string
        'ease-out': 'cubic-bezier(0.215, 0.61, 0.355, 1)' | string
        'ease-in': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' | string
        'ease-in-out': 'cubic-bezier(0.645, 0.045, 0.355, 1)' | string
        'ease-out-back': 'cubic-bezier(0.12, 0.4, 0.29, 1.46)' | string
        'ease-in-back': 'cubic-bezier(0.71, -0.46, 0.88, 0.6)' | string
        'ease-in-out-back': 'cubic-bezier(0.71, -0.46, 0.29, 1.46)' | string
        'ease-out-circ': 'cubic-bezier(0.08, 0.82, 0.17, 1)' | string
        'ease-in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.34)' | string
        'ease-in-out-circ': 'cubic-bezier(0.78, 0.14, 0.15, 0.86)' | string
        'ease-out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)' | string
        'ease-in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)' | string
        'ease-in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)' | string
        'border-color-base': 'hsv(0, 0, 85%)' | string
        'border-color-split': 'hsv(0, 0, 94%)' | string
        'border-color-inverse': '@white' | string
        'border-width-base': '1px' | string
        'border-style-base': 'solid' | string
        'outline-blur-size': '0' | string
        'outline-width': '2px' | string
        'outline-color': '@primary-color' | string
        'outline-fade': '20%' | string
        'background-color-light': 'hsv(0, 0, 98%)' | string
        'background-color-base': 'hsv(0, 0, 96%)' | string
        'disabled-color': 'fade(#000, 25%)' | string
        'disabled-bg': '@background-color-base' | string
        'disabled-active-bg': 'tint(@black, 90%)' | string
        'disabled-color-dark': 'fade(#fff, 35%)' | string
        'shadow-color': 'rgba(0, 0, 0, 0.15)' | string
        'shadow-color-inverse': '@component-background' | string
        'box-shadow-base': '@shadow-2' | string
        'shadow-1-up':
            | '0 -6px 16px -8px rgba(0, 0, 0, 0.08), 0 -9px 28px 0 rgba(0, 0, 0, 0.05),\n  0 -12px 48px 16px rgba(0, 0, 0, 0.03)'
            | string
        'shadow-1-down':
            | '0 6px 16px -8px rgba(0, 0, 0, 0.08), 0 9px 28px 0 rgba(0, 0, 0, 0.05),\n  0 12px 48px 16px rgba(0, 0, 0, 0.03)'
            | string
        'shadow-1-left':
            | '-6px 0 16px -8px rgba(0, 0, 0, 0.08), -9px 0 28px 0 rgba(0, 0, 0, 0.05),\n  -12px 0 48px 16px rgba(0, 0, 0, 0.03)'
            | string
        'shadow-1-right':
            | '6px 0 16px -8px rgba(0, 0, 0, 0.08), 9px 0 28px 0 rgba(0, 0, 0, 0.05),\n  12px 0 48px 16px rgba(0, 0, 0, 0.03)'
            | string
        'shadow-2':
            | '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),\n  0 9px 28px 8px rgba(0, 0, 0, 0.05)'
            | string
        'btn-font-weight': '400' | string
        'btn-border-radius-base': '@border-radius-base' | string
        'btn-border-radius-sm': '@border-radius-base' | string
        'btn-border-width': '@border-width-base' | string
        'btn-border-style': '@border-style-base' | string
        'btn-shadow': '0 2px 0 rgba(0, 0, 0, 0.015)' | string
        'btn-primary-shadow': '0 2px 0 rgba(0, 0, 0, 0.045)' | string
        'btn-text-shadow': '0 -1px 0 rgba(0, 0, 0, 0.12)' | string
        'btn-primary-color': '#fff' | string
        'btn-primary-bg': '@primary-color' | string
        'btn-default-color': '@text-color' | string
        'btn-default-bg': '@component-background' | string
        'btn-default-border': '@border-color-base' | string
        'btn-danger-color': '#fff' | string
        'btn-danger-bg': '@error-color' | string
        'btn-danger-border': '@error-color' | string
        'btn-disable-color': '@disabled-color' | string
        'btn-disable-bg': '@disabled-bg' | string
        'btn-disable-border': '@border-color-base' | string
        'btn-default-ghost-color': '@component-background' | string
        'btn-default-ghost-bg': 'transparent' | string
        'btn-default-ghost-border': '@component-background' | string
        'btn-font-size-lg': '@font-size-lg' | string
        'btn-font-size-sm': '@font-size-base' | string
        'btn-padding-horizontal-base': '@padding-md - 1px' | string
        'btn-padding-horizontal-lg': '@btn-padding-horizontal-base' | string
        'btn-padding-horizontal-sm': '@padding-xs - 1px' | string
        'btn-height-base': '@height-base' | string
        'btn-height-lg': '@height-lg' | string
        'btn-height-sm': '@height-sm' | string
        'btn-line-height': '@line-height-base' | string
        'btn-circle-size': '@btn-height-base' | string
        'btn-circle-size-lg': '@btn-height-lg' | string
        'btn-circle-size-sm': '@btn-height-sm' | string
        'btn-square-size': '@btn-height-base' | string
        'btn-square-size-lg': '@btn-height-lg' | string
        'btn-square-size-sm': '@btn-height-sm' | string
        'btn-square-only-icon-size': '@font-size-base + 2px' | string
        'btn-square-only-icon-size-sm': '@font-size-base' | string
        'btn-square-only-icon-size-lg': '@btn-font-size-lg + 2px' | string
        'btn-group-border': '@primary-5' | string
        'btn-link-hover-bg': 'transparent' | string
        'btn-text-hover-bg': 'rgba(0, 0, 0, 0.018)' | string
        'checkbox-size': '16px' | string
        'checkbox-color': '@primary-color' | string
        'checkbox-check-color': '#fff' | string
        'checkbox-check-bg': '@checkbox-check-color' | string
        'checkbox-border-width': '@border-width-base' | string
        'checkbox-border-radius': '@border-radius-base' | string
        'checkbox-group-item-margin-right': '8px' | string
        'descriptions-bg': '#fafafa' | string
        'descriptions-title-margin-bottom': '20px' | string
        'descriptions-default-padding': '@padding-md @padding-lg' | string
        'descriptions-middle-padding': '@padding-sm @padding-lg' | string
        'descriptions-small-padding': '@padding-xs @padding-md' | string
        'descriptions-item-padding-bottom': '@padding-md' | string
        'descriptions-item-trailing-colon': 'true' | string
        'descriptions-item-label-colon-margin-right': '8px' | string
        'descriptions-item-label-colon-margin-left': '2px' | string
        'descriptions-extra-color': '@text-color' | string
        'divider-text-padding': '1em' | string
        'divider-orientation-margin': '5%' | string
        'divider-color': 'rgba(0, 0, 0, 6%)' | string
        'divider-vertical-gutter': '8px' | string
        'dropdown-selected-color': '@primary-color' | string
        'dropdown-menu-submenu-disabled-bg': '@component-background' | string
        'dropdown-selected-bg': '@item-active-bg' | string
        'empty-font-size': '@font-size-base' | string
        'radio-size': '16px' | string
        'radio-top': '0.2em' | string
        'radio-border-width': '1px' | string
        'radio-dot-size': '@radio-size - 8px' | string
        'radio-dot-color': '@primary-color' | string
        'radio-dot-disabled-color': 'fade(@black, 20%)' | string
        'radio-solid-checked-color': '@component-background' | string
        'radio-button-bg': '@btn-default-bg' | string
        'radio-button-checked-bg': '@btn-default-bg' | string
        'radio-button-color': '@btn-default-color' | string
        'radio-button-hover-color': '@primary-5' | string
        'radio-button-active-color': '@primary-7' | string
        'radio-button-padding-horizontal': '@padding-md - 1px' | string
        'radio-disabled-button-checked-bg': '@disabled-active-bg' | string
        'radio-disabled-button-checked-color': '@disabled-color' | string
        'radio-wrapper-margin-right': '8px' | string
        'screen-xs': '480px' | string
        'screen-xs-min': '@screen-xs' | string
        'screen-sm': '576px' | string
        'screen-sm-min': '@screen-sm' | string
        'screen-md': '768px' | string
        'screen-md-min': '@screen-md' | string
        'screen-lg': '992px' | string
        'screen-lg-min': '@screen-lg' | string
        'screen-xl': '1200px' | string
        'screen-xl-min': '@screen-xl' | string
        'screen-xxl': '1600px' | string
        'screen-xxl-min': '@screen-xxl' | string
        'screen-xs-max': '(@screen-sm-min - 1px)' | string
        'screen-sm-max': '(@screen-md-min - 1px)' | string
        'screen-md-max': '(@screen-lg-min - 1px)' | string
        'screen-lg-max': '(@screen-xl-min - 1px)' | string
        'screen-xl-max': '(@screen-xxl-min - 1px)' | string
        'grid-columns': '24' | string
        'layout-body-background': '#f0f2f5' | string
        'layout-header-background': '#001529' | string
        'layout-header-height': '64px' | string
        'layout-header-padding': '0 50px' | string
        'layout-header-color': '@text-color' | string
        'layout-footer-padding': '24px 50px' | string
        'layout-footer-background': '@layout-body-background' | string
        'layout-sider-background': '@layout-header-background' | string
        'layout-trigger-height': '48px' | string
        'layout-trigger-background': '#002140' | string
        'layout-trigger-color': '#fff' | string
        'layout-zero-trigger-width': '36px' | string
        'layout-zero-trigger-height': '42px' | string
        'layout-sider-background-light': '#fff' | string
        'layout-trigger-background-light': '#fff' | string
        'layout-trigger-color-light': '@text-color' | string
        'zindex-badge': 'auto' | string
        'zindex-table-fixed': '2' | string
        'zindex-affix': '10' | string
        'zindex-back-top': '10' | string
        'zindex-picker-panel': '10' | string
        'zindex-popup-close': '10' | string
        'zindex-modal': '1000' | string
        'zindex-modal-mask': '1000' | string
        'zindex-message': '1010' | string
        'zindex-notification': '1010' | string
        'zindex-popover': '1030' | string
        'zindex-dropdown': '1050' | string
        'zindex-picker': '1050' | string
        'zindex-popoconfirm': '1060' | string
        'zindex-tooltip': '1070' | string
        'zindex-image': '1080' | string
        'animation-duration-slow': '0.3s' | string
        'animation-duration-base': '0.2s' | string
        'animation-duration-fast': '0.1s' | string
        'collapse-panel-border-radius': '@border-radius-base' | string
        'dropdown-menu-bg': '@component-background' | string
        'dropdown-vertical-padding': '5px' | string
        'dropdown-edge-child-vertical-padding': '4px' | string
        'dropdown-font-size': '@font-size-base' | string
        'dropdown-line-height': '22px' | string
        'label-required-color': '@highlight-color' | string
        'label-color': '@heading-color' | string
        'form-warning-input-bg': '@input-bg' | string
        'form-item-margin-bottom': '24px' | string
        'form-item-trailing-colon': 'true' | string
        'form-vertical-label-padding': '0 0 8px' | string
        'form-vertical-label-margin': '0' | string
        'form-item-label-font-size': '@font-size-base' | string
        'form-item-label-height': '@input-height-base' | string
        'form-item-label-colon-margin-right': '8px' | string
        'form-item-label-colon-margin-left': '2px' | string
        'form-error-input-bg': '@input-bg' | string
        'input-height-base': '@height-base' | string
        'input-height-lg': '@height-lg' | string
        'input-height-sm': '@height-sm' | string
        'input-padding-horizontal': '@control-padding-horizontal - 1px' | string
        'input-padding-horizontal-base': '@input-padding-horizontal' | string
        'input-padding-horizontal-sm': '@control-padding-horizontal-sm - 1px' | string
        'input-padding-horizontal-lg': '@input-padding-horizontal' | string
        'input-padding-vertical-base':
            | 'max(\n  (round(((@input-height-base - @font-size-base * @line-height-base) / 2) * 10) / 10) -\n    @border-width-base,\n  3px\n)'
            | string
        'input-padding-vertical-sm':
            | 'max(\n  (round(((@input-height-sm - @font-size-base * @line-height-base) / 2) * 10) / 10) -\n    @border-width-base,\n  0\n)'
            | string
        'input-padding-vertical-lg':
            | '(\n    ceil(((@input-height-lg - @font-size-lg * @line-height-base) / 2) * 10) / 10\n  ) - @border-width-base'
            | string
        'input-placeholder-color': 'hsv(0, 0, 75%)' | string
        'input-color': '@text-color' | string
        'input-icon-color': '@input-color' | string
        'input-border-color': '@border-color-base' | string
        'input-bg': '@component-background' | string
        'input-number-hover-border-color': '@input-hover-border-color' | string
        'input-number-handler-active-bg': '#f4f4f4' | string
        'input-number-handler-hover-bg': '@primary-5' | string
        'input-number-handler-bg': '@component-background' | string
        'input-number-handler-border-color': '@border-color-base' | string
        'input-addon-bg': '@background-color-light' | string
        'input-hover-border-color': '@primary-5' | string
        'input-disabled-bg': '@disabled-bg' | string
        'input-outline-offset': '0 0' | string
        'input-icon-hover-color': 'fade(@black, 85%)' | string
        'input-disabled-color': '@disabled-color' | string
        'mentions-dropdown-bg': '@component-background' | string
        'mentions-dropdown-menu-item-hover-bg': '@mentions-dropdown-bg' | string
        'select-border-color': '@border-color-base' | string
        'select-item-selected-color': '@text-color' | string
        'select-item-selected-font-weight': '600' | string
        'select-dropdown-bg': '@component-background' | string
        'select-item-selected-bg': '@primary-1' | string
        'select-item-active-bg': '@item-hover-bg' | string
        'select-dropdown-vertical-padding': '@dropdown-vertical-padding' | string
        'select-dropdown-font-size': '@dropdown-font-size' | string
        'select-dropdown-line-height': '@dropdown-line-height' | string
        'select-dropdown-height': '32px' | string
        'select-background': '@component-background' | string
        'select-clear-background': '@select-background' | string
        'select-selection-item-bg': '@background-color-base' | string
        'select-selection-item-border-color': '@border-color-split' | string
        'select-single-item-height-lg': '40px' | string
        'select-multiple-item-height':
            | '@input-height-base - @input-padding-vertical-base * 2'
            | string
        'select-multiple-item-height-lg': '32px' | string
        'select-multiple-item-spacing-half': 'ceil((@input-padding-vertical-base / 2))' | string
        'select-multiple-disabled-background': '@input-disabled-bg' | string
        'select-multiple-item-disabled-color': '#bfbfbf' | string
        'select-multiple-item-disabled-border-color': '@select-border-color' | string
        'cascader-bg': '@component-background' | string
        'cascader-item-selected-bg': '@primary-1' | string
        'cascader-menu-bg': '@component-background' | string
        'cascader-menu-border-color-split': '@border-color-split' | string
        'cascader-dropdown-vertical-padding': '@dropdown-vertical-padding' | string
        'cascader-dropdown-edge-child-vertical-padding':
            | '@dropdown-edge-child-vertical-padding'
            | string
        'cascader-dropdown-font-size': '@dropdown-font-size' | string
        'cascader-dropdown-line-height': '@dropdown-line-height' | string
        'anchor-bg': 'transparent' | string
        'anchor-border-color': '@border-color-split' | string
        'anchor-link-top': '4px' | string
        'anchor-link-left': '16px' | string
        'anchor-link-padding': '@anchor-link-top 0 @anchor-link-top @anchor-link-left' | string
        'tooltip-max-width': '250px' | string
        'tooltip-color': '#fff' | string
        'tooltip-bg': 'rgba(0, 0, 0, 0.75)' | string
        'tooltip-arrow-width': '8px * sqrt(2)' | string
        'tooltip-distance': '@tooltip-arrow-width - 1px + 4px' | string
        'tooltip-arrow-color': '@tooltip-bg' | string
        'tooltip-border-radius': '@border-radius-base' | string
        'popover-bg': '@component-background' | string
        'popover-color': '@text-color' | string
        'popover-min-width': '177px' | string
        'popover-min-height': '32px' | string
        'popover-arrow-width': '@tooltip-arrow-width' | string
        'popover-arrow-color': '@popover-bg' | string
        'popover-arrow-outer-color': '@popover-bg' | string
        'popover-distance': '@popover-arrow-width + 4px' | string
        'popover-padding-horizontal': '@padding-md' | string
        'modal-header-padding-vertical': '@padding-md' | string
        'modal-header-padding-horizontal': '@padding-lg' | string
        'modal-body-padding': '@padding-lg' | string
        'modal-header-bg': '@component-background' | string
        'modal-header-padding':
            | '@modal-header-padding-vertical @modal-header-padding-horizontal'
            | string
        'modal-header-border-width': '@border-width-base' | string
        'modal-header-border-style': '@border-style-base' | string
        'modal-header-title-line-height': '22px' | string
        'modal-header-title-font-size': '@font-size-lg' | string
        'modal-header-border-color-split': '@border-color-split' | string
        'modal-header-close-size':
            | '@modal-header-title-line-height + 2 * @modal-header-padding-vertical'
            | string
        'modal-content-bg': '@component-background' | string
        'modal-heading-color': '@heading-color' | string
        'modal-close-color': '@text-color-secondary' | string
        'modal-footer-bg': 'transparent' | string
        'modal-footer-border-color-split': '@border-color-split' | string
        'modal-footer-border-style': '@border-style-base' | string
        'modal-footer-padding-vertical': '10px' | string
        'modal-footer-padding-horizontal': '16px' | string
        'modal-footer-border-width': '@border-width-base' | string
        'modal-mask-bg': 'fade(@black, 45%)' | string
        'modal-confirm-body-padding': '32px 32px 24px' | string
        'modal-confirm-title-font-size': '@font-size-lg' | string
        'modal-border-radius': '@border-radius-base' | string
        'progress-default-color': '@processing-color' | string
        'progress-remaining-color': '@background-color-base' | string
        'progress-info-text-color': '@progress-text-color' | string
        'progress-radius': '100px' | string
        'progress-steps-item-bg': '#f3f3f3' | string
        'progress-text-font-size': '1em' | string
        'progress-text-color': '@text-color' | string
        'progress-circle-text-font-size': '1em' | string
        'menu-inline-toplevel-item-height': '40px' | string
        'menu-item-height': '40px' | string
        'menu-item-group-height': '@line-height-base' | string
        'menu-collapsed-width': '80px' | string
        'menu-bg': '@component-background' | string
        'menu-popup-bg': '@component-background' | string
        'menu-item-color': '@text-color' | string
        'menu-inline-submenu-bg': '@background-color-light' | string
        'menu-highlight-color': '@primary-color' | string
        'menu-highlight-danger-color': '@error-color' | string
        'menu-item-active-bg': '@primary-1' | string
        'menu-item-active-danger-bg': '@red-1' | string
        'menu-item-active-border-width': '3px' | string
        'menu-item-group-title-color': '@text-color-secondary' | string
        'menu-item-vertical-margin': '4px' | string
        'menu-item-font-size': '@font-size-base' | string
        'menu-item-boundary-margin': '8px' | string
        'menu-item-padding-horizontal': '20px' | string
        'menu-item-padding': '0 @menu-item-padding-horizontal' | string
        'menu-horizontal-line-height': '46px' | string
        'menu-icon-margin-right': '10px' | string
        'menu-icon-size': '@menu-item-font-size' | string
        'menu-icon-size-lg': '@font-size-lg' | string
        'menu-item-group-title-font-size': '@menu-item-font-size' | string
        'menu-dark-color': '@text-color-secondary-dark' | string
        'menu-dark-danger-color': '@error-color' | string
        'menu-dark-bg': '@layout-header-background' | string
        'menu-dark-arrow-color': '#fff' | string
        'menu-dark-inline-submenu-bg': '#000c17' | string
        'menu-dark-highlight-color': '#fff' | string
        'menu-dark-item-active-bg': '@primary-color' | string
        'menu-dark-item-active-danger-bg': '@error-color' | string
        'menu-dark-selected-item-icon-color': '@white' | string
        'menu-dark-selected-item-text-color': '@white' | string
        'menu-dark-item-hover-bg': 'transparent' | string
        'spin-dot-size-sm': '14px' | string
        'spin-dot-size': '20px' | string
        'spin-dot-size-lg': '32px' | string
        'table-bg': '@component-background' | string
        'table-header-bg': '@background-color-light' | string
        'table-header-color': '@heading-color' | string
        'table-header-sort-bg': '@background-color-base' | string
        'table-body-sort-bg': '#fafafa' | string
        'table-row-hover-bg': '@background-color-light' | string
        'table-selected-row-color': 'inherit' | string
        'table-selected-row-bg': '@primary-1' | string
        'table-body-selected-sort-bg': '@table-selected-row-bg' | string
        'table-selected-row-hover-bg': 'darken(@table-selected-row-bg, 2%)' | string
        'table-expanded-row-bg': '#fbfbfb' | string
        'table-padding-vertical': '16px' | string
        'table-padding-horizontal': '16px' | string
        'table-padding-vertical-md': '(@table-padding-vertical * 3 / 4)' | string
        'table-padding-horizontal-md': '(@table-padding-horizontal / 2)' | string
        'table-padding-vertical-sm': '(@table-padding-vertical / 2)' | string
        'table-padding-horizontal-sm': '(@table-padding-horizontal / 2)' | string
        'table-border-color': '@border-color-split' | string
        'table-border-radius-base': '@border-radius-base' | string
        'table-footer-bg': '@background-color-light' | string
        'table-footer-color': '@heading-color' | string
        'table-header-bg-sm': '@table-header-bg' | string
        'table-font-size': '@font-size-base' | string
        'table-font-size-md': '@table-font-size' | string
        'table-font-size-sm': '@table-font-size' | string
        'table-header-cell-split-color': 'rgba(0, 0, 0, 0.06)' | string
        'table-header-sort-active-bg': 'rgba(0, 0, 0, 0.04)' | string
        'table-fixed-header-sort-active-bg': 'hsv(0, 0, 96%)' | string
        'table-header-filter-active-bg': 'rgba(0, 0, 0, 0.04)' | string
        'table-filter-btns-bg': 'inherit' | string
        'table-filter-dropdown-bg': '@component-background' | string
        'table-expand-icon-bg': '@component-background' | string
        'table-selection-column-width': '32px' | string
        'table-sticky-scroll-bar-bg': 'fade(#000, 35%)' | string
        'table-sticky-scroll-bar-radius': '4px' | string
        'tag-border-radius': '@border-radius-base' | string
        'tag-default-bg': '@background-color-light' | string
        'tag-default-color': '@text-color' | string
        'tag-font-size': '@font-size-sm' | string
        'tag-line-height': '20px' | string
        'picker-bg': '@component-background' | string
        'picker-basic-cell-hover-color': '@item-hover-bg' | string
        'picker-basic-cell-active-with-range-color': '@primary-1' | string
        'picker-basic-cell-hover-with-range-color': 'lighten(@primary-color, 35%)' | string
        'picker-basic-cell-disabled-bg': 'rgba(0, 0, 0, 0.04)' | string
        'picker-border-color': '@border-color-split' | string
        'picker-date-hover-range-border-color': 'lighten(@primary-color, 20%)' | string
        'picker-date-hover-range-color': '@picker-basic-cell-hover-with-range-color' | string
        'picker-time-panel-column-width': '56px' | string
        'picker-time-panel-column-height': '224px' | string
        'picker-time-panel-cell-height': '28px' | string
        'picker-panel-cell-height': '24px' | string
        'picker-panel-cell-width': '36px' | string
        'picker-text-height': '40px' | string
        'picker-panel-without-time-cell-height': '66px' | string
        'calendar-bg': '@component-background' | string
        'calendar-input-bg': '@input-bg' | string
        'calendar-border-color': '@border-color-inverse' | string
        'calendar-item-active-bg': '@item-active-bg' | string
        'calendar-column-active-bg': 'fade(@calendar-item-active-bg, 20%)' | string
        'calendar-full-bg': '@calendar-bg' | string
        'calendar-full-panel-bg': '@calendar-full-bg' | string
        'carousel-dot-width': '16px' | string
        'carousel-dot-height': '3px' | string
        'carousel-dot-active-width': '24px' | string
        'badge-height': '20px' | string
        'badge-height-sm': '14px' | string
        'badge-dot-size': '6px' | string
        'badge-font-size': '@font-size-sm' | string
        'badge-font-size-sm': '@font-size-sm' | string
        'badge-font-weight': 'normal' | string
        'badge-status-size': '6px' | string
        'badge-text-color': '@component-background' | string
        'badge-color': '@highlight-color' | string
        'rate-star-color': '@yellow-6' | string
        'rate-star-bg': '@border-color-split' | string
        'rate-star-size': '20px' | string
        'rate-star-hover-scale': 'scale(1.1)' | string
        'card-head-color': '@heading-color' | string
        'card-head-background': 'transparent' | string
        'card-head-font-size': '@font-size-lg' | string
        'card-head-font-size-sm': '@font-size-base' | string
        'card-head-padding': '16px' | string
        'card-head-padding-sm': '(@card-head-padding / 2)' | string
        'card-head-height': '48px' | string
        'card-head-height-sm': '36px' | string
        'card-inner-head-padding': '12px' | string
        'card-padding-base': '24px' | string
        'card-padding-base-sm': '(@card-padding-base / 2)' | string
        'card-actions-background': '@component-background' | string
        'card-actions-li-margin': '12px 0' | string
        'card-skeleton-bg': '#cfd8dc' | string
        'card-background': '@component-background' | string
        'card-shadow':
            | '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12),\n  0 5px 12px 4px rgba(0, 0, 0, 0.09)'
            | string
        'card-radius': '@border-radius-base' | string
        'card-head-tabs-margin-bottom': '-17px' | string
        'card-head-extra-color': '@text-color' | string
        'comment-bg': 'inherit' | string
        'comment-padding-base': '@padding-md 0' | string
        'comment-nest-indent': '44px' | string
        'comment-font-size-base': '@font-size-base' | string
        'comment-font-size-sm': '@font-size-sm' | string
        'comment-author-name-color': '@text-color-secondary' | string
        'comment-author-time-color': '#ccc' | string
        'comment-action-color': '@text-color-secondary' | string
        'comment-action-hover-color': '#595959' | string
        'comment-actions-margin-bottom': 'inherit' | string
        'comment-actions-margin-top': '@margin-sm' | string
        'comment-content-detail-p-margin-bottom': 'inherit' | string
        'tabs-card-head-background': '@background-color-light' | string
        'tabs-card-height': '40px' | string
        'tabs-card-active-color': '@primary-color' | string
        'tabs-card-horizontal-padding':
            | '(\n    (@tabs-card-height - floor(@font-size-base * @line-height-base)) / 2\n  ) - @border-width-base @padding-md'
            | string
        'tabs-card-horizontal-padding-sm': '6px @padding-md' | string
        'tabs-card-horizontal-padding-lg': '7px @padding-md 6px' | string
        'tabs-title-font-size': '@font-size-base' | string
        'tabs-title-font-size-lg': '@font-size-lg' | string
        'tabs-title-font-size-sm': '@font-size-base' | string
        'tabs-ink-bar-color': '@primary-color' | string
        'tabs-bar-margin': '0 0 @margin-md 0' | string
        'tabs-horizontal-gutter': '32px' | string
        'tabs-horizontal-margin': '0 0 0 @tabs-horizontal-gutter' | string
        'tabs-horizontal-margin-rtl': '0 0 0 32px' | string
        'tabs-horizontal-padding': '@padding-sm 0' | string
        'tabs-horizontal-padding-lg': '@padding-md 0' | string
        'tabs-horizontal-padding-sm': '@padding-xs 0' | string
        'tabs-vertical-padding': '@padding-xs @padding-lg' | string
        'tabs-vertical-margin': '@margin-md 0 0 0' | string
        'tabs-scrolling-size': '32px' | string
        'tabs-highlight-color': '@primary-color' | string
        'tabs-hover-color': '@primary-5' | string
        'tabs-active-color': '@primary-7' | string
        'tabs-card-gutter': '2px' | string
        'tabs-card-tab-active-border-top': '2px solid transparent' | string
        'back-top-color': '#fff' | string
        'back-top-bg': '@text-color-secondary' | string
        'back-top-hover-bg': '@text-color' | string
        'avatar-size-base': '32px' | string
        'avatar-size-lg': '40px' | string
        'avatar-size-sm': '24px' | string
        'avatar-font-size-base': '18px' | string
        'avatar-font-size-lg': '24px' | string
        'avatar-font-size-sm': '14px' | string
        'avatar-bg': '#ccc' | string
        'avatar-color': '#fff' | string
        'avatar-border-radius': '@border-radius-base' | string
        'avatar-group-overlapping': '-8px' | string
        'avatar-group-space': '3px' | string
        'avatar-group-border-color': '#fff' | string
        'switch-height': '22px' | string
        'switch-sm-height': '16px' | string
        'switch-min-width': '44px' | string
        'switch-sm-min-width': '28px' | string
        'switch-disabled-opacity': '0.4' | string
        'switch-color': '@primary-color' | string
        'switch-bg': '@component-background' | string
        'switch-shadow-color': 'fade(#00230b, 20%)' | string
        'switch-padding': '2px' | string
        'switch-inner-margin-min': 'ceil(@switch-height * 0.3)' | string
        'switch-inner-margin-max': 'ceil(@switch-height * 1.1)' | string
        'switch-sm-inner-margin-min': 'ceil(@switch-sm-height * 0.3)' | string
        'switch-sm-inner-margin-max': 'ceil(@switch-sm-height * 1.1)' | string
        'pagination-item-bg': '@component-background' | string
        'pagination-item-size': '@height-base' | string
        'pagination-item-size-sm': '24px' | string
        'pagination-font-family': '@font-family' | string
        'pagination-font-weight-active': '500' | string
        'pagination-item-bg-active': '@component-background' | string
        'pagination-item-link-bg': '@component-background' | string
        'pagination-item-disabled-color-active': '@disabled-color' | string
        'pagination-item-disabled-bg-active': '@disabled-active-bg' | string
        'pagination-item-input-bg': '@component-background' | string
        'pagination-mini-options-size-changer-top': '0px' | string
        'page-header-padding': '@padding-lg' | string
        'page-header-padding-vertical': '@padding-md' | string
        'page-header-padding-breadcrumb': '@padding-sm' | string
        'page-header-content-padding-vertical': '@padding-sm' | string
        'page-header-back-color': '#000' | string
        'page-header-ghost-bg': 'inherit' | string
        'page-header-heading-title': '@heading-4-size' | string
        'page-header-heading-sub-title': '14px' | string
        'page-header-tabs-tab-font-size': '16px' | string
        'breadcrumb-base-color': '@text-color-secondary' | string
        'breadcrumb-last-item-color': '@text-color' | string
        'breadcrumb-font-size': '@font-size-base' | string
        'breadcrumb-icon-font-size': '@font-size-base' | string
        'breadcrumb-link-color': '@text-color-secondary' | string
        'breadcrumb-link-color-hover': '@text-color' | string
        'breadcrumb-separator-color': '@text-color-secondary' | string
        'breadcrumb-separator-margin': '0 @padding-xs' | string
        'slider-margin': '10px 6px 10px' | string
        'slider-rail-background-color': '@background-color-base' | string
        'slider-rail-background-color-hover': '#e1e1e1' | string
        'slider-track-background-color': '@primary-3' | string
        'slider-track-background-color-hover': '@primary-4' | string
        'slider-handle-border-width': '2px' | string
        'slider-handle-background-color': '@component-background' | string
        'slider-handle-color': '@primary-3' | string
        'slider-handle-color-hover': '@primary-4' | string
        'slider-handle-color-focus': 'tint(@primary-color, 20%)' | string
        'slider-handle-color-focus-shadow': 'fade(@primary-color, 12%)' | string
        'slider-handle-color-tooltip-open': '@primary-color' | string
        'slider-handle-size': '14px' | string
        'slider-handle-margin-top': '-5px' | string
        'slider-handle-shadow': '0' | string
        'slider-dot-border-color': '@border-color-split' | string
        'slider-dot-border-color-active': 'tint(@primary-color, 50%)' | string
        'slider-disabled-color': '@disabled-color' | string
        'slider-disabled-background-color': '@component-background' | string
        'tree-bg': '@component-background' | string
        'tree-title-height': '24px' | string
        'tree-child-padding': '18px' | string
        'tree-directory-selected-color': '#fff' | string
        'tree-directory-selected-bg': '@primary-color' | string
        'tree-node-hover-bg': '@item-hover-bg' | string
        'tree-node-selected-bg': '@primary-2' | string
        'collapse-header-padding': '@padding-sm @padding-md' | string
        'collapse-header-padding-extra': '40px' | string
        'collapse-header-bg': '@background-color-light' | string
        'collapse-content-padding': '@padding-md' | string
        'collapse-content-bg': '@component-background' | string
        'collapse-header-arrow-left': '16px' | string
        'skeleton-color': 'rgba(190, 190, 190, 0.2)' | string
        'skeleton-to-color': 'shade(@skeleton-color, 5%)' | string
        'skeleton-paragraph-margin-top': '28px' | string
        'skeleton-paragraph-li-margin-top': '@margin-md' | string
        'skeleton-paragraph-li-height': '16px' | string
        'skeleton-title-height': '16px' | string
        'skeleton-title-paragraph-margin-top': '@margin-lg' | string
        'transfer-header-height': '40px' | string
        'transfer-item-height': '@height-base' | string
        'transfer-disabled-bg': '@disabled-bg' | string
        'transfer-list-height': '200px' | string
        'transfer-item-hover-bg': '@item-hover-bg' | string
        'transfer-item-selected-hover-bg': 'darken(@item-active-bg, 2%)' | string
        'transfer-item-padding-vertical': '6px' | string
        'transfer-list-search-icon-top': '12px' | string
        'message-notice-content-padding': '10px 16px' | string
        'message-notice-content-bg': '@component-background' | string
        'wave-animation-width': '6px' | string
        'alert-success-border-color': "~`colorPalette('@{success-color}', 3) `" | string
        'alert-success-bg-color': "~`colorPalette('@{success-color}', 1) `" | string
        'alert-success-icon-color': '@success-color' | string
        'alert-info-border-color': "~`colorPalette('@{info-color}', 3) `" | string
        'alert-info-bg-color': "~`colorPalette('@{info-color}', 1) `" | string
        'alert-info-icon-color': '@info-color' | string
        'alert-warning-border-color': "~`colorPalette('@{warning-color}', 3) `" | string
        'alert-warning-bg-color': "~`colorPalette('@{warning-color}', 1) `" | string
        'alert-warning-icon-color': '@warning-color' | string
        'alert-error-border-color': "~`colorPalette('@{error-color}', 3) `" | string
        'alert-error-bg-color': "~`colorPalette('@{error-color}', 1) `" | string
        'alert-error-icon-color': '@error-color' | string
        'alert-message-color': '@heading-color' | string
        'alert-text-color': '@text-color' | string
        'alert-close-color': '@text-color-secondary' | string
        'alert-close-hover-color': '@icon-color-hover' | string
        'alert-no-icon-padding-vertical': '@padding-xs' | string
        'alert-with-description-no-icon-padding-vertical': '@padding-md - 1px' | string
        'alert-with-description-padding-vertical': '@padding-md - 1px' | string
        'alert-with-description-padding':
            | '@alert-with-description-padding-vertical 15px\n  @alert-with-description-no-icon-padding-vertical @alert-with-description-icon-size'
            | string
        'alert-icon-top':
            | '8px + @font-size-base * (@line-height-base / 2) - (@font-size-base / 2)'
            | string
        'alert-with-description-icon-size': '24px' | string
        'list-header-background': 'transparent' | string
        'list-footer-background': 'transparent' | string
        'list-empty-text-padding': '@padding-md' | string
        'list-item-padding': '@padding-sm 0' | string
        'list-item-padding-sm': '@padding-xs @padding-md' | string
        'list-item-padding-lg': '16px 24px' | string
        'list-item-meta-margin-bottom': '@padding-md' | string
        'list-item-meta-avatar-margin-right': '@padding-md' | string
        'list-item-meta-title-margin-bottom': '@padding-sm' | string
        'list-customize-card-bg': '@component-background' | string
        'list-item-meta-description-font-size': '@font-size-base' | string
        'statistic-title-font-size': '@font-size-base' | string
        'statistic-content-font-size': '24px' | string
        'statistic-unit-font-size': '24px' | string
        'statistic-font-family': '@font-family' | string
        'drawer-header-padding': '@padding-md @padding-lg' | string
        'drawer-body-padding': '@padding-lg' | string
        'drawer-bg': '@component-background' | string
        'drawer-footer-padding-vertical': '@modal-footer-padding-vertical' | string
        'drawer-footer-padding-horizontal': '@modal-footer-padding-horizontal' | string
        'drawer-header-close-size': '56px' | string
        'drawer-title-font-size': '@font-size-lg' | string
        'drawer-title-line-height': '22px' | string
        'timeline-width': '2px' | string
        'timeline-color': '@border-color-split' | string
        'timeline-dot-border-width': '2px' | string
        'timeline-dot-color': '@primary-color' | string
        'timeline-dot-bg': '@component-background' | string
        'timeline-item-padding-bottom': '20px' | string
        'typography-title-font-weight': '600' | string
        'typography-title-margin-top': '1.2em' | string
        'typography-title-margin-bottom': '0.5em' | string
        'upload-actions-color': '@text-color-secondary' | string
        'process-tail-color': '@border-color-split' | string
        'steps-nav-arrow-color': 'fade(@black, 25%)' | string
        'steps-background': '@component-background' | string
        'steps-icon-size': '32px' | string
        'steps-icon-custom-size': '@steps-icon-size' | string
        'steps-icon-custom-top': '0px' | string
        'steps-icon-custom-font-size': '24px' | string
        'steps-icon-top': '-0.5px' | string
        'steps-icon-font-size': '@font-size-lg' | string
        'steps-icon-margin': '0 8px 0 0' | string
        'steps-title-line-height': '@height-base' | string
        'steps-small-icon-size': '24px' | string
        'steps-small-icon-margin': '0 8px 0 0' | string
        'steps-dot-size': '8px' | string
        'steps-dot-top': '2px' | string
        'steps-current-dot-size': '10px' | string
        'steps-description-max-width': '140px' | string
        'steps-nav-content-max-width': 'auto' | string
        'steps-vertical-icon-width': '16px' | string
        'steps-vertical-tail-width': '16px' | string
        'steps-vertical-tail-width-sm': '12px' | string
        'notification-bg': '@component-background' | string
        'notification-padding-vertical': '16px' | string
        'notification-padding-horizontal': '24px' | string
        'result-title-font-size': '24px' | string
        'result-subtitle-font-size': '@font-size-base' | string
        'result-icon-font-size': '72px' | string
        'result-extra-margin': '24px 0 0 0' | string
        'image-size-base': '48px' | string
        'image-font-size-base': '24px' | string
        'image-bg': '#f5f5f5' | string
        'image-color': '#fff' | string
        'image-mask-font-size': '16px' | string
        'image-preview-operation-size': '18px' | string
        'image-preview-operation-color': '@text-color-dark' | string
        'image-preview-operation-disabled-color':
            | 'fade(@image-preview-operation-color, 25%)'
            | string
        'segmented-bg': 'fade(@black, 4%)' | string
        'segmented-hover-bg': 'fade(@black, 6%)' | string
        'segmented-selected-bg': '@white' | string
        'segmented-label-color': 'fade(@black, 65%)' | string
        'segmented-label-hover-color': '#262626' | string
    }

    export interface DarkThemeSingle {
        theme: 'dark' | string
        'blue-1':
            | "mix(color(~`colorPalette('@{blue-base}', 8) `), @component-background, 15%)"
            | string
        'blue-2':
            | "mix(color(~`colorPalette('@{blue-base}', 7) `), @component-background, 25%)"
            | string
        'blue-3': 'mix(@blue-base, @component-background, 30%)' | string
        'blue-4': 'mix(@blue-base, @component-background, 45%)' | string
        'blue-5': 'mix(@blue-base, @component-background, 65%)' | string
        'blue-6': 'mix(@blue-base, @component-background, 85%)' | string
        'blue-7':
            | "mix(color(~`colorPalette('@{blue-base}', 5) `), @component-background, 90%)"
            | string
        'blue-8':
            | "mix(color(~`colorPalette('@{blue-base}', 4) `), @component-background, 95%)"
            | string
        'blue-9':
            | "mix(color(~`colorPalette('@{blue-base}', 3) `), @component-background, 97%)"
            | string
        'blue-10':
            | "mix(color(~`colorPalette('@{blue-base}', 2) `), @component-background, 98%)"
            | string
        'purple-1':
            | "mix(color(~`colorPalette('@{purple-base}', 8) `), @component-background, 15%)"
            | string
        'purple-2':
            | "mix(color(~`colorPalette('@{purple-base}', 7) `), @component-background, 25%)"
            | string
        'purple-3': 'mix(@purple-base, @component-background, 30%)' | string
        'purple-4': 'mix(@purple-base, @component-background, 45%)' | string
        'purple-5': 'mix(@purple-base, @component-background, 65%)' | string
        'purple-6': 'mix(@purple-base, @component-background, 85%)' | string
        'purple-7':
            | "mix(color(~`colorPalette('@{purple-base}', 5) `), @component-background, 90%)"
            | string
        'purple-8':
            | "mix(color(~`colorPalette('@{purple-base}', 4) `), @component-background, 95%)"
            | string
        'purple-9':
            | "mix(color(~`colorPalette('@{purple-base}', 3) `), @component-background, 97%)"
            | string
        'purple-10':
            | "mix(color(~`colorPalette('@{purple-base}', 2) `), @component-background, 98%)"
            | string
        'cyan-1':
            | "mix(color(~`colorPalette('@{cyan-base}', 8) `), @component-background, 15%)"
            | string
        'cyan-2':
            | "mix(color(~`colorPalette('@{cyan-base}', 7) `), @component-background, 25%)"
            | string
        'cyan-3': 'mix(@cyan-base, @component-background, 30%)' | string
        'cyan-4': 'mix(@cyan-base, @component-background, 45%)' | string
        'cyan-5': 'mix(@cyan-base, @component-background, 65%)' | string
        'cyan-6': 'mix(@cyan-base, @component-background, 85%)' | string
        'cyan-7':
            | "mix(color(~`colorPalette('@{cyan-base}', 5) `), @component-background, 90%)"
            | string
        'cyan-8':
            | "mix(color(~`colorPalette('@{cyan-base}', 4) `), @component-background, 95%)"
            | string
        'cyan-9':
            | "mix(color(~`colorPalette('@{cyan-base}', 3) `), @component-background, 97%)"
            | string
        'cyan-10':
            | "mix(color(~`colorPalette('@{cyan-base}', 2) `), @component-background, 98%)"
            | string
        'green-1':
            | "mix(color(~`colorPalette('@{green-base}', 8) `), @component-background, 15%)"
            | string
        'green-2':
            | "mix(color(~`colorPalette('@{green-base}', 7) `), @component-background, 25%)"
            | string
        'green-3': 'mix(@green-base, @component-background, 30%)' | string
        'green-4': 'mix(@green-base, @component-background, 45%)' | string
        'green-5': 'mix(@green-base, @component-background, 65%)' | string
        'green-6': 'mix(@green-base, @component-background, 85%)' | string
        'green-7':
            | "mix(color(~`colorPalette('@{green-base}', 5) `), @component-background, 90%)"
            | string
        'green-8':
            | "mix(color(~`colorPalette('@{green-base}', 4) `), @component-background, 95%)"
            | string
        'green-9':
            | "mix(color(~`colorPalette('@{green-base}', 3) `), @component-background, 97%)"
            | string
        'green-10':
            | "mix(color(~`colorPalette('@{green-base}', 2) `), @component-background, 98%)"
            | string
        'magenta-1':
            | "mix(color(~`colorPalette('@{magenta-base}', 8) `), @component-background, 15%)"
            | string
        'magenta-2':
            | "mix(color(~`colorPalette('@{magenta-base}', 7) `), @component-background, 25%)"
            | string
        'magenta-3': 'mix(@magenta-base, @component-background, 30%)' | string
        'magenta-4': 'mix(@magenta-base, @component-background, 45%)' | string
        'magenta-5': 'mix(@magenta-base, @component-background, 65%)' | string
        'magenta-6': 'mix(@magenta-base, @component-background, 85%)' | string
        'magenta-7':
            | "mix(color(~`colorPalette('@{magenta-base}', 5) `), @component-background, 90%)"
            | string
        'magenta-8':
            | "mix(color(~`colorPalette('@{magenta-base}', 4) `), @component-background, 95%)"
            | string
        'magenta-9':
            | "mix(color(~`colorPalette('@{magenta-base}', 3) `), @component-background, 97%)"
            | string
        'magenta-10':
            | "mix(color(~`colorPalette('@{magenta-base}', 2) `), @component-background, 98%)"
            | string
        'pink-1':
            | "mix(color(~`colorPalette('@{pink-base}', 8) `), @component-background, 15%)"
            | string
        'pink-2':
            | "mix(color(~`colorPalette('@{pink-base}', 7) `), @component-background, 25%)"
            | string
        'pink-3': 'mix(@pink-base, @component-background, 30%)' | string
        'pink-4': 'mix(@pink-base, @component-background, 45%)' | string
        'pink-5': 'mix(@pink-base, @component-background, 65%)' | string
        'pink-6': 'mix(@pink-base, @component-background, 85%)' | string
        'pink-7':
            | "mix(color(~`colorPalette('@{pink-base}', 5) `), @component-background, 90%)"
            | string
        'pink-8':
            | "mix(color(~`colorPalette('@{pink-base}', 4) `), @component-background, 95%)"
            | string
        'pink-9':
            | "mix(color(~`colorPalette('@{pink-base}', 3) `), @component-background, 97%)"
            | string
        'pink-10':
            | "mix(color(~`colorPalette('@{pink-base}', 2) `), @component-background, 98%)"
            | string
        'red-1':
            | "mix(color(~`colorPalette('@{red-base}', 8) `), @component-background, 15%)"
            | string
        'red-2':
            | "mix(color(~`colorPalette('@{red-base}', 7) `), @component-background, 25%)"
            | string
        'red-3': 'mix(@red-base, @component-background, 30%)' | string
        'red-4': 'mix(@red-base, @component-background, 45%)' | string
        'red-5': 'mix(@red-base, @component-background, 65%)' | string
        'red-6': 'mix(@red-base, @component-background, 85%)' | string
        'red-7':
            | "mix(color(~`colorPalette('@{red-base}', 5) `), @component-background, 90%)"
            | string
        'red-8':
            | "mix(color(~`colorPalette('@{red-base}', 4) `), @component-background, 95%)"
            | string
        'red-9':
            | "mix(color(~`colorPalette('@{red-base}', 3) `), @component-background, 97%)"
            | string
        'red-10':
            | "mix(color(~`colorPalette('@{red-base}', 2) `), @component-background, 98%)"
            | string
        'orange-1':
            | "mix(color(~`colorPalette('@{orange-base}', 8) `), @component-background, 15%)"
            | string
        'orange-2':
            | "mix(color(~`colorPalette('@{orange-base}', 7) `), @component-background, 25%)"
            | string
        'orange-3': 'mix(@orange-base, @component-background, 30%)' | string
        'orange-4': 'mix(@orange-base, @component-background, 45%)' | string
        'orange-5': 'mix(@orange-base, @component-background, 65%)' | string
        'orange-6': 'mix(@orange-base, @component-background, 85%)' | string
        'orange-7':
            | "mix(color(~`colorPalette('@{orange-base}', 5) `), @component-background, 90%)"
            | string
        'orange-8':
            | "mix(color(~`colorPalette('@{orange-base}', 4) `), @component-background, 95%)"
            | string
        'orange-9':
            | "mix(color(~`colorPalette('@{orange-base}', 3) `), @component-background, 97%)"
            | string
        'orange-10':
            | "mix(color(~`colorPalette('@{orange-base}', 2) `), @component-background, 98%)"
            | string
        'yellow-1':
            | "mix(color(~`colorPalette('@{yellow-base}', 8) `), @component-background, 15%)"
            | string
        'yellow-2':
            | "mix(color(~`colorPalette('@{yellow-base}', 7) `), @component-background, 25%)"
            | string
        'yellow-3': 'mix(@yellow-base, @component-background, 30%)' | string
        'yellow-4': 'mix(@yellow-base, @component-background, 45%)' | string
        'yellow-5': 'mix(@yellow-base, @component-background, 65%)' | string
        'yellow-6': 'mix(@yellow-base, @component-background, 85%)' | string
        'yellow-7':
            | "mix(color(~`colorPalette('@{yellow-base}', 5) `), @component-background, 90%)"
            | string
        'yellow-8':
            | "mix(color(~`colorPalette('@{yellow-base}', 4) `), @component-background, 95%)"
            | string
        'yellow-9':
            | "mix(color(~`colorPalette('@{yellow-base}', 3) `), @component-background, 97%)"
            | string
        'yellow-10':
            | "mix(color(~`colorPalette('@{yellow-base}', 2) `), @component-background, 98%)"
            | string
        'volcano-1':
            | "mix(color(~`colorPalette('@{volcano-base}', 8) `), @component-background, 15%)"
            | string
        'volcano-2':
            | "mix(color(~`colorPalette('@{volcano-base}', 7) `), @component-background, 25%)"
            | string
        'volcano-3': 'mix(@volcano-base, @component-background, 30%)' | string
        'volcano-4': 'mix(@volcano-base, @component-background, 45%)' | string
        'volcano-5': 'mix(@volcano-base, @component-background, 65%)' | string
        'volcano-6': 'mix(@volcano-base, @component-background, 85%)' | string
        'volcano-7':
            | "mix(color(~`colorPalette('@{volcano-base}', 5) `), @component-background, 90%)"
            | string
        'volcano-8':
            | "mix(color(~`colorPalette('@{volcano-base}', 4) `), @component-background, 95%)"
            | string
        'volcano-9':
            | "mix(color(~`colorPalette('@{volcano-base}', 3) `), @component-background, 97%)"
            | string
        'volcano-10':
            | "mix(color(~`colorPalette('@{volcano-base}', 2) `), @component-background, 98%)"
            | string
        'geekblue-1':
            | "mix(color(~`colorPalette('@{geekblue-base}', 8) `), @component-background, 15%)"
            | string
        'geekblue-2':
            | "mix(color(~`colorPalette('@{geekblue-base}', 7) `), @component-background, 25%)"
            | string
        'geekblue-3': 'mix(@geekblue-base, @component-background, 30%)' | string
        'geekblue-4': 'mix(@geekblue-base, @component-background, 45%)' | string
        'geekblue-5': 'mix(@geekblue-base, @component-background, 65%)' | string
        'geekblue-6': 'mix(@geekblue-base, @component-background, 85%)' | string
        'geekblue-7':
            | "mix(color(~`colorPalette('@{geekblue-base}', 5) `), @component-background, 90%)"
            | string
        'geekblue-8':
            | "mix(color(~`colorPalette('@{geekblue-base}', 4) `), @component-background, 95%)"
            | string
        'geekblue-9':
            | "mix(color(~`colorPalette('@{geekblue-base}', 3) `), @component-background, 97%)"
            | string
        'geekblue-10':
            | "mix(color(~`colorPalette('@{geekblue-base}', 2) `), @component-background, 98%)"
            | string
        'lime-1':
            | "mix(color(~`colorPalette('@{lime-base}', 8) `), @component-background, 15%)"
            | string
        'lime-2':
            | "mix(color(~`colorPalette('@{lime-base}', 7) `), @component-background, 25%)"
            | string
        'lime-3': 'mix(@lime-base, @component-background, 30%)' | string
        'lime-4': 'mix(@lime-base, @component-background, 45%)' | string
        'lime-5': 'mix(@lime-base, @component-background, 65%)' | string
        'lime-6': 'mix(@lime-base, @component-background, 85%)' | string
        'lime-7':
            | "mix(color(~`colorPalette('@{lime-base}', 5) `), @component-background, 90%)"
            | string
        'lime-8':
            | "mix(color(~`colorPalette('@{lime-base}', 4) `), @component-background, 95%)"
            | string
        'lime-9':
            | "mix(color(~`colorPalette('@{lime-base}', 3) `), @component-background, 97%)"
            | string
        'lime-10':
            | "mix(color(~`colorPalette('@{lime-base}', 2) `), @component-background, 98%)"
            | string
        'gold-1':
            | "mix(color(~`colorPalette('@{gold-base}', 8) `), @component-background, 15%)"
            | string
        'gold-2':
            | "mix(color(~`colorPalette('@{gold-base}', 7) `), @component-background, 25%)"
            | string
        'gold-3': 'mix(@gold-base, @component-background, 30%)' | string
        'gold-4': 'mix(@gold-base, @component-background, 45%)' | string
        'gold-5': 'mix(@gold-base, @component-background, 65%)' | string
        'gold-6': 'mix(@gold-base, @component-background, 85%)' | string
        'gold-7':
            | "mix(color(~`colorPalette('@{gold-base}', 5) `), @component-background, 90%)"
            | string
        'gold-8':
            | "mix(color(~`colorPalette('@{gold-base}', 4) `), @component-background, 95%)"
            | string
        'gold-9':
            | "mix(color(~`colorPalette('@{gold-base}', 3) `), @component-background, 97%)"
            | string
        'gold-10':
            | "mix(color(~`colorPalette('@{gold-base}', 2) `), @component-background, 98%)"
            | string
        'primary-1':
            | "mix(color(~`colorPalette('@{primary-color}', 8) `), @component-background, 15%)"
            | string
        'primary-2':
            | "mix(color(~`colorPalette('@{primary-color}', 7) `), @component-background, 25%)"
            | string
        'primary-3': 'mix(@primary-color, @component-background, 30%)' | string
        'primary-4': 'mix(@primary-color, @component-background, 45%)' | string
        'primary-5': 'mix(@primary-color, @component-background, 65%)' | string
        'primary-6': '@primary-color' | string
        'primary-7':
            | "mix(color(~`colorPalette('@{primary-color}', 5) `), @component-background, 90%)"
            | string
        'primary-8':
            | "mix(color(~`colorPalette('@{primary-color}', 4) `), @component-background, 95%)"
            | string
        'primary-9':
            | "mix(color(~`colorPalette('@{primary-color}', 3) `), @component-background, 97%)"
            | string
        'primary-10':
            | "mix(color(~`colorPalette('@{primary-color}', 2) `), @component-background, 98%)"
            | string
        'popover-background': '#1f1f1f' | string
        'popover-customize-border-color': '#3a3a3a' | string
        'body-background': '@black' | string
        'component-background': '#141414' | string
        'text-color': 'fade(@white, 85%)' | string
        'text-color-secondary': 'fade(@white, 45%)' | string
        'text-color-inverse': '@white' | string
        'icon-color-hover': 'fade(@white, 75%)' | string
        'heading-color': 'fade(@white, 85%)' | string
        'item-active-bg': '@primary-1' | string
        'item-hover-bg': 'fade(@white, 8%)' | string
        'border-color-base': '#434343' | string
        'border-color-split': '#303030' | string
        'background-color-light': 'fade(@white, 4%)' | string
        'background-color-base': 'fade(@white, 8%)' | string
        'disabled-color': 'fade(@white, 30%)' | string
        'disabled-bg': '@background-color-base' | string
        'disabled-color-dark': 'fade(@white, 30%)' | string
        'tree-bg': 'transparent' | string
        'list-customize-card-bg': 'transparent' | string
        'shadow-color': 'rgba(0, 0, 0, 0.45)' | string
        'shadow-color-inverse': '@component-background' | string
        'box-shadow-base': '@shadow-2' | string
        'shadow-1-up':
            | '0 -6px 16px -8px rgba(0, 0, 0, 0.32), 0 -9px 28px 0 rgba(0, 0, 0, 0.2),\n  0 -12px 48px 16px rgba(0, 0, 0, 0.12)'
            | string
        'shadow-1-down':
            | '0 6px 16px -8px rgba(0, 0, 0, 0.32), 0 9px 28px 0 rgba(0, 0, 0, 0.2),\n  0 12px 48px 16px rgba(0, 0, 0, 0.12)'
            | string
        'shadow-1-right':
            | '6px 0 16px -8px rgba(0, 0, 0, 0.32), 9px 0 28px 0 rgba(0, 0, 0, 0.2),\n  12px 0 48px 16px rgba(0, 0, 0, 0.12)'
            | string
        'shadow-2':
            | '0 3px 6px -4px rgba(0, 0, 0, 0.48), 0 6px 16px 0 rgba(0, 0, 0, 0.32),\n  0 9px 28px 8px rgba(0, 0, 0, 0.2)'
            | string
        'btn-shadow': '0 2px 0 rgba(0, 0, 0, 0.015)' | string
        'btn-primary-shadow': '0 2px 0 rgba(0, 0, 0, 0.045)' | string
        'btn-text-shadow': '0 -1px 0 rgba(0, 0, 0, 0.12)' | string
        'btn-default-bg': 'transparent' | string
        'btn-default-ghost-color': '@text-color' | string
        'btn-default-ghost-border': 'fade(@white, 25%)' | string
        'btn-text-hover-bg': 'rgba(255, 255, 255, 0.03)' | string
        'checkbox-check-bg': 'transparent' | string
        'descriptions-bg': '@background-color-light' | string
        'divider-color': 'rgba(255, 255, 255, 12%)' | string
        'modal-header-bg': '@popover-background' | string
        'modal-header-border-color-split': '@border-color-split' | string
        'modal-content-bg': '@popover-background' | string
        'modal-footer-border-color-split': '@border-color-split' | string
        'radio-solid-checked-color': '@white' | string
        'radio-dot-disabled-color': 'fade(@white, 20%)' | string
        'radio-disabled-button-checked-bg': 'fade(@white, 20%)' | string
        'radio-disabled-button-checked-color': '@disabled-color' | string
        'layout-body-background': '@body-background' | string
        'layout-header-background': '@popover-background' | string
        'layout-trigger-background': '#262626' | string
        'input-bg': 'transparent' | string
        'input-placeholder-color': 'fade(@white, 30%)' | string
        'input-icon-color': 'fade(@white, 30%)' | string
        'input-number-handler-active-bg': '@item-hover-bg' | string
        'input-icon-hover-color': 'fade(@white, 85%)' | string
        'select-background': 'transparent' | string
        'select-dropdown-bg': '@popover-background' | string
        'select-clear-background': '@component-background' | string
        'select-selection-item-bg': 'fade(@white, 8)' | string
        'select-selection-item-border-color': '@border-color-split' | string
        'select-multiple-disabled-background': '@component-background' | string
        'select-multiple-item-disabled-color': '#595959' | string
        'select-multiple-item-disabled-border-color': '@popover-background' | string
        'cascader-bg': 'transparent' | string
        'cascader-menu-bg': '@popover-background' | string
        'cascader-menu-border-color-split': '@border-color-split' | string
        'tooltip-bg': '#434343' | string
        'menu-dark-inline-submenu-bg': '@component-background' | string
        'menu-dark-bg': '@popover-background' | string
        'menu-popup-bg': '@popover-background' | string
        'message-notice-content-bg': '@popover-background' | string
        'notification-bg': '@popover-background' | string
        'link-hover-color': '@primary-5' | string
        'link-active-color': '@primary-7' | string
        'table-header-bg': '#1d1d1d' | string
        'table-body-sort-bg': 'fade(@white, 1%)' | string
        'table-row-hover-bg': '#262626' | string
        'table-header-cell-split-color': 'fade(@white, 8%)' | string
        'table-header-sort-bg': '#262626' | string
        'table-header-filter-active-bg': '#434343' | string
        'table-header-sort-active-bg': '#303030' | string
        'table-fixed-header-sort-active-bg': '#222' | string
        'table-filter-btns-bg': '@popover-background' | string
        'table-expanded-row-bg': '@table-header-bg' | string
        'table-filter-dropdown-bg': '@popover-background' | string
        'table-expand-icon-bg': 'transparent' | string
        'info-color-deprecated-bg': '@primary-1' | string
        'info-color-deprecated-border': '@primary-3' | string
        'success-color-deprecated-bg': '@green-1' | string
        'success-color-deprecated-border': '@green-3' | string
        'warning-color-deprecated-bg': '@orange-1' | string
        'warning-color-deprecated-border': '@orange-3' | string
        'error-color-deprecated-bg': '@red-1' | string
        'error-color-deprecated-border': '@red-3' | string
        'picker-basic-cell-hover-with-range-color': 'darken(@primary-color, 35%)' | string
        'picker-basic-cell-disabled-bg': '#303030' | string
        'picker-border-color': '@border-color-split' | string
        'picker-bg': 'transparent' | string
        'picker-date-hover-range-border-color': 'darken(@primary-color, 20%)' | string
        'dropdown-menu-bg': '@popover-background' | string
        'dropdown-menu-submenu-disabled-bg': 'transparent' | string
        'steps-nav-arrow-color': 'fade(@white, 20%)' | string
        'steps-background': 'transparent' | string
        'avatar-bg': 'fade(@white, 30%)' | string
        'progress-steps-item-bg': 'fade(@white, 8%)' | string
        'calendar-bg': '@popover-background' | string
        'calendar-input-bg': '@calendar-bg' | string
        'calendar-border-color': 'transparent' | string
        'calendar-full-bg': '@component-background' | string
        'badge-text-color': '@white' | string
        'popover-bg': '@popover-background' | string
        'drawer-bg': '@popover-background' | string
        'card-actions-background': '@component-background' | string
        'card-skeleton-bg': '#303030' | string
        'card-shadow':
            | '0 1px 2px -2px rgba(0, 0, 0, 0.64), 0 3px 6px 0 rgba(0, 0, 0, 0.48),\n  0 5px 12px 4px rgba(0, 0, 0, 0.36)'
            | string
        'transfer-item-hover-bg': '#262626' | string
        'comment-bg': 'transparent' | string
        'comment-author-time-color': 'fade(@white, 30%)' | string
        'comment-action-hover-color': 'fade(@white, 65%)' | string
        'rate-star-bg': 'fade(@white, 12%)' | string
        'switch-bg': '@white' | string
        'pagination-item-bg': 'transparent' | string
        'pagination-item-bg-active': 'transparent' | string
        'pagination-item-link-bg': 'transparent' | string
        'pagination-item-disabled-bg-active': 'fade(@white, 25%)' | string
        'pagination-item-disabled-color-active': '@black' | string
        'pagination-item-input-bg': '@pagination-item-bg' | string
        'page-header-back-color': '@icon-color' | string
        'page-header-ghost-bg': 'transparent' | string
        'slider-rail-background-color': '#262626' | string
        'slider-rail-background-color-hover': '@border-color-base' | string
        'slider-dot-border-color': '@border-color-split' | string
        'slider-dot-border-color-active': '@primary-4' | string
        'skeleton-to-color': 'fade(@white, 16%)' | string
        'alert-success-border-color': '@green-3' | string
        'alert-success-bg-color': '@green-1' | string
        'alert-success-icon-color': '@success-color' | string
        'alert-info-border-color': '@primary-3' | string
        'alert-info-bg-color': '@primary-1' | string
        'alert-info-icon-color': '@info-color' | string
        'alert-warning-border-color': '@gold-3' | string
        'alert-warning-bg-color': '@gold-1' | string
        'alert-warning-icon-color': '@warning-color' | string
        'alert-error-border-color': '@red-3' | string
        'alert-error-bg-color': '@red-1' | string
        'alert-error-icon-color': '@error-color' | string
        'timeline-color': '@border-color-split' | string
        'timeline-dot-color': '@primary-color' | string
        'mentions-dropdown-bg': '@popover-background' | string
        'segmented-bg': 'fade(@black, 25%)' | string
        'segmented-hover-bg': 'fade(@black, 45%)' | string
        'segmented-selected-bg': '#333333' | string
        'segmented-label-color': 'fade(@white, 65%)' | string
        'segmented-label-hover-color': 'fade(@white, 85%)' | string
    }

    export interface CompactThemeSingle {
        'line-height-base': '1.66667' | string
        mode: 'compact' | string
        'font-size-base': '12px' | string
        'font-size-lg': '@font-size-base + 2px' | string
        'default-padding-lg': '24px' | string
        'default-padding-md': '16px' | string
        'default-padding-sm': '12px' | string
        'default-padding-xs': '8px' | string
        'default-padding-xss': '4px' | string
        'padding-lg': '16px' | string
        'padding-md': '8px' | string
        'padding-sm': '8px' | string
        'padding-xs': '4px' | string
        'padding-xss': '0px' | string
        'control-padding-horizontal': '@padding-sm' | string
        'control-padding-horizontal-sm': '@default-padding-xs' | string
        'margin-lg': '16px' | string
        'margin-md': '8px' | string
        'margin-sm': '8px' | string
        'margin-xs': '4px' | string
        'margin-xss': '0px' | string
        'height-base': '28px' | string
        'height-lg': '32px' | string
        'height-sm': '22px' | string
        'btn-padding-horizontal-base': '@default-padding-sm - 1px' | string
        'btn-padding-horizontal-lg': '@btn-padding-horizontal-base' | string
        'btn-padding-horizontal-sm': '@default-padding-xs - 1px' | string
        'btn-square-only-icon-size-lg': '16px' | string
        'btn-square-only-icon-size': '14px' | string
        'btn-square-only-icon-size-sm': '12px' | string
        'breadcrumb-font-size': '@font-size-base' | string
        'breadcrumb-icon-font-size': '@font-size-base' | string
        'dropdown-line-height': '18px' | string
        'menu-item-padding': '0 12px' | string
        'menu-horizontal-line-height': '38px' | string
        'menu-inline-toplevel-item-height': '32px' | string
        'menu-item-height': '32px' | string
        'menu-item-vertical-margin': '0px' | string
        'menu-item-boundary-margin': '0px' | string
        'menu-icon-margin-right': '8px' | string
        'checkbox-size': '14px' | string
        'checkbox-group-item-margin-right': '6px' | string
        'picker-panel-cell-height': '22px' | string
        'picker-panel-cell-width': '32px' | string
        'picker-text-height': '32px' | string
        'picker-time-panel-cell-height': '24px' | string
        'picker-panel-without-time-cell-height': '48px' | string
        'form-item-margin-bottom': '16px' | string
        'form-vertical-label-padding': '0 0 4px' | string
        'rate-star-size': '16px' | string
        'radio-size': '14px' | string
        'radio-wrapper-margin-right': '6px' | string
        'switch-height': '20px' | string
        'switch-sm-height': '14px' | string
        'switch-min-width': '40px' | string
        'switch-sm-min-width': '24px' | string
        'switch-inner-margin-min': '4px' | string
        'switch-inner-margin-max': '22px' | string
        'slider-handle-size': '12px' | string
        'slider-handle-margin-top': '-4px' | string
        'input-padding-vertical-base':
            | 'round(\n  max(\n    (round(((@input-height-base - @font-size-base * @line-height-base) / 2) * 10) / 10) -\n      @border-width-base,\n    2px\n  )\n)'
            | string
        'input-padding-horizontal-lg': '11px' | string
        'page-header-padding': '16px' | string
        'page-header-padding-vertical': '8px' | string
        'page-header-heading-title': '16px' | string
        'page-header-heading-sub-title': '12px' | string
        'page-header-tabs-tab-font-size': '14px' | string
        'pagination-mini-options-size-changer-top': '1px' | string
        'pagination-item-size-sm': '22px' | string
        'cascader-dropdown-line-height': '@dropdown-line-height' | string
        'select-dropdown-height': '@height-base' | string
        'select-single-item-height-lg': '32px' | string
        'select-multiple-item-height':
            | '@input-height-base - max(@input-padding-vertical-base, 4) * 2'
            | string
        'select-multiple-item-height-lg': '24px' | string
        'select-multiple-item-spacing-half': '3px' | string
        'tree-title-height': '20px' | string
        'transfer-item-padding-vertical': '3px' | string
        'transfer-list-search-icon-top': '8px' | string
        'transfer-header-height': '36px' | string
        'comment-actions-margin-bottom': '0px' | string
        'comment-actions-margin-top': '@margin-xs' | string
        'comment-content-detail-p-margin-bottom': '0px' | string
        'steps-icon-size': '24px' | string
        'steps-icon-custom-size': '20px' | string
        'steps-icon-custom-font-size': '20px' | string
        'steps-icon-custom-top': '2px' | string
        'steps-icon-margin': '2px 8px 2px 0' | string
        'steps-icon-font-size': '@font-size-base' | string
        'steps-dot-top': '4px' | string
        'steps-icon-top': '0px' | string
        'steps-small-icon-size': '20px' | string
        'steps-vertical-icon-width': '12px' | string
        'steps-vertical-tail-width': '12px' | string
        'steps-vertical-tail-width-sm': '10px' | string
        'collapse-content-padding': '@padding-md @padding-lg' | string
        'list-item-meta-description-font-size': '@font-size-sm' | string
        'list-item-padding-sm': '4px 12px' | string
        'list-item-padding-lg': '12px 16px' | string
        'drawer-header-padding': '11px @padding-lg' | string
        'drawer-footer-padding-vertical': '@padding-sm' | string
        'drawer-footer-padding-horizontal': '@padding-sm' | string
        'drawer-header-close-size': '44px' | string
        'modal-header-padding-vertical': '11px' | string
        'modal-header-padding':
            | '@modal-header-padding-vertical @modal-header-padding-horizontal'
            | string
        'modal-footer-padding-vertical': '@padding-sm' | string
        'modal-header-close-size':
            | '@modal-header-title-line-height + 2 * @modal-header-padding-vertical'
            | string
        'modal-confirm-body-padding': '24px 24px 16px' | string
        'message-notice-content-padding': '8px 16px' | string
        'popover-min-height': '28px' | string
        'popover-padding-horizontal': '@default-padding-sm' | string
        'card-head-height': '36px' | string
        'card-head-font-size': '@card-head-font-size-sm' | string
        'card-head-padding': '8.5px' | string
        'card-padding-base': '12px' | string
        'card-padding-base-sm': '@card-padding-base' | string
        'card-head-height-sm': '30px' | string
        'card-head-padding-sm': '6px' | string
        'card-actions-li-margin': '4px 0' | string
        'card-head-tabs-margin-bottom': '-9px' | string
        'table-padding-vertical': '12px' | string
        'table-padding-horizontal': '8px' | string
        'table-padding-vertical-md': '8px' | string
        'table-padding-horizontal-md': '8px' | string
        'table-padding-vertical-sm': '4px' | string
        'table-padding-horizontal-sm': '4px' | string
        'table-selection-column-width': '32px' | string
        'statistic-content-font-size': '20px' | string
        'alert-with-description-no-icon-padding-vertical': '7px' | string
        'alert-with-description-padding-vertical': '11px' | string
        'alert-icon-top':
            | '7px + @font-size-base * (@line-height-base / 2) - (@font-size-base / 2)'
            | string
        'alert-with-description-icon-size': '20px' | string
        'skeleton-paragraph-margin-top': '20px' | string
        'skeleton-paragraph-li-margin-top': '12px' | string
        'skeleton-paragraph-li-height': '14px' | string
        'skeleton-title-height': '14px' | string
        'skeleton-title-paragraph-margin-top': '20px' | string
        'descriptions-title-margin-bottom': '8px' | string
        'descriptions-default-padding': '12px @padding-lg' | string
        'descriptions-item-padding-bottom': '@padding-xs' | string
        'avatar-size-base': '28px' | string
        'avatar-size-lg': '32px' | string
        'avatar-size-sm': '22px' | string
        'avatar-font-size-base': '16px' | string
        'avatar-font-size-lg': '20px' | string
        'avatar-font-size-sm': '12px' | string
        'badge-height': '18px' | string
        'tag-line-height': '18px' | string
        'notification-padding-vertical': '12px' | string
        'notification-padding-horizontal': '16px' | string
        'result-title-font-size': '20px' | string
        'result-icon-font-size': '64px' | string
        'result-extra-margin': '24px 0 0 0' | string
        'anchor-link-top': '4px' | string
        'anchor-link-left': '16px' | string
        'anchor-link-padding': '@anchor-link-top 0 @anchor-link-top @anchor-link-left' | string
        'tabs-card-horizontal-padding': '4px @padding-md' | string
        'progress-circle-text-font-size': '0.833333em' | string
        'image-size-base': '48px' | string
        'image-font-size-base': '24px' | string
    }

    export interface ThemeVar extends DefaultTheme {
        hack: string
    }

    export interface PrimaryColor {
        'primary-1': string
        'primary-2': string
        'primary-3': string
        'primary-4': string
        'primary-5': string
        'primary-6': string
        'primary-7': string
        'primary-8': string
        'primary-9': string
        'primary-10': string
    }

    // 常见框颜色接口
    export interface CommonInfoThemeColor extends PrimaryColor {
        'primary-color': string
        'info-color': string
        'processing-color': string
        'success-color': '#55D187' | string //  Success color
        'error-color': '#ED6F6F' //  False color
        'warning-color': '#EFBD47' //   Warning color
        'border-color-base': '#EEEEEE' | string
        'font-size-base': '14px' | string //  Main font size
        'border-radius-base': '2px' | string //  Component/float fillet
        'link-color': string //   Link color
        'app-content-background': '#fafafa' | string //   Link color
    }

    export type ThemeSelectDarkVar = ThemeVar & DarkThemeSingle
    export type ThemeSelectCompactVar = ThemeVar & CompactThemeSingle
    export type ThemeSelectVar = ThemeSelectDarkVar | ThemeSelectCompactVar

    export function getThemeVariables(options: ThemeOption): ThemeSelectVar

    const getThemeVariables: getThemeVariables
    const defaultTheme: defaultTheme

    export { darkThemeSingle, compactThemeSingle }
}
