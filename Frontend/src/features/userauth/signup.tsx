
import { Link } from "react-router";
import { useRef, useState } from "react";
import GoogleSign from "./googlesign";
import toast from "react-hot-toast";

export default function Signup() {
	const username : any = useRef(null);
	const email : any  = useRef(null);
	const password : any  = useRef(null);
	const confirmpassword : any  = useRef(null);
	const first_name : any  = useRef(null);
	const family_name : any  = useRef(null);
	const [erros, seterros] = useState<{[key: string]: string}>({});

	const ErroNotify = (error : string) => toast.error(`${error}`);
	const senddata = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		try {
			const body = {
				username: username.current?.value || '',
				email: email.current?.value || '',
				password: password.current?.value || '',
				confirmpassword: confirmpassword.current?.value || '',
				first_name: first_name.current?.value || '',
				family_name: family_name.current?.value || '',
			};
			const response = await fetch(`${import.meta.env.VITE_API_URL}/login/signup`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});
			const data = await response.json();
			if (!response.ok  || data.statusCode === 400) {
				seterros({ [data.type]: data.message });
			} else
				toast.success('Account created !');
		} catch (err: any) {
			console.log(err);
			ErroNotify(err);
		}
	};
	const inputClass = (fieldName : any) => {
		const defaultSytle = "placeholder-black w-full mb-4 p-3 sm:p-4 border  rounded-[10px] hover:scale-105 transition-transform";
		const errorBorder = "border-red-500";
		const normalBorder = "border-black";
	
		return `${defaultSytle} ${erros[fieldName] ? errorBorder :normalBorder}`
	}
	const writeError = (fieldName: any) => {
		if (!erros[fieldName])
			return null;
		return <><p className="text-red-500 text-xs">{erros[fieldName]}</p><br /></>;
	};
	const clearError = (fieldName: string) => {
		seterros((prev) => {
			const updated = { ...prev };
			delete updated[fieldName];
			return updated;
		});
	};

	return (
		<>
			<br />
			<h1 className="font-russo text-3xl sm:text-4xl md:text-5xl text-[#222831] text-center sm:text-left">Register</h1>
			<br />
			<GoogleSign />
			<div className="flex items-center justify-center my-6">
				<div className="w-8 sm:w-10 md:w-14 lg:w-16 h-px bg-black"></div>
				<h1 className="mx-2 text-black text-base sm:text-lg md:text-xl lg:text-2xl font-medium">or</h1>
				<div className="w-8 sm:w-10 md:w-14 lg:w-16 h-px bg-black"></div>
			</div>
			<div className="bg-white p-2 sm:p-4 w-full max-w-xs sm:w-80 mx-auto">
				<div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
					<input type="text" placeholder="first name" className={inputClass("first_name")} ref={first_name} onFocus={() => clearError("first_name")}/> 
					<input type="text" placeholder="family name"  className={inputClass("family_name")} ref={family_name} onFocus={() => clearError("family_name")}/>
				</div>{writeError("first_name")} {writeError("family_name")}
				<input type="text" placeholder="Username" className={inputClass("username")} ref={username} onFocus={() => clearError("username")} /> {writeError("username")}
				<input type="text" placeholder="email" className={inputClass("email")} ref={email}  onFocus={() => clearError("email")}/> {writeError("email")}
				<input type="password" placeholder="Password" className={inputClass("password")} ref={password}  onFocus={() => clearError("password")}/> {writeError("password")}
				<input type="password" placeholder="Confirm password" className={inputClass("confirmpassword")} ref={confirmpassword}  onFocus={() => clearError("confirmpassword")}/> {writeError("confirmpassword")}
				<button className="font-russo w-full bg-blue-500 text-white py-2 sm:py-3 md:py-4 rounded-[10px] mb-4 hover:shadow-[0px_0px_8px_rgba(0,0,0,0.4)] transition-all" onClick={senddata}>Register</button>
				<div className="text-center text-xs sm:text-sm">
					<span>Already have an account? </span>
					<Link className="text-blue-600 underline" to="/login/Signin">Login</Link>
				</div>
			</div>
		</>
	);
}
