
import React, { FC, useEffect, useRef, useState } from "react";
import socket from "./services/socket";

import ContactList from "./components/ContactList";
import ContactList_Mobile from "./components/ContactList_Mobile";
import Conversation from "./components/Conversation";

import Subtract from "../Assets/Subtract.svg";
import gf from "./Assets/gf4.gif";

import { User } from "./types/User";

interface Message {
  id?: string | number;
  recipientId: number;
  senderId: number;
  text: string;
  timestamp: string;
}

const ChatApp: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [messages, setMessages] = useState<Record<number, Message[]>>({});
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [block, setBlock] = useState<Record<number, string>>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [showContactList, setShowContactList] = useState(window.outerWidth < 1024);
  const [currentUser, setCurrentUser] = useState<Partial<User> | null>(null);
  const [unreadCounts, setUnreadCounts] = useState<Record<number, number>>({});

  const usersRef = useRef<User[]>([]);
  const currentUserRef = useRef<number | null>(null);
  const selectedUserRef = useRef<User | null>(null);
  const requestedHistoryRef = useRef<Set<number>>(new Set());
  const isMobile = window.outerWidth < 1024;

  // Keep refs in sync
  useEffect(() => { selectedUserRef.current = selectedUser; }, [selectedUser]);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => setShowContactList(window.outerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Connect socket
  useEffect(() => {
    if (!socket.connected)
      socket.connect();
  }, []);

  // Socket events
  useEffect(() => {
    socket.emit("request:init");
    socket.emit("get-my-profile");

    // const myAllfriends = async () => {
    //   const res = await fetch("http://e3r10p18.1337.ma:3000/friends/allfriends", { credentials: "include" });
    //   const data = await res.json();
    //   console.log("all friends : ", data)
    //   setUsers(data);
    // };
    // myAllfriends();
    
    socket.on("user:list", (backendUsers: User[]) => {
      setUsers(backendUsers);
      usersRef.current = backendUsers;
    });

    socket.on("profile-data", (data: { id: number; username: string; online: boolean }) => {
      console.log("-->data.id")
      console.log(data.id)
      currentUserRef.current = data.id;
      setCurrentUser({ id: data.id, username: data.username, online: data.online });
    });

    socket.on("chat:history", (history: Message[]) => {
      if (!history.length)
        return;

      const contactId = history[0].senderId === currentUserRef.current
        ? history[0].recipientId
        : history[0].senderId;

      const contact = usersRef.current.find((u) => u.id === contactId);
      if (!contact) 
        return;

      setMessages((prev) => ({ ...prev, [contact.id]: history }));
    });

    socket.on("chat:message", (msg: Message & { blocked?: boolean }) => {
      if (!currentUserRef.current)
        return;

      // Fix: Determine the other user correctly
      const otherUserId = msg.senderId === currentUserRef.current ? msg.recipientId : msg.senderId;

      const otherUser = usersRef.current.find((u) => u.id === otherUserId);

      if (!otherUser)
        return;

      const newMsg = {
        id: msg.id,
        senderId: msg.senderId,
        recipientId: msg.recipientId,
        text: msg.text,
        timestamp: msg.timestamp,
      };

      console.log("Adding message to conversation with user:", otherUser.id);
      
      setMessages((prev) => ({
        ...prev,
        [otherUser.id]: [...(prev[otherUser.id] || []), newMsg],
      }));

      // Update unread counts only if message is from another user and they're not currently selected
      if (msg.senderId !== currentUserRef.current && selectedUserRef.current?.id !== msg.senderId) {
        setUnreadCounts((prev) => ({
          ...prev,
          [otherUser.id]: (prev[otherUser.id] || 0) + 1,
        }));
      }
    });

    socket.on("chat:deleted", ({ id }: { id: number | string }) => {
      setMessages((prev) => {
        const updated = { ...prev };
        for (const key in updated) {
          updated[key] = updated[key].filter((msg) => msg.id !== id);
        }
        return updated;
      });
    });

    socket.on("user:status", ({ id, online }: { id: number; online: boolean }) => {
      setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, online } : u)));
    });

    return () => {
      socket.off("user:list");
      socket.off("profile-data");
      socket.off("chat:history");
      socket.off("chat:message");
      socket.off("chat:deleted");
      socket.off("user:status");
    };
  }, []);

  // Request chat history once per user
  useEffect(() => {
    if (!currentUserRef.current || users.length === 0) return;

    users.forEach((user) => {
      if (!requestedHistoryRef.current.has(user.id)) {
          requestedHistoryRef.current.add(user.id);
          socket.emit("request:history", {
              senderId: currentUser?.id,
              recipientId: user.id,
          });
      }
  });
  
  }, [users]); 

  const handleSend = () => {
    console.log("111111111")
    console.log("selectedUser?.id ")
    console.log(selectedUser?.id )
    console.log("currentUserRef.current")
    console.log(currentUserRef.current)

    if (!selectedUser?.id || !currentUserRef.current)
      return;

    const text = inputs[selectedUser.id] || "";
    if (!text.trim())
      return;

    socket.emit("chat:message", {
      senderId: currentUser?.id,
      recipientId: selectedUser.id,
      text,
    });
  
    setInputs((prev) => ({ ...prev, [selectedUser.id]: "" }));
  };

  const getCurrentInput = () => (selectedUser?.id ? inputs[selectedUser.id] || "" : "");

  const setCurrentInput = (value: string) => {
    if (selectedUser?.id)
      setInputs((prev) => ({ ...prev, [selectedUser.id]: value }));
  };

  const getCurrentBlockUser = () => (selectedUser?.id ? inputs[selectedUser.id] || "" : "");

  const setCurrentBlockUser = (value: string) => {
    if (selectedUser?.id)
      setInputs((prev) => ({ ...prev, [selectedUser.id]: value }));
  };

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    if (isMobile) setShowContactList(false);
    setUnreadCounts((prev) => ({ ...prev, [user.id]: 0 }));
  };

  const filteredUsers = users.filter(
    (u) => u.username.toLowerCase().includes(searchTerm.toLowerCase())
      && u.id !== currentUserRef.current
  );

  const userMessages = selectedUser?.id ? messages[selectedUser.id] || [] : [];

  const EmptyState = () => (
    <div className="flex flex-col w-full h-full rounded-2xl p-[2px] max-lg:h-full">
      <div className="flex flex-col h-full justify-center items-center rounded-[inherit] space-y-6 p-4"
           style={{ backgroundImage: `url(${Subtract})` }}>
        <img src={gf} className="h-36 rounded-2xl shadow-2xl" />
        <div className="text-center space-y-4 max-w-md">
          <h2 className="text-4xl font-semibold text-slate-100 mb-3 tracking-tight">
            Choose a Contact!
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            Select a conversation from your contact list to begin messaging.
          </p>
        </div>
      </div>
    </div>
  );

  // Render
  return (
    <div className="flex flex-row h-full w-full gap-4 p-0 overflow-hidden max-lg:p-0 bg-[#121418] rounded-lg max-lg:bg-[#121418] max-lg:pb-0">
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
            input={getCurrentInput()}
            setInput={setCurrentInput}
            // isBlock={getCurrentInput()}
            // setIsBlock={setCurrentInput}
            onSend={handleSend}
            onBack={() => setShowContactList(true)}
            loggedInUserId={currentUserRef.current}
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
              input={getCurrentInput()}
              setInput={setCurrentInput}
              onSend={handleSend}
              loggedInUserId={currentUserRef.current}
            />
          ) : <EmptyState />}
        </>
      )}
    </div>
  );
};

export default ChatApp;