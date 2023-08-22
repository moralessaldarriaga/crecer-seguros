import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/crecer-seguros/',
    build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            registro: resolve(__dirname, 'registro.html'),
            dashboard: resolve(__dirname, 'dashboard.html'),
            dashboard_tramite: resolve(__dirname, 'dashboard-tramite.html'),
            dashboard_datos: resolve(__dirname, 'dashboard-datos.html'),
            dashboard_registro: resolve(__dirname, 'dashboard-registro.html'),
            // Puntos de entrada para los archivos JavaScript
            // jquery: 'src/jquery.js',
            // index: 'src/index.js',
          },
        }
    },
});
// import sassPlugin from 'vite-plugin-sass'
