import { Link } from "react-router";
import { useRef , useState} from 'react';
import TwoFA from "./twofa";
import { useNavigate } from "react-router-dom";
import GoogleSign from "./googlesign";
import {useStore} from "../../store/store"

export default function Signin() {
	const username : any = useRef(null);
	const password : any = useRef(null);
	const navigate : any = useNavigate();
	const [erros, seterros] = useState<{[key: string]: string}>({});
	const store = useStore();

	const sendData = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const body = {
			username : username.current?.value || '', 
			password: password.current?.value || ''
		};
		try {
			const response = await fetch('http://localhost:3000/login/signin' , {
				method: 'POST',
				headers: {'Content-type' : 'application/json'},
				body: JSON.stringify(body), 
				credentials: 'include'
			});
			const data = await response.json();
			if (!data.login) {
				seterros({ [data.type]: data.message });
				console.log(`the erros ${data.type} |  ${data.message} `);
			}
			else if (data.twofa) {
				navigate('/login/Twofa', {
					state : {
						username : body.username,
						password: body.password
					}
				});
			}
			else {
				await store.fetchUserInfo();
				navigate('/');
			}
		} catch (err : any) {
			alert(err);
		}
	}
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
			<h1 className="font-russo text-3xl sm:text-4xl md:text-5xl text-[#222831] text-center lg:text-left">Login</h1>
			<br />
			<GoogleSign />
			<div className="flex items-center justify-center my-6">
				<div className="w-8 sm:w-10 md:w-14 lg:w-16 h-px bg-black"></div>
				<h1 className="mx-2 text-black text-base sm:text-lg md:text-xl lg:text-2xl font-medium">or</h1>
				<div className="w-8 sm:w-10 md:w-14 lg:w-16 h-px bg-black"></div>
			</div>
			<div className="w-full px-4 sm:px-10 md:px-20 lg:px-0 lg:w-80 mx-auto">
				<input type="text" placeholder="Username" className={inputClass("username")} ref={username} onFocus={() => clearError("username")} /> {writeError("username")}
				<input type="password" placeholder="Password" className={inputClass("password")} ref={password}  onFocus={() => clearError("password")}/> {writeError("password")}
				<button className="font-russo w-full bg-blue-500 text-white py-2 sm:py-3 md:py-4 rounded-[10px] mb-4 hover:shadow-[0px_0px_8px_rgba(0,0,0,0.4)] transition-all" onClick={sendData}>Login</button>
				<h6 className="text-center text-xs sm:text-sm">Don't have an account?{" "}
					<Link className="text-blue" to="/login/Signup"> Contact</Link>
				</h6>
			</div>
		</>
	);
}
