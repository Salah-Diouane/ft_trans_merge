import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, Navigate, Link } from "react-router-dom";
import { useStore } from "../../store/store";

export default function TwoFA() {

	const [numbers, setNumbers] = useState(['', '', '', '', '', '']);
	const [currentFocus, setCurrentFocus] = useState(0);
	const location = useLocation();
	const navigate = useNavigate();
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
	const [erros, seterros] = useState('');
	const state = location.state as { username: string; password: string } | undefined;
	const store = useStore();

	if (!state) {
		return <Navigate to="/login/Signin" replace />;
	}

	const Donebutton = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		seterros('');
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
			const response = await fetch("http://e3r11p2.1337.ma:3000/login/verify2fa", {
				method: "POST",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
				credentials: "include"
			}).then(res => res.json()) as { message: string; login: boolean };

			if (!response.login) {
				seterros(response.message);
			}
			else {
				await store.fetchUserInfo();
				navigate('/');
			}
		} catch (err: any) {
			alert(err.message || '2FA failed.');
		}
	};
	const inputClass = () => {
		const defaultSytle = "w-10 h-12 text-center text-xl border rounded focus:outline-none focus:ring-2 focus:ring-blue-400";
		const errorBorder = "border-red-500";
		const normalBorder = "border-gray-300";
		return `${defaultSytle} ${erros !== '' ? errorBorder :normalBorder}`
	}
	const writeError = () => {
		if (erros === '')
			return null;
		return <><p className="text-red-500 text-xs">{erros}</p><br /></>;
	};
	const clearError = () => seterros('');

	return (
		<>
			<br />
			<h1 className="mb-4 text-xl font-russo  font-semibold">Two-Factor Auth</h1>
			<h6 className="text-xs">We Send a code to your email ****@gmail.com </h6>
			<br />
			<div className="flex flex-col">
				<div className="flex space-x-2 mb-4">
					{numbers.map((value, index) => (
						<input key={index} maxLength={1} value={value} ref={(el) => (inputRefs.current[index] = el)}
							onChange={(e) => {
								const val = e.target.value;
								const newNumbers = [...numbers];
								newNumbers[index] = val;
								setNumbers(newNumbers);
								if (val && index < numbers.length - 1) {
									inputRefs.current[index + 1]?.focus();
								}
							}}
							onKeyDown={(e) => {
								if (e.key === "Backspace" && !numbers[index] && index > 0) {
									const newNumbers = [...numbers];
									newNumbers[index - 1] = '';
									setNumbers(newNumbers);
									inputRefs.current[index - 1]?.focus();
								}
							}}
							onFocus={() => {clearError()}}
							className={inputClass()}/>
					))} 
				</div>{writeError()}
				<br />
				<div className="flex justify-center space-x-2">
					<button onClick={Donebutton} className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" > Verify </button>
				</div>
			</div>
		</>
	);
}
