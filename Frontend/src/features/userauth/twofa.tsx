import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";

export default function TwoFA() {
	const [numbers, setNumbers] = useState(['', '', '', '', '', '']);
	const location = useLocation();
	const navigate = useNavigate();

	const state = location.state as { username: string; password: string } | undefined;
	if (!state) {
		return <Navigate to="/login/Signin" replace />;
	}

	const Donebutton = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const body: {
			twofa: number;
			username: string;
			password: string;
		} = {
			twofa: Number(numbers.join('')),
			username: state.username,
			password: state.password
		};

		try {
			const response = await fetch("http://localhost:3000/login/verify2fa", {
				method: "POST",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
				credentials: "include"
			}).then(res => res.json()) as { message: string; login: boolean };

			if (!response.login) {
				throw new Error(response.message);
			}

			navigate('/');
		} catch (err: any) {
			alert(err.message || '2FA failed.');
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen ">
			<h1 className="mb-4 text-lg font-semibold">Two-Factor Auth for {state.username}</h1>
			
			<div className="flex space-x-2 mb-4">
				{numbers.map((value, index) => (
					<input
						key={index}
						type="text"
						maxLength={1}
						value={value}
						onChange={(e) => {
							const newNumbers = [...numbers];
							newNumbers[index] = e.target.value;
							setNumbers(newNumbers);
						}}
						className="w-10 h-12 text-center text-xl border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
					/>
				))}
			</div>

			<button
				onClick={Donebutton}
				className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
			>
				Done
			</button>
		</div>
	);
}
