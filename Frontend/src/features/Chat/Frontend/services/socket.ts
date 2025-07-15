// // src/socket.js
// import { io } from "socket.io-client";

// // Connect to backend Socket.IO server
// const socket = io("http://localhost:3001");

// export default socket;


// src/socket.js
import { io } from "socket.io-client";

// ✅ Connect to backend running on port 3000
const socket = io("http://localhost:3001", {
  withCredentials: true, // Important if backend uses cookies or auth
});

export default socket;
