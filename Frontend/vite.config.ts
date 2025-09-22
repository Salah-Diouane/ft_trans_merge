// export default defineConfig({
  // plugins: [react()],
//   server: {
	// allowedHosts: ["localhost"],
//   }
// })

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     hmr: {
//       protocol: "wss",
//       host: "localhost",
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
})



// sdiouane60@gmail.com