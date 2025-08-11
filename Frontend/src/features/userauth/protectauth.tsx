import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
	const navigate = useNavigate();
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const check = async () => {
			try {
					const response = await fetch(`${import.meta.env.VITE_API_URL}/hello`, {
						credentials: 'include',
					}).then(res => res.json()) as { refreshtoken: boolean; accesstoken: boolean };
					if (!response.accesstoken) {
						const res = await fetch(`${import.meta.env.VITE_API_URL}/login/refreshtoken`, {
							credentials: 'include',
						}).then(e => e.json()) as { refreshtoken: boolean };
						if (!res.refreshtoken) {
							await fetch(`${import.meta.env.VITE_API_URL}/logout`, {credentials: 'include'});
							navigate('/login/Signin');
							return;
						}
					}
					setIsAuthenticated(true);
			} catch (err) {
				console.error("Auth check error:", err);
				await fetch(`${import.meta.env.VITE_API_URL}/logout`);
				navigate('/login/Signin');
			}
		};
		check();
	}, [navigate]);
	return isAuthenticated ? <>{children}</> : null;
}
