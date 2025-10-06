import React, { useEffect, useRef, useState } from "react";
import { Link, Search, UserCheck, UserX } from "lucide-react";
import { Notification02Icon } from "hugeicons-react";
import { useStore } from "../../store/store";
import HandleSearch from "./HandleSearch";
import { useUsers } from "./useUsers";
import { User } from "../Chat/types/User";
import socket from "../Chat/services/socket";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { RiPingPongFill } from "react-icons/ri";

interface HandleNotifsProps {
  setShowNotifs: React.Dispatch<React.SetStateAction<boolean>>;
  notifications: any[];
  clearNotifs: () => void;
}

const HandleNotifs: React.FC<HandleNotifsProps> = ({
  setShowNotifs,
  notifications,
  clearNotifs,
}) => {
  const navigate = useNavigate();

  const filteredNotifications = notifications.filter(
    (notif) => notif.type !== "pong_invite"
  );

  const getType = (notif: any) => {
    switch (notif.type) {
      case "friend_request":
        return "Friend Request";
      case "friend_request_accepted":
        return "Request Accepted";
      case "Invite":
        return "Invite";
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
      case "Invite":
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
    <div className="absolute top-16 right-24 flex flex-col w-[380px] max-h-[500px] bg-[#222831] bg-opacity-90 text-black rounded-2xl shadow-2xl border border-gray-700 z-[99999] overflow-hidden  custom-scroll">
      <div className="flex justify-between items-center px-6 py-4 bg-gray-800 border-b border-gray-700">
        <div>
          <h2 className="text-2xl font-extrabold text-white">Notifications</h2>
          <p className="text-sm font-light text-gray-400 mt-1">
            {filteredNotifications?.length || 0}{" "}
            {(filteredNotifications?.length || 0) === 1
              ? "new alert"
              : "new alerts"}
          </p>
        </div>
        <button
          onClick={clearNotifs}
          className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white rounded-xl transition-all duration-300"
        >
          Clear All
        </button>
        <button
          onClick={() => setShowNotifs(false)}
          className="p-2 text-xs font-semibold text-gray-400 hover:text-white rounded-xl transition-all duration-300"
        >
          Close
        </button>
      </div>

      <div className="flex-1 overflow-y-auto max-h-[70vh] p-4 space-y-3">
        {(filteredNotifications?.length || 0) === 0 ? (
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
          (filteredNotifications || []).map((notif, i) => (
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

              {notif.type !== "Invite" && (
                <p className="text-sm text-gray-400 mb-3 leading-relaxed truncate max-w-60">
                  {notif.text || notif.message || "No message"}
                </p>
              )}

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

const NavBar: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifs, setShowNotifs] = useState<boolean>(false);
  const [unreadCount, setUnreadCount] = useState<number>(0);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<User[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [notifClicked, setNotifClicked] = useState<boolean>(false);
  const location = useLocation();
  const store = useStore();
  const { users, currentUser, currentUserRef } = useUsers();
  const navigate = useNavigate();
  const nav = useNavigate();
  const isMobile = window.innerWidth < 1024;
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

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
      if (notif.temporary && notif.type === "pong_invite") {
        console.log("🏓 Received pong invite:", notif);

        // Show toast notification with accept/decline buttons
        toast.custom(
          (t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-[#393E46] shadow-lg rounded-xl pointer-events-auto ring-1 ring-black ring-opacity-5 p-4`}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <RiPingPongFill className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white">Pong Challenge!</p>
                  <p className="text-sm text-gray-300">
                    {notif.sender} wants to play
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => {
                    // handleAcceptPongInvite(notification);
                    toast.dismiss(t.id);
                  }}
                  className="flex-1 px-3 py-2 bg-green-500/20 text-green-400 rounded-lg font-medium hover:bg-green-500/30 transition-colors"
                >
                  Accept
                </button>
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                  }}
                  className="flex-1 px-3 py-2 bg-red-500/20 text-red-400 rounded-lg font-medium hover:bg-red-500/30 transition-colors"
                >
                  Decline
                </button>
              </div>
            </div>
          ),
          {
            duration: 15000, // 15 seconds
            position: "top-right",
          }
        );
      } else {
        setNotifications((prev) => [notif.messageData || notif, ...prev]);
        setUnreadCount((prev) => prev + 1);
      }
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false);
        setShowNotifs(false);
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
      if (e.metaKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setShowSearch(true);
      }
      if (e.key === "Escape") {
        setShowSearch(false);
        setQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleInviteResponse = (data: {
      accepted: boolean;
      message: string;
      opponent: string;
    }) => {
      if (data.accepted) {
        toast.success(data.message, {
          icon: "🏓",
          duration: 0,
        });
      } else {
        toast.error(data.message, {
          icon: "😔",
          duration: 4000,
        });
      }
    };

    socket.on("invite-response", handleInviteResponse);
    socket.on("invite-sent", (data) => {
      toast.success(`Pong invite sent to ${data.opponent || "opponent"}!`, {
        icon: "🏓",
        duration: 3000,
      });
    });

    return () => {
      socket.off("invite-response", handleInviteResponse);
      socket.off("invite-sent");
    };
  }, []);

  useEffect(() => {
    const handlePongInviteNotification = (notification: any) => {
      console.log("🏓 Received pong invite notification:", notification);

      // Check if this notification is for the current user
      socket.emit("get-my-profile");
      socket.once("profile-data", (user: any) => {
        if (user?.id && user.id === notification.recipientId) {
          console.log("🎯 Notification is for current user");

          // Extract roomId from the text field (format: "roomId:senderName")
          const [gameRoomId, senderName] = notification.text.split(":");

          // Show toast notification with accept/decline buttons
          toast.custom(
            (t) => (
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } max-w-md w-full bg-[#393E46] shadow-lg rounded-xl pointer-events-auto ring-1 ring-black ring-opacity-5 p-4`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <RiPingPongFill className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white">Pong Challenge!</p>
                    <p className="text-sm text-gray-300">
                      {senderName} wants to play
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => {
                      // Accept invite
                      socket.emit("accept-invite", {
                        roomId: gameRoomId,
                        playerName: String(user.id),
                      });

                      // Navigate to game
                      navigate(`/game/ping-pong/invite/${gameRoomId}`);

                      // Show success message and dismiss toast
                      toast.success(
                        `Accepted ${senderName}'s Pong challenge!`,
                        {
                          icon: "🏓",
                          style: {
                            background: "#22c55e",
                            color: "white",
                          },
                        }
                      );
                      toast.dismiss(t.id);
                    }}
                    className="flex-1 px-3 py-2 bg-green-500/20 text-green-400 rounded-lg font-medium hover:bg-green-500/30 transition-colors"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => {
                      // Decline invite
                      toast.error(`Declined ${senderName}'s Pong challenge`, {
                        icon: "❌",
                        style: {
                          background: "#ef4444",
                          color: "white",
                        },
                      });
                      toast.dismiss(t.id);
                      if (notification) {
                        const id: string = user?.id;
                        console.log("Genz gameRoomId", gameRoomId);
                        console.log("Genz id ", id);
                        socket.emit("refuse-invite", {
                          roomId: gameRoomId,
                          playerName: id,
                        });
                      }
                    }}
                    className="flex-1 px-3 py-2 bg-red-500/20 text-red-400 rounded-lg font-medium hover:bg-red-500/30 transition-colors"
                  >
                    Decline
                  </button>
                </div>
              </div>
            ),
            {
              duration: 15000, // 15 seconds
              position: "top-right",
            }
          );
        }
      });
    };

    socket.on("pong-invite-notification", handlePongInviteNotification);

    return () => {
      socket.off("pong-invite-notification", handlePongInviteNotification);
    };
  }, [navigate]);

  useEffect(() => {
    const handleGameStarting = (data: any) => {
      console.log("🚀 Game starting event received in NavBar:", data);

      // Dismiss any existing pong-related toasts
      toast.dismiss();

      // Navigate to the game
      navigate(`/game/ping-pong/invite/${data.roomId}`);

      toast.success("Game is starting!", {
        icon: "🎮",
        duration: 2000,
      });
    };

    socket.on("game-starting", handleGameStarting);

    return () => {
      socket.off("game-starting", handleGameStarting);
    };
  }, [navigate]);

  let in_chat: boolean = false;

  if (
    (location.pathname === "/chat" ||
      /^\/chat\/[^/]+$/.test(location.pathname)) &&
    isMobile
  ) {
    in_chat = true;
  }

  console.log("in_chat :", in_chat);
  return (
    <>
      {!in_chat && (
        <nav className="flex items-center  justify-between text-white w-full h-14 px-4  mt-5 mb-4">
          <div className="w-1/3 max-lg:w-1 " />

          <div
            className="relative flex justify-center w-1/3  m-3 mt-6 mb-6 max-lg:w-full "
            ref={searchRef}
          >
            <div className="relative flex items-center bg-[#393E46] px-3 py-3 rounded-2xl w-full max-w-auto">
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

            <HandleSearch showSearch={showSearch} result={result} />
          </div>

          <div className="relative flex items-center gap-6 w-1/3 justify-end max-lg:hidden">
            <div>
              <Notification02Icon
                className="size-8 hover:text-blue-700  cursor-pointer max-sm:hidden"
                onClick={(e) => {
                  setShowNotifs(true);
                  setNotifClicked(false);
                  setUnreadCount(0);
                }}
              />

              {unreadCount > 0 && (
                <span className="absolute -top-1 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {unreadCount}
                </span>
              )}
            </div>

            <div className="relative  font-russo">
              <img
                src={store.image_url}
                alt="Profile"
                className="size-12 rounded-full hover:ring-2  cursor-pointer max-sm:hidden transition"
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              />
              {showProfileDropdown && (
                <div className="absolute right-7 mt-1 w-44 bg-[#393E46] rounded-lg shadow-lg text-white z-50  ">
                  <button
                    onClick={() => {
                      setShowProfileDropdown(false);
                      console.log("the username : ", store.username);
                      nav(`/profile/${store.username}`);
                    }}
                    className="block w-full text-left px-4 py-3 hover:bg-blue-700 hover:text-black transition font-semibold rounded-t-lg"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => nav("/logout")}
                    className="block w-full text-left px-4 py-3 hover:bg-blue-700 hover:text-black transition font-semibold rounded-b-lg"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {showNotifs && (
            <HandleNotifs
              setShowNotifs={setShowNotifs}
              notifications={notifications}
              clearNotifs={() => {
                clearNotifs();
              }}
            />
          )}
        </nav>
      )}
    </>
  );
};

export default NavBar;
