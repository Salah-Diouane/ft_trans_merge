import React, { useEffect, useRef, useState } from "react";
import { Link, Search } from "lucide-react";
import { Notification02Icon } from "hugeicons-react";
import { useStore } from "../../store/store";
import HandleSearch from "./handleSearch";
import { useUsers } from "./useUsers";
import { User } from "../Chat/types/User";
import socket from "../Chat/services/socket";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

interface HandleNotifsProps {
  setShowNotifs: React.Dispatch<React.SetStateAction<boolean>>;
  notifications: any[];
  clearNotifs: () => void;
}

const isActive = (path: string) =>
  location.pathname === path || location.pathname.startsWith(path + "/")
    ? "bg-[#0077FF] rounded-full size-10 flex items-center justify-center p-2"
    : "";



export const HandleNotifs: React.FC<HandleNotifsProps> = ({ setShowNotifs, notifications, clearNotifs }) => {
  function getType(notif: any) {
    console.log("Notif Text : ", notif.text)
    console.log("Notif Type : ", notif.type)
    switch (notif.type) {
      case "friend_request":
        return "Friend Request";
      case "friend_request_accepted":
        return "Request Accepted";
      default:
        return "New message";
    }
  }

  function getNotificationColor(type: string) {
    switch (type) {
      case "friend_request":
        return "border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-blue-25";
      case "friend_request_accepted":
        return "border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-green-25";
      case "New message":
        return "border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-purple-25";
      default:
        return "border-l-4 border-l-gray-400 bg-gradient-to-r from-gray-50 to-gray-25";
    }
  }

  function formatTime(timestamp: string) {
    const now = new Date();
    const notifTime = new Date(timestamp);
    const diffInMs = now.getTime() - notifTime.getTime();
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return notifTime.toLocaleDateString();
  }

  return (
    <div className="absolute top-16 right-4 flex flex-col w-[380px] max-h-[500px] bg-white text-black rounded-2xl shadow-2xl border border-gray-200 z-[99999] overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Notifications</h2>
          <p className="text-sm text-gray-500 mt-1">
            {(notifications?.length || 0)} {(notifications?.length || 0) === 1 ? 'notification' : 'notifications'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => clearNotifs()}
            className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
          >
            Clear All
          </button>
          <button
            onClick={() => setShowNotifs(false)}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
          >
            ✖
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {(notifications?.length || 0) === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🔔</span>
            </div>
            <h3 className="text-lg font-medium text-gray-600 mb-2">All caught up!</h3>
            <p className="text-gray-500 text-sm">No new notifications right now.</p>
          </div>
        ) : (
          (notifications || []).map((notif, i) => (
            <div
              key={i}
              className={`p-4 rounded-xl ${getNotificationColor(notif.type)} 
                hover:shadow-md transition-all duration-300 cursor-pointer group
                transform hover:-translate-y-0.5`}
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-bold text-gray-800">
                  {getType(notif)}
                </h4>
                <span className="text-xs text-gray-500 font-medium">
                  {formatTime(notif.timestamp)}
                </span>
              </div>

              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                {notif.text || notif.message || "No message"}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {(notif.sender || "U")[0].toUpperCase()}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    {notif.sender || "Unknown"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {notif.type === "New message" ? "Sent you a message" :
                      notif.type === "friend_request" ? "Wants to be friends" :
                        "Accepted your request"}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
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
  const [notifClicked, setNotifClicked] = useState<boolean>(false)
  const location = useLocation();
  const store = useStore();
  const { users, currentUser, currentUserRef } = useUsers();
  const navigate = useNavigate();

  useEffect(() => {
    if (!socket.connect())
      socket.connect()
  }, [])

  useEffect(() => {
    if (currentUserRef.current) {
      socket.emit("notification:get", Number(currentUserRef.current));
    }
  }, [currentUserRef.current]);


  useEffect(() => {

    const handleNotification = (notif: any) => {
      console.log("Received notification:", notif);
      // setNotifications(prev => [...prev, notif.messageData || notif]);
      setNotifications(prev => [notif.messageData || notif, ...prev]);
      setUnreadCount(prev => prev + 1);
    };

    const handleNotificationList = (data: any[]) => {
      setNotifications(data);
      setUnreadCount(0);
    };

    if (currentUserRef.current) {
      socket.emit("notification:get", Number(currentUserRef.current));
    }

    socket.on("notification", handleNotification);
    socket.on("notification:list", handleNotificationList);


    return () => {
      socket.off("notification", handleNotification);
      socket.off("notification:list", handleNotificationList);
    };
  }, [currentUserRef.current]);

  const clearNotifs = () => {
    const currentUserId = Number(currentUserRef.current);
    socket.emit("notification:clear", currentUserId);
    setNotifications([]);
    setUnreadCount(0);
    // setShowNotifs(false)   
  }

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
  console.log("==> location.pathname : ", location.pathname)
  let in_chat: boolean = false;;
  if (location.pathname === "/chat")
    in_chat = true;
  console.log("in_chat :", in_chat)
  return (
    <>
    {(!in_chat) && (

      <nav className="flex items-center  justify-between text-white w-full h-14 px-4  mt-5 mb-4">
        <div className="w-1/4 max-lg:1/4" />


        <div className="relative flex justify-center w-1/3  m-3 mt-6 mb-6 max-lg:w-full" ref={searchRef}>
          <div className="relative flex items-center bg-[#393E46] px-3 py-3 rounded-2xl w-full max-w-[500px]">
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


        <div className="relative flex items-center gap-6 w-1/3 justify-end max-lg:hidden">
          <div>

            <Notification02Icon className="size-8 hover:text-[#00ADB5] cursor-pointer max-sm:hidden"
              onClick={(e) => {
                setShowNotifs(true)
                setNotifClicked(false);
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
            clearNotifs={() => { clearNotifs(); }}
          />
        )}

        <Toaster position="top-center" />
      </nav>
    )}
    </>
  );
};

export default NavBar;
