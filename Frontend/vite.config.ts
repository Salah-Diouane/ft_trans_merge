// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     allowedHosts: ["e3r7p17.1337.ma"],
//   }
// })



// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",   // allow access from outside localhost
    port: 5173,
    hmr: {
      protocol: "wss",
      host: "e3r7p17.1337.ma",
      clientPort: 443, // because you're on HTTPS
    },
  },
});



// sdiouane60@gmail.com