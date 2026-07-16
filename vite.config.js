// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative base so the built site works on GitHub Pages (project/site subpath)
  base: './',
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // ይህ ለውጦችን በየሰከንዱ እንዲፈልግ ያደርገዋል
    },
  },
})