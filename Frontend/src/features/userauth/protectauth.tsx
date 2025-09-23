import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/store';

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
	const navigate = useNavigate();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const store = useStore();

	useEffect(() => {
		const check = async () => {
			try {
					const response = await fetch("https://e3r5p8.1337.ma/api/hello", {
						credentials: 'include',
					}).then(res => res.json()) as { refreshtoken: boolean; accesstoken: boolean };
					if (!response.accesstoken) {
						const res = await fetch("https://e3r5p8.1337.ma/api/login/refreshtoken", {
							credentials: 'include',
						}).then(e => e.json()) as { refreshtoken: boolean };
						if (!res.refreshtoken) {
							await fetch("https://e3r5p8.1337.ma/api/logout", {credentials: 'include'});
							navigate('/login/Signin');
							return;
						}
					}
					if (!store.hasFetchedUser)
						await store.fetchUserInfo();
					setIsAuthenticated(true);
			} catch (err) {
				await fetch("https://e3r5p8.1337.ma/api/logout");
				navigate('/login/Signin');
			}
		};
		check();
	}, [navigate]);
	return isAuthenticated ? <>{children}</> : null;
}
