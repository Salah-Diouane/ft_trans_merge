// import React, { useEffect, useRef, useState } from "react";
// import { Link, Search } from "lucide-react";
// import { Notification02Icon } from "hugeicons-react";
// import { useStore } from "../../store/store";
// import HandleSearch from "../layout/HandleSearch";
// import { useUsers } from "../layout/useUsers";
// import { User } from "../Chat/types/User";
// import socket from "../Chat/services/socket";
// import { useNavigate } from "react-router-dom";
// import toast, { Toaster } from "react-hot-toast";

// interface HandleNotifsProps {
//   setShowNotifs: React.Dispatch<React.SetStateAction<boolean>>;
//   notifications: any[];
//   clearNotifs: () => void;
// }

// const HandleNotifs: React.FC<HandleNotifsProps> = ({ setShowNotifs, notifications, clearNotifs }) => {
//   function getType(notif: any) {
//     console.log("Notif Text : ", notif.text)
//     console.log("Notif Type : ", notif.type)
//     switch (notif.type) {
//       case "friend_request":
//         return "Friend Request";
//       case "friend_request_accepted":
//         return "Request Accepted";
//       default:
//         return "New message";
//     }
//   }

//   function getNotificationColor(type: string) {
//     switch (type) {
//       case "friend_request":
//         return "border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-blue-25";
//       case "friend_request_accepted":
//         return "border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-green-25";
//       case "New message":
//         return "border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-purple-25";
//       default:
//         return "border-l-4 border-l-gray-400 bg-gradient-to-r from-gray-50 to-gray-25";
//     }
//   }

//   function formatTime(timestamp: string) {
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
//   }

//   return (
//     <div className="absolute top-16 right-4 flex flex-col w-[380px] max-h-[500px] bg-white text-black rounded-2xl shadow-2xl border border-gray-200 z-[99999] overflow-hidden">
//       {/* Header */}
//       <div className="flex justify-between items-center p-5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
//         <div>
//           <h2 className="text-xl font-bold text-gray-800">Notifications</h2>
//           <p className="text-sm text-gray-500 mt-1">
//             {(notifications?.length || 0)} {(notifications?.length || 0) === 1 ? 'notification' : 'notifications'}
//           </p>
//         </div>

//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => clearNotifs()}
//             className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
//           >
//             Clear All
//           </button>
//           <button
//             onClick={() => setShowNotifs(false)}
//             className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
//           >
//             ✖
//           </button>
//         </div>
//       </div>

//       {/* Notifications List */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-3">
//         {(notifications?.length || 0) === 0 ? (
//           <div className="flex flex-col items-center justify-center py-12 text-center">
//             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
//               <span className="text-2xl">🔔</span>
//             </div>
//             <h3 className="text-lg font-medium text-gray-600 mb-2">All caught up!</h3>
//             <p className="text-gray-500 text-sm">No new notifications right now.</p>
//           </div>
//         ) : (
//           (notifications || []).map((notif, i) => (
//             <div
//               key={i}
//               className={`p-4 rounded-xl ${getNotificationColor(notif.type)} 
//                 hover:shadow-md transition-all duration-300 cursor-pointer group
//                 transform hover:-translate-y-0.5`}
//             >
//               <div className="flex items-start justify-between mb-2">
//                 <h4 className="text-sm font-bold text-gray-800">
//                   {getType(notif)}
//                 </h4>
//                 <span className="text-xs text-gray-500 font-medium">
//                   {formatTime(notif.timestamp)}
//                 </span>
//               </div>

//               <p className="text-sm text-gray-700 mb-3 leading-relaxed">
//                 {notif.text || notif.message || "No message"}
//               </p>

//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
//                   <span className="text-xs font-bold text-white">
//                     {(notif.sender || "U")[0].toUpperCase()}
//                   </span>
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-sm font-medium text-gray-800">
//                     {notif.sender || "Unknown"}
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     {notif.type === "New message" ? "Sent you a message" :
//                       notif.type === "friend_request" ? "Wants to be friends" :
//                         "Accepted your request"}
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

// const Notification: React.FC = () => {
//   const [showNotifs, setShowNotifs] = useState<boolean>(false);
//   const [unreadCount, setUnreadCount] = useState<number>(0);
//   const { users, currentUser, currentUserRef } = useUsers();
//   const [notifications, setNotifications] = useState<any[]>([]);
//   const store = useStore();

//   const clearNotifs = () => {
//     const currentUserId = Number(currentUserRef.current);
//     socket.emit("notification:clear", currentUserId);
//     setNotifications([]);
//     setUnreadCount(0);
//     // setShowNotifs(false)   
//   }

//   return (
//     <div className="w-full h-full flex items-center justify-center bg-[#393E46] rounded-2xl ">
//       <p>hello</p>
//       <div className="relative flex items-center gap-6 w-1/3 justify-end">
//         <div>

//           <Notification02Icon className="size-8 hover:text-[#00ADB5] cursor-pointer max-sm:hidden"
//             // onClick={(e) => { setUnreadCount(0) }}
//           />

//           {unreadCount > 0 && (
//             <span className="absolute -top-1 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//               {unreadCount}
//             </span>
//           )}
//         </div>


//       </div>

//       {showNotifs && (
//         <HandleNotifs
//           setShowNotifs={setShowNotifs}
//           notifications={notifications}
//           clearNotifs={() => { clearNotifs(); }}
//         />
//       )}
//     </div>
//   );
// };

// export default Notification;







import React, { useEffect, useState } from "react";
import { useUsers } from "../layout/useUsers";
import socket from "../Chat/services/socket";

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

  console.log("all notifs : ", notifications)
  
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
        return "border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-blue-25";
      case "friend_request_accepted":
        return "border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-green-25";
      case "New message":
        return "border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-purple-25";
      default:
        return "border-l-4 border-l-gray-400 bg-gradient-to-r from-gray-50 to-gray-25";
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
    <div
      className=" w-full  p-4 bg-[#393E46]flex flex-col bg-white text-black rounded-2xl shadow-2xl border border-gray-200 z-[99999] overflow-hidden">
      {/* Header */}
      <div className=" sticky top-0 z-10 flex justify-between items-center p-5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
        <div className="">
          <h2 className="text-xl font-bold text-gray-800">Notifications</h2>
          <p className="text-sm text-gray-500 mt-1">
            {(notifications?.length || 0)}{" "}
            {(notifications?.length || 0) === 1
              ? "notification"
              : "notifications"}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={clearNotifs}
            className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
          >
            Clear All
          </button>
          {setShowNotifs && (
            <button
              onClick={() => setShowNotifs(false)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
            >
              ✖
            </button>
          )}
        </div>
      </div>

      {/* Notifications List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {(notifications?.length || 0) === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🔔</span>
            </div>
            <h3 className="text-lg font-medium text-gray-600 mb-2">
              All caught up!
            </h3>
            <p className="text-gray-500 text-sm">
              No new notifications right now.
            </p>
          </div>
        ) : (
          (notifications || []).map((notif, i) => (
            <div
              key={i}
              className={`p-4 rounded-xl ${getNotificationColor(
                notif.type
              )} hover:shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5`}
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
  const [notifClicked, setNotifClicked] = useState<boolean>(false)

  const { users, currentUser, currentUserRef } = useUsers();
  const [showNotifs, setShowNotifs] = useState(window.outerWidth < 1024);

  const isMobile = window.outerWidth < 1024;



  useEffect(() => {
    const handleResize = () => setShowNotifs(window.outerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  return (
    <div className="w-full min-h-screen  p-4">
      {showNotifs && (

      <HandleNotifs
        notifications={notifications}
        clearNotifs={clearNotifs}
      />
      )}
    </div>
  );
};

export default Notification;

