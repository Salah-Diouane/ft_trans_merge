
import React, { useState } from "react";
import { useStore } from "../../store/store";
import { Search, MessageCircle, UserCheck, UserX, Clock, Shield, Users, Send, UserPlus, X} from "lucide-react";

const OnlineStatusIcon: React.FC<{ isOnline: boolean; size?: number }> = ({
    isOnline,
    size = 12,
}) => (
    <div className="relative">
        <div
            className={`rounded-full ${isOnline ? "bg-green-500" : "bg-red-500"} border-2 border-[#222831]`}
            style={{ width: size, height: size }}
            title={isOnline ? "Online" : "Offline"}
        />
        {isOnline && (
            <div
                className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"
                style={{ width: size, height: size }}
            />
        )}
    </div>
);

interface FriendCardProps {
    name: string;
    status?: "sent" | "request" | "blocked" | "all";
    isOnline?: boolean;
}

const FriendCard: React.FC<FriendCardProps> = ({ name, status, isOnline = true }) => {
    const store = useStore();

    return (
        <div className="flex items-center p-3 xs:p-4 bg-[#222831] m-2 h-16 rounded-3xl border border-[#393E46]/50 hover:border-[#0077FF]/50 transition-all duration-300 justify-between">

            {status === "all" ? (
                <div className="flex items-center  gap-2 xs:gap-4 flex-shrink min-w-0">
                    <img
                        src={store.image_url}
                        className="size-12 rounded-full border-2 border-white flex-shrink-0"
                        alt="player profile"
                    />

                    <div className="flex flex-col h-12 min-w-0">
                        <strong className="text-white text-lg font-bold max-lg:text-sm truncate">
                            {name}
                        </strong>

                        {status === "all" && (
                            <span className="text-gray-400 text-sm max-lg:text-xs flex items-center gap-x-2">
                                <OnlineStatusIcon isOnline={isOnline} />
                                {isOnline ? "Online" : "Offline"}
                            </span>

                        )}

                    </div>
                </div>
            ) : (
                <div className="flex items-center gap-2 xs:gap-4 flex-shrink min-w-0">
                    <img
                        src={store.image_url}
                        className="size-8 xs:size-10 sm:size-12 rounded-full border-2 border-white flex-shrink-0"
                        alt="player profile"
                    />
                    <p className="font-russo text-white truncate  max-w-[200px]  leading-tight p-2">
                        {name}
                    </p>

                </div>
            )}

            <div className="flex items-center justify-end gap-2">
                {status === "sent" && (
                    <>
                        <button className="flex-1 bg-[#0077FF] text-white p-2 rounded-full text-xs font-semibold hover:bg-opacity-80 transition-colors flex items-center justify-center gap-2">
                            <Clock size={24} />  Sent
                        </button>
                        <button className="flex-1 bg-red-500 text-white p-2 rounded-full text-xs font-semibold hover:bg-opacity-80 transition-colors flex items-center justify-center gap-2">
                            <X size={24} /> Cancel
                        </button>
                    </>
                )}

                {status === "request" && (
                    <>
                        <button className="flex-1 bg-[#0077FF] text-white p-2 rounded-full text-xs font-semibold hover:bg-opacity-80 transition-colors flex items-center justify-center gap-2">
                            <UserCheck size={24} /> Accept
                        </button>
                        <button className="flex-1 bg-red-500 text-white p-2 rounded-full text-xs font-semibold hover:bg-opacity-80 transition-colors flex items-center justify-center gap-2">
                            <UserX size={24} /> Reject
                        </button>
                    </>
                )}

                {status === "blocked" && (
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-3">
                        <Shield size={20} /> Unblock
                    </button>
                )}

                {status === "all" && (
                    <button className="bg-[#0077FF] text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-2">
                        <MessageCircle size={16} /> Chat
                    </button>
                )}
            </div>
        </div>
    );
};


const FriendList: React.FC<{ status: FriendCardProps["status"] }> = ({ status }) => (
    <div className="flex flex-col font-russo text-base sm:text-lg ">

        <div className="sticky top-12 z-20 px-14  pt-4 pb-4 bg-[#393E46]">
            <div className="flex items-center bg-[#222831] rounded-full px-4 h-12 shadow-md">
                <Search className="text-gray-400 mr-2" size={20} />
                <input
                    type="text"
                    placeholder="Search Friends by username"
                    className="bg-transparent text-white placeholder-gray-500 outline-none w-full text-sm 2xl:text-2xl xl:text-xl lg:text-2xl md:text-xl"
                />
            </div>
        </div>

        {[...Array(100)].map((_, i) => (
            <FriendCard key={i} name="Salah" status={status} />
        ))}
    </div>
);


const Friends: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"all" | "sent" | "request" | "blocked">("all");

    const tabs = [
        { key: "all", label: "All", icon: <Users className="size=15"  /> },
        { key: "sent", label: "Sent", icon: <Send className="size=15" /> },
        { key: "request", label: "Requests", icon: <UserPlus className="size=15" /> },
        { key: "blocked", label: "Blocked", icon: <Shield className="size=15" /> },
    ] as const;

    return (
        <div className="pt-10 flex justify-center  ">

            <div className=" mx-auto h-full w-full 2xl:w-[70%] xl:w-[60%] lg:w-[80%] md:w-[90%] flex flex-col rounded-2xl p-2 lg:w-f bg-[#393E46] ">

                <div className="sticky top-0 z-30 h-12  flex flex-row justify-center gap-4 items-center bg-[#393E46]">
                    {tabs.map(({ key, label, icon }) => (
                        <div
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`${activeTab === key
                                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                                : "text-white hover:text-blue-600"
                                } cursor-pointer font-russo text-sm 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl  flex items-center gap-1`}
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
