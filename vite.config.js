import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
    base: './',
    plugins: [
        vue(),
        dts(),
        Components({
            resolvers: [
                AntDesignVueResolver({
                    importStyle: false, // css in js
                }),
            ],
        }),
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
