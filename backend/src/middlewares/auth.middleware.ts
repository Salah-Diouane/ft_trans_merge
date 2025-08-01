

import { ExtendedError, Socket } from "socket.io";
import { FastifyInstance } from "fastify";
import { IncomingMessage } from "http";
import { parse as parseCookie } from "cookie";

interface AuthenticatedSocket extends Socket {
  user?: any;
}
 
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


      console.log("------>User authenticated:", decodedToken);
      next();
    } catch (error) {
      console.log("Authentication failed:", error);
      next(new Error("Authentication failed"));
    }
  };
}
