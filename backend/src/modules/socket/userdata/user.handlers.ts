import { ExtendedError, Socket } from "socket.io";
import { FastifyInstance } from "fastify";
import { IncomingMessage } from "http";
import { parse as parseCookie } from "cookie";
import { Server as IOServer } from "socket.io";

interface AuthenticatedSocket extends Socket {
  user?: any;
}

interface handleUserEventsProps {
    fastify: FastifyInstance
    io: IOServer
    socket: AuthenticatedSocket
}

interface User {
    id: number;
    username: string;
    first_name: string;
    family_name: string;
    image_url: string;
    cover_url: string;
}

interface Message {
    username: string;
    recipient: string;
    text: string;
    timestamp: string;
    blocked: boolean;
}

export default function handleUserEvents({fastify, io, socket} : handleUserEventsProps){
    const db = fastify.db;
    const userData = (socket as AuthenticatedSocket).user;
    if (userData) {
        console.log("🔵 Sending immediate profile-data for:", userData?.username);
        socket.emit("profile-data", {
        user: userData?.username,
        });
    }

    socket.on("get-my-profile", () => {
        const userData = (socket as AuthenticatedSocket).user;
        console.log("Sending profile-data for:", userData?.username);

        socket.emit("profile-data", {
        user: userData?.username,
        });
    });

    socket.on("request:init", () => {

        // const userData = (socket as AuthenticatedSocket).user;
        // socket.emit("profile-data", {
        //     user: userData?.username,
        // });

        db.all("SELECT * FROM user_authentication ORDER BY id ASC", (err, user_authentication: User[]) => {

        if (!err) {
            socket.emit("user:list", user_authentication);

            db.all("SELECT * FROM messages ORDER BY timestamp ASC", (err, history: Message[]) => {
            if (!err) {
                // console.log("Sending chat history:", history.length, "messages");
                socket.emit("chat:history", history);
            }
            });
        }
        });
    });
}
