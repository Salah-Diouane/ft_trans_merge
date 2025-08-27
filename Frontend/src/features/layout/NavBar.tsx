
import React, { useEffect, useRef, useState } from "react";
import { Notification02Icon } from "hugeicons-react";
import meProfile from "../Assets/me.jpeg";
import { useStore } from "../../store/store"
import { Search, UserPlus } from "lucide-react";
interface handleSearchProps {
  showSearch: boolean,
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  result: User[]
}

interface User {
  name: string,
}

const Users = [
  { name: "Salah" },
  { name: "Salah diouaneSalah diouaneSalah diouaneSalah diouaneSalah diouaneSalah diouaneSalah diouaneSalah diouaneSalah diouaneSalah diouaneSalah diouaneSalah diouaneSalah diouaneSalah diouaneSalah diouaneSalah diouaneSalah diouaneSalah diouaneSalah diouaneSalah diouane" },
  { name: "Salah eddine" },
  { name: "Salah eddine00" },
  { name: "Adam" },
  { name: "Ahmed" },
  { name: "Omar" },
  { name: "12345" }
]


const HandleSearch: React.FC<handleSearchProps> = ({ showSearch, setShowSearch, setQuery, result }) => {

  const store = useStore()

  if (!showSearch)
    return null

  return (
    <div className="absolute top-full  mt-2 p-4 z-50 w-[500px]  bg-[#222831] bg-opacity-85  rounded-xl flex flex-col items-center justify-center"
      onClick={(e) => e.stopPropagation()}
    >
      {result.length > 0 ? (
        result.map((user, idx) => (
          <div
            key={idx}
            className="p-4 w-full mb-2 bg-[#222831] text-white  flex  items-center rounded-3xl  border border-[#393E46]/50 hover:border-[#0077FF]/50 "
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <img
                src={store.image_url}
                className="size-12 flex-shrink-0 rounded-full border-2 border-white"
                alt="player profile"
              />
              <strong className="text-white text-lg font-bold max-lg:text-sm truncate">
                {user.name}
              </strong>
            </div>


            <div className='flex flex-1 items-center justify-end gap-4'>
              <button className="bg-[#0077FF] text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-2"
                onClick={() => {
                  // setShowSearch(false),
                  // setQuery("")
                }}
              >
                <UserPlus size={16} />
                Add Friend
              </button>

            </div>
          </div>
        ))
      ) : (
        <span className="text-blue-400">No matching users</span>
      )}
      {/* <span className="text-blue-400">No recent searches</span> */}

    </div>
  )
}

const NavBar: React.FC = () => {

  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("")
  const [result, setResult] = useState<User[]>([])
  const store = useStore()
  const searchRef = useRef<HTMLDivElement>(null);
  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearch(false);
        setQuery("")
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey) && e.key.toLowerCase() === "k") {
        // e.preventDefault();
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

  useEffect(() => {

    if (query.trim() === "")
      setResult([]);
    else {
      const filteredUsers = Users.filter(
        (user) =>
          user.name.toLowerCase().includes(query.toLowerCase()) &&
          user.name !== query
      );
      setResult(filteredUsers)
    }

    // setQuery("")
  }, [query])

  return (
    <nav className="flex items-center justify-between text-white w-full h-14 px-4 max-lg:hidden mt-5 mb-4">
      <div className="w-1/3" />

      <div className="relative flex justify-center w-1/3   -ml-25 max-sm:w-full max-sm:ml-0 m-3 mt-6 mb-6" ref={searchRef}>
        <div className="flex items-center  bg-[#393E46] px-3 py-3 rounded-2xl w-[500px]">
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
        <HandleSearch showSearch={showSearch} setShowSearch={setShowSearch} setQuery={setQuery} result={result} />
        {/* {setShowSearch(false)} */}
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




