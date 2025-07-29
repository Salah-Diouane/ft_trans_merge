import React, { FC, useEffect, useRef, useState } from 'react';
import socket from './services/socket';

import ContactList from './components/ContactList';
import Conversation from './components/Conversation';
import ContactList_Mobile from './components/ContactList_Mobile';

import { FiUser } from 'react-icons/fi';
import Subtract from './Assets/Subtract.svg';
import { User } from '../Frontend/types/User';

// Message type
interface Message {
  id?: string|number;
  sender: string;
  text: string;
  timestamp: string;
}

const ChatApp: FC = () => {
  // State
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

  // Add state to track if we've received both users and profile
  const [isInitialized, setIsInitialized] = useState(false);
  const pendingHistoryRef = useRef<any[]>([]);

  const isMobile = window.outerWidth < 1024;

  // Keep usersRef updated with latest users state
  useEffect(() => {
    usersRef.current = users;
    // Process pending history when users list is updated
    if (currentUserRef.current && pendingHistoryRef.current.length > 0) {
      processHistory(pendingHistoryRef.current);
    }
  }, [users]);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => setShowContactList(window.outerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const lastmsg = new Map<string, string>();

  const processHistory = (history: any[]) => {
    console.log("Processing history with current user:", currentUserRef.current);
    console.log("History data:", history);
    console.log("Users available:", usersRef.current);

    if (!currentUserRef.current || usersRef.current.length === 0) {
      console.log("Not ready to process history - storing for later");
      pendingHistoryRef.current = history;
      return;
    }

    const grouped: Record<number, Message[]> = {};
    const current = currentUserRef.current;

    history.forEach(({ id, sender, recipient, text, timestamp }) => {
      // Get the other user (not the current user)
      const otherUsername = sender === current ? recipient : sender;

      const otherUser = usersRef.current.find(user => user.username === otherUsername);
      if (!otherUser) {
        // console.warn("User not found for username:", otherUsername);
        return;
      }

      const key = otherUser.id;
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push({ id, sender, text, timestamp });

    });

    console.log("Grouped messages:", grouped);
    setMessages(grouped);
    pendingHistoryRef.current = [];
    setIsInitialized(true);

  };





  useEffect(() => {
    socket.emit('request:init');
    socket.emit('get-my-profile');

    socket.on('user:list', (backendUsers: User[]) => {
      console.log("Received users:", backendUsers);
      setUsers(backendUsers);
    });

    socket.on('chat:history', (history: any[]) => {
      console.log("Received chat history:", history);
      processHistory(history);
    });


    socket.on('chat:message', (msg: { id: string|number ,sender: string; recipient: string; text: string; timestamp: string; blocked: boolean }) => {
      console.log("------------------------> Received new message:", msg);
    
      const current = currentUserRef.current;
      if (!current) {
        console.warn("Current user not set, cannot process message");
        return;
      }
    
      const isSender = msg.sender === current;
      const otherUsername = isSender ? msg.recipient : msg.sender;
      const otherUser = usersRef.current.find(user => user.username === otherUsername);
    
      if (!otherUser) {
        console.warn("User not found in current list", msg);
        return;
      }
    
      const key = otherUser.id;
      
      // Update lastmsg for the specific user
      lastmsg.set(otherUser.username, msg.text); // Update last message map
      
      // Update messages state to trigger re-render
      setMessages(prev => ({
        ...prev,
        [key]: [...(prev[key] || []), { id: msg.id, sender: msg.sender, text: msg.text, timestamp: msg.timestamp }],
      }));
    

    });
    
    socket.on("chat:deleted", ({ id }) => {
      setMessages((prev) =>{
        const updated = { ...prev};

        for (const key in updated){
          updated[key] = updated[key].filter( ( msg ) => msg.id !== id)
        }
        return updated
      })
    })

    socket.on("profile-data", (socket_data: { user: string }) => {
      console.log("Received current user profile:", socket_data.user);
      currentUserRef.current = socket_data.user;
      setcurrentUser(socket_data.user);

      // Process pending history now that we have the profile
      if (pendingHistoryRef.current.length > 0) {
        processHistory(pendingHistoryRef.current);
      }
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
    const username = currentUser;
    console.log("Sending message as username:", username);

    if (!input.trim() || !selectedUser || !username) {
      console.warn("Cannot send message - missing input / selected user / current user");
      return;
    }

    socket.emit('chat:message', {
      username: username,
      recipient: selectedUser.username,
      text: input,
    });

    console.log("Message sent by:", username);
    setInput('');
  };

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) &&
      user.username !== currentUser
  );


  const handleUserSelect = (user: User): void => {
    setSelectedUser(user);
    if (isMobile) setShowContactList(false);
  };

  const userMessages = selectedUser?.id ? messages[selectedUser.id] || [] : [];


  const EmptyState = () => (
    <div className="flex flex-col w-full h-full rounded-2xl p-[2px] max-lg:h-full ">
      <div
        className="flex flex-col h-full justify-center items-center rounded-[inherit] bg-[#393E46] p-4"
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
  console.log("-------------> map of msgs : ")
  console.log(lastmsg)
  return (
    <div className="flex flex-row h-full w-full gap-4 p-0 overflow-hidden max-lg:pb-3 max-lg:pt-0 max-lg:p-0">
      {isMobile ? (
        showContactList ? (
          <ContactList_Mobile
            users={filteredUsers}
            messages={messages}
            selectedUser={selectedUser}
            setSelectedUser={handleUserSelect}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            
          />
        ) : (
          <Conversation
            user={selectedUser}
            messages={userMessages}
            input={input}
            setInput={setInput}
            onSend={handleSend}
            onBack={() => setShowContactList(true)}
            loggedInUsername={currentUser}
            emoji={selectedEmojis}
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
          />
          {selectedUser ? (
            <Conversation
              user={selectedUser}
              messages={userMessages}
              input={input}
              setInput={setInput}
              onSend={handleSend}
              loggedInUsername={currentUser}
              emoji={selectedEmojis}
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