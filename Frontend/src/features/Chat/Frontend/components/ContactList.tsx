// 📁 ContactList.tsx

import React, { FC } from "react";
import { Search } from "lucide-react";
import meProfile from "../Assets/me.jpeg";
import { User } from "../types/User";

// Messages type — indexed by username
interface Messages {
  [key: string]: Array<{ timestamp: string }>;
}

// Props
interface ContactListProps {
  users: User[];
  messages: Messages;
  selectedUser: User | null;
  setSelectedUser: (user: User | null) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const ContactList: FC<ContactListProps> = ({
  users,
  messages,
  selectedUser,
  setSelectedUser,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="p-[2px] rounded-2xl w-[40%] h-full">
      <div className="h-full w-full bg-[#393E46] rounded-xl custom-scroll overflow-y-auto">
        <div className="w-full">

          {/*  Search Bar */}
          <div className="sticky top-0 bg-[#393E46] px-4 pt-2 z-10">
            <div className="flex items-center bg-[#222831] rounded-lg px-4 h-16">
              <Search className="text-white mr-2" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent text-white placeholder-blue-200 outline-none w-full"
              />
            </div>
          </div>

          {/*  Contact List */}
          <div className="p-4">
            {users.length === 0 ? (
              <p className="text-white mt-4">No contacts found.</p>
            ) : (
              users.map((user) => {
                const userMessages = messages[user.username] || [];
                console.log("userMessages")
                console.log(user.username)
                const lastMessage = userMessages[userMessages.length - 1];
                const lastTime = lastMessage
                  ? new Date(lastMessage.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                  : "";

                const isSelected = selectedUser?.id === user.id;

                return (
                  <div
                    key={user.id}
                    onClick={() => setSelectedUser(user)}
                    className={`rounded-lg p-6 bg-[#222831] mt-4 cursor-pointer ${isSelected ? "border border-white" : ""
                      }`}
                  >
                    <div className="flex items-center justify-between h-5">
                      {/*  Profile Info */}
                      <div className="flex items-center gap-x-3">
                        <img
                          src={meProfile}
                          className="size-10 rounded-full"
                          alt="profile"
                        />
                        <div className="flex flex-col">
                          <strong className="m-1 text-amber-50 text-1xl">
                            {user.username}
                          </strong>
                        </div>
                        <div className="flex flex-col">
                          <strong className="m-1 text-amber-50 text-1xl">
                            {/* {lastMessage} */}
                          </strong>
                        </div>
                      </div>

                      {/*  Timestamp */}
                      <h1 className="m-1 text-amber-50">{lastTime}</h1>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;



