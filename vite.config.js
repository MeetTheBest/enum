import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts'

export default defineConfig({
    base: './',
    plugins: [
        dts()
    ],
    server: {
        open: true
    },
    build: {
        target: "es2015",
        lib: {
            entry: './src/index.ts',
            name: 'enum',
            fileName: (format) => `enum.${format}.js`
        }
    }
});
