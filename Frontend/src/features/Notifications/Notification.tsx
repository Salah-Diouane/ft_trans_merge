import React, { useEffect, useState } from "react";
import { useUsers } from "../layout/useUsers";
import socket from "../Chat/services/socket";
import { Navigate, useNavigate } from "react-router";
interface HandleNotifsProps {
  setShowNotifs?: React.Dispatch<React.SetStateAction<boolean>>;
  notifications: any[];
  clearNotifs: () => void;
}

const HandleNotifs: React.FC<HandleNotifsProps> = ({
  setShowNotifs,
  notifications,
  clearNotifs,
}) => {
  console.log("all notifs : ", notifications);

  const getType = (notif: any) => {
    switch (notif.type) {
      case "friend_request":
        return "Friend Request";
      case "friend_request_accepted":
        return "Request Accepted";
      default:
        return "New message";
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "friend_request":
        return "border-l-4 border-l-sky-400 bg-gray-800"; 
      case "friend_request_accepted":
        return "border-l-4 border-l-emerald-500 bg-gray-800"; 
      case "New message":
        return "border-l-4 border-l-indigo-500 bg-gray-800";
      default:
        return "border-l-4 border-l-gray-500 bg-gray-800";
    }
  };

  const formatTime = (timestamp: string) => {
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
  };

  return (
    <div className="w-full max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-700">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-800 border-b border-gray-700">
        <div>
          <h2 className="text-2xl font-extrabold text-white">Notifications</h2>
          <p className="text-sm font-light text-gray-400 mt-1">
            {(notifications?.length || 0)}{" "}
            {(notifications?.length || 0) === 1 ? "new alert" : "new alerts"}
          </p>
        </div>
        <button
          onClick={clearNotifs}
          className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white rounded-xl transition-all duration-300"
        >
          Clear All
        </button>
      </div>

      {/* Notifications List */}
      <div className="flex-1 overflow-y-auto max-h-[70vh] p-4 space-y-3">
        {(notifications?.length || 0) === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
            <span className="text-4xl mb-4">🔔</span>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              All caught up!
            </h3>
            <p className="text-sm text-gray-400">
              You have no new notifications right now.
            </p>
          </div>
        ) : (
          (notifications || []).map((notif, i) => (
            <div
              key={i}
              className={`relative p-4 rounded-xl ${getNotificationColor(
                notif.type
              )} cursor-pointer transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg`}
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-semibold text-gray-200">
                  {getType(notif)}
                </h4>
                <span className="text-xs text-gray-500 font-medium">
                  {formatTime(notif.timestamp)}
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                {notif.text || notif.message || "No message"}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-md font-bold text-gray-300">
                    {(notif.sender || "U")[0].toUpperCase()}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-200 truncate">
                    {notif.sender || "Unknown"}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {notif.type === "New message"
                      ? "Sent you a message"
                      : notif.type === "friend_request"
                      ? "Wants to be friends"
                      : "Accepted your request"}
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

const Notification: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [unreadCount, setUnreadCount] = useState<number>(0);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [notifClicked, setNotifClicked] = useState<boolean>(false);
  const { users, currentUser, currentUserRef } = useUsers();
  const [showNotifs, setShowNotifs] = useState(window.innerWidth < 1024);
  const [locked, setLocked] = useState(false);
  const nav = useNavigate();


  useEffect(() => {
    let timeout: any;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const isSmallScreen = window.innerWidth < 1024;
        setShowNotifs(isSmallScreen);
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!showNotifs && !locked) {
      nav("/");
    }
  }, [showNotifs, locked, nav]);

  const handleNotifClick = () => {
    setLocked(true);
  };
  
  useEffect(() => {
    if (!socket.connect())
      socket.connect();
  }, []);

  useEffect(() => {
    if (currentUserRef.current) {
      socket.emit("notification:get", Number(currentUserRef.current));
    }
  }, [currentUserRef.current]);

  useEffect(() => {
    const handleNotification = (notif: any) => {
      console.log("Received notification:", notif);
      setNotifications((prev) => [notif.messageData || notif, ...prev]);
      setUnreadCount((prev) => prev + 1);
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
  };

  return (
    // <div className="w-full min-h-screen p-4">
    //   {showNotifs && (
    //     <HandleNotifs notifications={notifications} clearNotifs={clearNotifs} />
    //   )}
    // </div>
    <div
      className="w-full min-h-screen p-4 bg-[#222831]"
      onClick={handleNotifClick}
    >
      {showNotifs ? (
        <HandleNotifs
          notifications={notifications}
          clearNotifs={clearNotifs}
        />
      ) : (
        <div className="flex items-center justify-center text-white h-full">
          Redirecting...
        </div>
      )}
    </div>
  );
};

export default Notification;