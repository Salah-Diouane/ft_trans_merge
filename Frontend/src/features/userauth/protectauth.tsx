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
				const response = await fetch("http://localhost:3000/hello", {
						credentials: 'include',
					}).then(res => res.json()) as { refreshtoken: boolean; accesstoken: boolean };
				if (!response.accesstoken) {
					console.log(response.refreshtoken);
					const res = await fetch("http://localhost:3000/login/refreshtoken", {
						credentials: 'include',
				}).then(e => e.json()) as { refreshtoken: boolean };
				if (!res.refreshtoken) {
					await fetch("http://localhost:3000/logout", {credentials: 'include'});
					navigate('/login/Signin');
					return;
				}
		}
		setIsAuthenticated(true);
	} catch (err) {
        console.error("Auth check error:", err);
        await fetch("http://localhost:3000/logout");
        navigate('/login/Signin');
      }
    };
    check();
  }, [navigate]);
  return isAuthenticated ? <>{children}</> : null;
}
