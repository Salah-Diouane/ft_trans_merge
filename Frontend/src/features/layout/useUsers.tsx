// import { useEffect, useRef, useState } from "react";
// import socket from "../Chat/services/socket";
// import { User } from "../Chat/types/User";

// export const useUsers = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [currentUser, setCurrentUser] = useState("");
//   const usersRef = useRef<User[]>([]);
//   const currentUserRef = useRef("");

//   useEffect(() => {
//     socket.emit("get-my-profile");
    
//     socket.on("user:list", (backendUsers: User[]) => {
//       setUsers(backendUsers);
//       usersRef.current = backendUsers;
//     });
    
//     socket.on( "profile-data", (socketData: { username: string; id: number; online: boolean }) => {
//         currentUserRef.current = socketData.id.toString();
//         setCurrentUser(socketData.username);
//         socket.emit("profile-data", socketData);
//         socket.emit("request:init");
//       }
//     );

//     return () => {
//       socket.off("user:list");
//       socket.off("profile-data");
//     };
//   }, []);

//   return { users, currentUser, usersRef, currentUserRef };
// };

// export default useUsers;


import { useEffect, useRef, useState } from "react";
import socket from "../Chat/services/socket";
import { User } from "../Chat/types/User";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState("");
  const usersRef = useRef<User[]>([]);
  const currentUserRef = useRef("");


  useEffect(() => {
    socket.emit("get-my-profile");

    socket.on("profile-data", (socketData) => {
      currentUserRef.current = socketData.id.toString();
      setCurrentUser(socketData.username);
      socket.emit("request:init"); 
    });

    socket.on("user:list", (backendUsers) => {
      setUsers(backendUsers);
      usersRef.current = backendUsers;
    });

    return () => {
      socket.off("user:list");
      socket.off("profile-data");
    };
  }, []);

  // re-request user list when socket reconnects
  useEffect(() => {
    const handleReconnect = () => {
      if (currentUserRef.current) {
        socket.emit("request:init");
      }
    };

    socket.on("connect", handleReconnect);
    return () =>{
      socket.off("connect", handleReconnect);
    }
  }, []);

  return { users, currentUser, usersRef, currentUserRef };
};

export default useUsers;
