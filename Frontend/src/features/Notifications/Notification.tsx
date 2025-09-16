import React, { useEffect, useState } from "react";
import { useUsers } from "../layout/useUsers";
import socket from "../Chat/services/socket";

interface HandleNotifsProps {
  setShowNotifs?: React.Dispatch<React.SetStateAction<boolean>>;
  notifications: any[];
  clearNotifs: () => void;
}

// const HandleNotifs: React.FC<HandleNotifsProps> = ({
//   setShowNotifs,
//   notifications,
//   clearNotifs,
// }) => {
//   console.log("all notifs : ", notifications);

//   const getType = (notif: any) => {
//     switch (notif.type) {
//       case "friend_request":
//         return "Friend Request";
//       case "friend_request_accepted":
//         return "Request Accepted";
//       default:
//         return "New message";
//     }
//   };

//   // const getNotificationColor = (type: string) => {
//   //   switch (type) {
//   //     case "friend_request":
//   //       return "border-l-4 border-l-blue-500 bg-[#393E46] ";
//   //     case "friend_request_accepted":
//   //       return "border-l-4 border-l-green-500 bg-[#393E46] ";
//   //     case "New message":
//   //       return "border-l-4 border-l-[#0077FF] bg-[#393E46]";
//   //     default:
//   //       return "border-l-4 border-l-gray-400 bg-[#393E46]";
//   //   }
//   // };

//   const getNotificationColor = (type: string) => {
//     switch (type) {
//       case "friend_request":
//         return "border-l-4 border-l-blue-500 bg-[#393E46] ";
//       case "friend_request_accepted":
//         return "border-l-4 border-l-green-500 bg-[#393E46] ";
//       case "New message":
//         return "border-l-4 border-l-[#0077FF] bg-[#393E46]";
//       default:
//         return "border-l-4 border-l-gray-400 bg-[#393E46]";
//     }
// }; 

//   const formatTime = (timestamp: string) => {
//     const now = new Date();
//     const notifTime = new Date(timestamp);
//     const diffInMs = now.getTime() - notifTime.getTime();
//     const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
//     const diffInHours = Math.floor(diffInMinutes / 60);
//     const diffInDays = Math.floor(diffInHours / 24);

//     if (diffInMinutes < 1) return "Just now";
//     if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
//     if (diffInHours < 24) return `${diffInHours}h ago`;
//     if (diffInDays < 7) return `${diffInDays}d ago`;
//     return notifTime.toLocaleDateString();
//   };

//   return (
//     <div
//       className=" w-full p-4 bg-[#393E46]flex flex-col bg-[#222831] bg-opacity-90 text-black rounded-2xl shadow-2xl border border-gray-200 z-[99999] overflow-hidden">
//       {/* Header */}
//       <div className=" sticky top-0 z-10 flex justify-between items-center p-5 bg-[#222831]">
//         <div className="">
//           <h2 className="text-xl font-bold text-white">Notifications</h2>
//           <p className="text-sm text-gray-500 mt-1">
//             {(notifications?.length || 0)}{" "}
//             {(notifications?.length || 0) === 1
//               ? "notification"
//               : "notifications"}
//           </p>
//         </div>

//         <div className="flex items-center gap-2">
//           <button
//             onClick={clearNotifs}
//             className="px-3 py-1.5 text-xs font-medium text-white hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200"
//           >
//             Clear All
//           </button>
//         </div>
//       </div>
//       <div className=" w-full  border border-white " />
//       {/* Notifications List */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-3">
//         {(notifications?.length || 0) === 0 ? (
//           <div className="flex flex-col items-center justify-center py-12 text-center">
//             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
//               <span className="text-2xl">🔔</span>
//             </div>
//             <h3 className="text-lg font-medium text-white mb-2">
//               All caught up!
//             </h3>
//             <p className="text-stone-300 text-sm">
//               No new notifications right now.
//             </p>
//           </div>
//         ) : (
//           (notifications || []).map((notif, i) => (
//             <div
//               key={i}
//               className={`p-4 rounded-xl ${getNotificationColor(
//                 notif.type
//               )} hover:shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5`}
//             >
//               <div className="flex items-start justify-between mb-2">
//                 <h4 className="text-sm font-bold text-white">
//                   {getType(notif)}
//                 </h4>
//                 <span className="text-xs text-stone-400 font-medium">
//                   {formatTime(notif.timestamp)}
//                 </span>
//               </div>
//               <p className="text-sm text-stone-300 mb-3 leading-relaxed">
//                 {notif.text || notif.message || "No message"}
//               </p>
//               <div className="flex items-center gap-3">
                
//                 <div className="w-8 h-8 bg-[#0077FF] rounded-full flex items-center justify-center">
//                   <span className="text-xs font-bold text-white">
//                     {(notif.sender || "U")[0].toUpperCase()}
//                   </span>
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-sm font-medium text-white">
//                     {notif.sender || "Unknown"}
//                   </p>
//                   <p className="text-xs text-stone-400">
//                     {notif.type === "New message"
//                       ? "Sent you a message"
//                       : notif.type === "friend_request"
//                       ? "Wants to be friends"
//                       : "Accepted your request"}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };



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
        return "border-l-4 border-l-sky-400 bg-gray-800"; // New color: Sky blue
      case "friend_request_accepted":
        return "border-l-4 border-l-emerald-500 bg-gray-800"; // New color: Emerald green
      case "New message":
        return "border-l-4 border-l-indigo-500 bg-gray-800"; // New color: Indigo blue
      default:
        return "border-l-4 border-l-gray-500 bg-gray-800"; // Default: Gray
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
  const [showNotifs, setShowNotifs] = useState(window.outerWidth < 1024);
  const isMobile = window.outerWidth < 1024;

  useEffect(() => {
    const handleResize = () => setShowNotifs(window.outerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!socket.connect()) socket.connect();
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
    <div className="w-full min-h-screen p-4">
      {showNotifs && (
        <HandleNotifs notifications={notifications} clearNotifs={clearNotifs} />
      )}
    </div>
  );
};

export default Notification;