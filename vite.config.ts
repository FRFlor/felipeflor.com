import vue from "@vitejs/plugin-vue"
import path from "path"
import {defineConfig} from "vitest/config"

export default defineConfig({
    plugins: [
        vue(),
        // svgLoader()
    ],
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
