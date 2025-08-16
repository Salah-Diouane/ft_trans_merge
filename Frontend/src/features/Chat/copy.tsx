// // import React, { FC, useEffect, useRef, useState } from 'react';
// // import socket from './services/socket';

// // import ContactList from './components/ContactList';
// // import Conversation from './components/Conversation';
// // import ContactList_Mobile from './components/ContactList_Mobile';

// // import { FiUser } from 'react-icons/fi';
// // import Subtract from './Assets/Subtract.svg';
// // import { User } from './types/User';

// // interface Message {
// //   id?: string | number;
// //   sender: string;
// //   recipient: string;
// //   text: string;
// //   timestamp: string;
// // }

// // const ChatApp: FC = () => {

// //   const [users, setUsers] = useState<User[]>([]);
// //   const usersRef = useRef<User[]>([]);
// //   const [messages, setMessages] = useState<Record<number, Message[]>>({});
// //   const [selectedUser, setSelectedUser] = useState<User | null>(null);
// //   const [input, setInput] = useState<string>('');
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [showContactList, setShowContactList] = useState(window.outerWidth < 1024);
// //   const [currentUser, setcurrentUser] = useState<string>("")
// //   const currentUserRef = useRef<string>("");

// //   const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);
// //   const [unreadCounts, setUnreadCounts] = useState<Record<number, number>>({});
// //   const selectedUserRef = useRef<User | null>(null);


// //   const [isInitialized, setIsInitialized] = useState(false);
// //   const [history, setHistory] = useState<Record<number, Message[]>>({})
// //   const pendingHistoryRef = useRef<any[]>([]);
// //   const requestedHistoryRef = useRef<Set<string>>(new Set());

// //   const isMobile = window.outerWidth < 1024;

// //   useEffect(()=>{
// //     selectedUserRef.current = selectedUser;
// //   }, [selectedUser])

// //   useEffect(() => {
// //     if (!socket.connected) {
// //       socket.connect();
// //     }
// //   }, []);

// //   // Request history for all users when we have both users list and current user
// //   useEffect(() => {
// //     if (!currentUserRef.current || users.length === 0) return;

// //     users.forEach(user => {
// //       if (!requestedHistoryRef.current.has(user.username)) {
// //         requestedHistoryRef.current.add(user.username);
// //         socket.emit('request:history', {
// //           username: currentUserRef.current,
// //           recipient: user.username,
// //         });
// //       }
// //     });
// //   }, [users, currentUser]);

// //   // useEffect(() => {
// //   //   usersRef.current = users;

// //   //   if (currentUserRef.current && pendingHistoryRef.current.length > 0) {
// //   //     // processHistory(pendingHistoryRef.current);
// //   //   }
// //   // }, [users]);

// //   // Handle screen resize
// //   useEffect(() => {
// //     const handleResize = () => setShowContactList(window.outerWidth < 1024);
// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   const lastmsg = new Map<string, string>();


// //   useEffect(() => {
// //     socket.emit('request:init');
// //     socket.emit('get-my-profile');

// //     socket.on('user:list', (backendUsers: User[]) => {
// //       console.log("Received users:", backendUsers);
// //       setUsers(backendUsers);
// //     });

// //     socket.on('chat:history', (history: Message[]) => {
// //       if (history.length === 0) return;


// //       const contactUsername = history[0].sender === currentUserRef.current ? history[0].recipient : history[0].sender;
// //       const contact = usersRef.current.find(u => u.username === contactUsername);

// //       if (!contact) {
// //         console.warn("Contact not found for received history", contactUsername);
// //         return;
// //       }

// //       setMessages(prev => ({
// //         ...prev,
// //         [contact.id]: history,
// //       }));
// //     });

// //     socket.on('chat:message', (msg: { id: string | number, sender: string; recipient: string; text: string; timestamp: string; blocked: boolean }) => {
// //       if (!currentUserRef.current) {
// //         console.warn("Current user not set, cannot process message");
// //         return;
// //       }
    
// //       const isSender = msg.sender === currentUserRef.current;
      
// //       // Skip processing if this is a message sent by current user (already added optimistically)
// //       if (isSender) {
// //         return;
// //       }
      
// //       const otherUsername = msg.sender; // Since we know it's not from current user, sender is the other user
// //       const otherUser = usersRef.current.find(user => user.username === otherUsername);
    
// //       if (!otherUser) {
// //         console.warn("User not found in current list", msg);
// //         return;
// //       }
    
// //       const key = otherUser.id;
// //       lastmsg.set(otherUser.username, msg.text); 

// //       setMessages(prev => ({
// //         ...prev,
// //         [key]: [...(prev[key] || []), { id: msg.id, sender: msg.sender, recipient: msg.recipient, text: msg.text, timestamp: msg.timestamp }],
// //       }));

// //       const isSelectedUser = selectedUserRef.current?.username === otherUsername;

// //       if (!isSelectedUser) {
// //         setUnreadCounts(prev => ({ ...prev, [key]: (prev[key] || 0) + 1 }));
// //       }
// //     });
    
// //     socket.on("chat:deleted", ({ id }) => {
// //       setMessages((prev) =>{
// //         const updated = { ...prev};
// //         for (const key in updated){
// //           updated[key] = updated[key].filter( ( msg ) => msg.id !== id)
// //         }
// //         return updated
// //       })
// //     })

// //     socket.on("profile-data", (socket_data: { user: string }) => {
// //       console.log("Received current user profile:", socket_data.user);
// //       currentUserRef.current = socket_data.user;
// //       setcurrentUser(socket_data.user);
// //       socket.emit("profile-data", socket_data); 
// //     });

// //     return () => {
// //       socket.off('user:list');
// //       socket.off('chat:history');
// //       socket.off('chat:message');
// //       socket.off("profile-data");
// //       socket.off("chat:deleted");
// //     };
// //   }, []);

// //   const handleSend = () => {
// //     const username = currentUserRef.current;
    
// //     if (!input.trim() || !selectedUser || !username) {
// //       console.log("error one of this is empty !!")
// //       return;
// //     }

// //     // Create the message object for optimistic UI update
// //     const newMessage = {
// //       id: Date.now(), // temporary ID
// //       sender: username,
// //       recipient: selectedUser.username,
// //       text: input,
// //       timestamp: new Date().toISOString(),
// //     };

// //     // Add message to local state immediately (optimistic update)
// //     setMessages(prev => ({
// //       ...prev,
// //       [selectedUser.id]: [...(prev[selectedUser.id] || []), newMessage],
// //     }));

// //     socket.emit('chat:message', {
// //       username: username,
// //       recipient: selectedUser?.username,
// //       text: input,
// //     });

// //     setInput('');
// //   };

// //   const filteredUsers = users.filter(
// //     (user) =>
// //       user.username.toLowerCase().includes(searchTerm.toLowerCase()) &&
// //       user.username !== currentUser
// //   );
             

// //   const handleUserSelect = (user: User): void => {
// //     setSelectedUser(user);
// //     if (isMobile)
// //       setShowContactList(false);
// //     setUnreadCounts(prev => ({ ...prev, [user.id]: 0 }));
// //     // History is already loaded for all users, no need to request again
// //   };

// //   const userMessages = selectedUser?.id ? messages[selectedUser.id] || [] : [];


// //   const EmptyState = () => (
// //     <div className="flex flex-col w-full h-full rounded-2xl p-[2px] max-lg:h-full ">
// //       <div
// //         className="flex flex-col h-full justify-center items-center rounded-[inherit]  p-4"
// //         style={{ backgroundImage: `url(${Subtract})` }}
// //       >
// //         <FiUser className="h-20 w-20 mb-6 text-[#0077FF] animate-pulse" />
// //         <p className="text-2xl font-bold text-[#0077FF] tracking-wide mb-2">Select a Contact</p>
// //         <p className="mt-1 text-center max-w-xs leading-relaxed text-[#0077FF]">
// //           Please choose a contact from the list to start chatting.
// //         </p>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div className="flex flex-row h-full w-full gap-4 p-0 overflow-hidden  max-lg:p-0 bg-[#121418] rounded-lg max-lg:bg-[#121418] max-lg:pb-0 ">
// //       {isMobile ? (
// //         showContactList ? (
// //           <ContactList_Mobile
// //             users={filteredUsers}
// //             messages={messages}
// //             selectedUser={selectedUser}
// //             setSelectedUser={handleUserSelect}
// //             searchTerm={searchTerm}
// //             setSearchTerm={setSearchTerm}
// //             unreadCounts={unreadCounts}
            
// //             />
// //           ) : (
// //           <Conversation
// //             user={selectedUser}
// //             messages={userMessages}
// //             history={history}
// //             input={input}
// //             setInput={setInput}
// //             onSend={handleSend}
// //             onBack={() => setShowContactList(true)}
// //             loggedInUsername={currentUserRef.current}
// //             />
// //           )
// //         ) : (
// //           <>
// //           <ContactList
// //             users={filteredUsers}
// //             messages={messages}
// //             selectedUser={selectedUser}
// //             setSelectedUser={handleUserSelect}
// //             searchTerm={searchTerm}
// //             setSearchTerm={setSearchTerm}
// //             unreadCounts={unreadCounts}
// //           />
// //           {selectedUser ? (
// //             <Conversation
// //               user={selectedUser}
// //               messages={userMessages}
// //               history={history}
// //               input={input}
// //               setInput={setInput}
// //               onSend={handleSend}
// //               loggedInUsername={currentUserRef.current}
// //             />
// //           ) : (
// //             <EmptyState />
// //           )}
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default ChatApp;




// import React, { FC, useEffect, useRef, useState } from 'react';
// import socket from './services/socket';

// import ContactList from './components/ContactList';
// import Conversation from './components/Conversation';
// import ContactList_Mobile from './components/ContactList_Mobile';

// import { FiUser } from 'react-icons/fi';
// import Subtract from './Assets/Subtract.svg';
// import { User } from './types/User';

// interface Message {
//   id?: string | number;
//   sender: string;
//   recipient: string;
//   text: string;
//   timestamp: string;
// }

// const ChatApp: FC = () => {

//   const [users, setUsers] = useState<User[]>([]);
//   const usersRef = useRef<User[]>([]);
//   const [messages, setMessages] = useState<Record<number, Message[]>>({});
//   const [selectedUser, setSelectedUser] = useState<User | null>(null);
//   const [input, setInput] = useState<string>('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showContactList, setShowContactList] = useState(window.outerWidth < 1024);
//   const [currentUser, setcurrentUser] = useState<string>("")
//   const currentUserRef = useRef<string>("");

//   const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);
//   const [unreadCounts, setUnreadCounts] = useState<Record<number, number>>({});
//   const selectedUserRef = useRef<User | null>(null);


//   const [isInitialized, setIsInitialized] = useState(false);
//   const [history, setHistory] = useState<Record<number, Message[]>>({})
//   const pendingHistoryRef = useRef<any[]>([]);
//   const requestedHistoryRef = useRef<Set<string>>(new Set());

//   const isMobile = window.outerWidth < 1024;

//   useEffect(()=>{
//     selectedUserRef.current = selectedUser;
//   }, [selectedUser])

//   useEffect(() => {
//     if (!socket.connected) {
//       socket.connect();
//     }
//   }, []);

//   // Request history for all users when we have both users list and current user
//   useEffect(() => {
//     if (!currentUserRef.current || users.length === 0) return;

//     users.forEach(user => {
//       if (!requestedHistoryRef.current.has(user.username)) {
//         requestedHistoryRef.current.add(user.username);
//         socket.emit('request:history', {
//           username: currentUserRef.current,
//           recipient: user.username,
//         });
//       }
//     });
//   }, [users, currentUser]);

//   useEffect(() => {
//     usersRef.current = users;

//     if (currentUserRef.current && pendingHistoryRef.current.length > 0) {
//       // processHistory(pendingHistoryRef.current);
//     }
//   }, [users]);

//   // Handle screen resize
//   useEffect(() => {
//     const handleResize = () => setShowContactList(window.outerWidth < 1024);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const lastmsg = new Map<string, string>();


//   useEffect(() => {
//     socket.emit('request:init');
//     socket.emit('get-my-profile');

//     socket.on('user:list', (backendUsers: User[]) => {
//       console.log("Received users:", backendUsers);
//       setUsers(backendUsers);
//     });

//     socket.on('chat:history', (history: Message[]) => {
//       if (history.length === 0) return;

//       // Find the contact corresponding to this history
//       const contactUsername =
//         history[0].sender === currentUserRef.current ? history[0].recipient : history[0].sender;
//       const contact = usersRef.current.find(u => u.username === contactUsername);

//       if (!contact) {
//         console.warn("Contact not found for received history", contactUsername);
//         return;
//       }

//       setMessages(prev => ({
//         ...prev,
//         [contact.id]: history,
//       }));
//     });

//     socket.on('chat:message', (msg: { id: string | number, sender: string; recipient: string; text: string; timestamp: string; blocked: boolean }) => {
//       if (!currentUserRef.current) {
//         console.warn("Current user not set, cannot process message");
//         return;
//       }
    
//       const isSender = msg.sender === currentUserRef.current;
      
//       // Skip processing if this is a message sent by current user (already added optimistically)
//       if (isSender) {
//         return;
//       }
      
//       const otherUsername = msg.sender; // Since we know it's not from current user, sender is the other user
//       const otherUser = usersRef.current.find(user => user.username === otherUsername);
    
//       if (!otherUser) {
//         console.warn("User not found in current list", msg);
//         return;
//       }
    
//       const key = otherUser.id;
//       lastmsg.set(otherUser.username, msg.text); 

//       setMessages(prev => ({
//         ...prev,
//         [key]: [...(prev[key] || []), { id: msg.id, sender: msg.sender, recipient: msg.recipient, text: msg.text, timestamp: msg.timestamp }],
//       }));

//       const isSelectedUser = selectedUserRef.current?.username === otherUsername;

//       if (!isSelectedUser) {
//         setUnreadCounts(prev => ({ ...prev, [key]: (prev[key] || 0) + 1 }));
//       }
//     });
    
//     socket.on("chat:deleted", ({ id }) => {
//       setMessages((prev) =>{
//         const updated = { ...prev};
//         for (const key in updated){
//           updated[key] = updated[key].filter( ( msg ) => msg.id !== id)
//         }
//         return updated
//       })
//     })

//     socket.on("profile-data", (socket_data: { user: string }) => {
//       console.log("Received current user profile:", socket_data.user);
//       currentUserRef.current = socket_data.user;
//       setcurrentUser(socket_data.user);
//       socket.emit("profile-data", socket_data); 
//     });

//     return () => {
//       socket.off('user:list');
//       socket.off('chat:history');
//       socket.off('chat:message');
//       socket.off("profile-data");
//       socket.off("chat:deleted");
//     };
//   }, []);

//   const handleSend = () => {
//     const username = currentUserRef.current;
    
//     if (!input.trim() || !selectedUser || !username) {
//       console.log("error one of this is empty !!")
//       return;
//     }

//     // Create the message object for optimistic UI update
//     const newMessage = {
//       id: Date.now(), // temporary ID
//       sender: username,
//       recipient: selectedUser.username,
//       text: input,
//       timestamp: new Date().toISOString(),
//     };

//     // Add message to local state immediately (optimistic update)
//     setMessages(prev => ({
//       ...prev,
//       [selectedUser.id]: [...(prev[selectedUser.id] || []), newMessage],
//     }));

//     socket.emit('chat:message', {
//       username: username,
//       recipient: selectedUser?.username,
//       text: input,
//     });

//     setInput('');
//   };

//   const filteredUsers = users.filter(
//     (user) =>
//       user.username.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       user.username !== currentUser
//   );


//   const handleUserSelect = (user: User): void => {
//     setSelectedUser(user);
//     if (isMobile)
//       setShowContactList(false);
//     setUnreadCounts(prev => ({ ...prev, [user.id]: 0 }));
//     // History is already loaded for all users, no need to request again
//   };

//   const userMessages = selectedUser?.id ? messages[selectedUser.id] || [] : [];


//   const EmptyState = () => (
//     <div className="flex flex-col w-full h-full rounded-2xl p-[2px] max-lg:h-full ">
//       <div
//         className="flex flex-col h-full justify-center items-center rounded-[inherit]  p-4"
//         style={{ backgroundImage: `url(${Subtract})` }}
//       >
//         <FiUser className="h-20 w-20 mb-6 text-[#0077FF] animate-pulse" />
//         <p className="text-2xl font-bold text-[#0077FF] tracking-wide mb-2">Select a Contact</p>
//         <p className="mt-1 text-center max-w-xs leading-relaxed text-[#0077FF]">
//           Please choose a contact from the list to start chatting.
//         </p>
//       </div>
//     </div>
//   );
//   return (
//     <div className="flex flex-row h-full w-full gap-4 p-0 overflow-hidden  max-lg:p-0 bg-[#121418] rounded-lg max-lg:bg-[#121418] max-lg:pb-0 ">
//       {isMobile ? (
//         showContactList ? (
//           <ContactList_Mobile
//             users={filteredUsers}
//             messages={messages}
//             selectedUser={selectedUser}
//             setSelectedUser={handleUserSelect}
//             searchTerm={searchTerm}
//             setSearchTerm={setSearchTerm}
//             unreadCounts={unreadCounts}
            
//             />
//           ) : (
//           <Conversation
//             user={selectedUser}
//             messages={userMessages}
//             history={history}
//             input={input}
//             setInput={setInput}
//             onSend={handleSend}
//             onBack={() => setShowContactList(true)}
//             loggedInUsername={currentUserRef.current}
//             />
//           )
//         ) : (
//           <>
//           <ContactList
//             users={filteredUsers}
//             messages={messages}
//             selectedUser={selectedUser}
//             setSelectedUser={handleUserSelect}
//             searchTerm={searchTerm}
//             setSearchTerm={setSearchTerm}
//             unreadCounts={unreadCounts}
//           />
//           {selectedUser ? (
//             <Conversation
//               user={selectedUser}
//               messages={userMessages}
//               history={history}
//               input={input}
//               setInput={setInput}
//               onSend={handleSend}
//               loggedInUsername={currentUserRef.current}
//             />
//           ) : (
//             <EmptyState />
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default ChatApp;


























import React, { FC, useEffect, useRef, useState } from 'react';
import socket from './services/socket';

import ContactList from './components/ContactList';
import Conversation from './components/Conversation';
import ContactList_Mobile from './components/ContactList_Mobile';

import { FiUser } from 'react-icons/fi';
import Subtract from './Assets/Subtract.svg';
import { User } from './types/User';

interface Message {
  id?: string | number;
  sender: string;
  recipient: string;
  text: string;
  timestamp: string;
}

const ChatApp: FC = () => {

  const [users, setUsers] = useState<User[]>([]);
  const usersRef = useRef<User[]>([]);
  const [messages, setMessages] = useState<Record<number, Message[]>>({});
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [input, setInput] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showContactList, setShowContactList] = useState(window.outerWidth < 1024);
  const [currentUser, setcurrentUser] = useState<string>("")
  const currentUserRef = useRef<string>("");

  const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);
  const [unreadCounts, setUnreadCounts] = useState<Record<number, number>>({});
  const selectedUserRef = useRef<User | null>(null);


  const [isInitialized, setIsInitialized] = useState(false);
  const [history, setHistory] = useState<Record<number, Message[]>>({})
  const pendingHistoryRef = useRef<any[]>([]);
  const requestedHistoryRef = useRef<Set<string>>(new Set());

  const isMobile = window.outerWidth < 1024;

  useEffect(() => {
    selectedUserRef.current = selectedUser;
  }, [selectedUser])

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }
  }, []);

  useEffect(() => {
    if (!currentUserRef.current || users.length === 0) return;

    users.forEach(user => {
      if (!requestedHistoryRef.current.has(user.username)) {
        requestedHistoryRef.current.add(user.username);
        socket.emit('request:history', {
          username: currentUserRef.current,
          recipient: user.username,
        });
      }
    });
  }, [users, currentUser]);

  const lastmsg = new Map<string, string>();


  useEffect(() => {
    socket.emit('request:init');
    socket.emit('get-my-profile');

    socket.on('user:list', (backendUsers: User[]) => {
      console.log("Received users:", backendUsers);
      setUsers(backendUsers);
    });

    socket.on('chat:history', (history: Message[]) => {
      if (history.length === 0) return;

      const contactUsername = history[0].sender === currentUserRef.current ? history[0].recipient : history[0].sender;
      const contact = usersRef.current.find(u => u.username === contactUsername);

      if (!contact) {
        console.warn("Contact not found for received history", contactUsername);
        return;
      }

      setMessages(prev => ({
        ...prev,
        [contact.id]: history,
      }));
    });

    socket.on('chat:message', (msg: { id: string | number, sender: string; recipient: string; text: string; timestamp: string; blocked: boolean }) => {
      if (!currentUserRef.current) {
        console.warn("Current user not set, cannot process message");
        return;
      }

      const isSender = msg.sender === currentUserRef.current;

      if (isSender) {
        return;
      }

      const otherUsername = msg.sender;
      const otherUser = usersRef.current.find(user => user.username === otherUsername);

      if (!otherUser) {
        console.warn("User not found in current list", msg);
        return;
      }

      const key = otherUser.id;
      lastmsg.set(otherUser.username, msg.text);

      setMessages(prev => ({
        ...prev,
        [key]: [...(prev[key] || []), { id: msg.id, sender: msg.sender, recipient: msg.recipient, text: msg.text, timestamp: msg.timestamp }],
      }));

      const isSelectedUser = selectedUserRef.current?.username === otherUsername;

      if (!isSelectedUser) {
        setUnreadCounts(prev => ({ ...prev, [key]: (prev[key] || 0) + 1 }));
      }
    });

    socket.on("chat:deleted", ({ id }) => {
      setMessages((prev) => {
        const updated = { ...prev };
        for (const key in updated) {
          updated[key] = updated[key].filter((msg) => msg.id !== id)
        }
        return updated
      })
    })

    socket.on("profile-data", (socket_data: { user: string }) => {
      console.log("Received current user profile:", socket_data.user);
      currentUserRef.current = socket_data.user;
      setcurrentUser(socket_data.user);
      socket.emit("profile-data", socket_data);
    });

    return () => {
      socket.off('user:list');
      socket.off('chat:history');
      socket.off('chat:message');
      socket.off("profile-data");
      socket.off("chat:deleted");
    };
  }, []);

  const handleSend = () => {
    const username = currentUserRef.current;

    if (!input.trim() || !selectedUser || !username) {
      console.log("error one of this is empty !!")
      return;
    }

    const newMessage = {
      id: Date.now(),
      sender: username,
      recipient: selectedUser.username,
      text: input,
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => ({
      ...prev,
      [selectedUser.id]: [...(prev[selectedUser.id] || []), newMessage],
    }));

    socket.emit('chat:message', {
      username: username,
      recipient: selectedUser?.username,
      text: input,
    });

    setInput('');
  };

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) &&
      user.username !== currentUser
  );


  const handleUserSelect = (user: User): void => {
    setSelectedUser(user);
    if (isMobile)
      setShowContactList(false);
    setUnreadCounts(prev => ({ ...prev, [user.id]: 0 }));
  };

  const userMessages = selectedUser?.id ? messages[selectedUser.id] || [] : [];


  const EmptyState = () => (
    <div className="flex flex-col w-full h-full rounded-2xl p-[2px] max-lg:h-full ">
      <div
        className="flex flex-col h-full justify-center items-center rounded-[inherit]  p-4"
        style={{ backgroundImage: `url(${Subtract})` }}
      >
        <FiUser className="h-20 w-20 mb-6 text-[#0077FF] animate-pulse" />
        <p className="text-2xl font-bold text-[#0077FF] tracking-wide mb-2">Select a Contact</p>
        <p className="mt-1 text-center max-w-xs leading-relaxed text-[#0077FF]">
          Please choose a contact from the list to start chatting.
        </p>
      </div>
    </div>
  );
  
  return (
    <div className="flex flex-row h-full w-full gap-4 p-0 overflow-hidden  max-lg:p-0 bg-[#121418] rounded-lg max-lg:bg-[#121418] max-lg:pb-0 ">
      {isMobile ? (
        showContactList ? (
          <ContactList_Mobile
            users={filteredUsers}
            messages={messages}
            selectedUser={selectedUser}
            setSelectedUser={handleUserSelect}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            unreadCounts={unreadCounts}

          />
        ) : (
          <Conversation
            user={selectedUser}
            messages={userMessages}
            history={history}
            input={input}
            setInput={setInput}
            onSend={handleSend}
            onBack={() => setShowContactList(true)}
            loggedInUsername={currentUserRef.current}
          />
        )
      ) : (
        <>
          <ContactList
            users={filteredUsers}
            messages={messages}
            selectedUser={selectedUser}
            setSelectedUser={handleUserSelect}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            unreadCounts={unreadCounts}
          />
          {selectedUser ? (
            <Conversation
              user={selectedUser}
              messages={userMessages}
              history={history}
              input={input}
              setInput={setInput}
              onSend={handleSend}
              loggedInUsername={currentUserRef.current}
            />
          ) : (
            <EmptyState />
          )}
        </>
      )}
    </div>
  );
};

export default ChatApp;