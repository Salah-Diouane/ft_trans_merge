import React, { use, useEffect, useState } from "react";
import { useStore } from "../../store/store";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import GameStats from "./GameStats";
import Playerlevel from "./Playerlevel";
import Gamehistory from "./Gamehistory";
import Gamecounter from "./Gamecounter";
import { MessageCircle, UserPlus, X } from "lucide-react";
import { useUsers } from "../layout/useUsers";
import { User } from "../Chat/types/User";
import { MdGroupRemove, MdPersonRemoveAlt1 } from "react-icons/md";
import toast from "react-hot-toast";

type userinfo = {
  id: number;
  username: string;
  first_name: string;
  family_name: string;
  image_url: string;
  cover_url: string;
};

export default function Profile() {
  const nav = useNavigate();
  const store = useStore();
  let { user } = useParams<{ user?: string }>();
  const [userinfo, setuserinfo] = useState<userinfo>({
	id: -1,
	username: "",
	first_name: "",
	family_name: "",
	image_url: "",
	cover_url: "",
  });

  const [sentRequests, setSentRequests] = useState<Record<string, boolean>>({});
  // const [ showInvite, setShowInvite ] = useState<boolean>(false)
  const loggedUserInfo = useUsers();
  const [allfriends, setAllfriends] = useState<User[]>([]);
  const [allfriendsRequestPending, setAllfriendsRequestPending] = useState<
	User[]
  >([]);

  if (!user) user = store.username;
  useEffect(() => {
	const getdata = async () => {
	  const targetUser = user || store.username;

	  const response = await fetch(
		`${import.meta.env.VITE_API_URL}/api/profile/userinfo/${targetUser}`,
		{
		  credentials: "include",
		  method: "GET",
		}
	  );
	  console.log("call with : ", targetUser);
	  if (!response.ok) nav("/");
	  else {
		const data = await response.json();
		console.log("---------> : data : ", data);
		setuserinfo(data.data);
	  }
	};
	const myAllfriends = async () => {
	  const res = await fetch(
		`${import.meta.env.VITE_API_URL}/api/friends/allfriends`,
		{ credentials: "include" }
	  );
	  const data = await res.json();
	  setAllfriends(data);
	};

	const fetchRequest = async () => {
	  const res = await fetch(
		`${import.meta.env.VITE_API_URL}/api/friends/allsendreq`,
		{ credentials: "include" }
	  );
	  const data = await res.json();
	  setAllfriendsRequestPending(Array.isArray(data) ? data : []);
	};

	myAllfriends();
	getdata();
	fetchRequest();
  }, [user, store.username]);

  const isFriend = (username: string) => {
	return allfriends.some((friend) => friend.username === username);
  };

  const isPending = (username: string) => {
	return allfriendsRequestPending.some((req) => req.username === username);
  };

  let showInvite: boolean = true;
  let sm_h_value: string = "400px";
  let h_value: string = "380px";
  let h_div: string = "1120px";
  console.log("loggedUserInfo : ", loggedUserInfo);
  console.log("logged user : ", loggedUserInfo.currentUser);

  if (location.pathname === `/profile/${loggedUserInfo.currentUser}`) {
	showInvite = false;
  }

  if (showInvite) {
	sm_h_value = "400px";
	h_value = "410px";
	h_div = "1170px";
  }

  console.log(`/profile/${user}`);
  console.log("-->  showInvite : ", showInvite);

  const handleSendRequest = async (username: string) => {
	try {
	  console.log("inside the handleSendRequest fct ");
	  console.log("inside the handleSendRequest fct  : username : ", username);
	  const res = await fetch(
		`${import.meta.env.VITE_API_URL}/api/friends/sendrequest`,
		{
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify({ frined_username: username }),
		  credentials: "include",
		}
	  );

	  await res.json();
	  console.log(" res : ", res);
	  setSentRequests((prev) => ({ ...prev, [username]: true }));
	} catch (err) {
	  console.error("Error sending request:", err);
	}
  };

  const handleRemoveFriend = async (username: string) => {
	try {
	  console.log("username inside handleRemoveFriend fct : ", username);
	  const res = await fetch(
		`${import.meta.env.VITE_API_URL}/api/friends/deletefriend`,
		{
		  method: "DELETE",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify({ frined_username: username }),
		  credentials: "include",
		}
	  );

	  if (res.ok) {
		setAllfriends((prev) => prev.filter((u) => u.username !== username));
	  }
	} catch (err) {
	  console.error("Error removing friend:", err);
	}
  };

  return (
	<>
	  <div className="flex justify-center items-center font-russo ">
		<div
		  className={`flex flex-col w-full   2xl:max-w-[1500px] lg:max-w-[1000px] lg:min-h-[900px]  2xl:min-h-[${h_div}] bg-[#393E46] rounded-[20px] font-russo`}
		>
		  <div className="flex flex-col w-full mx-auto items-center font-russo">
			<div className="w-full rounded-t-[20px] overflow-hidden">
			  <img
				src={userinfo.cover_url}
				alt="Cover"
				className="w-full h-[300px] bg-cover bg-center object-cover"
			  />
			</div>
			<div
			  className={`flex flex-col items-center mt-3 pb-4  space-y-4  lg:space-y-2 relative w-full 2xl:max-w-[1480px] bg-[#222831] h-[${h_value}]   sm:h-[${sm_h_value}] 2xl:rounded-[20px]`}
			>
			  <div className="h-24">
				<img
				  src={userinfo.image_url}
				  alt="Profile"
				  className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover ring-[10px] ring-[#222831] bg-white"
				/>
			  </div>

			  <div className="flex flex-col items-center space-y-2 lg:space-y-4">
				<h1 className="text-white text-[20px]">{userinfo.username}</h1>
				<h1 className="text-[#B3B3B3]">
				  {userinfo.first_name + " " + userinfo.family_name}
				</h1>

				{showInvite && (
				  <div className="flex flex-1 items-center gap-4">
					{!isFriend(userinfo.username) && (
					  <button
						className="bg-[#0077FF] text-white py-2 px-4 rounded-full text-sm max-lg:text-xs font-semibold hover:bg-opacity-80 transition-colors flex items-center gap-2"
						onClick={() => handleSendRequest(userinfo.username)}
						disabled={
						  isPending(userinfo.username) ||
						  sentRequests[userinfo.username]
						}
					  >
						{isPending(userinfo.username) ||
						sentRequests[userinfo.username] ? (
						  <>
							<X size={16} /> Request Sent
						  </>
						) : (
						  <>
							<UserPlus size={16} /> Add Friend
						  </>
						)}
					  </button>
					)}

					{isFriend(userinfo.username) && (
					  <>
						<button
						  className="bg-red-500 text-white py-2 px-4 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-red-600"
						  onClick={() => {
							handleRemoveFriend(userinfo.username);
							toast.success(
							  `${userinfo.username} has been removed from your friends list`
							);
						  }}
						>
						  <MdPersonRemoveAlt1 size={16} /> Remove Friend
						</button>

						<button
						  className="bg-[#0077FF] text-white py-2 px-4 rounded-full text-sm font-semibold flex items-center gap-2"
						  onClick={() => nav(`/chat/${userinfo.username}`)}
						>
						  <MessageCircle size={16} /> Chat
						</button>
					  </>
					)}
				  </div>
				)}

				<Playerlevel username={user} />
			  </div>

			  <GameStats type="normal" username={user} />
			</div>

			<div className="flex flex-col 2xl:flex-row mt-2 space-y-3 2xl:space-y-0 2xl:space-x-2  w-full 2xl:max-w-[1480px] 2xl:max-h-[1280px]">
			  <div className="flex flex-1 bg-[#222831] 2xl:rounded-[20px] w-full lg:h-[470px] p-6 overflow-auto shadow-inner">
				<Gamehistory username={user} />
			  </div>
			  <div className="flex flex-1  bg-[#222831] 2xl:rounded-[20px] w-full lg:h-[470px] items-center justify-center ">
				<div className="flex lg:flex-row  lg:space-x-10 flex-col">
				  <GameStats type="Doughnut" username={user} />
				  <Gamecounter username={user} />
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</>
  );
}
