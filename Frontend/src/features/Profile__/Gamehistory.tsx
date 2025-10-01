import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function Gamehistory({username} : {username: string}) {
	const [playerhistory, setplayerhistory] = useState([]);

	useEffect(() => {
		const getdata = async () => {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/api/profile/PlayerHistory/${username}`, {
				credentials: 'include',
				method: 'GET'
			});
			if (response.ok) {
				const data = await response.json();
				setplayerhistory(data);
			} else {
				toast.error('Failed to load history');
			}
		};
		getdata();
	}, [username]);

	const getResultClass = (result: string) => {
		switch (result) {
			case "Win":
				return "bg-green-900";
			case "Loss":
				return "bg-red-900";
			case "Draw":
				return "bg-blue-900";
			default:
				return "bg-gray-700";
		}
	};

	return (

		<motion.div className="w-full" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} transition={{ duration: 0.6, ease: "easeOut" }} >
			<h1 className="text-xl sm:text-2xl font-bold mb-4 text-white">🎮 Match History</h1>
			<div className="hidden md:block overflow-x-auto">
				<table className="w-full text-sm text-left text-gray-200">
					<thead className="bg-[#393E46] text-gray-300 uppercase text-xs tracking-wider">
						<tr>
							<th className="px-6 py-3 rounded-l-lg">Game</th>
							<th className="px-6 py-3">Date</th>
							<th className="px-6 py-3">Opponent</th>
							<th className="px-6 py-3">Result</th>
							<th className="px-6 py-3 rounded-r-lg">Score</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-[#393E46]">
						{playerhistory.map((e: any, idx: number) => (
							<tr key={idx} className="hover:bg-[#2e333c] transition-colors duration-200">
								<td className="px-6 py-4">{e.game_type}</td>
								<td className="px-6 py-4">{e.date}</td>
								<td className="px-6 py-4">{e.opponent_name}</td>
								<td className="px-6 py-4">
									<span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getResultClass(e.result)}`} >
										{e.result}
									</span>
								</td>
								<td className="px-6 py-4 font-mono text-white">{e.score}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="block md:hidden space-y-4">
				{playerhistory.map((e: any, idx: number) => (
					<div key={idx} className="bg-[#2e333c] rounded-lg p-4 text-gray-200 shadow-md">
						<div className="flex justify-between text-sm mb-2">
							<span className="font-semibold">Game:</span>
							<span>{e.game_type}</span>
						</div>
						<div className="flex justify-between text-sm mb-2">
							<span className="font-semibold">Date:</span>
							<span>{e.date}</span>
						</div>
						<div className="flex justify-between text-sm mb-2">
							<span className="font-semibold">Opponent:</span>
							<span>{e.opponent_name}</span>
						</div>
						<div className="flex justify-between text-sm mb-2">
							<span className="font-semibold">Result:</span>
							<span className={`px-2 py-1 rounded-full text-xs font-semibold ${getResultClass(e.result)}`}>
								{e.result}
							</span>
						</div>
						<div className="flex justify-between text-sm">
							<span className="font-semibold">Score:</span>
							<span className="font-mono text-white">{e.score}</span>
						</div>
					</div>
				))}
			</div>
		</motion.div>
	);
}
