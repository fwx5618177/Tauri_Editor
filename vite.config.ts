/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const pathResolve = (dir: string): string => {
    return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
    // base: ''
    root: process.cwd(),
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: generateModifyVars(),
            },
        },
    },
    resolve: {
        alias: [
            // /@/xxxx => src/xxxx
            {
                find: /\/@\//,
                replacement: pathResolve('src') + '/',
            },
            // /#/xxxx => types/xxxx
            {
                find: /\/#\//,
                replacement: pathResolve('types') + '/',
            },
            {
                find: /^~/,
                replacement: '',
            },
        ],
    },
    plugins: [react()],
    test: {
        include: ['./tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        testTimeout: 30_000,
        hookTimeout: 30_000,
    },

    // Vite optons tailored for Tauri developemnt and only applied in `tauri dev` or `tauri build`
    // prevent vite from obscuring rust errors
    clearScreen: false,
    // tauri expects a fixed port, fail if that port is not available
    server: {
        port: 1420,
        strictPort: true,
        host: true,
    },
    // to make use of `TAURI_DEBUG` and other env variables
    // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
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
})
function generateModifyVars() {
    throw new Error('Function not implemented.')
}
