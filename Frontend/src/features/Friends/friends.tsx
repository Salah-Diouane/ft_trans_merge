import React, { useEffect, useRef, useState } from "react";
import { Search, MessageCircle, UserCheck, UserX, Clock, Shield, Users, Send, UserPlus, X } from "lucide-react";
import { User } from "../Chat/types/User";
import { useUsers } from "../layout/useUsers";
import { useNavigate, useParams } from "react-router-dom";
import socket from "../Chat/services/socket";

const OnlineStatusIcon: React.FC<{ isOnline: boolean; size?: number }> = ({ isOnline, size = 12 }) => {
  console.log("======================is online======================", isOnline);
  return (
    <div className="relative">
      <div
        className={`w-${size / 4} h-${size / 4} rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'} border-2 border-[#222831]`}
        style={{ width: size, height: size }}
      />
    </div>
  );
};

interface FriendCardProps {
  name: string;
  id: number;
  status: "sent" | "request" | "blocked" | "all";
  isOnline: boolean;
  image_url: string;
  onAccept?: (username: string) => void;
  onReject?: (username: string) => void;
  onCancel?: (username: string) => void;
  unblockUser?: (username: string) => void;
}

const FriendCard: React.FC<FriendCardProps> = ({
  name,
  id,
  status,
  image_url,
  isOnline,
  onAccept,
  onReject,
  onCancel,
  unblockUser,
}) => {
  const navigate = useNavigate();
  console.log("name : ", name);
  console.log("isOnline : ", isOnline);
  console.log("status : ", status);
  return (
    <div className="flex items-center p-3 xs:p-4 bg-[#222831] m-2 h-16 rounded-3xl border border-[#393E46]/50 hover:border-[#0077FF]/50 transition-all duration-300 justify-between">

      {status === "all" ? (
        <div className="flex items-center gap-2 xs:gap-4 flex-shrink min-w-0">
          <img src={image_url} className="size-12 rounded-full border-2 border-white flex-shrink-0" alt="profile" />
          <div className="flex flex-col h-12 min-w-0">
            <strong className="text-white text-lg font-bold truncate">{name}</strong>
            <span className="text-gray-400 text-sm flex items-center gap-x-2">
              <OnlineStatusIcon isOnline={isOnline} />
              {isOnline ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 flex-shrink min-w-0">
          <img src={image_url} className="size-8 xs:size-10 sm:size-12 rounded-full border-2 border-white flex-shrink-0" alt="profile" />
          <p className="font-russo text-white truncate max-w-[200px] leading-tight p-2">{name}</p>
        </div>
      )}

      <div className="flex items-center justify-end gap-2">
        {status === "sent" && (
          <>
            <button className="bg-[#0077FF] text-white p-2 rounded-full text-xs font-semibold flex items-center gap-2">
              <Clock size={20} /> Sent
            </button>
            <button
              className="bg-red-500 text-white p-2 rounded-full text-xs font-semibold flex items-center gap-2"
              onClick={() => onCancel?.(name)}
            >
              <X size={20} /> Cancel
            </button>
          </>
        )}

        {status === "request" && (
          <>
            <button
              className="bg-[#0077FF] text-white p-2 rounded-full text-xs font-semibold flex items-center gap-2"
              onClick={() => onAccept?.(name)}
            >
              <UserCheck size={20} /> Accept
            </button>
            <button
              className="bg-red-500 text-white p-2 rounded-full text-xs font-semibold flex items-center gap-2"
              onClick={() => onReject?.(name)}
            >
              <UserX size={20} /> Reject
            </button>
          </>
        )}

        {status === "blocked" && (
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-semibold flex items-center gap-3"
            onClick={() => unblockUser?.(name)}
          >
            <Shield size={20} /> Unblock
          </button>
        )}

        {status === "all" && (
          <button className="bg-[#0077FF] text-white py-2 px-4 rounded-full text-sm font-semibold flex items-center gap-2" onClick={() => navigate(`/chat/${id}`)}>
            {/* <MessageCircle size={16} onClick={() => navigate(`/chat/${id}`)} /> Chat */}
            <MessageCircle size={16}  /> Chat
          </button>
        )}
      </div>
    </div>
  );
};

const FriendList: React.FC<{ status: FriendCardProps["status"] }> = ({ status }) => {
  const [friends, setFriends] = useState<User[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [allreqs, setAllreqs] = useState<User[]>([]);
  const [allBlocked, setAllBlocked] = useState<User[]>([]);
  const [dataUpdate, setDataUpdate] = useState<boolean>(false);

  useEffect(() => {
    
    const fetchRequest = async () => {
      const res = await fetch("http://e3r10p10.1337.ma:3000/friends/allsendreq", { credentials: "include" });
      const data = await res.json();
      setFriends(Array.isArray(data) ? data : []);
    };

    const myAllfriends = async () => {
      const res = await fetch("http://e3r10p10.1337.ma:3000/friends/allfriends", { credentials: "include" });
      const data = await res.json();
      setAllUsers(data);
    };

    const allRecvReq = async () => {
      const res = await fetch("http://e3r10p10.1337.ma:3000/friends/allrecvreq", { credentials: "include" });
      const data = await res.json();
      setAllreqs(Array.isArray(data) ? data : []);
    };

    const allBlocked = async () => {
      const res = await fetch("http://e3r10p10.1337.ma:3000/friends/blockReq", { credentials: "include" });
      const data = await res.json();
      console.log("all blocked : ", data);
      setAllBlocked(Array.isArray(data) ? data : []);
    };

    if (status === "sent")
        fetchRequest();
    if (status === "all")
        myAllfriends();
    if (status === "request")
        allRecvReq();
    if (status === "blocked")
        allBlocked();

  }, [status, dataUpdate]);

  const handleAccept = async (username: string) => {

    await fetch("http://e3r10p10.1337.ma:3000/friends/acceptrequest", {

      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ frined_username: username }),
      credentials: "include",

    });

    setAllreqs(prev => prev.filter(u => u.username !== username));
    setDataUpdate(true);

  };

  const handleReject = async (username: string) => {

    await fetch("http://e3r10p10.1337.ma:3000/friends/deletereq", {

      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ frined_username: username, type: "receiv" }),
      credentials: "include",

    });

    setAllreqs(prev => prev.filter(u => u.username !== username));
    setDataUpdate(true);

  };

  const handleCancel = async (username: string) => {

    await fetch("http://e3r10p10.1337.ma:3000/friends/deletereq", {

      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ frined_username: username, type: "send" }),
      credentials: "include",

    });

    setFriends(prev => prev.filter(u => u.username !== username));
    setDataUpdate(true);

  };

  const unblockUser = async (username: string) => {
    console.log(" in unblock !!!")
    await fetch("http://e3r10p10.1337.ma:3000/friends/unblockUser", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ frined_username: username, type: "send" }),
      credentials: "include",
    })
    setDataUpdate(true);
  }
console.log("all user : ", allUsers);
  return (
    <div className="flex flex-col font-russo text-base sm:text-lg ">
      <div className="sticky top-12 z-20 px-14 pt-4 pb-4 bg-[#393E46]">
        <div className="flex items-center bg-[#222831] rounded-full px-4 h-12 shadow-md">
          <Search className="text-gray-400 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search Friends by username"
            className="bg-transparent text-white placeholder-gray-500 outline-none w-full text-sm"
          />
        </div>
      </div>

        <div className="flex flex-col ">
            {status === "sent" && friends.length > 0 ? (

                friends.map(user => (
                <FriendCard key={user.username} name={user.username} id={user.id} image_url={user.image_url} isOnline={user.online} status="sent" onCancel={handleCancel} />
                ))

            ) : status === "all" && allUsers.length > 0 ? (

                allUsers.map(user => (
                <FriendCard key={user.username} name={user.username} id={user.id} image_url={user.image_url} isOnline={user.online} status="all" />
                ))
                // <></>

            ) : status === "request" && allreqs.length > 0 ? (

                allreqs.map(user => (
                <FriendCard key={user.username} name={user.username} id={user.id} image_url={user.image_url} isOnline={user.online} status="request" onAccept={handleAccept} onReject={handleReject} />
                ))

            )  : status === "blocked" && allBlocked.length > 0 ? (

                allBlocked.map(user => (
                <FriendCard key={user.username} name={user.username} id={user.id} image_url={user.image_url} isOnline={user.online} status="blocked" unblockUser={unblockUser} />
                ))

            ): (

                <p className="text-gray-400 text-center">No users found</p>
                
            )}
        </div>
    </div>
  );
};

const Friends: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "sent" | "request" | "blocked">("all");

  const tabs = [
    { key: "all", label: "All", icon: <Users size={15} /> },
    { key: "sent", label: "Sent", icon: <Send size={15} /> },
    { key: "request", label: "Requests", icon: <UserPlus size={15} /> },
    { key: "blocked", label: "Blocked", icon: <Shield size={15} /> },
  ] as const;
  // useEffect(() => {
  //   if (!socket.connected)
  //     socket.connect();
  // }, []);
  return (
    <div className="pt-10 flex justify-center">
      <div className="mx-auto h-full w-full 2xl:w-[70%] xl:w-[60%] lg:w-[80%] md:w-[90%] flex flex-col rounded-2xl p-2 bg-[#393E46]">
        <div className="sticky top-0 z-30 h-12 flex flex-row justify-center gap-4 items-center bg-[#393E46]">
          {tabs.map(({ key, label, icon }) => (
            <div
              key={key}
              onClick={() => setActiveTab(key)}
              className={`${activeTab === key ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-white hover:text-blue-600"} cursor-pointer font-russo text-sm flex items-center gap-1`}
            >
              {icon}
              <span>{label}</span>
            </div>
          ))}
        </div>
        <FriendList status={activeTab} />
      </div>
    </div>
  );
};

export default Friends;
