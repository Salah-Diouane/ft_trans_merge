import { Link } from "react-router";
import { useRef } from 'react';
import TwoFA from "./twofa";
import { useNavigate } from "react-router-dom";
import GoogleSign from "./googlesign";

export default function Signin() {
	const username : any = useRef(null);
	const password : any = useRef(null);
	const navigate : any = useNavigate();

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
			const data = await response.json() as {login: boolean, twofa : true, message : string};
			if (!data.login) {
				throw (data.message);
			}
			if (data.twofa) {
				navigate('/login/Twofa', {
					state : {
						username : body.username,
						password: body.password
					}
				});
			}
			else
				navigate('/');
		} catch (err : any) {
			alert(err);
		}
	}

	return (
		<>
			<h1 className="font-russo text-5xl text-[#222831]">Login</h1>
			<br />
			<GoogleSign />
			<div className="flex items-center justify-center my-6">
				<div className="w-16 h-px bg-black"></div>
					<h1 className="mx-2  text-black  text-2xl font-medium">or</h1>
				<div className="w-16 h-px bg-black"></div>
			</div>
			<div className="w-80">
				<input type="text" placeholder="Username" className="placeholder-black w-full mb-4 p-4 border border-black rounded-[10px] hover:scale-105" ref={username} />
				<input type="password" placeholder="Password" className="placeholder-black  w-full mb-4 p-4 border border-black rounded-[10px] hover:scale-105" ref={password} />
				<button className="w-full bg-blue-500 text-white py-4 rounded-[10px] mb-4 hover:shadow-[8px_8px_0px_0px_black]" onClick={sendData}> Login</button>
				<h6 className="text-center text-sm ">Don't have an account? <Link className="text-blue" to="/login/Signup">Contact</Link></h6>
			</div>
		</>
	);
}
