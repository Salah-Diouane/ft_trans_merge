import { StateCreator } from 'zustand';

export type userinfo = {
	username: string;
	first_name: string;
	family_name: string;
	email: string;
	Language: string;
	image_url: string;
	cover_url: string;
	hasFetchedUser: boolean;
	twofa:boolean;

	setusername: (newusername: string) => void;
	setfirst_name: (newfirst_name: string) => void;
	setfamily_name: (newfamily_name: string) => void;
	setLanguage: (newLanguage: string) => void;
	setUserinfo: (newusername: string, newfirst_name: string, newfamily_name: string, newLanguage: string) => void;
	setimage_url: (newimage_url: string) => void;
	setcover_url: (newcover_url: string) => void;
	fetchUserInfo: () => Promise<void>;
	setTwoFA: (TwoFA: boolean) => void;
};

export const createUserSlice: StateCreator<userinfo> = (set) => ({
	username: '',
	first_name: '',
	family_name: '',
	email: '',
	Language: '',
	image_url: '',
	cover_url: '',
	hasFetchedUser: false,
	twofa: false,

	setusername: (newusername) => set({ username: newusername }),
	setfirst_name: (newfirst_name) => set({ first_name: newfirst_name }),
	setfamily_name: (newfamily_name) => set({ family_name: newfamily_name }),
	setLanguage: (newLanguage) => set({ Language: newLanguage }),
	setUserinfo: (newusername, newfirst_name, newfamily_name, newLanguage) => set({ username: newusername, first_name: newfirst_name, family_name: newfamily_name, Language: newLanguage }),
	setimage_url: (newimage_url) => set({ image_url: newimage_url }),
	setcover_url: (newcover_url) => set({ cover_url: newcover_url }),
	setTwoFA : (TwoFA) => set({twofa: TwoFA}),
	fetchUserInfo: async () => {
		try {
			const respone = await fetch('http://e3r1p17.1337.ma:3000/userinfo', {
				credentials: 'include',
			}).then(e => e.json()) as { userinfo: boolean, data: userinfo };

			if (!respone.userinfo)
				throw new Error('cannot fetch');

			set({
				username: respone.data.username,
				first_name: respone.data.first_name,
				family_name: respone.data.family_name,
				email: respone.data.email,
				Language: respone.data.Language,
				image_url: respone.data.image_url,
				cover_url: respone.data.cover_url,
				twofa: respone.data.twofa
			});
			console.log(respone.data);
			set({ hasFetchedUser: true });
		} catch (error) {
			console.error('Failed to fetch user info:', error);
			set({ hasFetchedUser: false });
		}
	}
});
