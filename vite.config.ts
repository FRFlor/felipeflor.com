import vue from "@vitejs/plugin-vue"
import ssr from "vite-plugin-ssr/plugin"
import {defineConfig} from "vitest/config"
import path from "path"
import checker from "vite-plugin-checker"

export default defineConfig({
    plugins: [vue(), ssr(), checker({vueTsc: true})],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },
    test: {
        globals: true,
        environment: "happy-dom"
    }
})
