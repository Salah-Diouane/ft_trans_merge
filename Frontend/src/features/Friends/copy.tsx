




// import React, { useState } from 'react';
// import { Search, Clock, MessageCircle, UserMinus, UserCheck, Shield, UserX } from "lucide-react";

// // Mock data to simulate fetching friends from an API
// const mockFriendsData = [
//     { id: 1, name: 'Salah', imageUrl: 'https://i.pravatar.cc/150?u=a1', isOnline: true, type: 'all' },
//     { id: 2, name: 'Zineb', imageUrl: 'https://i.pravatar.cc/150?u=a2', isOnline: false, type: 'all' },
//     { id: 3, name: 'Omar', imageUrl: 'https://i.pravatar.cc/150?u=a3', isOnline: true, type: 'all' },
//     { id: 4, name: 'Fatima', imageUrl: 'https://i.pravatar.cc/150?u=a4', isOnline: true, type: 'request' },
//     { id: 5, name: 'Youssef', imageUrl: 'https://i.pravatar.cc/150?u=a5', isOnline: false, type: 'request' },
//     { id: 6, name: 'Amine', imageUrl: 'https://i.pravatar.cc/150?u=a6', isOnline: true, type: 'sent' },
//     { id: 7, name: 'Hajar', imageUrl: 'https://i.pravatar.cc/150?u=a7', isOnline: true, type: 'sent' },
//     { id: 8, name: 'Samir', imageUrl: 'https://i.pravatar.cc/150?u=a8', isOnline: false, type: 'blocked' },
//     { id: 9, name: 'Nada', imageUrl: 'https://i.pravatar.cc/150?u=a9', isOnline: true, type: 'all' },
//     { id: 10, name: 'Karim', imageUrl: 'https://i.pravatar.cc/150?u=a10', isOnline: false, type: 'all' },
// ];

// const OnlineStatusIcon: React.FC<{ isOnline: boolean; size?: number }> = ({ isOnline, size = 12 }) => {
//     const sizeClasses = `w-${size/3} h-${size/3}`;
//     return (
//         <div className="relative">
//             <div
//                 className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'} border-2 border-[#222831]`}
//                 title={isOnline ? 'Online' : 'Offline'}
//             />
//             {isOnline && (
//                 <div
//                     className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping opacity-75"
//                 />
//             )}
//         </div>
//     );
// };

// interface FriendCardProps {
//     user: {
//         name: string;
//         imageUrl: string;
//         isOnline: boolean;
//     };
//     type: 'all' | 'sent' | 'request' | 'blocked';
// }

// const FriendCard: React.FC<FriendCardProps> = ({ user, type }) => {
//     const getActionButtons = () => {
//         switch (type) {
//             case 'all':
//                 return (
//                     <>
//                         <button className="bg-[#0077FF] text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors">
//                             Chat
//                         </button>
//                         <button className="bg-red-500 text-white p-2 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors">
//                             <UserMinus size={18} />
//                         </button>
//                     </>
//                 );
//             case 'sent':
//                 return (
//                     <div className="flex items-center gap-2 text-gray-400">
//                         <Clock size={20} />
//                         <span className="text-sm font-semibold">Request Sent</span>
//                     </div>
//                 );
//             case 'request':
//                 return (
//                     <>
//                         <button className="bg-green-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors">
//                             Accept
//                         </button>
//                         <button className="bg-gray-600 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors">
//                             Reject
//                         </button>
//                     </>
//                 );
//             case 'blocked':
//                 return (
//                     <button className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors">
//                         Unblock
//                     </button>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="flex items-center p-4 bg-[#222831] m-2 rounded-2xl border border-transparent hover:border-[#0077FF] transition-all">
//             <div className="flex items-center gap-4 flex-1">
//                 <img src={user.imageUrl} className="w-12 h-12 rounded-full border-2 border-white" alt={`${user.name} profile`} />
//                 <div className="flex flex-col">
//                     <strong className="text-white text-lg font-bold">{user.name}</strong>
//                     <div className="flex items-center gap-1 text-gray-400 text-sm">
//                         <OnlineStatusIcon isOnline={user.isOnline} />
//                         <span>{user.isOnline ? 'Online' : 'Offline'}</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex items-center gap-2">
//                 {getActionButtons()}
//             </div>
//         </div>
//     );
// };

// const Friends: React.FC = () => {
//     const [activeTab, setActiveTab] = useState('all');
//     const [searchQuery, setSearchQuery] = useState('');

//     const tabs = [
//         { id: 'all', label: 'All' },
//         { id: 'sent', label: 'Sent' },
//         { id: 'request', label: 'Requests' },
//         { id: 'blocked', label: 'Blocked' },
//     ];

//     const filteredFriends = mockFriendsData
//         .filter(friend => {
//             if (activeTab === 'all') return true;
//             return friend.type === activeTab;
//         })
//         .filter(friend => friend.name.toLowerCase().includes(searchQuery.toLowerCase()));

//     return (
//         <div className="w-full h-screen bg-[#222831] p-8 md:p-14 overflow-hidden flex flex-col">
//             {/* Tabs */}
//             <div className="bg-[#393E46] w-full h-16 rounded-2xl flex justify-between gap-2 p-2 mb-6 shrink-0">
//                 {tabs.map((tab) => (
//                     <button
//                         key={tab.id}
//                         className={`flex-1 rounded-xl font-semibold text-white transition-colors
//                             ${activeTab === tab.id ? 'bg-[#0077FF] text-white' : 'bg-transparent text-gray-400 hover:text-white'}`}
//                         onClick={() => setActiveTab(tab.id)}
//                     >
//                         {tab.label}
//                     </button>
//                 ))}
//             </div>

//             {/* Search Bar */}
//             <div className="bg-[#393E46] w-full rounded-2xl p-4 mb-4 shrink-0">
//                 <div className="flex items-center bg-[#222831] rounded-full h-12 px-4 shadow-md">
//                     <Search className="text-gray-400 mr-2" size={20} />
//                     <input
//                         type="text"
//                         placeholder="Search friends by username"
//                         className="bg-transparent text-white placeholder-gray-500 outline-none w-full text-sm"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                 </div>
//             </div>

//             {/* Friends List */}
//             <div className="bg-[#393E46] w-full h-full rounded-2xl p-4 overflow-y-auto custom-scrollbar">
//                 {filteredFriends.length > 0 ? (
//                     filteredFriends.map(friend => (
//                         <FriendCard key={friend.id} user={friend} type={friend.type as any} />
//                     ))
//                 ) : (
//                     <div className="text-center text-gray-400 mt-10">
//                         No friends found.
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Friends;




import React, { useState } from 'react';
import { Search, MessageCircle, UserMinus, UserCheck, UserX, Clock, Shield, Users, Send, UserPlus } from "lucide-react";

// Mock store hook for demo
const useStore = () => ({
  image_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format"
});

const OnlineStatusIcon: React.FC<{ isOnline: boolean; size?: number }> = ({ isOnline, size = 12 }) => {
    return (
        <div className="relative">
            <div
                className={`rounded-full ${isOnline ? 'bg-green-500' : 'bg-gray-500'} border-2 border-[#222831] shadow-sm`}
                style={{ width: size, height: size }}
                title={isOnline ? 'Online' : 'Offline'}
            />
            {isOnline && (
                <div
                    className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60"
                    style={{ width: size, height: size }}
                />
            )}
        </div>
    );
};

const FriendCard: React.FC<{ 
    type: 'all' | 'sent' | 'request' | 'blocked';
    name?: string;
    isOnline?: boolean;
    onAction?: (action: string) => void;
}> = ({ type, name = "Salah", isOnline = true, onAction }) => {
    const store = useStore();
    
    const renderActions = () => {
        switch (type) {
            case 'all':
                return (
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={() => onAction?.('chat')}
                            className="group bg-[#0077FF] hover:bg-[#0077FF]/90 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-[#0077FF]/25 flex items-center gap-2"
                        >
                            <MessageCircle size={16} />
                            <span className="hidden sm:inline">Chat</span>
                        </button>
                        <button 
                            onClick={() => onAction?.('remove')}
                            className="group bg-[#393E46] hover:bg-red-600 text-white p-2.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-red-500/25"
                        >
                            <UserMinus size={16} />
                        </button>
                    </div>
                );
            case 'sent':
                return (
                    <div className="flex items-center gap-3 text-[#0077FF]">
                        <Clock size={18} />
                        <span className="text-sm font-medium">Request Sent</span>
                    </div>
                );
            case 'request':
                return (
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={() => onAction?.('accept')}
                            className="bg-[#0077FF] hover:bg-[#0077FF]/90 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-[#0077FF]/25 flex items-center gap-2"
                        >
                            <UserCheck size={16} />
                            Accept
                        </button>
                        <button 
                            onClick={() => onAction?.('reject')}
                            className="bg-[#393E46] hover:bg-red-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-red-500/25 flex items-center gap-2"
                        >
                            <UserX size={16} />
                            Reject
                        </button>
                    </div>
                );
            case 'blocked':
                return (
                    <button 
                        onClick={() => onAction?.('unblock')}
                        className="bg-[#0077FF] hover:bg-[#0077FF]/90 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-[#0077FF]/25 flex items-center gap-2"
                    >
                        <Shield size={16} />
                        Unblock
                    </button>
                );
            default:
                return null;
        }
    };

    return (
        <div className="group bg-[#222831]/90 backdrop-blur-sm hover:bg-[#222831] border border-[#393E46]/50 hover:border-[#0077FF]/50 rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-[#0077FF]/10 hover:-translate-y-0.5">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                    <div className="relative">
                        <img 
                            src={store.image_url} 
                            className="w-14 h-14 rounded-2xl border-2 border-[#393E46] group-hover:border-[#0077FF] transition-colors duration-300 object-cover" 
                            alt="Profile" 
                        />
                        <div className="absolute -bottom-1 -right-1">
                            <OnlineStatusIcon isOnline={isOnline} size={14} />
                        </div>
                    </div>
                    <div className="flex flex-col min-w-0">
                        <h3 className="text-white text-lg font-semibold truncate">
                            {name}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span>{isOnline ? 'Online' : 'Offline'}</span>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                    {renderActions()}
                </div>
            </div>
        </div>
    );
};

const TabSection: React.FC<{ type: 'all' | 'sent' | 'request' | 'blocked' }> = ({ type }) => {
    const [searchQuery, setSearchQuery] = useState('');
    
    // Mock data - in real app this would come from props or API
    const friends = Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        isOnline: Math.random() > 0.5
    }));

    const handleAction = (friendId: number, action: string) => {
        console.log(`${action} friend ${friendId}`);
        // Handle action logic here
    };

    return (
        <div className="bg-white backdrop-blur-sm h-0 w-full flex-1 rounded-2xl overflow-hidden">
            {/* Search Header */}
            <div className="sticky top-0 z-10 bg-[#222831]/90 backdrop-blur-md border-b border-[#393E46]/50 p-6">
                <div className="relative max-w-md mx-auto">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search friends by username..."
                        className="w-full bg-[#222831] border border-[#393E46] rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 outline-none focus:border-[#0077FF] focus:ring-2 focus:ring-[#0077FF]/20 transition-all duration-200"
                    />
                </div>
            </div>

            {/* Friends List */}
            <div className="p-6 space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto custom-scrollbar">
                {friends.map((friend) => (
                    <FriendCard
                        key={friend.id}
                        type={type}
                        name={friend.name}
                        isOnline={friend.isOnline}
                        onAction={(action) => handleAction(friend.id, action)}
                    />
                ))}
            </div>
        </div>
    );
};

const TabButton: React.FC<{
    active: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    label: string;
    count?: number;
}> = ({ active, onClick, icon, label, count }) => {
    return (
        <button
            onClick={onClick}
            className={`group relative flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                active
                    ? 'bg-[#0077FF] text-white shadow-lg shadow-[#0077FF]/25'
                    : 'text-gray-300 hover:text-white hover:bg-[#393E46]/50'
            }`}
        >
            <span className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-105'}`}>
                {icon}
            </span>
            <span className="font-semibold">{label}</span>
            {count !== undefined && count > 0 && (
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    active ? 'bg-white/20' : 'bg-[#0077FF] text-white'
                }`}>
                    {count}
                </span>
            )}
        </button>
    );
};

const Friends: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'all' | 'sent' | 'request' | 'blocked'>('all');

    const tabs = [
        { key: 'all' as const, label: 'All Friends', icon: <Users size={20} />, count: 42 },
        { key: 'sent' as const, label: 'Sent', icon: <Send size={20} />, count: 3 },
        { key: 'request' as const, label: 'Requests', icon: <UserPlus size={20} />, count: 5 },
        { key: 'blocked' as const, label: 'Blocked', icon: <Shield size={20} /> },
    ];

    return (
        <div className="w-full h-screen bg-gradient-to-br  p-8">
            <div className="max-w-7xl mx-auto h-full flex flex-col">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Friends</h1>
                    <p className="text-gray-400">Manage your friends and connections</p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap gap-2 mb-8 p-2 bg-[#222831]/50 backdrop-blur-sm rounded-2xl border border-[#393E46]/50">
                    {tabs.map((tab) => (
                        <TabButton
                            key={tab.key}
                            active={activeTab === tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            icon={tab.icon}
                            label={tab.label}
                            count={tab.count}
                        />
                    ))}
                </div>

                {/* Content */}
                <TabSection type={activeTab} />
            </div>

        </div>
    );
};

export default Friends;