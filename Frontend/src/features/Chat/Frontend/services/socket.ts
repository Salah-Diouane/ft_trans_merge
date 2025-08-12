
import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_API_URL, {
    withCredentials: true,
    autoConnect: false,
    reconnection: true,
    path: "/socket.io/",
    transports: ["websocket", "polling"],
});

export function joinGame(name: string) {
    console.log("here", name);
    socket.emit('join', name);
}

export function sendInput(keys: Record<string, boolean>) {
socket.emit('input', keys);
}

export function sendScale(scale: number) {
socket.emit('scale', scale);
}

// Listen for game state updates
export function onState(cb: (state: any) => void) {
socket.on('state', cb);
}

// Listen for the "ready" event when game is ready to start
export function onReady(cb: () => void) {
socket.on('ready', cb);
}

export default socket;

