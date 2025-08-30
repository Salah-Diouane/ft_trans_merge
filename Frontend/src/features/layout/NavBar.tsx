import React, { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { Notification02Icon } from "hugeicons-react";
import { useStore } from "../../store/store";
import HandleSearch from "./handleSearch";
import { useUsers } from "./useUsers";
import { User } from "../Chat/types/User";
import socket from "../Chat/services/socket";

const NavBar: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<User[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const store = useStore();
  const { users, currentUser, currentUserRef } = useUsers();

  useEffect( () => {
    if (!socket.connect())
      socket.connect()
  }, [])

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
        <div className="flex items-center bg-[#393E46] px-3 py-3 rounded-2xl w-[500px]">
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

      <div className="flex items-center gap-6 w-1/3 justify-end">
        <Notification02Icon className="size-8 hover:text-[#00ADB5] cursor-pointer max-sm:hidden" />
        <img
          src={store.image_url}
          className="size-12 rounded-full hover:text-[#00ADB5] cursor-pointer max-sm:hidden"
          alt="Profile"
        />
      </div>
    </nav>
  );
};

export default NavBar;
