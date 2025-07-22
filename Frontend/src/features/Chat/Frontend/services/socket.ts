


import { io } from "socket.io-client";

// Connect to backend Socket.IO server
// const socket = io("http://localhost:3000");



const socket = io('http://localhost:3000', {
    withCredentials: true, // important to send cookies on polling transport
});
export default socket;


// import io from 'socket.io-client';

// // Function to get accessToken cookie (simplified)
// function getCookie(name: string) {
//   const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
//   if (match) return match[2];
//   return null;
// }

// const token = getCookie('accessToken');

// const socket = io('http://localhost:3000', {
//   auth: {
//     token,  // send token on connect
//   }
// });

// socket.on('connect_error', (err) => {
//   console.error('Connection error:', err.message);
// });

// export default socket;
