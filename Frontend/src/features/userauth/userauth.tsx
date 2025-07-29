import { Outlet } from "react-router-dom";

export default function Userauth() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="flex flex-row bg-[#393E46] w-[1500px] h-[1000px] rounded-[53px]">
				<div className="flex-1 hidden lg:flex items-center justify-center">
					<img src="/tablepong.svg" alt="Logo" />
				</div>
				<div className="flex-1 flex flex-col items-center justify-center bg-white rounded-[24px]">
					<img src="/pingpong.svg" />
					<Outlet />
				</div>
			</div>
		</div>
	);
}
