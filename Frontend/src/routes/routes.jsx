// // routesConfig.ts
// import Layout from '../features/layout/Layout';
// import ChatApp from '../features/Chat/Chat';
// import Home from '../features/Home/Home';
// import Game from '../features/Game/Game';
// import Settings from '../features/Settings/Settings';
// import Logout from '../features/Logout/Logout';
// import Profile from '../features/Profile/Profile';
// import PingPong from '../features/Game/PingPong';
// import TicTacToe from '../features/Game/TicTacToe';
// import GameHome from '../features/Game/GameHome';
// import Userauth from '../features/userauth/userauth';
// import TwoFA from '../features/userauth/twofa';
// import Signin from '../features/userauth/signin';
// import Signup from '../features/userauth/signup';
// import ProtectedRoute from '../features/userauth/protectauth'
// import RemoteGame from "../features/Game/Tic-Tac/Remote/RemoteGame"
// import LocalGame from '../features/Game/Tic-Tac/Local/LocalGame';
// import LocalPong from '../features/Game/PingPong/Local/LocalPong';
// import RemotePong from '../features/Game/PingPong/Remote/RemotePong';
// import GameSettings from '../features/Settings/Game';
// import ProfileSetting from '../features/Settings/Profile';
// import SecurtitySettings from '../features/Settings/Security';
// import Friends from "../features/Friends/Friends"
// // import Notification from "../features/Notification/Notification";
// import Notification from "../features/Notifications/Notification";
// import TournamentPong from '../features/Game/PingPong/Tournaments/TournamentPong';
// import TournamentCreate from '../features/Game/PingPong/Tournaments/TournamentCreate';
// import TournamentJoin from '../features/Game/PingPong/Tournaments/TournamentJoin';
// import TournamentBoard from '../features/Game/PingPong/Tournaments/TournamentBoard';
// import TournamentGameStart from '../features/Game/PingPong/Tournaments/TournamentGameStart';
// import InviteGame from '../features/Game/PingPong/Invite/InviteGame';


// import React, { lazy, Suspense } from 'react';
import React from 'react';
import ProtectedRoute from '../features/userauth/protectauth';

// Lazy imports
import Layout  from '../features/layout/Layout';
import ChatApp  from '../features/Chat/Chat';
import Home  from '../features/Home/Home';
import Game  from '../features/Game/Game';
import Settings  from '../features/Settings/Settings';
import Logout  from '../features/Logout/Logout';
import Profile  from '../features/Profile/Profile';
import PingPong  from '../features/Game/PingPong';
import TicTacToe  from '../features/Game/TicTacToe';
import GameHome  from '../features/Game/GameHome';
import Userauth  from '../features/userauth/userauth';
import TwoFA  from '../features/userauth/twofa';
import Signin  from '../features/userauth/signin';
import Signup  from '../features/userauth/signup';
import RemoteGame  from "../features/Game/Tic-Tac/Remote/RemoteGame";
import LocalGame  from '../features/Game/Tic-Tac/Local/LocalGame';
import LocalPong  from '../features/Game/PingPong/Local/LocalPong';
import RemotePong  from '../features/Game/PingPong/Remote/RemotePong';
import GameSettings  from '../features/Settings/Game';
import ProfileSetting  from '../features/Settings/Profile';
import SecurtitySettings  from '../features/Settings/Security';
import Friends  from "../features/Friends/Friends";
import Notification  from "../features/Notifications/Notification";
import TournamentPong  from '../features/Game/PingPong/Tournaments/TournamentPong';
import TournamentCreate  from '../features/Game/PingPong/Tournaments/TournamentCreate';
import TournamentJoin  from '../features/Game/PingPong/Tournaments/TournamentJoin';
import TournamentBoard  from '../features/Game/PingPong/Tournaments/TournamentBoard';
import TournamentGameStart  from '../features/Game/PingPong/Tournaments/TournamentGameStart';
import InviteGame from   '../features/Game/PingPong/Invite/InviteGame';

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
		),
		children: [
			{ index: true, element:  <Home /> },
			{
				path: 'friends',
				element: <Friends />,
				// children: [
				//   { path: 'all', element: <FriendsAll /> },
				//   { path: 'sent', element: <FriendSent /> },
				//   { path: 'requests', element: <FriendsReq /> },
				//   { path: 'blocked', element: <FriendsBlocked /> },
				// ]
			},
			{ path: 'chat', element: <ChatApp /> },
			{ path: "/chat/:userId", element: <ChatApp /> },
			{
				path: 'game',
				element: <Game />,
				children: [
					{ index: true, element: <GameHome /> },
					{ path: 'ping-pong', element: <PingPong /> },
					{path: "ping-pong/local-game", element: <LocalPong />},
					{path: "ping-pong/remote-game", element: <RemotePong />},
					{ path: 'ping-pong/tournament-game', element: <TournamentPong /> },
					{ path: 'ping-pong/tournament-game/tournament-create', element: <TournamentCreate /> },
					{ path: 'ping-pong/tournament-game/tournament-join', element: <TournamentJoin /> },
					{ path: 'ping-pong/tournament-game/tournament/:tournamentId/view', element: <TournamentBoard /> },
					{ path: 'ping-pong/tournament-game/tournament/:tournamentId/game', element: <TournamentGameStart /> },
					{ path: 'ping-pong/invite/:roomId', element:<InviteGame /> },
					{ path: 'tic-tac-toe', element: <TicTacToe /> },
					{path: "tic-tac-toe/local-game", element: <LocalGame />},
					{path: "tic-tac-toe/remote-game", element: <RemoteGame />},
				],
			},
			{
				path: 'settings',
				element: <Settings />,
				children: [
				  { path: 'profile', element: <ProfileSetting /> },
				  { path: 'game', element: <GameSettings /> },
				  { path: 'security', element: <SecurtitySettings /> },
				]
			},
			{ path: 'notification', element: <Notification /> },
			{ path: 'logout', element: <Logout /> },
			{ path: 'profile/:user?', element: <Profile /> },
		],
	}
];
