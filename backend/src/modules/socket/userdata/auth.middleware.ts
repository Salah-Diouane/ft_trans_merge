
import { ExtendedError, Socket } from "socket.io";
import { FastifyInstance } from "fastify";
import { IncomingMessage } from "http";
import { parse as parseCookie } from "cookie";
import { Console } from "console";
import {AuthenticatedSocket} from "../pong/interfaces"


export default function createAuthMiddleware(fastify: FastifyInstance) {
  return async (socket: AuthenticatedSocket, next: (err?: ExtendedError) => void) => {
    try {
      const cookiesHeader = (socket.request as IncomingMessage).headers.cookie;
       
      if (!cookiesHeader) {
        throw new Error("No cookie transmitted.");
      }
       
      const parsedCookies = parseCookie(cookiesHeader);
      const token = parsedCookies.accessToken;
       
      if (!token) {
        throw new Error("No access token.");
      }
      
      const decodedToken = await fastify.jwt.verify(token);
      socket.user = decodedToken;
      socket.online = true;
        
      console.log("------>User authenticated:");
      console.log(socket?.user.userid)
      next();
    } catch (error) {
      console.log("Authentication failed:", error);
      socket.online = false; 
      next(new Error("Authentication failed"));
    }
  };
}