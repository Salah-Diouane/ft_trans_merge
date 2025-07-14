// 📁 Conversation.tsx

import React, { FC, useEffect, useRef } from "react";
import { VscSend } from "react-icons/vsc";
import { LuSendHorizontal } from "react-icons/lu";
import {
  AddTeamIcon,
  CircleArrowLeft01Icon,
  UserBlock02Icon,
} from "hugeicons-react";

import meProfile from "../Assets/me.jpeg";
import Subtract from "../Assets/Subtract.svg";

import { User } from "../types/User";
import { Message } from "../types/Message";

// Props definition
interface ConversationProps {
  user: { username: string } | null;
  messages: Message[];
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
  onBack: () => void;
  loggedInUsername: string;
}

const Conversation: FC<ConversationProps> = ({
  user,
  messages,
  input,
  setInput,
  onSend,
  onBack,
  loggedInUsername,
}) => {
  const isMobile = typeof window !== "undefined" && window.outerWidth < 1024;
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll on new message
  useEffect(() => { 
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-scroll when selecting a user
  useEffect(() => {
    if (user) {
      messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
    }
  }, [user]);

  // Empty state when no user is selected
  if (!user) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-white text-lg">Select a Contact</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full max-lg:h-[92%] rounded-2xl p-[2px] max-lg:bg-none">
      {/* Header */}
      <div
        className="flex flex-col flex-grow bg-[#393E46] rounded-xl max-lg:rounded-none p-2 overflow-hidden bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${Subtract})` }}
      >
        <div className="flex items-center justify-between p-3 m-1 bg-[#222831] rounded-xl max-lg:rounded-b-lg max-lg:h-20 max-lg:m-[-4px]">
          <div className="flex items-center gap-x-3">
            {isMobile && (
              <button onClick={onBack} className="text-white">
                <CircleArrowLeft01Icon className="w-6 h-6 bg-sky-800 rounded-full p-0.5" />
              </button>
            )}
            <img src={meProfile} className="w-10 h-10 rounded-full max-lg:w-12 max-lg:h-12" alt="User profile" />
            <strong className="text-amber-50 text-lg max-lg:text-sm">
              {user?.username || "User"}
            </strong>
          </div>
          <div className="flex items-center gap-x-4">
            <AddTeamIcon className="w-7 h-7 text-white cursor-pointer max-lg:w-6 max-lg:h-6" />
            <UserBlock02Icon className="w-7 h-7 text-red-700 cursor-pointer max-lg:w-6 max-lg:h-6 max-lg:mr-2" />
          </div>
        </div>

        {/* Message list */}
        <div ref={containerRef} className="flex-grow overflow-y-auto pr-4 space-y-4 mt-4 custom-scroll">
          {messages.map((msg, index) => {
            const msgDate = new Date(msg.timestamp);
            const currentDateStr = msgDate.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

            const previousDateStr =
              index > 0
                ? new Date(messages[index - 1].timestamp).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
                : null;

            const time = msgDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
            const isMe = msg.username === loggedInUsername;
            const showDate = index === 0 || currentDateStr !== previousDateStr;

            return (
              <div key={msg.id || index}>
                {showDate && (
                  <div className="flex items-center justify-center my-4">
                    <span className="bg-[#222831] text-white text-xs px-3 py-1 rounded-md">
                      {currentDateStr}
                    </span>
                  </div>
                )}
                <div className={`flex ${isMe ? "justify-start" : "justify-end"}`}>
                  <div className="max-w-xs sm:max-w-sm md:max-w-md break-words">
                    <div
                      className={`rounded-xl px-4 py-2 whitespace-pre-wrap ${
                        isMe
                          ? "bg-[#EEEEEE] text-[#222831] self-end"
                          : "bg-[#222831] text-white self-start"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-xs text-gray-400 mt-1 block text-right">{time}</span>
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Input field */}
        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Type here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSend()}
            className="w-full bg-[#222831] text-white placeholder-amber-50 outline-none p-4 pr-12 rounded-2xl"
          />
          <VscSend
            onClick={onSend}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white cursor-pointer w-7 h-7 hover:text-[#7B2431] max-lg:hidden"
          />
          <LuSendHorizontal
            onClick={onSend}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white cursor-pointer w-10 h-10 hover:text-[#7B2431] sm:hidden max-lg:w-6 max-lg:h-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Conversation;
