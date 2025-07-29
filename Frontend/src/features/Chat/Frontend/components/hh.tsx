
// import React, { FC, useEffect, useRef, useState } from "react";
// import { VscSend } from "react-icons/vsc";
// import { LuSendHorizontal } from "react-icons/lu";
// import { IoGameControllerOutline } from "react-icons/io5";
// import data from '@emoji-mart/data';
// import Picker from '@emoji-mart/react';
// import {
//   AddTeamIcon,
//   CircleArrowLeft01Icon,
//   UserBlock02Icon,
// } from "hugeicons-react";
// import { LuImagePlus } from "react-icons/lu";
// import { MdEmojiEmotions } from "react-icons/md";
// import { X } from "lucide-react";

// import meProfile from "../Assets/me.jpeg";
// import Subtract from "../Assets/Subtract.svg";

// import { User } from "../types/User";
// import { Message } from "../types/Message";
// import socket from "../services/socket";

// // Props definition
// interface ConversationProps {
//   user: { username: string } | null;
//   messages: Message[];
//   input: string;
//   setInput: (value: string) => void;
//   onSend: () => void;
//   onBack: () => void;
//   loggedInUsername: string;
// }

// const Conversation: FC<ConversationProps> = ({
//   user,
//   messages,
//   input,
//   setInput,
//   onSend,
//   onBack,
//   loggedInUsername,
// }) => {
//   const isMobile = typeof window !== "undefined" && window.outerWidth < 1024;
//   const messagesEndRef = useRef<HTMLDivElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const fileInputRef = useRef<HTMLInputElement | null>(null);

//   const [showDivInvite, setShowDivInvite] = useState<boolean>(false);
//   const [inviteClicked, setInviteClicked] = useState<Record<string, boolean>>({});
//   const [blockClicked, setBlockClicked] = useState<Record<string, boolean>>({});
//   const [toast, setToast] = useState<{ type: "invite" | "block" | "debloked"; user: string } | null>(null);
//   const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

//   // Image upload states
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//   const [isUploading, setIsUploading] = useState<boolean>(false);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   useEffect(() => {
//     if (user) {
//       messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
//     }
//   }, [user]);

//   // Close emoji picker when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       const target = event.target as HTMLElement;
//       if (showEmojiPicker && !target.closest('.emoji-picker-container')) {
//         setShowEmojiPicker(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [showEmojiPicker]);

//   if (!user) {
//     return (
//       <div className="flex items-center justify-center h-full">
//         <p className="text-white text-lg">Select a Contact</p>
//       </div>
//     );
//   }

//   const handleSendInvite = () => {
//     if (!user) return;

//     setInviteClicked((prev) => ({ ...prev, [user.username]: true }));
//     setToast({ type: "invite", user: user.username });

//     setTimeout(() => {
//       setToast(null);
//     }, 4000);

//     setTimeout(() => {
//       setInviteClicked((prev) => ({ ...prev, [user.username]: false }));
//     }, 4000);
//   };

//   const handleEmojiToggle = () => {
//     setShowEmojiPicker((prev) => !prev);
//   };

//   // Fixed emoji handler - this was causing your error
//   const addToInput = (emoji: { native: string }) => {
//     setInput(input + emoji.native); // ✅ Fixed: directly pass string, not function
//     setShowEmojiPicker(false);
//   };

//   // Image selection handler
//   const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (!file) return;

//     // Validate file type
//     if (!file.type.startsWith('image/')) {
//       alert('Please select an image file');
//       return;
//     }

//     // Validate file size (5MB limit)
//     if (file.size > 5 * 1024 * 1024) {
//       alert('Image size should be less than 5MB');
//       return;
//     }

//     setSelectedImage(file);

//     // Create preview
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       setImagePreview(e.target?.result as string);
//     };
//     reader.readAsDataURL(file);
//   };

//   // Upload image function
//   const uploadImage = async (file: File): Promise<string> => {
//     const formData = new FormData();
//     formData.append('image', file);
//     formData.append('sender', loggedInUsername);
//     formData.append('recipient', user?.username || '');

//     setIsUploading(true);

//     try {
//       const response = await fetch('/api/upload-image', {
//         method: 'POST',
//         body: formData,
//         credentials: 'include',
//       });

//       if (!response.ok) {
//         throw new Error('Upload failed');
//       }

//       const data = await response.json();
//       return data.imageUrl;
//     } catch (error) {
//       console.error('Image upload failed:', error);
//       throw error;
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   // Send image message
//   const handleSendImage = async () => {
//     if (!selectedImage || !user || !loggedInUsername) return;

//     try {
//       const imageUrl = await uploadImage(selectedImage);
      
//       // Send image message via socket
//       socket.emit('chat:image', {
//         username: loggedInUsername,
//         recipient: user.username,
//         text: input, // Caption text
//         type: 'image',
//         imageUrl: imageUrl,
//       });

//       // Clear states
//       setSelectedImage(null);
//       setImagePreview(null);
//       setInput('');
      
//     } catch (error) {
//       alert('Failed to send image. Please try again.');
//     }
//   };

//   // Clear selected image
//   const clearSelectedImage = () => {
//     setSelectedImage(null);
//     setImagePreview(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   // Enhanced send handler
//   const handleSend = () => {
//     if (selectedImage) {
//       handleSendImage();
//     } else {
//       onSend();
//     }
//   };

//   const OnlineStatusIcon: React.FC<{ isOnline: boolean; size?: number }> = ({ isOnline, size = 10 }) => {
//     const styles = {
//       width: size,
//       height: size,
//       borderRadius: '9999px',
//       backgroundColor: isOnline ? '#22c55e' : '#FF0000',
//       display: 'inline-block',
//     };

//     return (
//       <span
//         style={styles}
//         title={isOnline ? 'Online' : 'Offline'}
//       ></span>
//     );
//   };

//   const handleBlockUser = () => {
//     if (!user) return;

//     socket.emit("block:user", {
//       blocker: loggedInUsername,
//       blocked: user.username,
//     });

//     setBlockClicked((prev) => ({ ...prev, [user.username]: true }));
//     setToast({ type: "block", user: user.username });

//     setTimeout(() => setToast(null), 4000);
//   };

//   const handleUnblocked = () => {
//     if (!user) return;

//     socket.emit("unblock:user", {
//       blocker: loggedInUsername,
//       blocked: user.username,
//     });

//     setBlockClicked((prev) => ({ ...prev, [user.username]: false }));
//     setToast({ type: "debloked", user: user.username });

//     setTimeout(() => setToast(null), 4000);
//   };

//   return (
//     <div className="flex flex-col w-full h-full max-lg:h-[92%] rounded-2xl p-[2px] max-lg:bg-none">
//       <div className="flex flex-col flex-grow bg-[#393E46] rounded-xl max-lg:rounded-none p-2 overflow-hidden bg-no-repeat bg-cover" style={{ backgroundImage: `url(${Subtract})` }}>
        
//         {/* Header */}
//         <div className="flex items-center justify-between p-3 m-1 bg-[#222831] rounded-xl max-lg:rounded-b-lg max-lg:h-20 max-lg:m-[-4px]">
//           <div className="flex items-center gap-x-3">
//             {isMobile && (
//               <button onClick={onBack} className="text-white">
//                 <CircleArrowLeft01Icon className="w-6 h-6 bg-sky-800 rounded-full p-0.5" />
//               </button>
//             )}
//             <img src={meProfile} className="size-14 rounded-full max-lg:w-12 max-lg:h-12" alt="User profile" />
//             <div className="flex flex-col">
//               <strong className="text-amber-50 text-lg max-lg:text-sm">
//                 {user?.username || "User"}
//               </strong>
//               <strong className="text-amber-50 text-lg max-lg:text-sm flex items-center gap-x-2">
//                 <OnlineStatusIcon isOnline={false} />
//                 online
//               </strong>
//             </div>
//           </div>
          
//           <div className="flex gap-x-8">
//             {inviteClicked[user.username] ? (
//               <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white max-lg:w-6 max-lg:h-6">
//                 ✅
//               </div>
//             ) : (
//               <IoGameControllerOutline
//                 className="w-7 h-7 text-white cursor-pointer max-lg:w-6 max-lg:h-6"
//                 onClick={handleSendInvite}
//               />
//             )}

//             {blockClicked[user.username] ? (
//               <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center text-white max-lg:w-6 max-lg:h-6 max-lg:mr-2 cursor-pointer" onClick={handleUnblocked}>
//                 ⛔
//               </div>
//             ) : (
//               <UserBlock02Icon
//                 className="w-7 h-7 text-red-700 cursor-pointer max-lg:w-6 max-lg:h-6 max-lg:mr-2"
//                 onClick={handleBlockUser}
//               />
//             )}
//           </div>

//           {/* Toast notifications */}
//           {toast?.type === "invite" && toast.user === user.username && (
//             <div className="fixed top-1/8 right-44 bg-green-600 text-white px-4 py-2 rounded shadow-md z-50">
//               ✅ Invite sent to <strong>{user.username || "player#1234"}</strong>
//             </div>
//           )}

//           {toast?.type === "block" && toast.user === user.username && (
//             <div className="fixed top-1/8 right-44 bg-red-600 text-white px-4 py-2 rounded shadow-md z-50">
//               <strong>{user.username || "player#1234"} is blocked!</strong>
//             </div>
//           )}

//           {toast?.type === "debloked" && toast.user === user.username && (
//             <div className="fixed top-1/8 right-44 bg-green-600 text-white px-4 py-2 rounded shadow-md z-50">
//               <strong>{user.username || "player#1234"} is unblocked!</strong>
//             </div>
//           )}
//         </div>

//         {/* Message list */}
//         <div ref={containerRef} className="flex-grow overflow-y-auto pr-4 space-y-4 mt-4 custom-scroll">
//           {messages.map((msg, index) => {
//             const msgDate = new Date(msg.timestamp);
//             const currentDateStr = msgDate.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

//             const previousDateStr =
//               index > 0
//                 ? new Date(messages[index - 1].timestamp).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
//                 : null;

//             const time = msgDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//             const isMe = msg.sender === loggedInUsername;
//             const showDate = index === 0 || currentDateStr !== previousDateStr;

//             return (
//               <div key={msg.id || index}>
//                 {showDate && (
//                   <div className="flex items-center justify-center my-4">
//                     <span className="bg-[#222831] text-white text-xs px-3 py-1 rounded-md">
//                       {currentDateStr}
//                     </span>
//                   </div>
//                 )}

//                 <div className={`flex ${!isMe ? "justify-start" : "justify-end"} mb-3`}>
//                   <div className={`max-w-xs sm:max-w-sm md:max-w-md px-4 py-2 rounded-2xl shadow-md transition-all fade-in bg-white text-black rounded-br-none`}>
//                     {/* Handle both text and image messages */}
                  
//                       <p className="whitespace-pre-wrap">{msg.text}</p>

                    
//                     <span className="block text-[10px] text-right text-gray-300 mt-1">
//                       {time}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//           <div ref={messagesEndRef} />
//         </div>

//         {/* Image preview section */}
//         {imagePreview && (
//           <div className="mt-2 p-3 bg-[#222831] rounded-lg">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-white text-sm">Selected Image:</span>
//               <button onClick={clearSelectedImage} className="text-red-500 hover:text-red-400">
//                 <X className="w-4 h-4" />
//               </button>
//             </div>
//             <div className="relative">
//               <img src={imagePreview} alt="Preview" className="max-h-32 rounded-lg" />
//               {isUploading && (
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
//                   <div className="text-white text-sm">Uploading...</div>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Input section */}
//         <div className="relative mt-4">
//           <input
//             type="text"
//             placeholder={selectedImage ? "Add a caption (optional)..." : "Type a message..."}
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" && !blockClicked[user.username]) handleSend();
//             }}
//             className="w-full bg-[#2a2e36] text-white placeholder-gray-400 rounded-full py-3 px-5 pr-24 outline-none focus:ring-2 focus:ring-[#00ADB5] transition"
//             disabled={blockClicked[user.username] || isUploading}
//           />

//           {/* Hidden file input */}
//           <input
//             ref={fileInputRef}
//             type="file"
//             accept="image/*"
//             onChange={handleImageSelect}
//             className="hidden"
//           />

//           {/* Emoji picker */}
//           {showEmojiPicker && (
//             <div className="emoji-picker-container absolute bottom-16 left-0 z-50">
//               <Picker data={data} onEmojiSelect={addToInput} />
//             </div>
//           )}

//           {!blockClicked[user.username] && (
//             <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">

//               {/* Emoji button */}
//               <MdEmojiEmotions 
//                 className="text-white size-5 cursor-pointer hover:text-[#00ADB5]" 
//                 onClick={handleEmojiToggle} 
//               />

//               {/* Send buttons */}
//               <VscSend
//                 onClick={handleSend}
//                 className="text-white w-5 h-5 cursor-pointer hover:text-[#00ADB5] hidden sm:block"
//               />
//               <LuSendHorizontal
//                 onClick={handleSend}
//                 className="text-white w-5 h-5 cursor-pointer hover:text-[#00ADB5] sm:hidden"
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Conversation;















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

  const [showDivInvite, setShowDivInvite] = useState<boolean>(false);
  const [inviteClicked, setInviteClicked] = useState<Record<string, boolean>>({});
  const [blockClicked, setBlockClicked] = useState<Record<string, boolean>>({});
  const [toast, setToast] = useState<{ type: "invite" | "block" | "debloked"; user: string } | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  
  // New states for message actions
  const [selectedMessage, setSelectedMessage] = useState<string | number | null>(null);
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

  // Close message actions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectedMessage && !(event.target as Element).closest('.message-actions')) {
        setSelectedMessage(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedMessage]);

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

  // Enhanced delete functions
  const handleDeleteMessage = (messageId: string | number) => {
    setMessageToDelete(messageId);
    setShowDeleteModal(true);
    setSelectedMessage(null);
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

  // Double click handler for desktop only
  const handleDoubleClick = (messageId: string | number, isMe: boolean) => {
    if (isMe) {
      setSelectedMessage(selectedMessage === messageId ? null : messageId);
    }
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
            const isSelected = selectedMessage === msg.id;

            return (
              <div key={msg.id || index}>
                {showDate && (
                  <div className="flex items-center justify-center my-4">
                    <span className="bg-[#222831] text-white text-xs px-3 py-1 rounded-md">
                      {currentDateStr}
                    </span>
                  </div>
                )}

                <div className={`flex ${!isMe ? "justify-start" : "justify-end"} relative`}>
                  <div className="max-w-xs sm:max-w-sm md:max-w-md break-words relative">
                    <div
                      className={`relative rounded-xl px-4 py-2 whitespace-pre-wrap transition-all duration-200 ${
                        isMe
                          ? "bg-[#EEEEEE] text-[#222831] self-end rounded-br-none"
                          : "bg-[#EEEEEE] text-[#222831] self-start rounded-bl-none"
                      } ${isSelected ? 'ring-2 ring-blue-400 bg-blue-50' : ''} ${
                        isMe ? 'select-none' : ''
                      }`}
                      onDoubleClick={() => handleDoubleClick(msg.id, isMe)}
                      style={{ userSelect: isMe ? 'none' : 'text' }}
                    >
                      <span>{msg.text}</span>

                      {/* Message actions dropdown - Desktop only, positioned on the left */}
                      {isSelected &&  (
                        <div className="message-actions absolute top-0 left-0 transform -translate-x-full -translate-y-2 z-50">
                          <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[120px]">
                            <button
                              onClick={() => handleDeleteMessage(msg.id)}
                              className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors duration-150"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              Delete
                            </button>
                            <button
                              onClick={() => setSelectedMessage(null)}
                              className="w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-50 flex items-center gap-2 transition-colors duration-150"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className={`flex items-center gap-1 mt-1 ${isMe ? 'justify-end' : 'justify-start'}`}>
                      <span className="text-xs text-gray-400">{time}</span>
                      {isMe && (
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Delete confirmation modal - Instagram/WhatsApp style */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-sm w-full mx-4 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete Message?</h3>
                <p className="text-gray-600 text-sm mb-6">
                  This message will be deleted for you. This action cannot be undone.
                </p>
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