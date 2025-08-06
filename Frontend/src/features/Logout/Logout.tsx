import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
	const logout = async () => {
		await fetch("https://localhost/api/logout", {
			method: 'GET',
			credentials: 'include',
		});
		navigate('/login/Signin');
	};
	logout();
  }, [navigate]);
  return null;
};

export default Logout;
