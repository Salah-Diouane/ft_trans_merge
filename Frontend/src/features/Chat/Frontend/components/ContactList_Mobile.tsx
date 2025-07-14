

import React, { FC } from "react";
import { Search } from "lucide-react";
import meProfile from "../Assets/me.jpeg";
import { User } from "../types/User";


interface Messages {
  [key: string]: Array<{ timestamp: string }>;
}

// Props
interface ContactListMobileProps {
  users: User[];
  messages: Messages;
  setSelectedUser: (user: User) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const ContactList_Mobile: FC<ContactListMobileProps> = ({
  users,
  messages,
  setSelectedUser,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="w-full h-[92%] rounded-[inherit] bg-[#393E46] flex flex-col p-2">
      
      {/*  Search Bar */}
      <div className="flex items-center bg-[#222831] m-[-2px] mb-4 px-4 py-2 sticky top-0 z-10 rounded-2xl">
        <Search className="text-white mr-2" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent text-white placeholder-blue-200 outline-none w-full size-12"
        />
      </div>

      {/* contact lits */}
      <div className="flex-1 overflow-y-auto custom-scroll">
        {users.length === 0 ? (
          <p className="text-white mt-4">No contacts found.</p>
        ) : (
          users.map((user) => {
            const userMessages = messages[user.username] || [];
            const lastMessage = userMessages.length ? userMessages[userMessages.length - 1] : null;
            const lastTime = lastMessage
              ? new Date(lastMessage.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "";

            return (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className="rounded-lg p-4 bg-[#222831] mt-4 cursor-pointer"
              >
                <div className="flex items-center gap-x-3">
                  <img
                    src={meProfile}
                    className="w-12 h-12 rounded-full"
                    alt={`${user.username}'s profile`}
                  />
                  <div className="flex flex-col">
                    <strong className="text-amber-50">{user.username}</strong>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ContactList_Mobile;
