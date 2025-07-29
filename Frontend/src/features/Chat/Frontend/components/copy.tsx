
import React, { FC, useEffect, useRef, useState } from "react";
import { VscSend } from "react-icons/vsc";
import { LuSendHorizontal } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import {
  AddTeamIcon,
  CircleArrowLeft01Icon,
  UserBlock02Icon,
} from "hugeicons-react";
import { LuImagePlus } from "react-icons/lu";
import { MdDelete, MdCancel } from "react-icons/md";
import { HiEllipsisVertical } from "react-icons/hi2";

import meProfile from "../Assets/me.jpeg";
import Subtract from "../Assets/Subtract.svg";

import { User } from "../types/User";
import { Message } from "../types/Message";
import socket from "../services/socket";

import { MdEmojiEmotions } from "react-icons/md";

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
  const [inviteClicked, setInviteClicked] = useState<Record<string, boolean>>({});
  const [blockClicked, setBlockClicked] = useState<Record<string, boolean>>({});
  const [toast, setToast] = useState<{ type: "invite" | "block" | "debloked"; user: string } | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

  // Simple states for three dots menu
  const [showMenu, setShowMenu] = useState<string | number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [messageToDelete, setMessageToDelete] = useState<string | number | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (user) {
      messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
    }
  }, [user]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowMenu(null);
    };
    
    if (showMenu) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showMenu]);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-white text-lg">Select a Contact</p>
      </div>
    );
  }

  const handleSendInvite = () => {
    if (!user) return;

    setInviteClicked((prev) => ({ ...prev, [user.username]: true }));
    setToast({ type: "invite", user: user.username });

    setTimeout(() => {
      setToast(null);
    }, 4000);

    setTimeout(() => {
      setInviteClicked((prev) => ({ ...prev, [user.username]: false }));
    }, 4000);
  };

  const addToInput = (emoji: { native: string }) => {
    setInput(input + emoji.native);
  };

  const OnlineStatusIcon: React.FC<{ isOnline: boolean; size?: number }> = ({ isOnline, size = 10 }) => {
    const styles = {
      width: size,
      height: size,
      borderRadius: '9999px',
      backgroundColor: isOnline ? '#22c55e' : '#FF0000',
      display: 'inline-block',
    };

    return (
      <span
        style={styles}
        title={isOnline ? 'Online' : 'Offline'}
      ></span>
    );
  };

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

  // Three dots menu functions
  const handleThreeDotsClick = (messageId: string | number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setShowMenu(showMenu === messageId ? null : messageId);
  };

  const handleDeleteClick = (messageId: string | number) => {
    setMessageToDelete(messageId);
    setShowDeleteModal(true);
    setShowMenu(null);
  };

  const confirmDelete = () => {

    if (messageToDelete) {

      socket.emit("chat:delete", {
        id: messageToDelete,
        username: loggedInUsername,
      });

      setShowDeleteModal(false);
      setMessageToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setMessageToDelete(null);
  };

  return (
    <div className="flex flex-col w-full h-full max-lg:h-[92%] rounded-2xl p-[2px] max-lg:bg-none">
      <div className="flex flex-col flex-grow bg-[#393E46] rounded-xl max-lg:rounded-none p-2 overflow-hidden bg-no-repeat bg-cover" style={{ backgroundImage: `url(${Subtract})` }} >
        <div className="flex items-center justify-between p-3 m-1 bg-[#222831] rounded-xl max-lg:rounded-b-lg max-lg:h-20 max-lg:m-[-4px]">
          <div className="flex items-center gap-x-3">
            {isMobile && (
              <button onClick={onBack} className="text-white">
                <CircleArrowLeft01Icon className="w-6 h-6 bg-sky-800 rounded-full p-0.5" />
              </button>
            )}
            <img src={meProfile} className="size-14 rounded-full max-lg:w-12 max-lg:h-12" alt="User profile" />
            <div className="flex flex-col ">
              <strong className="text-amber-50 text-lg max-lg:text-sm">
                {user?.username || "User"}
              </strong>
              <strong className="text-amber-50 text-lg max-lg:text-sm flex items-center gap-x-2">
                <OnlineStatusIcon isOnline={false} />
                online
              </strong>
            </div>
          </div>
          <div className="flex gap-x-8">
            {inviteClicked[user.username] ? (
              <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white max-lg:w-6 max-lg:h-6">
                ✅
              </div>
            ) : (
              <IoGameControllerOutline
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

                <div className={`flex ${!isMe ? "justify-start" : "justify-end"}`}>
                  <div className="max-w-xs sm:max-w-sm md:max-w-md break-words">
                    <div className="relative " >
                      <div
                        className={`flex items-center justify-between rounded-xl px-4 py-2 whitespace-pre-wrap  bg-[#EEEEEE] text-[#222831] self-end rounded-br-none`}
                      >
                        <span>{msg.text}</span>

                          <button
                            onClick={(e) => handleThreeDotsClick(msg.id, e)}
                            className="ml-2 text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-200 transition-colors"
                          >
                            <HiEllipsisVertical className="w-4 h-4"/>
                          </button>

                      </div>

                      {/* Dropdown menu */}
                      {showMenu === msg.id && (
                        <div className="absolute top-0 left-0 transform -translate-x-full -translate-y-2 z-50 ">
                          <div className="bg-white rounded-lg shadow-lg border border-gray-200  min-w-[120px]">
                            <button onClick={() => handleDeleteClick(msg.id)} className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors duration-150" >
                              <MdDelete />
                              Delete
                            </button>
                            <button onClick={() => setShowMenu(null)}  className="w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-50 flex items-center gap-2 transition-colors duration-150" >
                              <MdCancel/>
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    <span className="text-xs text-gray-400 mt-1 block text-right">{time}</span>
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* delete confirmation  */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-sm w-full mx-4 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <MdDelete className="size-10 text-red-700"/>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete Message?</h3>

              </div>
              
              <div className="border-t border-gray-200">
                <div className="flex">
                  <button
                    onClick={cancelDelete}
                    className="flex-1 py-3 px-4 text-gray-600 font-medium border-r border-gray-200 hover:bg-gray-50 transition-colors duration-150"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmDelete}
                    className="flex-1 py-3 px-4 text-red-600 font-medium hover:bg-red-50 transition-colors duration-150"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Input */}
        <div className="relative mt-4">
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

          {showEmojiPicker && (
            <div className="absolute bottom-16 left-0 z-50">
              <Picker data={data} onEmojiSelect={addToInput} />
            </div>
          )}

          {!blockClicked[user.username] && (
            <>
              <VscSend
                onClick={onSend}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white w-6 h-6 cursor-pointer hover:text-[#00ADB5] hidden sm:block"
              />
              <MdEmojiEmotions
                className="absolute top-2 right-14 text-white size-7 cursor-pointer hover:text-[#00ADB5]"
                onClick={() => setShowEmojiPicker((prev) => !prev)}
              />

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