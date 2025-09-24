import toast from "react-hot-toast";
import { useStore } from "../../store/store";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from '../../translation/translation'; 

export default function Profile() {
	const store = useStore();
	const CoverRef: any = useRef(null);
	const ImgRef: any = useRef(null);
	const [Coverurl, setCoverurl] = useState(store.cover_url);
	const [Imgurl, setImgurl] = useState(store.image_url);
	const [language, setLanguage] = useState(store.Language || "en");
	const Useranme: any = useRef(null);
	const first_nameRef: any = useRef(null);
	const family_nameRef: any = useRef(null);
	const LanguageRef: any = useRef(null);
	const [erros, seterros] = useState<{ [key: string]: string }>({});
	const { t } = useTranslation();

	useEffect(() => {
		if (store.Language) {
			i18n.changeLanguage(store.Language);
		}
	}, [store.Language]);
	const notify = () => toast("hi from img  !");
	const CoverClick = () => CoverRef.current?.click();
	const ProfileClick = () => ImgRef.current?.click();
	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, type: 'cover' | 'profile') => {
		const file = e.target.files?.[0];
		if (file) {
			const formData = new FormData();
			formData.append('file', file);
			try {
				const res = await fetch('https://e3r4p2.1337.ma/api/settings/imageUrl', {
					method: 'POST',
					body: formData,
					credentials: 'include'
				});
				if (res.ok) {
					const data = await res.json() as { url: string };
					const url = data.url;
					if (type === 'cover')
						setCoverurl(url);
					else
						setImgurl(url);
				} else {
					const data = await res.json() as { message: string, type: string };
					console.log(`error :  ${data.message}}`);
					toast.error(`${data.message}`);
					seterros({ [data.type]: data.message });
				}
			} catch (err) {
				alert('Upload error: ' + (err as Error).message);
			}
		}
	}
	const sendInfo = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		try {
			const data = {
				username: Useranme.current?.value || "",
				first_name: first_nameRef.current?.value || "",
				family_name: family_nameRef.current?.value || "",
				Language: LanguageRef.current?.value || "en",
				image_url: Imgurl,
				cover_url: Coverurl
			};
			const respone = await fetch("https://e3r4p2.1337.ma/api/settings/profile", {
				credentials: 'include',
				method: "PUT",
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify(data)
			});
			if (respone.ok) {
				if (Coverurl !== store.cover_url)
					store.setcover_url(Coverurl);
				if (Imgurl !== store.image_url)
					store.setimage_url(Imgurl);
				store.setUserinfo(Useranme.current?.value || "", first_nameRef.current?.value || "", family_nameRef.current?.value || "", LanguageRef.current?.value || "");
				toast.success("done !");
			} else {
				const f = await respone.json() as { message: string, type: string };
				seterros({ [f.type]: f.message });
				toast.error(`${f.message}`);
			}
		} catch (err) {
			toast.error(`${err}`);
		}
	}
	
	const inputClass = (fieldName: string) => {
		const baseStyle = "w-full sm:w-60 p-3 text-base rounded-lg border outline-none bg-[#222831]";
		const errorStyle = "border-red-500 text-red-500";
		const normalStyle = "border-black text-white";

		return `${baseStyle} ${erros[fieldName] ? errorStyle : normalStyle}`;
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
			<div className="flex flex-col w-full max-w-[1100px] mx-auto px-4 space-y-4 items-center pb-10 font-russo">
				<div className="flex flex-col items-center w-full">
					<div className="relative w-full rounded-[20px] overflow-hidden">
						<img src={Coverurl} alt="Cover" className="w-full h-[200px]  bg-cover bg-center sm:h-[300px] object-cover" />
						<div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer" onClick={CoverClick}>
							<span className="text-white text-lg font-semibold">Change Cover Image</span>
						</div>
					</div>
					<input type="file" accept="image/*" style={{ display: 'none' }} ref={CoverRef} onChange={(e) => handleFileChange(e, 'cover')} />
					<div className="-mt-20 sm:-mt-24 flex flex-col items-center relative group">
						<img src={Imgurl} alt="Profile" className="bg-cover bg-center  w-32 h-32 sm:w-48 sm:h-48 rounded-full border-4 border-transparent object-cover" />
						<div className="absolute inset-0 bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer" onClick={ProfileClick}>
							<span className="text-white text-sm font-medium text-center px-2">Change Profile Image</span>
						</div>
					</div>
					<input type="file" accept="image/*" style={{ display: 'none' }} ref={ImgRef} onChange={(e) => handleFileChange(e, 'profile')} />
				</div>
				<div className="flex flex-col items-center space-y-6 w-full">
					<div className="flex flex-col sm:flex-row items-start sm:items-center w-full justify-center gap-2 sm:gap-10">
						<label className="text-white sm:min-w-[8rem] sm:w-32">{t("username")}:</label>
						<input type="text" defaultValue={store.username} className={`${inputClass("username")}`} ref={Useranme} onFocus={() => clearError("username")} />
					</div>
					<div className="flex flex-col sm:flex-row items-start sm:items-center w-full justify-center gap-2 sm:gap-10">
						<label className="text-white sm:min-w-[8rem] sm:w-32">{t("firstName")}:</label>
						<input type="text" defaultValue={store.first_name} className={`${inputClass("first_name")}`} ref={first_nameRef} onFocus={() => clearError("first_name")} />
					</div>
					<div className="flex flex-col sm:flex-row items-start sm:items-center w-full justify-center gap-2 sm:gap-11">
						<label className="text-white sm:min-w-[8rem] sm:w-32">{t("lastName")}:</label>
						<input type="text" defaultValue={store.family_name} className={`${inputClass("family_name")}`} ref={family_nameRef} onFocus={() => clearError("family_name")} />
					</div>
					<div className="flex flex-col sm:flex-row items-start sm:items-center w-full justify-center gap-2 sm:gap-11">
						<label className="text-white sm:min-w-[8rem] sm:w-32">{t("email")}:</label>
						<input type="email" value={store.email} readOnly className="w-full sm:w-60 p-3 text-base rounded-lg border-black outline-none bg-[#2D3541] text-white" />
					</div>
					<div className="flex flex-col sm:flex-row items-start sm:items-center w-full justify-center gap-2 sm:gap-10">
						<label className="text-white sm:min-w-[8rem] sm:w-32">{t("language")}</label>
						<select className="w-full sm:w-60 py-3 px-3 text-base rounded-lg border-black outline-none bg-[#222831] text-white" ref={LanguageRef} defaultValue={store.Language}>
							<option value="en">🇬🇧 English</option>
							<option value="fr">🇫🇷 French</option>
							<option value="ar">🇸🇦 Arabic</option>
						</select>
					</div>
					<button className="mt-4 px-10 py-3 text-white border border-transparent bg-blue-600 rounded-[10px] hover:text-[#0077FF] hover:bg-transparent hover:border-[#0077FF] transition" onClick={(e) => sendInfo(e)}>Save</button>
				</div>

			</div>
		</>
	);
}