import React, { useState } from 'react';
import { useStore } from "../../store/store"
import { Search, MessageCircle, UserMinus, UserCheck, UserX, Clock, Shield, Users, Send, UserPlus, X } from "lucide-react";

const OnlineStatusIcon: React.FC<{ isOnline: boolean; size?: number }> = ({ isOnline, size = 12 }) => {
    return (
        <div className="relative">
            <div
                className={`w-${size / 4} h-${size / 4} rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'} border-2 border-[#222831]`}
                style={{ width: size, height: size }}
                title={isOnline ? 'Online' : 'Offline'}
            />
            {isOnline && (
                <div
                    className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"
                    style={{ width: size, height: size }}
                />
            )}
        </div>
    );
};

const SectionFriendSend: React.FC = () => {
    const store = useStore()
    return (

        <div className='flex items-center p-4 bg-[#222831] m-2 h-16 rounded-3xl  border border-[#393E46]/50 hover:border-[#0077FF]/50'>
            <div className="flex items-start gap-5 w-1/6 ">
                <img src={store.image_url} className="size-12 rounded-full border-2 border-white" alt="player profile" />
                <div className="flex flex-col h-12">
                    <strong className="text-white text-lg font-bold max-lg:text-sm">
                        {"salah"}
                    </strong>
                    <strong className="text-gray-400 text-sm max-lg:text-xs flex items-center gap-x-2">
                        <OnlineStatusIcon isOnline={true} />
                        Online
                    </strong>
                </div>
            </div>

            <div className='flex flex-1 items-center justify-end gap-4'>

                <div className="flex items-center gap-2 text-[#0077FF] ">

                    <button className="bg-[#0077FF] text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-2">
                    <Clock size={16} />
                    Request Sent
                </button>
                    <button className="bg-red-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-2">
                        <X size={16} />
                        cancel
                    </button>
                </div>

            </div>
        </div>

    )
}
const SectionFriendRequest: React.FC = () => {
    const store = useStore()
    return (

        <div className='flex items-center p-4 bg-[#222831] m-2 h-16 rounded-3xl  border border-[#393E46]/50 hover:border-[#0077FF]/50'>
            <div className="flex items-start gap-5 w-1/6 ">
                <img src={store.image_url} className="size-12 rounded-full border-2 border-white" alt="player profile" />
                <div className="flex flex-col h-12">
                    <strong className="text-white text-lg font-bold max-lg:text-sm">
                        {"salah"}
                    </strong>
                    <strong className="text-gray-400 text-sm max-lg:text-xs flex items-center gap-x-2">
                        <OnlineStatusIcon isOnline={true} />
                        Online
                    </strong>
                </div>
            </div>

            <div className='flex flex-1 items-center justify-end gap-4'>
                <button className="bg-[#0077FF] text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-2">
                    <UserCheck size={16} />
                    Accept
                </button>
                <button className="bg-red-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-2">
                    <UserX size={16} />
                    Reject
                </button>
            </div>
        </div>

    )
}

const SectionFriendBlocked: React.FC = () => {
    const store = useStore()
    return (

        <div className='flex items-center p-4 bg-[#222831] m-2 h-16 rounded-3xl  border border-[#393E46]/50 hover:border-[#0077FF]/50'>
            <div className="flex items-start gap-5 w-1/6 ">
                <img src={store.image_url} className="size-12 rounded-full border-2 border-white" alt="player profile" />
                <div className="flex flex-col h-12">
                    <strong className="text-white text-lg font-bold max-lg:text-sm">
                        {"salah"}
                    </strong>
                    <strong className="text-gray-400 text-sm max-lg:text-xs flex items-center gap-x-2">
                        <OnlineStatusIcon isOnline={true} />
                        Online
                    </strong>
                </div>
            </div>

            <div className='flex flex-1 items-center justify-end gap-4'>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-3">
                    <Shield size={20} />
                    Unblock
                </button>
            </div>
        </div>

    )
}

const SectionFriendAll: React.FC = () => {
    const store = useStore()
    return (

        <div className='flex items-center p-4 bg-[#222831] m-2 h-16 rounded-3xl  border border-[#393E46]/50 hover:border-[#0077FF]/50 max-md:bg-white'>
            <div className="flex items-start gap-5 w-1/6 ">
                <img src={store.image_url} className="size-12 rounded-full border-2 border-white" alt="player profile" />
                <div className="flex flex-col h-12">
                    <strong className="text-white text-lg font-bold max-lg:text-sm">
                        {"salah"}
                    </strong>
                    <strong className="text-gray-400 text-sm max-lg:text-xs flex items-center gap-x-2">
                        <OnlineStatusIcon isOnline={true} />
                        Online
                    </strong>
                </div>
            </div>

            <div className='flex flex-1 items-center justify-end gap-4'>
                <button className="bg-[#0077FF] text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-2" >
                    <MessageCircle size={16} />
                    Chat
                </button>
                {/* <button className="bg-red-500 text-white p-2 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors">
                    <UserMinus size={18} />
                </button> */}
            </div>
        </div>

    )
}


const All: React.FC = () => {
    return (
        <div className='bg-[#393E46] w-full h-[93%] mt-7 rounded-2xl p-4 overflow-hidden max-md:p-0 max-md:w-[80%] '>
            <div className="sticky top-0 z-10  px-14  pt-4 pb-4  ">
                <div className="flex items-center bg-[#222831] rounded-full px-4 h-12 shadow-md ">
                    <Search className="text-gray-400 mr-2" size={20} />
                    <input
                        type="text"
                        placeholder="Search Friends by username "
                        className="bg-transparent text-white placeholder-gray-500 outline-none w-full text-sm"
                    />
                </div>
            </div>
            <SectionFriendAll />
            <SectionFriendAll />
            <SectionFriendAll />
            <SectionFriendAll />
            <SectionFriendAll />
            <SectionFriendAll />
            <SectionFriendAll />
            <SectionFriendAll />
        </div>
    )
}

const Sent: React.FC = () => {
    return (
        <div className='bg-[#393E46] w-full h-[93%] mt-7 rounded-2xl p-4 overflow-hidden max-md:w-[80%]'>
            <div className="sticky top-0 z-10  px-14  pt-4 pb-4  ">
                <div className="flex items-center bg-[#222831] rounded-full px-4 h-12 shadow-md ">
                    <Search className="text-gray-400 mr-2" size={20} />
                    <input
                        type="text"
                        placeholder="Search Friends by username "
                        className="bg-transparent text-white placeholder-gray-500 outline-none w-full text-sm"
                    />
                </div>
            </div>
            <SectionFriendSend />
            <SectionFriendSend />
            <SectionFriendSend />
            <SectionFriendSend />
            <SectionFriendSend />
            <SectionFriendSend />
            <SectionFriendSend />

        </div>
    )
}

const Requests: React.FC = () => {
    return (
        <div className='bg-[#393E46] w-full h-[93%] mt-7 rounded-2xl p-4 overflow-hidden max-md:w-[80%]'>
            <div className="sticky top-0 z-10  px-14  pt-4 pb-4  ">
                <div className="flex items-center bg-[#222831] rounded-full px-4 h-12 shadow-md ">
                    <Search className="text-gray-400 mr-2" size={20} />
                    <input
                        type="text"
                        placeholder="Search Friends by username "
                        className="bg-transparent text-white placeholder-gray-500 outline-none w-full text-sm"
                    />
                </div>
            </div>
            <SectionFriendRequest />
            <SectionFriendRequest />
            <SectionFriendRequest />
            <SectionFriendRequest />
            <SectionFriendRequest />
            <SectionFriendRequest />
            <SectionFriendRequest />

        </div>
    )
}
const Blocked: React.FC = () => {
    return (
        <div className='bg-[#393E46] w-full h-[93%] mt-7 rounded-2xl p-4 overflow-hidden max-md:w-[80%]'>
            <div className="sticky top-0 z-10  px-14  pt-4 pb-4  ">
                <div className="flex items-center bg-[#222831] rounded-full px-4 h-12 shadow-md ">
                    <Search className="text-gray-400 mr-2" size={20} />
                    <input
                        type="text"
                        placeholder="Search Friends by username "
                        className="bg-transparent text-white placeholder-gray-500 outline-none w-full text-sm"
                    />
                </div>
            </div>
            <SectionFriendBlocked />
            <SectionFriendBlocked />
            <SectionFriendBlocked />
            <SectionFriendBlocked />
            <SectionFriendBlocked />
            <SectionFriendBlocked />
            <SectionFriendBlocked />
            <SectionFriendBlocked />

        </div>
    )

}

const Friends: React.FC = () => {
    const [allClicked, setAllClicked] = useState<boolean>(true)
    const [onlineClicked, setOnlineClicked] = useState<boolean>(false)
    const [requestClicked, setRequestClicked] = useState<boolean>(false)
    const [blockClicked, setBlockClicked] = useState<boolean>(false)

    const handleAllClick = () => {
        setAllClicked(true)
        setBlockClicked(false)
        setRequestClicked(false)
        setOnlineClicked(false)
    }
    const handleOnlineClick = () => {
        setOnlineClicked(true)
        setBlockClicked(false)
        setRequestClicked(false)
        setAllClicked(false)
    }
    const handleReqClick = () => {
        setRequestClicked(true)
        setOnlineClicked(false)
        setAllClicked(false)
        setBlockClicked(false)
    }
    const handleBlockClick = () => {
        setBlockClicked(true)
        setRequestClicked(false)
        setOnlineClicked(false)
        setAllClicked(false)
    }

    return (
        // <div className="w-full    bg-[#222831] pt-32  max-md:p-24 " >
        <div className="w-full    bg-[#222831] xs:p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 " >
            <div className="max-w-7xl mx-auto h-full flex flex-col max-md:p-0">
                <div className=" w-full h-6 rounded-2xl flex justify-center gap-2 items-center xs:gap-4 sm:gap-6 md:gap-8 lg:gap-12 p-1 xs:p-2" >
                    <div
                        className={`${allClicked ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-white hover:text-blue-600"} cursor-pointer font-russo text-2xl flex items-center gap-3`}
                        onClick={handleAllClick}
                    >
                        <Users size={20} />
                        <span>All</span>
                    </div>
                    <div
                        className={`${onlineClicked ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-white hover:text-blue-600"} cursor-pointer font-russo text-2xl flex items-center gap-3`}
                        onClick={handleOnlineClick}
                    >
                        <Send size={20} />
                        <span>Sent</span>
                    </div>
                    <div
                        className={`${requestClicked ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-white hover:text-blue-600"} cursor-pointer font-russo text-2xl flex items-center gap-3`}
                        onClick={handleReqClick}
                    >
                        <UserPlus size={20} />
                        <span>Requests</span>
                    </div>
                    <div
                        className={`${blockClicked ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-white hover:text-blue-600"} cursor-pointer font-russo text-2xl flex items-center gap-3`}
                        onClick={handleBlockClick}
                    >
                        <Shield size={20} />
                        <span>Blocked</span>
                    </div>
                </div>

                {allClicked && !onlineClicked && !requestClicked && !blockClicked && (
                    <All />
                )}

                {onlineClicked && !allClicked && !requestClicked && !blockClicked && (
                    <Sent />
                )}

                {requestClicked && !allClicked && !blockClicked && !onlineClicked && (
                    <Requests />
                )}

                {blockClicked && !onlineClicked && !allClicked && !requestClicked && (
                    <Blocked />
                )}


            </div>
        </div>


    );
};

export default Friends;







// import React, { useState } from 'react';
// import { useStore } from "../../store/store";
// import { Search, MessageCircle, UserCheck, UserX, Clock, Shield, Users, Send, UserPlus, X } from "lucide-react";

// const OnlineStatusIcon: React.FC<{ isOnline: boolean; size?: number }> = ({ isOnline, size = 12 }) => (
//     <div className="relative flex-shrink-0">
//         <div
//             className="rounded-full border-2 border-[#222831]"
//             style={{ width: size, height: size, backgroundColor: isOnline ? '#22c55e' : '#ef4444' }}
//             title={isOnline ? 'Online' : 'Offline'}
//         />
//         {isOnline && (
//             <div
//                 className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50"
//                 style={{ width: size, height: size }}
//             />
//         )}
//     </div>
// );

// interface FriendCardProps {
//     name: string;
//     isOnline: boolean;
//     type: 'all' | 'sent' | 'request' | 'blocked';
// }

// const FriendCard: React.FC<FriendCardProps> = ({ name, isOnline, type }) => {
//     const store = useStore();

//     return (
//         <div className='flex items-center p-2 xs:p-3 sm:p-4 bg-[#222831] m-1 xs:m-2 h-auto rounded-2xl border border-[#393E46]/50 hover:border-[#0077FF]/50 w-full sm:w-[100%]'>
//             <div className="flex items-center gap-3 xs:gap-4 w-1/3 sm:w-1/4">
//                 <img src={store.image_url} alt="player profile" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white"/>
//                 <div className="flex flex-col truncate">
//                     <strong className="text-white text-sm xs:text-base sm:text-lg font-bold truncate">{name}</strong>
//                     <strong className="text-gray-400 text-xs xs:text-sm flex items-center gap-1 xs:gap-2 truncate">
//                         <OnlineStatusIcon isOnline={isOnline} size={12}/>
//                         {isOnline ? 'Online' : 'Offline'}
//                     </strong>
//                 </div>
//             </div>

//             <div className='flex flex-1 flex-wrap items-center justify-end gap-2 xs:gap-3'>
//                 {type === 'all' && (
//                     <button className="bg-[#0077FF] text-white py-1 px-2 xs:py-2 xs:px-3 rounded-full text-xs xs:text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-1 xs:gap-2">
//                         <MessageCircle size={16}/> Chat
//                     </button>
//                 )}
//                 {type === 'sent' && (
//                     <>
//                         <button className="bg-[#0077FF] text-white py-1 px-2 xs:py-2 xs:px-3 rounded-full text-xs xs:text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-1 xs:gap-2">
//                             <Clock size={16}/> Request Sent
//                         </button>
//                         <button className="bg-red-500 text-white py-1 px-2 xs:py-2 xs:px-3 rounded-full text-xs xs:text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-1 xs:gap-2">
//                             <X size={16}/> Cancel
//                         </button>
//                     </>
//                 )}
//                 {type === 'request' && (
//                     <>
//                         <button className="bg-[#0077FF] text-white py-1 px-2 xs:py-2 xs:px-3 rounded-full text-xs xs:text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-1 xs:gap-2">
//                             <UserCheck size={16}/> Accept
//                         </button>
//                         <button className="bg-red-500 text-white py-1 px-2 xs:py-2 xs:px-3 rounded-full text-xs xs:text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-1 xs:gap-2">
//                             <UserX size={16}/> Reject
//                         </button>
//                     </>
//                 )}
//                 {type === 'blocked' && (
//                     <button className="bg-blue-500 text-white py-1 px-2 xs:py-2 xs:px-3 rounded-full text-xs xs:text-sm font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-1 xs:gap-2">
//                         <Shield size={16}/> Unblock
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// interface SectionProps {
//     type: 'all' | 'sent' | 'request' | 'blocked';
// }

// const Section: React.FC<SectionProps> = ({ type }) => (
//     <div className='bg-[#393E46] w-full mt-4 xs:mt-6 rounded-2xl p-2 xs:p-4 overflow-auto flex flex-col '>
//         <div className="sticky top-0 z-10 w-full px-2 xs:px-4 pt-2 xs:pt-4 pb-2 xs:pb-4">
//             <div className="flex items-center bg-[#222831] rounded-full px-2 xs:px-4 h-10 xs:h-12 shadow-md">
//                 <Search className="text-gray-400 mr-2" size={20}/>
//                 <input
//                     type="text"
//                     placeholder="Search Friends by username"
//                     className="bg-transparent text-white placeholder-gray-500 outline-none w-full text-xs xs:text-sm"
//                 />
//             </div>
//         </div>

//         {[...Array(8)].map((_, i) => (
//             <FriendCard key={i} name="Salah" isOnline={true} type={type}/>
//         ))}
//     </div>
// );

// const Friends: React.FC = () => {
//     const [activeTab, setActiveTab] = useState<'all' | 'sent' | 'request' | 'blocked'>('all');

//     return (
//         <div className="w-full bg-[#222831] xs:p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10">
//             <div className="mx-auto h-full flex flex-col gap-2">

//                 <div className="w-full rounded-2xl flex flex-row justify-center gap-2 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-12 p-1 xs:p-2">
//                     {(['all','sent','request','blocked'] as const).map(tab => (
//                         <div
//                             key={tab}
//                             className={`${activeTab===tab ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-white hover:text-blue-600"} cursor-pointer font-russo text-sm xs:text-base sm:text-lg flex items-center gap-1 xs:gap-2`}
//                             onClick={() => setActiveTab(tab)}
//                         >
//                             {tab==='all' && <Users size={16}/>}
//                             {tab==='sent' && <Send size={16}/>}
//                             {tab==='request' && <UserPlus size={16}/>}
//                             {tab==='blocked' && <Shield size={16}/>}
//                             <span className="capitalize">{tab}</span>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="flex-1 mt-2">
//                     <Section type={activeTab}/>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Friends;
