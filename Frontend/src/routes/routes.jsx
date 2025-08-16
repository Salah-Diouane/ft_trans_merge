// routesConfig.ts
import Layout from '../features/layout/Layout';
import ChatApp from '../features/Chat/Chat';
import Home from '../features/Home/Home';
import Game from '../features/Game/Game';
import Settings from '../features/Settings/Settings';
import Logout from '../features/Logout/Logout';
import Profile from '../features/Profile/Profile';
import PingPong from '../features/Game/PingPong';
import TicTacToe from '../features/Game/TicTacToe';
import GameHome from '../features/Game/GameHome';
import Userauth from '../features/userauth/userauth';
import TwoFA from '../features/userauth/twofa';
import Signin from '../features/userauth/signin';
import Signup from '../features/userauth/signup';
import ProtectedRoute from '../features/userauth/protectauth'
import RemoteGame from "../features/Game/Remote/RemoteGame"
import LocalGame from '../features/Game/Local/LocalGame';
import LocalPong from '../features/Game/PingPong/Local/LocalPong'
import RemotePong from '../features/Game/PingPong/Remote/RemotePong'
export const routes  = [
  {
    path: '/login',
    element: <Userauth />,
    children: [
      { path: 'Signin', element: <Signin /> },
      { path: 'Signup', element: <Signup /> },
	  {path: 'twofa', element: <TwoFA />}
    ],
  },
  {
    path: '/',
    element:  (
		<ProtectedRoute>
			<Layout />
		</ProtectedRoute>
			// <Layout />
		),
		children: [
			{ index: true, element:  <Home /> },
			{ path: 'chat', element: <ChatApp /> },
			{
				path: 'game',
				element: <Game />,
				children: [
					{ index: true, element: <GameHome /> },
					{ path: 'ping-pong', element: <PingPong /> },
					{path: "ping-pong/local-game", element: <LocalPong />},
					{path: "ping-pong/remote-game", element: <RemotePong />},
					{ path: 'tic-tac-toe', element: <TicTacToe /> },
					{path: "tic-tac-toe/local-game", element: <LocalGame />},
					{path: "tic-tac-toe/remote-game", element: <RemoteGame />},
				],
			},
			{ path: 'settings', element: <Settings /> },
			{ path: 'logout', element: <Logout /> },
			{ path: 'profile', element: <Profile /> },
		],
	}
];
       