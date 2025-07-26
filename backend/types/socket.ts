import { Socket } from "socket.io";

export interface AuthenticatedSocket extends Socket {
  user?: any;
}

export interface User {
  id: number;
  username: string;
  first_name: string;
  family_name: string;
  image_url: string;
  cover_url: string;
}

export interface Message {
  username: string;
  recipient: string;
  text: string;
  timestamp: string;
  blocked: boolean;
}
