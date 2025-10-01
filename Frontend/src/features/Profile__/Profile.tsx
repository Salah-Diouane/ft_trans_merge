import React, { use, useEffect, useState } from 'react';
import { useStore } from '../../store/store';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router";
import GameStats from './GameStats';
import Playerlevel from './Playerlevel';
import Gamehistory from './Gamehistory'
import Gamecounter from './Gamecounter'

type userinfo = {
	username: string;
	first_name: string;
	family_name: string;
	image_url: string;
	cover_url: string;
}

export default function Profile() {

	const nav = useNavigate();
	const store = useStore();
	let { user } = useParams<{ user?: string }>();
	const [userinfo, setuserinfo] = useState<userinfo>({
		username: "",
		first_name: "",
		family_name: "",
		image_url: "",
		cover_url: ""
	});

	if (!user)
		user = store.username;
	console.log("===> : username in the profile : ", user)
	useEffect(() => {
		const getdata = async () => {
			const targetUser = user || store.username;

			const response = await fetch(`${import.meta.env.VITE_API_URL}/api/profile/userinfo/${targetUser}`, {
				credentials: 'include',
				method: 'GET'
			});
			console.log('call with : ', targetUser);
			if (!response.ok)
				nav('/');
			else {
				const data = await response.json();
				setuserinfo(data.data);
			}
		};

		getdata();
	}, [user, store.username]);

	return <>
		<div className="flex justify-center items-center font-russo ">
			<div className="flex flex-col w-full   2xl:max-w-[1500px] lg:max-w-[1000px] lg:min-h-[900px]  2xl:min-h-[1180px] bg-[#393E46] rounded-[20px] font-russo">
				<div className="flex flex-col w-full mx-auto items-center font-russo">
					<div className="w-full rounded-t-[20px] overflow-hidden">
						<img src={userinfo.cover_url} alt="Cover" className="w-full h-[300px] bg-cover bg-center object-cover" />
					</div>
					<div className="flex flex-col items-center mt-3 pb-4  space-y-0  lg:space-y-2 relative w-full 2xl:max-w-[1480px] bg-[#222831] h-[330px]  sm:h-[320px] 2xl:rounded-[20px]">
						<div className="h-24">
							<img src={userinfo.image_url} alt="Profile" className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover ring-[10px] ring-[#222831] bg-white" />
						</div>
						<div className="flex flex-col items-center space-y-2 lg:space-y-4">
							<h1 className="text-white text-[20px]">{userinfo.username}</h1>
							<h1 className="text-[#B3B3B3]">{userinfo.first_name + " " + userinfo.family_name}</h1>
							<Playerlevel username={user} />
						</div>
						<GameStats type="normal" username={user} />
					</div>
					<div className="flex flex-col 2xl:flex-row mt-2 space-y-3 2xl:space-y-0 2xl:space-x-2  w-full 2xl:max-w-[1480px] 2xl:max-h-[1280px]">
						<div className="flex flex-1 bg-[#222831] 2xl:rounded-[20px] w-full lg:h-[530px] p-6 overflow-auto shadow-inner">
							<Gamehistory username={user} />
						</div>
						<div className="flex flex-1  bg-[#222831] 2xl:rounded-[20px] w-full lg:h-[530px] items-center justify-center ">
							<div className='flex lg:flex-row  lg:space-x-10 flex-col'>
								<GameStats type='Doughnut' username={user} />
								<Gamecounter username={user} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
}
