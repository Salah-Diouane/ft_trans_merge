// src/socket.js
import { io } from "socket.io-client";

// Connect to backend Socket.IO server
const socket = io("http://localhost:3001");

export default socket;
