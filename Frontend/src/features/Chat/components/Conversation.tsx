


import React, { FC, use, useEffect, useRef, useState } from "react";
import { VscSend } from "react-icons/vsc";
import { LuSendHorizontal } from "react-icons/lu";
import { IoBanOutline, IoGameControllerOutline } from "react-icons/io5";
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { AddTeamIcon, UserBlock02Icon, CircleArrowLeft01Icon } from "hugeicons-react";
import { LuImagePlus } from "react-icons/lu";
import { MdDelete, MdCancel, MdEmojiEmotions } from "react-icons/md";
import { HiEllipsisVertical } from "react-icons/hi2";
import { IoIosArrowBack } from "react-icons/io";
import { useStore } from '../../../store/store';
import meProfile from "../Assets/me.jpeg";
import Subtract from "../Assets/Subtract.svg";

import { Message } from "../types/Message";
import socket from "../services/socket";
import { User } from "../types/User";
// import { User } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ConversationProps {
  user: { username: string, id: number, image_url: string, online: boolean };
  messages: Message[];
  history: Message[]
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
  onBack?: () => void;
  loggedInUserId: number;
}

const Conversation: FC<ConversationProps> = ({
  user,
  messages,
  history,
  input,
  setInput,
  onSend,
  onBack,
  loggedInUserId,
}) => {

  console.log("User Data : ", user)
  const isMobile = typeof window !== "undefined" && window.outerWidth < 1024;
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [inviteClicked, setInviteClicked] = useState<Record<string, boolean>>({});
  const [blockClicked, setBlockClicked] = useState<Record<string, boolean>>({});
  const [toast, setToast] = useState<{ type: "invite" | "block" | "debloked"; user: string } | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

  const [showMenu, setShowMenu] = useState<string | number | null>(null);
  const [showInvBlock, setShowInvBlock] = useState<boolean>(false);
  const [showInvBlockMenu, setShowInvBlockmenu] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [messageToDelete, setMessageToDelete] = useState<string | number | null>(null);
  // const [isBlocked, setIsBlocked] = useState<boolean>(false);
  const [isInviteSent, setIsInviteSent] = useState<boolean>(false);
  const [allBlocked, setAllBlocked] = useState<User[]>([]);

  const [page, setPage] = useState(1);
  const pageSize = 15;
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);




  useEffect(() => {
    const start = Math.max(messages.length - page * pageSize, 0);
    const end = messages.length;
    setVisibleMessages(messages.slice(start, end));
  }, [messages, page]);

  // const handleScroll = () => {
  //   if (!containerRef.current)
  //     return;
  //   if (containerRef.current.scrollTop === 0 && page * pageSize < messages.length) {
  //     setPage(prev => prev + 1);
  //   }
  // };

  const handleScroll = () => {
    if (!containerRef.current)
      return;

    if (containerRef.current.scrollTop === 0 && page * pageSize < messages.length) {
      const oldScrollHeight = containerRef.current.scrollHeight;
      setPage(prev => prev + 1);
      setLoading(true)

      setTimeout(() => {
        if (containerRef.current) {
          const newScrollHeight = containerRef.current.scrollHeight;
          containerRef.current.scrollTop = newScrollHeight - oldScrollHeight;
          setLoading(false)
        }
      }, 800);
    }
  };


  if (!user) {

    return (
      <div className="flex items-center justify-center h-full bg-[#121418] text-white rounded-2xl">
        <p className="text-white text-lg">Select a Contact</p>
      </div>
    );
  }

  useEffect(() => {
    const allBlocked_fct = async () => {
      const res = await fetch("http://e3r2p17.1337.ma:3000/friends/blockReq", { credentials: "include" });
      const data = await res.json();
      // console.log("all blocked : ", data);
      setAllBlocked(Array.isArray(data) ? data : []);
      // setIsBlocked(allBlocked.some(blockedUser => blockedUser.id === loggedInUserId))
    };
    allBlocked_fct();
  }, [])

  const store = useStore()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleMessages]);



  const addToInput = (emoji: { native: string }) => {
    setInput(input + emoji.native);
  };
  
  const OnlineStatusIcon: React.FC<{ isOnline: boolean; size?: number }> = ({ isOnline, size = 12 }) => {
    console.log("======================is online======================", isOnline);
    return (
      <div className="relative">
        <div
          className={`w-${size / 4} h-${size / 4} rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'} border-2 border-[#222831]`}
          style={{ width: size, height: size }}
          title={isOnline ? 'Online' : 'Offline'}
        />
        {isOnline && (
          <div
            className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"
            style={{ width: size, height: size }}
          />
        )}
      </div>
    );
  };



  let isBlocked = allBlocked.some(blockedUser => blockedUser.username === user.username);
  // console.log("isBlocked Value : ", isBlocked, "user.username", user.username)
  // console.log("allBlocked==> ", allBlocked)

  const handleBlockUser = () => {
    if (!user) return;

    socket.emit("block:user", {
      blockerId: loggedInUserId,
      blockedId: user.id,
    });

    setAllBlocked((prev) => [...prev, user as User]);
  };

  const handleUnblockUser = () => {
    if (!user) return;

    socket.emit("unblock:user", {
      blockerId: loggedInUserId,
      blockedId: user.id,
    });


    // setAllBlocked((prev) => prev.filter((u) => {
    //   console.log("u.id : ", u.id)
    //   console.log("user.id : ", user.id)
    //   u.id !== user.id
    // }));

    setAllBlocked((prev) => prev.filter((u) => u.id !== user.id));


    setShowInvBlock(false);
  };


  const handleBlockClick = () => {
    setShowInvBlockmenu(true);
    setShowInvBlock(false);
  }

  const handleThreeDotsClick = (messageId: string | number, e: React.MouseEvent) => {
    setShowMenu(showMenu === messageId ? null : messageId);
  };

  const handleThreeDotsInvBlock = (e: React.MouseEvent) => {
    setShowInvBlock(true);
  };

  const handleDeleteClick = (messageId: string | number) => {
    // console.log("=> : messageId", messageId)
    setMessageToDelete(messageId);
    setShowDeleteModal(true);
    setShowMenu(null);
  };

  const confirmDelete = () => {

    if (messageToDelete) {

      socket.emit("chat:delete", {
        id: messageToDelete,
        userId: loggedInUserId,
      });

      setShowDeleteModal(false);
      setMessageToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setMessageToDelete(null);
  };

  const confirmBlock = () => {
    handleBlockUser();
    setShowInvBlockmenu(false);

  }

  const cancelBlock = () => {
    setShowInvBlockmenu(false);
  }

  const handleSendInvite = () => {

    if (!user)
      return;

    socket.emit("send:invite", {
      sender: loggedInUserId,
      recipient: user.username,
    });

    setIsInviteSent(true);
    setShowInvBlock(false);

  };

  return (
    <div className="flex flex-col w-full h-full  max-sm:h-[100%] rounded-2xl p-[2px] max-lg:bg-none ">
      <div className="flex flex-col flex-grow  rounded-xl max-lg:rounded-none p-2 overflow-hidden bg-no-repeat bg-cover" style={{ backgroundImage: `url(${Subtract})` }}>

        {/* Header */}
        <div className="flex items-center justify-between p-3 m-1 bg-[#2f3542] rounded-xl max-lg:rounded-b-lg max-lg:h-20 max-lg:m-[-4px] border-b-2 border-[#2f3542]">
          <div className="flex items-center gap-x-6">
            {isMobile && (
              <button onClick={onBack} className="text-white  transition-colors">
                <IoIosArrowBack className="size-7  rounded-full p-0.5" />
              </button>
            )}
            <img src={user.image_url} className="size-14 rounded-full max-lg:w-12 max-lg:h-12 border-2 border-[#0077FF]" alt="User profile" />
            <div className="flex flex-col">
              <strong className="text-white text-lg font-bold max-lg:text-sm">
                {user?.username || "User"}
              </strong>
              <strong className="text-gray-400 text-sm max-lg:text-xs flex items-center gap-x-2">
                <OnlineStatusIcon isOnline={user.online} />
                Online
              </strong>
            </div>
          </div>

          <div className="flex gap-x-6">
            <button
              onClick={(e) => handleThreeDotsInvBlock(e)}
              className={`group-hover:opacity-100 transition-opacity duration-200 text-gray-500 rounded-full `}>
              <HiEllipsisVertical className="size-6" />
            </button>
            {(showInvBlock) && (
              <div className={`absolute   right-20 `}>
                <div className="bg-[#393E46] rounded-lg shadow-lg border-1 border-gray-900 min-w-[120px]">
                  {/* {allBlocked.some(blockedUser => blockedUser.id !== user.id) ? ( */}
                  {!isBlocked ? (
                    <button
                      onClick={handleBlockClick}
                      className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 hover:rounded-lg flex items-center gap-2 transition-colors duration-150"
                    >
                      <UserBlock02Icon />
                      Block
                    </button>
                  ) : (
                    <button
                      onClick={handleUnblockUser}
                      className="w-full text-left px-4 py-2 text-sm text-green-600 hover:bg-gray-100 flex items-center gap-2"
                      role="menuitem"
                    >
                      <IoBanOutline className="w-5 h-5" />
                      Unblock User
                    </button>
                  )
                  }
                  <button
                    onClick={handleSendInvite}
                    className="w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-50 hover:rounded-lg flex items-center gap-2 transition-colors duration-150"
                  >
                    <AddTeamIcon />
                    Invite
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Message list */}
        <div className="flex-grow overflow-y-auto pr-4 space-y-4 mt-4 custom-scroll overflow-x-hidden" ref={containerRef}
          onScroll={handleScroll}
        >
          {loading && (
            <div className="flex justify-center items-center py-2">
              {/* <DotLottieReact
                className="size-16 text-neutral-800"
                src="https://lottie.host/70d416bc-2964-4c04-9c76-5b3e51452944/RbbhKqbPTa.lottie"
                loop
                autoplay
              /> */}

              <DotLottieReact
                className="w-72 "
                src="https://lottie.host/93ceb104-8e2e-44e3-9af2-713435818c5b/OGOprlL4O4.lottie"
                loop
                autoplay
              />

            </div>
          )}

          {visibleMessages.map((msg, index) => {
            const msgDate = new Date(msg.timestamp);
            const currentDateStr = msgDate.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
            const previousDateStr =
              index > 0
                ? new Date(visibleMessages[index - 1].timestamp).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
                : null;
            const time = msgDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
            const isMe = msg.senderId === loggedInUserId;
            const showDate = index === 0 || currentDateStr !== previousDateStr;


            return (
              <div key={msg.id || index}>
                {showDate && (
                  <div className="flex items-center justify-center my-4">
                    <span className="bg-[#2f3542] text-gray-400 text-xs px-3 py-1 rounded-md">
                      {currentDateStr}
                    </span>
                  </div>
                )}
                <div className={`flex ${!isMe ? "justify-start" : "justify-end"}`}>
                  <div className="relative group max-w-xs sm:max-w-sm md:max-w-md break-words">
                    {/* Message bubble */}
                    <div
                      className={`rounded-xl p-2 whitespace-pre-wrap shadow-lg  ${isMe
                        ? "bg-[#0077FF] text-white self-end"
                        : "bg-[#393E46] text-white self-start"
                        }`}
                    >
                      {msg.text}
                    </div>
                    {isMe && (
                      <button
                        onClick={(e) => handleThreeDotsClick(msg.id, e)}
                        className={`absolute top-2 -left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-500 hover:text-gray-700 p-1 rounded-full bg-gray-200`}
                      >
                        <HiEllipsisVertical className="w-4 h-4" />
                      </button>
                    )}

                    {isMe && (showMenu === msg.id) && (
                      <div className={`absolute top-0 z-50 ${isMe ? 'right-20 transform translate-x-2' : 'left-20 transform -translate-x-2'}`}>
                        <div className="bg-white rounded-lg shadow-lg border border-gray-200 min-w-[120px]">
                          <button
                            onClick={() => handleDeleteClick(msg.id)}
                            className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors duration-150"
                          >
                            <MdDelete />
                            Delete
                          </button>
                          <button
                            onClick={() => setShowMenu(null)}
                            className="w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-50 flex items-center gap-2 transition-colors duration-150"
                          >
                            <MdCancel />
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                    {/* Timestamp */}
                    <span className="text-xs text-gray-500 mt-1 block text-right">{time}</span>
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 p-4 ">
            <div className="bg-white rounded-2xl max-w-sm w-full mx-4 overflow-hidden">

              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <MdDelete className="size-10 text-red-700" />
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

        {showInvBlockMenu && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 p-4">
            <div className="bg-white rounded-2xl max-w-sm w-full mx-4 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <MdDelete className="size-10 text-red-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Block this User ?</h3>

              </div>

              <div className="border-t border-gray-200">
                <div className="flex">
                  <button
                    onClick={cancelBlock}
                    className="flex-1 py-3 px-4 text-gray-600 font-medium border-r border-gray-200 hover:bg-gray-50 transition-colors duration-150"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmBlock}
                    className="flex-1 py-3 px-4 text-red-600 font-medium hover:bg-red-50 transition-colors duration-150"
                  >
                    Block
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {!isBlocked ? (
          <div className="relative mt-4 opacity-80">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !isBlocked)
                  onSend();
              }}
              className="w-full bg-[#393E46] h-14 max-lg:h-12 text-white placeholder-gray-500 rounded-full py-3 px-5 pr-12 outline-none focus:ring-2 focus:ring-[#0077FF] transition"
              disabled={isBlocked}
            />
            {showEmojiPicker && (
              <div className="absolute bottom-16 left-0 z-50">
                <Picker data={data} onEmojiSelect={addToInput} />
              </div>
            )}
            <>
              <MdEmojiEmotions
                className="absolute top-1/2 -translate-y-1/2 right-16 text-gray-400 w-6 h-6  rounded-full cursor-pointer hover:text-[#0077FF] duration-500 "
                onClick={() => setShowEmojiPicker((prev) => !prev)}
              />
              <button
                onClick={onSend}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full  hover:bg-[#0077FF] duration-500"
              >
                <VscSend className="text-white w-5 h-5" />
              </button>
            </>
          </div>
        ) : (
          <div className="relative mt-4 opacity-30">
            <input
              type="text"
              placeholder="You have blocked this user."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !isBlocked)
                  onSend();
              }}
              className="w-full bg-[#393E46] h-14 text-center placeholder-white rounded-full py-3 px-5 pr-12 outline-none focus:ring-2 focus:ring-[#0077FF] transition"
              disabled={isBlocked}
            />

          </div>
        )}
      </div>
    </div>
  );
};

export default Conversation;

