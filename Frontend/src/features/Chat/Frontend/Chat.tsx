
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
  sender: string;
  text: string;
  timestamp: string;
}

const ChatApp: FC = () => {
  // State
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const usersRef = useRef<User[]>([]);
  const [messages, setMessages] = useState<Record<number, Message[]>>({});
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showContactList, setShowContactList] = useState(window.outerWidth < 1024);

  const isMobile = window.outerWidth < 1024;

  // fetch user
  useEffect(() => {
    fetch("http://localhost:3001/user/me", {
      credentials: "include", // IMPORTANT to send cookies
    })
      .then(res => {
        if (!res.ok) throw new Error("Not authenticated");
        return res.json();
      })
      .then(data => setCurrentUser(data))
      .catch(err => console.error("Failed to fetch current user", err));
  }, []);

  
  // Keep usersRef updated with latest users state
  useEffect(() => {
    usersRef.current = users;
  }, [users]);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => setShowContactList(window.outerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Socket listeners (only once on mount)
  useEffect(() => {
    socket.emit('request:init');

    socket.on('user:list', (backendUsers: User[]) => {
      setUsers(backendUsers);
    });

    socket.on('chat:history', (history: any[]) => {
      const grouped: Record<number, Message[]> = {};
      history.forEach(({ sender, recipient, text, timestamp }) => {
        const recipientUser = usersRef.current.find(user => user.username === recipient);
        if (!recipientUser) return;
        const key = recipientUser.id;
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push({ sender, text, timestamp });
      });
      setMessages(grouped);
    });

    socket.on('chat:message', (msg: { username: string; recipient: string; text: string; timestamp: string }) => {
      const recipientUser = usersRef.current.find(user => user.username === msg.recipient);
      // console.log(msg.recipient)
      // console.log(msg.username)
      if (!recipientUser)
        return;
      const key = recipientUser.id;
      setMessages(prev => ({
        ...prev,
        [key]: [...(prev[key] || []), { sender: msg.username, text: msg.text, timestamp: msg.timestamp }],
      }));
    });

    // console.log(currentUser?.username);

    return () => {
      socket.off('user:list');
      socket.off('chat:history');
      socket.off('chat:message');
    };
  }, []);

  // Send a message
  const handleSend = () => {
    if (!input.trim() || !selectedUser) return;
    socket.emit('chat:message', {
      username: 'Salah',
      recipient: selectedUser.username,
      text: input,
      // username: currentUser?.username, // ✅ dynamic username
      // recipient: selectedUser.username,
      // text: input,
    });
    setInput('');
  };

  // Filter users by search term
  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Select a contact
  const handleUserSelect = (user: User): void => {
    setSelectedUser(user);
    if (isMobile) setShowContactList(false);
  };

  const userMessages = selectedUser?.id ? messages[selectedUser.id] || [] : [];

  // Empty state component
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

  // Main render
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
            loggedInUsername={currentUser?.username || ""}

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
              loggedInUsername={currentUser?.username || ""}
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

// #0077FF