// export default defineConfig({
  // plugins: [react()],
//   server: {
	// allowedHosts: ["e3r5p8.1337.ma"],
//   }
// })

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     hmr: {
//       protocol: "wss",
//       host: "e3r5p8.1337.ma",
//       port: 443,
//     },
//     watch: {
//       usePolling: true,
//     },
//   },
// });

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["e3r5p8.1337.ma"],
  }
})



// sdiouane60@gmail.com