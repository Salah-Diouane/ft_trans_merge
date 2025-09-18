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
		await fetch(`http://e3r11p10.1337.ma:3000/logout`, {
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
