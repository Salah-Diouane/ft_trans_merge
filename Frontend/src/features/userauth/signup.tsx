
import { Link } from "react-router";
import { useRef } from "react";
import GoogleSign from "./googlesign";
export default function Signup() {
	const username : any = useRef(null);
	const email : any  = useRef(null);
	const password : any  = useRef(null);
	const confirmpassword : any  = useRef(null);
	const first_name : any  = useRef(null);
	const family_name : any  = useRef(null);

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
			console.log(body);
			const response = await fetch("http://localhost:3000/login/signup", {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});
			console.log(response);
			if (!response.ok) {
				const errorData = await response.json();
				alert(`Error: ${errorData.message || 'Unknown error'}`);
				return;
			}
			const data = await response.json();
			alert(`Success: ${JSON.stringify(data)}`);
		} catch (err) {
			alert(`yassine : ${err}`);
		}
	};

	return (
		<>
			<h1 className="font-russo text-5xl text-[#222831]">Register</h1>
			<br />
			<GoogleSign />
			<div className="flex items-center justify-center my-6">
				<div className="w-20 h-px bg-black"></div>
					<h1 className="mx-2  text-black  text-2xl font-medium">or</h1>
				<div className="w-20 h-px bg-black"></div>
			</div>
			<div className="bg-white p-1 w-80">
				<div className="flex space-x-4 mb-4">
					<input type="text" placeholder="first name" className="placeholder-black w-1/2 p-4 border border-black rounded-[10px] hover:scale-105"  ref={first_name}/>
					<input type="text" placeholder="family name" className="placeholder-black w-1/2 p-4 border border-black rounded-[10px] hover:scale-105" ref={family_name}/>
				</div>
				<input type="text" placeholder="Username" className="placeholder-black w-full mb-4 p-4 border  border-black rounded-[10px] hover:scale-105" ref={username}/>
				<input type="text" placeholder="email" className="placeholder-black w-full mb-4 p-4 border rounded-[10px]  border-black hover:scale-105" ref={email} />
				<input type="password" placeholder="Password" className="placeholder-black w-full mb-4 p-4 border rounded-[10px]  border-black hover:scale-105" ref={password} />
			  	<input type="password" placeholder="Confirm password" className="placeholder-black w-full mb-4 p-4 border rounded-[10px]  border-black hover:scale-105" ref={confirmpassword} />
			  	<button className="w-full bg-blue-500 text-white p-4  rounded-[10px] mb-4 hover:shadow-[8px_8px_0px_0px_black] hover:scale-105" onClick={senddata} >Register</button>
			  	<div className="text-center text-sm">
			  		<span>Already have an account? </span>
      				<Link className=" text-blue-600 underline" to="/login/Signin">Login</Link>
				</div>
	  		</div>
		</>
	);
}
