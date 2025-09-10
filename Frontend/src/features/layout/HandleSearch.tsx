import React, { useState } from "react";
import { UserPlus, X } from "lucide-react";
import { User } from "../Chat/types/User";

interface HandleSearchProps {
  showSearch: boolean;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  result: User[];
  currentUser: string;
}

const HandleSearch: React.FC<HandleSearchProps> = ({ showSearch, setQuery, result, currentUser }) => {
  const [sentRequests, setSentRequests] = useState<Record<string, boolean>>({});
    
    const handleSendRequest = async (username: string) => {
        try {
        const res = await fetch("http://e3r1p1.1337.ma:3000/friends/sendrequest", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ frined_username: username }),
            credentials: "include",
        });

        await res.json();
        setSentRequests((prev) => ({ ...prev, [username]: true }));
        } catch (err) {
        console.error("Error sending request:", err);
        } 
    };

  if (!showSearch)
    return null;

  return (
    <div
      className="absolute top-full mt-2 p-4 z-50 w-[500px] bg-[#222831] bg-opacity-85 rounded-xl flex flex-col items-center justify-center"
      onClick={(e) => e.stopPropagation()}
    >
      {result.length > 0 ? (
        result.map((user, idx) => (
          <div
            key={idx}
            className="p-4 w-full mb-2 bg-[#222831] text-white flex items-center rounded-3xl border border-[#393E46]/50 hover:border-[#0077FF]/50"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <img
                src={user.image_url}
                className="size-12 flex-shrink-0 rounded-full border-2 border-white"
                alt="player profile"
              />
              <strong className="text-white text-lg font-bold max-lg:text-sm truncate">
                {user.username}
              </strong>
            </div>

            <div className="flex flex-1 items-center justify-end gap-4">
              <button
                className="bg-[#0077FF] text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-2"
                onClick={() => handleSendRequest(user.username)}
              >
                {!sentRequests[user.username] ? (
                  <>
                    <UserPlus size={16} /> Add Friend
                  </>
                ) : (
                  <>
                    <X size={16} /> Request Sent
                  </>
                )}
              </button>
            </div>
          </div>
        ))
      ) : (
        <span className="text-blue-400">No matching users</span>
      )}
    </div>
  );
};

export default HandleSearch;
