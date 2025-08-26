// import React, { useState } from 'react';
// import { useStore } from "../../store/store"
// import { Search, MessageCircle, UserMinus, UserCheck, UserX, Clock, Shield, Users, Send, UserPlus } from "lucide-react";

// const OnlineStatusIcon: React.FC<{ isOnline: boolean; size?: number }> = ({ isOnline, size = 12 }) => {
//     return (
//         <div className="relative">
//             <div
//                 className={`w-${size / 4} h-${size / 4} rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'} border-2 border-[#222831]`}
//                 style={{ width: size, height: size }}
//                 title={isOnline ? 'Online' : 'Offline'}
//             />
//             {isOnline && (
//                 <div
//                     className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"
//                     style={{ width: size, height: size }}
//                 />
//             )}
//         </div>
//     );
// };

// const SectionFriendSend: React.FC = () => {
//     const store = useStore()
//     return (

//         <div className='flex items-center p-4 bg-[#222831] m-2 h-16 rounded-3xl  border border-[#393E46]/50 hover:border-[#0077FF]/50'>
//             <div className="flex items-start gap-5 w-1/6 ">
//                 <img src={store.image_url} className="size-12 rounded-full border-2 border-white" alt="player profile" />
//                 <div className="flex flex-col h-12">
//                     <strong className="text-white text-lg font-bold max-lg:text-sm">
//                         {"salah"}
//                     </strong>
//                     <strong className="text-gray-400 text-sm max-lg:text-xs flex items-center gap-x-2">
//                         <OnlineStatusIcon isOnline={true} />
//                         Online
//                     </strong>
//                 </div>
//             </div>

//             <div className='flex flex-1 items-center justify-end gap-4'>

//                 <div className="flex items-center gap-2 text-[#0077FF] ">
//                     <Clock size={20} />
//                     <span className="text-sm font-semibold">Request Sent</span>
//                 </div>

//             </div>
//         </div>

//     )
// }
// const SectionFriendRequest: React.FC = () => {
//     const store = useStore()
//     return (

//         <div className='flex items-center p-4 bg-[#222831] m-2 h-16 rounded-3xl  border border-[#393E46]/50 hover:border-[#0077FF]/50'>
//             <div className="flex items-start gap-5 w-1/6 ">
//                 <img src={store.image_url} className="size-12 rounded-full border-2 border-white" alt="player profile" />
//                 <div className="flex flex-col h-12">
//                     <strong className="text-white text-lg font-bold max-lg:text-sm">
//                         {"salah"}
//                     </strong>
//                     <strong className="text-gray-400 text-sm max-lg:text-xs flex items-center gap-x-2">
//                         <OnlineStatusIcon isOnline={true} />
//                         Online
//                     </strong>
//                 </div>
//             </div>

//             <div className='flex flex-1 items-center justify-end gap-4'>
//                 <button className="bg-[#0077FF] text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-2">
//                     <UserCheck size={16} />
//                     Accept
//                 </button>
//                 <button className="bg-red-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-2">
//                     <UserX size={16} />
//                     Reject
//                 </button>
//             </div>
//         </div>

//     )
// }

// const SectionFriendBlocked: React.FC = () => {
//     const store = useStore()
//     return (

//         <div className='flex items-center p-4 bg-[#222831] m-2 h-16 rounded-3xl  border border-[#393E46]/50 hover:border-[#0077FF]/50'>
//             <div className="flex items-start gap-5 w-1/6 ">
//                 <img src={store.image_url} className="size-12 rounded-full border-2 border-white" alt="player profile" />
//                 <div className="flex flex-col h-12">
//                     <strong className="text-white text-lg font-bold max-lg:text-sm">
//                         {"salah"}
//                     </strong>
//                     <strong className="text-gray-400 text-sm max-lg:text-xs flex items-center gap-x-2">
//                         <OnlineStatusIcon isOnline={true} />
//                         Online
//                     </strong>
//                 </div>
//             </div>

//             <div className='flex flex-1 items-center justify-end gap-4'>
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-3">
//                     <Shield size={20} />
//                     Unblock
//                 </button>
//             </div>
//         </div>

//     )
// }

// const SectionFriendAll: React.FC = () => {
//     const store = useStore()
//     return (

//         <div className='flex items-center p-4 bg-[#222831] m-2 h-16 rounded-3xl  border border-[#393E46]/50 hover:border-[#0077FF]/50'>
//             <div className="flex items-start gap-5 w-1/6 ">
//                 <img src={store.image_url} className="size-12 rounded-full border-2 border-white" alt="player profile" />
//                 <div className="flex flex-col h-12">
//                     <strong className="text-white text-lg font-bold max-lg:text-sm">
//                         {"salah"}
//                     </strong>
//                     <strong className="text-gray-400 text-sm max-lg:text-xs flex items-center gap-x-2">
//                         <OnlineStatusIcon isOnline={true} />
//                         Online
//                     </strong>
//                 </div>
//             </div>

//             <div className='flex flex-1 items-center justify-end gap-4'>
//                 <button className="bg-[#0077FF] text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-2" >
//                 <MessageCircle size={16} />
//                     Chat
//                 </button>
//                 {/* <button className="bg-red-500 text-white p-2 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors">
//                     <UserMinus size={18} />
//                 </button> */}
//             </div>
//         </div>

//     )
// }


// const All: React.FC = () => {
//     return (
//         <div className='bg-[#393E46] w-full h-[93%] mt-7 rounded-2xl p-4 overflow-hidden'>
//             <div className="sticky top-0 z-10  px-14  pt-4 pb-4  ">
//                 <div className="flex items-center bg-[#222831] rounded-full px-4 h-12 shadow-md ">
//                     <Search className="text-gray-400 mr-2" size={20} />
//                     <input
//                         type="text"
//                         placeholder="Search Friends by username "
//                         className="bg-transparent text-white placeholder-gray-500 outline-none w-full text-sm"
//                     />
//                 </div>
//             </div>
//             <SectionFriendAll />
//             <SectionFriendAll />
//             <SectionFriendAll />
//             <SectionFriendAll />
//             <SectionFriendAll />
//             <SectionFriendAll />
//             <SectionFriendAll />
//             <SectionFriendAll />
//         </div>
//     )
// }

// const Sent: React.FC = () => {
//     return (
//         <div className='bg-[#393E46] w-full h-[93%] mt-7 rounded-2xl p-4 overflow-hidden'>
//             <div className="sticky top-0 z-10  px-14  pt-4 pb-4  ">
//                 <div className="flex items-center bg-[#222831] rounded-full px-4 h-12 shadow-md ">
//                     <Search className="text-gray-400 mr-2" size={20} />
//                     <input
//                         type="text"
//                         placeholder="Search Friends by username "
//                         className="bg-transparent text-white placeholder-gray-500 outline-none w-full text-sm"
//                     />
//                 </div>
//             </div>
//             <SectionFriendSend />
//             <SectionFriendSend />
//             <SectionFriendSend />
//             <SectionFriendSend />
//             <SectionFriendSend />
//             <SectionFriendSend />
//             <SectionFriendSend />

//         </div>
//     )
// }

// const Requests: React.FC = () => {
//     return (
//         <div className='bg-[#393E46] w-full h-[93%] mt-7 rounded-2xl p-4 overflow-hidden'>
//             <div className="sticky top-0 z-10  px-14  pt-4 pb-4  ">
//                 <div className="flex items-center bg-[#222831] rounded-full px-4 h-12 shadow-md ">
//                     <Search className="text-gray-400 mr-2" size={20} />
//                     <input
//                         type="text"
//                         placeholder="Search Friends by username "
//                         className="bg-transparent text-white placeholder-gray-500 outline-none w-full text-sm"
//                     />
//                 </div>
//             </div>
//             <SectionFriendRequest />
//             <SectionFriendRequest />
//             <SectionFriendRequest />
//             <SectionFriendRequest />
//             <SectionFriendRequest />
//             <SectionFriendRequest />
//             <SectionFriendRequest />

//         </div>
//     )
// }
// const Blocked: React.FC = () => {
//     return (
//         <div className='bg-[#393E46] w-full h-[93%] mt-7 rounded-2xl p-4 overflow-hidden'>
//             <div className="sticky top-0 z-10  px-14  pt-4 pb-4  ">
//                 <div className="flex items-center bg-[#222831] rounded-full px-4 h-12 shadow-md ">
//                     <Search className="text-gray-400 mr-2" size={20} />
//                     <input
//                         type="text"
//                         placeholder="Search Friends by username "
//                         className="bg-transparent text-white placeholder-gray-500 outline-none w-full text-sm"
//                     />
//                 </div>
//             </div>
//             <SectionFriendBlocked />
//             <SectionFriendBlocked />
//             <SectionFriendBlocked />
//             <SectionFriendBlocked />
//             <SectionFriendBlocked />
//             <SectionFriendBlocked />
//             <SectionFriendBlocked />
//             <SectionFriendBlocked />

//         </div>
//     )

// }

// const Friends: React.FC = () => {
//     const [allClicked, setAllClicked] = useState<boolean>(true)
//     const [onlineClicked, setOnlineClicked] = useState<boolean>(false)
//     const [requestClicked, setRequestClicked] = useState<boolean>(false)
//     const [blockClicked, setBlockClicked] = useState<boolean>(false)

//     const handleAllClick = () => {
//         setAllClicked(true)
//         setBlockClicked(false)
//         setRequestClicked(false)
//         setOnlineClicked(false)
//     }
//     const handleOnlineClick = () => {
//         setOnlineClicked(true)
//         setBlockClicked(false)
//         setRequestClicked(false)
//         setAllClicked(false)
//     }
//     const handleReqClick = () => {
//         setRequestClicked(true)
//         setOnlineClicked(false)
//         setAllClicked(false)
//         setBlockClicked(false)
//     }
//     const handleBlockClick = () => {
//         setBlockClicked(true)
//         setRequestClicked(false)
//         setOnlineClicked(false)
//         setAllClicked(false)
//     }
    
//     return (
//         <div className="w-full h-full   bg-[#222831] p-40  " >
//             <div className="max-w-7xl mx-auto h-full flex flex-col">
//             <div className=" w-full h-6 rounded-2xl flex justify-center gap-24 p-2 items-center" >
//                 <div
//                     className={`${allClicked ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-white hover:text-blue-600"} cursor-pointer font-russo text-2xl flex items-center gap-3`}
//                     onClick={handleAllClick}
//                 >
//                     <Users size={20} />
//                     <span>All</span> 
//                 </div>
//                 <div
//                     className={`${onlineClicked ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-white hover:text-blue-600"} cursor-pointer font-russo text-2xl flex items-center gap-3`}
//                     onClick={handleOnlineClick}
//                 >
//                     <Send size={20} />
//                     <span>Sent</span> 
//                 </div>
//                 <div
//                     className={`${requestClicked ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-white hover:text-blue-600"} cursor-pointer font-russo text-2xl flex items-center gap-3`}
//                     onClick={handleReqClick}
//                 >
//                     <UserPlus size={20} />
//                     <span>Requests</span>  
//                 </div>
//                 <div
//                     className={`${blockClicked ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-white hover:text-blue-600"} cursor-pointer font-russo text-2xl flex items-center gap-3`}
//                     onClick={handleBlockClick}
//                     >
//                     <Shield size={20} /> 
//                     <span>Blocked</span>  
//                 </div>
//             </div>

//             {allClicked && !onlineClicked && !requestClicked && !blockClicked && (
//                 <All />
//             )}

//             {onlineClicked && !allClicked && !requestClicked && !blockClicked && (
//                 <Sent />
//             )}

//             {requestClicked && !allClicked && !blockClicked && !onlineClicked && (
//                 <Requests />
//             )}

//             {blockClicked && !onlineClicked && !allClicked && !requestClicked && (
//                 <Blocked />
//             )}


//         </div>
//         </div>


//     );
// };

// export default Friends;







import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Notification02Icon } from "hugeicons-react";
import { useStore } from "../../store/store";

const Users = [
  { name: "Salah" },
  { name: "Adam" },
  { name: "Ahmed" },
  { name: "Omar" },
];

interface HandleSearchProps {
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  results: { name: string }[];
}

const HandleSearch: React.FC<HandleSearchProps> = ({
  showSearch,
  setShowSearch,
  results,
}) => {
  if (!showSearch) return null;

  return (
    <div
      className="fixed inset-0 z-50 p-0 bg-[#222831] bg-opacity-85 flex items-center justify-center"
      onClick={() => setShowSearch(false)}
    >
      <div
        className="w-[50%] h-[50%] bg-[#393E46] rounded-2xl p-4 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-white text-lg mb-3">Search Results</h2>
        {results.length > 0 ? (
          results.map((user, idx) => (
            <div
              key={idx}
              className="p-2 mb-2 bg-[#222831] rounded-lg text-white"
            >
              {user.name}
            </div>
          ))
        ) : (
          <span className="text-blue-400">No matching users</span>
        )}
      </div>
    </div>
  );
};

const NavBar: React.FC = () => {
  const store = useStore();
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ name: string }[]>([]);

  // handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey && e.key.toLowerCase() === "k") {
        setShowSearch(true);
      }
      if (e.key === "Escape") {
        setShowSearch(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // update search results
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
    } else {
      const filtered = Users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  return (
    <nav className="flex items-center justify-between text-white w-full h-14 px-4 max-lg:hidden mt-5 mb-4">
      <div className="w-1/3" />

      {/* Search input always visible */}
      <div className="flex justify-center w-1/3 -ml-25 max-sm:w-full max-sm:ml-0 m-3 mt-6 mb-6">
        <div className="flex items-center bg-[#393E46] px-3 py-3 rounded-2xl w-[500px]">
          <Search className="w-5 h-5 text-amber-50 mr-3" />
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onFocus={() => setShowSearch(true)}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow bg-transparent text-white placeholder-blue-200 outline-none h-7 max-sm:w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-6 w-1/3 justify-end">
        <Notification02Icon className="size-8 hover:text-[#00ADB5] cursor-pointer max-sm:hidden" />
        <img
          src={store.image_url}
          className="size-12 rounded-full hover:text-[#00ADB5] cursor-pointer max-sm:hidden"
          alt="Profile"
        />
      </div>

      {/* Modal with results */}
      <HandleSearch
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        results={results}
      />
    </nav>
  );
};

export default NavBar;
