import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../src/features/layout/Layout';
import ChatApp from './features/Chat/Frontend/Chat';
import Home from './features/Home/Home';
import Game from './features/Game/Game';
import Settings from './features/Settings/Settings';
import Logout from './features/Logout/Logout';
import Profile from './features/Profile/Profile';
import PingPong from './features/Game/PingPong';
import TicTacToe from './features/Game/TicTacToe';
import GameHome from './features/Game/GameHome';


createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>


      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<ChatApp />} />

          <Route path="game" element={<Game />}>
            <Route index element={<GameHome />} />
            <Route path="ping-pong" element={<PingPong />} />
            <Route path="tic-tac-toe" element={<TicTacToe />} />
          </Route>

          <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>

    </BrowserRouter>
  </StrictMode>
);