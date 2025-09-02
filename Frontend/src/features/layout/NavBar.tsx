import React, { useEffect, useRef, useState } from "react";
import { Link, Search } from "lucide-react";
import { Notification02Icon } from "hugeicons-react";
import { useStore } from "../../store/store";
import HandleSearch from "./handleSearch";
import { useUsers } from "./useUsers";
import { User } from "../Chat/types/User";
import socket from "../Chat/services/socket";

import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


interface HandleNotifsProps {
  setShowNotifs: React.Dispatch<React.SetStateAction<boolean>>;
  notifications: any[];
}

const isActive = (path: string) =>
  location.pathname === path || location.pathname.startsWith(path + "/")
    ? "bg-[#0077FF] rounded-full size-10 flex items-center justify-center p-2"
    : "";


const HandleNotifs: React.FC<HandleNotifsProps> = ({ setShowNotifs, notifications }) => {
  return (
    <div className="absolute top-16 right-20 flex flex-col w-[20%] max-h-[400px] overflow-y-auto bg-white text-black p-4 rounded shadow-lg z-[99999]">
      <div className="flex justify-between items-center w-full mb-2">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <button
          onClick={() => setShowNotifs(false)}
          className="text-sm text-blue-600"
        >
          Close ✖
        </button>
      </div>

      {notifications.length === 0 ? (
        <p className="text-gray-500 text-sm">No notifications yet</p>
      ) : (
        notifications.map((notif, i) => (
          <div
            key={i}
            className="w-full p-3 mb-2 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200"
          >
            <p className="text-sm font-medium">📩 New message</p>
            <p className="text-gray-700 text-sm truncate">Message : {notif.messageData?.text}</p>
            <p className="text-gray-700 text-sm truncate">From : {notif.messageData?.sender}</p>
            <span className="text-xs text-gray-400">
              {new Date(notif.messageData?.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))
      )}
    </div>
  );
};


const NavBar: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifs, setShowNotifs] = useState<boolean>(false);
  const [unreadCount, setUnreadCount] = useState<number>(0);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<User[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const [notifications, setNotifications] = useState<any[]>([]);

  const store = useStore();
  const { users, currentUser, currentUserRef } = useUsers();
  const navigate = useNavigate();

  useEffect(() => {
    if (!socket.connect())
      socket.connect()
  }, [])

  // useEffect(() => {
  //   socket.on("notification", (notif) => {
  //     setNotifications((prev) => [notif, ...prev]);
  //     setUnreadCount((prev) => prev + 1);
  //   });

  //   return () => {
  //     socket.off("notification");
  //   };
  // }, [notifications]);

  useEffect(() => {

    socket.on("notification", (notif) => {
      console.log("notif", notif.messageData)
      console.log(Number(currentUserRef.current), "Number(currentUserRef.current)")
      console.log(notif.senderId, "notif.senderId")

      if (notif.messageData.senderId !== Number(currentUserRef.current)){

      setNotifications((prev) => [notif, ...prev]);
      setUnreadCount((prev) => prev + 1);
      socket.emit("notification:insert", notif)
        // toast.custom((t) => (
        //   <div
        //     className={`${t.visible ? "animate-custom-enter" : "animate-custom-leave"
        //       } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 cursor-pointer`}
        //   >
        //     <div className="flex-1 w-0 p-4">
        //       <div className="flex items-start">
        //         <div className="flex-shrink-0 pt-0.5">
        //           <img
        //             className="h-10 w-10 rounded-full"
        //             src={notif.messageData.sender || "/default-avatar.png"}
        //             alt={notif.messageData?.sender || "User"}
        //           />
        //         </div>
        //         <div className="ml-3 flex-1">
        //           <p className="text-sm font-medium text-gray-900">
        //             {notif.messageData?.sender}
        //           </p>
        //           <p className="mt-1 text-sm text-gray-500">
        //             {notif.messageData?.text}
        //           </p>
        //         </div>
        //       </div>
        //     </div>
        //     <div className="flex border-l border-gray-200">
        //       <button
        //         onClick={(e) => {
        //           e.stopPropagation();
        //           toast.dismiss(t.id);
        //         }}
        //         className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
        //       >
        //         Close
        //       </button>
        //     </div>
        //   </div>
        // ))

      }
    });

    return () => {
      socket.off("notification");
    };
  }, [notifications]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearch(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setResult([]);
    } else {
      const filteredUsers = users.filter(
        (user) =>
          user.username.toLowerCase().includes(query.toLowerCase()) &&
          user.username !== currentUserRef.current
      );
      setResult(filteredUsers);
    }
  }, [query, users, currentUserRef]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setShowSearch(true);
      }
      if (e.key === "Escape") {
        setShowSearch(false);
        setQuery("")
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  
  return (
    <nav className="flex items-center justify-between text-white w-full h-14 px-4 max-lg:hidden mt-5 mb-4">
      <div className="w-1/3" />

      <div className="relative flex justify-center w-1/3 m-3 mt-6 mb-6" ref={searchRef}>
        <div className="relative flex items-center bg-[#393E46] px-3 py-3 rounded-2xl w-[500px]">
          <Search className="w-5 h-5 text-amber-50 mr-3" />
          <input
            type="text"
            value={query}
            placeholder="Search..."
            className="flex-grow bg-transparent text-white placeholder-blue-200 outline-none h-7 max-sm:w-full"
            onFocus={() => setShowSearch(true)}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <HandleSearch
          showSearch={showSearch}
          setQuery={setQuery}
          result={result}
          currentUser={currentUser}
        />
      </div>

      <div className="relative flex items-center gap-6 w-1/3 justify-end">
        <div>

          <Notification02Icon className="size-8 hover:text-[#00ADB5] cursor-pointer max-sm:hidden"
            onClick={(e) => {
              setShowNotifs(true)
              setUnreadCount(0)
            }}
          />

          {unreadCount > 0 && (
            <span className="absolute -top-1 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {unreadCount}
            </span>
          )}
        </div>

        <img
          src={store.image_url}
          className="size-12 rounded-full hover:text-[#00ADB5] cursor-pointer max-sm:hidden"
          alt="Profile"
        />
      </div>

      {showNotifs && (
        <HandleNotifs
          setShowNotifs={setShowNotifs}
          notifications={notifications}
        />
      )}

      <Toaster position="top-right" />
    </nav>
  );
};

export default NavBar;
