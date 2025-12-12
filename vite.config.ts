import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    server: {
        host: true,
        watch: {
            usePolling: true,
            interval: 1000,
        },
        proxy: {
            // Маршрут, который вы хотите проксировать
            '/api': {
                target: 'http://localhost:8000/api/v1/',  // Адрес вашего бэкенда
                changeOrigin: true,  // Необходимо для корректной работы CORS
                rewrite: (p) => p.replace(/^\/api/, '')  // Удаляем префикс /api при отправке запроса на бэкенд
            },
            // Можно добавить другие маршруты по аналогии
        },
    }
})
