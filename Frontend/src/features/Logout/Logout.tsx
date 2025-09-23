import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import socket from '../Chat/services/socket';
const Logout: React.FC = () => {
  const navigate = useNavigate();
  useEffect( () => {
    if (socket.connect())
      socket.disconnect()
    });

  useEffect(() => {
	const logout = async () => {
		await fetch(`https://e3r5p8.1337.ma/api/logout`, {
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
