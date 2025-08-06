
// import { io } from "socket.io-client";

// const socket = io('https://localhost/api', {
//     path: "/socket.io/",
//     withCredentials: true,
//     // autoConnect: false,
// });

// export default socket;



// In your frontend code (React)
import { io } from "socket.io-client";

// Connect to Nginx on port 443 (HTTPS)
const socket = io('https://localhost', {
  // The path must match your Nginx configuration
  path: "/socket.io/",
  transports: ["websocket", "polling"],
  // This is still needed to send cookies
  withCredentials: true
});

export default socket;