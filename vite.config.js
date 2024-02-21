// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: '/react-portfolio-andrea-melisa',
//   build: {
//     outDir: 'build'
//   },
//   plugins: [react()],
// })

// import {defineConfig} from 'vite';
// import react from '@vitejs/plugin-react';

// // // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react()],
//     server: {
//         port: 3000,
//         open: true,
//     },
// });

// vite.config.js
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// export default defineConfig(({command}) => {
//     const config = {
//         plugins: [react()],
//         base: '/',
//     };

//     if (command !== 'serve') {
//         config.base = '/example_one/';
//     }

//     return config;
// });

// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",

export default defineConfig({
    plugins: [react()],
    base: '/',
});
