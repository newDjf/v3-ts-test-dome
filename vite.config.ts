import {resolve} from 'path'
import {defineConfig} from "vite"
import vue from '@vitejs/plugin-vue'

// 配置element-plus 自动导入
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers:[ElementPlusResolver()],
        }),
        Components({
            resolvers:[ElementPlusResolver()]
        })
    ],
    resolve: {
        alias: {
            '@':resolve(__dirname,"./src")
        }
    }
})
