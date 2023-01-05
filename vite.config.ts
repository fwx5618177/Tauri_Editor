/// <reference types="vitest" />
import pkg from './package.json'
import dayjs from 'dayjs'
import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import { wrapperEnv } from './build/utils'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const pathResolve = (dir: string): string => {
    return resolve(process.cwd(), '.', dir)
}

const { dependencies, devDependencies, name, version } = pkg
const __APP_INFO__ = {
    pkg: { dependencies, devDependencies, name, version },
    lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
    const root = process.cwd()
    const env = loadEnv(mode, root)

    const viteEnv = wrapperEnv(env)

    const isBuild = command === 'build'

    console.log(viteEnv, isBuild)

    return {
        // base: ''
        root,
        define: {
            // setting vue-i18-next
            // Suppress warning
            __INTLIFY_PROD_DEVTOOLS__: false,
            __APP_INFO__: JSON.stringify(__APP_INFO__),
        },
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                },
            },
        },
        resolve: {
            alias: [
                {
                    find: /\/@\//,
                    replacement: pathResolve('src') + '/',
                },
                {
                    find: /\/#\//,
                    replacement: pathResolve('types') + '/',
                },
                {
                    find: '@mocks',
                    replacement: pathResolve('mock') + '/',
                },
                {
                    find: '@i8n',
                    replacement: pathResolve('i8n') + '/',
                },
                {
                    find: '@tests',
                    replacement: pathResolve('tests') + '/',
                },
                {
                    find: /^~styles/,
                    replacement: pathResolve('src/styles') + '/',
                },
            ],
        },
        plugins: [react()],
        test: {
            include: ['./tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
            testTimeout: 30_000,
            hookTimeout: 30_000,
        },
        clearScreen: false,
        // tauri expects a fixed port, fail if that port is not available
        server: {
            port: 1420,
            strictPort: true,
            host: true,
        },
        envPrefix: ['VITE_', 'TAURI_'],
        esbuild: {
            pure: ['console.log', 'debugger'],
        },
        build: {
            // Tauri supports es2021
            target: ['es2021', 'chrome100', 'safari13'],
            // don't minify for debug builds
            minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
            // produce sourcemaps for debug builds
            sourcemap: !!process.env.TAURI_DEBUG,
            chunkSizeWarningLimit: 2000,
        },
    }
}
