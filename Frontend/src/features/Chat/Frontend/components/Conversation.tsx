// 📁 Conversation.tsx

import React, { FC, useEffect, useRef, useState } from "react";
import { VscSend } from "react-icons/vsc";
import { LuSendHorizontal } from "react-icons/lu";
import {
  AddTeamIcon,
  CircleArrowLeft01Icon,
  UserBlock02Icon,
} from "hugeicons-react";
import { LuImagePlus } from "react-icons/lu";

import meProfile from "../Assets/me.jpeg";
import Subtract from "../Assets/Subtract.svg";

import { User } from "../types/User";
import { Message } from "../types/Message";
import { Divide } from "lucide-react";
import socket from "../services/socket";

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
  console.log("-----> : messages")
  console.log(messages)
  const isMobile = typeof window !== "undefined" && window.outerWidth < 1024;
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [showDivInvite, setShowDivInvite] = useState<boolean>(false)

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



  const [inviteClicked, setInviteClicked] = useState<Record<string, boolean>>({});
  const [blockClicked, setBlockClicked] = useState<Record<string, boolean>>({});
  const [toast, setToast] = useState<{ type: "invite" | "block" | "debloked" ; user: string } | null>(null);


  const handleSendInvite = () => {

    if (!user)
      return;

    setInviteClicked((prev) => ({ ...prev, [user.username]: true }));
    setToast({ type: "invite", user: user.username });

    setTimeout(() => {
      setToast(null);
    }, 4000);
    
    setTimeout( () => {
      setInviteClicked( (prev) => ( { ...prev, [user.username] : false}));
    }, 4000)
  };

  // const handleBlockUser = () => {

  //   if (!user)
  //     return;

  //   setBlockClicked((prev) => ({ ...prev, [user.username]: true }));
  //   setToast({ type: "block", user: user.username });

  //   setTimeout(() => {
  //     setToast(null);
  //   }, 4000);
    
    
  // };

  // const handleUnblocked = () => {

  //   if (!user)
  //     return;

  //   setBlockClicked((prev) => ({ ...prev, [user.username]: false }));
  //   setToast({ type: "debloked", user: user.username });

  //   setTimeout(() => {
  //     setToast(null);
  //   }, 4000);
  // };
  
  const handleBlockUser = () => {
  if (!user) return;

  socket.emit("block:user", {
    blocker: loggedInUsername,
    blocked: user.username,
  });

  setBlockClicked((prev) => ({ ...prev, [user.username]: true }));
  setToast({ type: "block", user: user.username });

  setTimeout(() => setToast(null), 4000);
};

const handleUnblocked = () => {
  if (!user) return;

  socket.emit("unblock:user", {
    blocker: loggedInUsername,
    blocked: user.username,
  });

  setBlockClicked((prev) => ({ ...prev, [user.username]: false }));
  setToast({ type: "debloked", user: user.username });

  setTimeout(() => setToast(null), 4000);
};

  const handleImage = () => {
    console.log("image clicked !!!!!!")
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

            {inviteClicked[user.username] ? (
              <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white max-lg:w-6 max-lg:h-6">
                ✅
              </div>
              
            ) : (
              <AddTeamIcon
                className="w-7 h-7 text-white cursor-pointer max-lg:w-6 max-lg:h-6"
                onClick={handleSendInvite}
              />
            )}
            
            

            {blockClicked[user.username] ? (
              <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center text-white max-lg:w-6 max-lg:h-6 max-lg:mr-2 cursor-pointer" onClick={handleUnblocked}>
                ⛔
              </div>
            ) : (
              <UserBlock02Icon
                className="w-7 h-7 text-red-700 cursor-pointer max-lg:w-6 max-lg:h-6 max-lg:mr-2"
                onClick={handleBlockUser}
              />
            )}

          </div>

          {toast?.type === "invite" && toast.user === user.username && (
            <div className="fixed top-1/8 right-44 bg-green-600 text-white px-4 py-2 rounded shadow-md z-50">
              ✅ Invite sent to <strong>{user.username || "player#1234"}</strong>
            </div>
          )}

          {toast?.type === "block" && toast.user === user.username && (
            <div className="fixed top-1/8 right-44 bg-red-600 text-white px-4 py-2 rounded shadow-md z-50">
              <strong>{user.username || "player#1234"} is blocked!</strong>
            </div>
          )}

          {toast?.type === "debloked" && toast.user === user.username && (
            <div className="fixed top-1/8 right-44 bg-green-600 text-white px-4 py-2 rounded shadow-md z-50">
              <strong>{user.username || "player#1234"} is unblocked!</strong>
            </div>
          )}


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
            const isMe = msg.sender === loggedInUsername;
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

                <div className={`flex ${!isMe ? "justify-start" : "justify-end"} mb-3`}>
                  <div
                    className={`max-w-xs sm:max-w-sm md:max-w-md px-4 py-2 rounded-2xl shadow-md transition-all fade-in 
                       bg-white text-black rounded-br-none`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    <span className="block text-[10px] text-right text-gray-300 mt-1">
                      {time}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>


      <div className=" relative mt-4">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !blockClicked[user.username]) onSend();
          }}
          className="w-full bg-[#2a2e36] text-white placeholder-gray-400 rounded-full py-3 px-5 pr-12 outline-none focus:ring-2 focus:ring-[#00ADB5] transition"
          disabled={blockClicked[user.username]} 
        />
          
        {!blockClicked[user.username] && (
          <>

            <VscSend
              onClick={onSend}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white w-6 h-6 cursor-pointer hover:text-[#00ADB5] hidden sm:block"
            />
            <LuImagePlus className="absolute top-2   right-11  text-white size-7 cursor-pointer hover:text-[#00ADB5]" onClick={handleImage} />

            <LuSendHorizontal
              onClick={onSend}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white w-7 h-7 cursor-pointer hover:text-[#00ADB5] sm:hidden"
            />
          </>
        )}
      </div>


      </div>
    </div>
  );
};

export default Conversation;

