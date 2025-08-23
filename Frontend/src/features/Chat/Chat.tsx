import React, { FC, useEffect, useRef, useState } from "react";
import socket from "./services/socket";

import ContactList from "./components/ContactList";
import ContactList_Mobile from "./components/ContactList_Mobile";
import Conversation from "./components/Conversation";

import { FiUser } from "react-icons/fi";
import Subtract from "../Assets/Subtract.svg";
import gf from "../Assets/gf4.gif"

import { User } from "./types/User";

// ---------------- Types ----------------
interface Message {
  id?: string | number;
  sender: string;
  recipient: string;
  text: string;
  timestamp: string;
}

const ChatApp: FC = () => {

  // --- State ---
  const [users, setUsers] = useState<User[]>([]);
  const [messages, setMessages] = useState<Record<number, Message[]>>({});
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [showContactList, setShowContactList] = useState(window.outerWidth < 1024);
  const [currentUser, setCurrentUser] = useState("");
  const [unreadCounts, setUnreadCounts] = useState<Record<number, number>>({});

  // --- Refs ---
  const usersRef = useRef<User[]>([]);
  const currentUserRef = useRef("");
  const selectedUserRef = useRef<User | null>(null);
  const requestedHistoryRef = useRef<Set<string>>(new Set());
  const isMobile = window.outerWidth < 1024;

  // ---------------- Effects ----------------

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => setShowContactList(window.outerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keep ref in sync
  useEffect(() => {
    selectedUserRef.current = selectedUser;
  }, [selectedUser]);

  // Ensure socket is connected
  useEffect(() => {
    if (!socket.connected) socket.connect();
  }, []);

  // Request chat history for all users
  useEffect(() => {
    if (!currentUserRef.current || users.length === 0) return;

    users.forEach((user) => {
      if (!requestedHistoryRef.current.has(user.username)) {
        requestedHistoryRef.current.add(user.username);
        socket.emit("request:history", {
          username: currentUserRef.current,
          recipient: user.username,
        });
      }
    });
  }, [users, currentUser]);

  // Socket event listeners
  useEffect(() => {
    socket.emit("request:init");
    socket.emit("get-my-profile");

    socket.on("user:list", (backendUsers: User[]) => {
      console.log("Received users:", backendUsers);
      setUsers(backendUsers);
      usersRef.current = backendUsers;
    });

    socket.on("chat:history", (history: Message[]) => {

      if (history.length === 0)
        return;

      const contactUsername = history[0].sender === currentUserRef.current ? history[0].recipient : history[0].sender;

      const contact = usersRef.current.find((user) => user.username === contactUsername);
      if (!contact) {
        console.warn("Contact not found for received history", contactUsername);
        return;
      }

      setMessages((prev) => ({
        ...prev,
        [contact.id]: history,
      }));
    });

    socket.on(
      "chat:message",
      (msg: {
        id: string | number;
        sender: string;
        recipient: string;
        text: string;
        timestamp: string;
        blocked: boolean;
      }) => {
        if (!currentUserRef.current) {
          console.warn("Current user not set, cannot process message");
          return;
        }

        // const isSender = msg.sender === currentUserRef.current;
        // if (isSender) return;

        const isSender = msg.sender === currentUserRef.current;

        const otherUser = usersRef.current.find((u) =>
          isSender ? u.username === msg.recipient : u.username === msg.sender
        );

        if (!otherUser) {
          console.warn("User not found in current list", msg);
          return;
        }

        const newMsg = {
          id: msg.id,
          sender: msg.sender,
          recipient: msg.recipient,
          text: msg.text,
          timestamp: msg.timestamp,
        };

        setMessages((prev) => ({
          ...prev,
          [otherUser.id]: [...(prev[otherUser.id] || []), newMsg],
        }));

        if (!isSender && selectedUserRef.current?.username !== msg.sender) {
          setUnreadCounts((prev) => ({
            ...prev,
            [otherUser.id]: (prev[otherUser.id] || 0) + 1,
          }));
        }
      }
    );

    socket.on("chat:deleted", ({ id }) => {
      setMessages((prev) => {
        const updated = { ...prev };
        for (const key in updated) {
          updated[key] = updated[key].filter((msg) => msg.id !== id);
        }
        return updated;
      });
    });

    socket.on("profile-data", (socketData: { user: string }) => {
      console.log("Received current user profile:", socketData.user);
      currentUserRef.current = socketData.user;
      setCurrentUser(socketData.user);
      socket.emit("profile-data", socketData);
    });

    return () => {
      socket.off("user:list");
      socket.off("chat:history");
      socket.off("chat:message");
      socket.off("chat:deleted");
      socket.off("profile-data");
    };
  }, []);

  // ---------------- Handlers ----------------

  const handleSend = () => {
    const username = currentUserRef.current;
    const currentInput = selectedUser?.id ? inputs[selectedUser.id] || "" : "";

    if (!currentInput.trim() || !selectedUser || !username) {
      console.log("Error: one of input | selectedUser | username is empty!");
      return;
    }


    socket.emit("chat:message", {
      username: username,
      recipient: selectedUser.username,
      text: currentInput,
    });

    setInputs((prev) => ({
      ...prev,
      [selectedUser.id]: "",
    }));
  };


  const getCurrentInput = (): string => {
    return selectedUser?.id ? inputs[selectedUser.id] || "" : "";
  };

  const setCurrentInput = (value: string): void => {
    if (selectedUser?.id) {
      setInputs((prev) => ({
        ...prev,
        [selectedUser.id]: value,
      }));
    }
  };

  const handleUserSelect = (user: User): void => {
    setSelectedUser(user);
    if (isMobile)
      setShowContactList(false);
    setUnreadCounts((prev) => ({ ...prev, [user.id]: 0 }));
  };

  // ---------------- Derived ----------------
  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) &&
      user.username !== currentUser
  );

  const userMessages = selectedUser?.id ? messages[selectedUser.id] || [] : [];



  const EmptyState = () => (
    <div className="flex flex-col w-full h-full justify-center items-center bg-[#222831]  text-slate-100 p-8">
      <div className="flex items-center justify-center mb-12">
        <img src={gf} className="h-36  rounded-2xl shadow-2xl " />
      </div>
      <div className="text-center space-y-4 max-w-md">
        <h2 className="text-4xl  font-semibold text-slate-100 mb-3 tracking-tight">
          Choose a Contact !
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed font-light">
          Select a conversation from your contact list to begin messaging.
        </p>

      </div>
    </div>
  );

  // ---------------- Render ----------------
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
            history={history}
            input={getCurrentInput()}
            setInput={setCurrentInput}
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
              input={getCurrentInput()}
              setInput={setCurrentInput}
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
