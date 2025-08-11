import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import socket from '../Chat/Frontend/services/socket';
const Logout: React.FC = () => {
  const navigate = useNavigate();
  useEffect( () => {
    if (socket.connect())
      socket.disconnect()
    });

  useEffect(() => {
	const logout = async () => {
		await fetch(`${import.meta.env.VITE_API_URL}/logout`, {
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
