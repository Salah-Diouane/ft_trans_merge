intra-backend-1  | 
intra-backend-1  | > backend@1.0.0 dev
intra-backend-1  | > ts-node-dev --respawn --transpile-only src/App.ts
intra-backend-1  | 
intra-backend-1  | [INFO] 15:24:09 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.9.3)
intra-backend-1  | [dotenv@17.2.3] injecting env (12) from .env -- tip: 🔄 add secrets lifecycle management: https://dotenvx.com/ops
intra-backend-1  | 127.0.0.1:3000
intra-backend-1  | [INFO] 15:24:47 Restarting: /app/src/modules/socket/tictactoe/game.handlers.ts has been modified
intra-backend-1  | [dotenv@17.2.3] injecting env (12) from .env -- tip: ⚙️  enable debug logging with { debug: true }
intra-backend-1  | 127.0.0.1:3000
intra-backend-1  | [INFO] 15:24:49 Restarting: /app/src/modules/socket/tictactoe/game.handlers.ts has been modified
intra-backend-1  | [dotenv@17.2.3] injecting env (12) from .env -- tip: 🔄 add secrets lifecycle management: https://dotenvx.com/ops
intra-backend-1  | 127.0.0.1:3000
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | 2
intra-backend-1  | 2
intra-backend-1  | User salah connected and set online
intra-backend-1  | Socket mapped: 2 -> e9_qXeZQRufVLrl2AAAB
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | decode user :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | decode userid :  2
intra-backend-1  | --> : friends :  [
intra-backend-1  |   {
intra-backend-1  |     id: 3,
intra-backend-1  |     username: 'yassine',
intra-backend-1  |     first_name: 'yassine',
intra-backend-1  |     family_name: 'oubrhich',
intra-backend-1  |     image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg'
intra-backend-1  |   }
intra-backend-1  | ]
intra-backend-1  | -------------> id: 3
intra-backend-1  | -------------> online :  false
intra-backend-1  | -------------> Friend yassine (id: 3) online? false
intra-backend-1  | --> : friend_online_status :  [
intra-backend-1  |   {
intra-backend-1  |     id: 3,
intra-backend-1  |     username: 'yassine',
intra-backend-1  |     first_name: 'yassine',
intra-backend-1  |     family_name: 'oubrhich',
intra-backend-1  |     image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     online: false
intra-backend-1  |   }
intra-backend-1  | ]
intra-backend-1  | decode user :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | decode userid :  2
intra-backend-1  | --> : friends :  [
intra-backend-1  |   {
intra-backend-1  |     id: 3,
intra-backend-1  |     username: 'yassine',
intra-backend-1  |     first_name: 'yassine',
intra-backend-1  |     family_name: 'oubrhich',
intra-backend-1  |     image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg'
intra-backend-1  |   }
intra-backend-1  | ]
intra-backend-1  | -------------> id: 3
intra-backend-1  | -------------> online :  false
intra-backend-1  | -------------> Friend yassine (id: 3) online? false
intra-backend-1  | --> : friend_online_status :  [
intra-backend-1  |   {
intra-backend-1  |     id: 3,
intra-backend-1  |     username: 'yassine',
intra-backend-1  |     first_name: 'yassine',
intra-backend-1  |     family_name: 'oubrhich',
intra-backend-1  |     image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     online: false
intra-backend-1  |   }
intra-backend-1  | ]
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | the code :  361931
intra-backend-1  | the twofa :  false
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> J--Te2mS9zQTA-GIAAAD
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | history :  []   4
intra-backend-1  | history :  []   4
intra-backend-1  | === UserPlayerStats called ===
intra-backend-1  | Params: NullObject <[Object: null prototype] {}> { username: 'adam' }
intra-backend-1  | Username provided: adam
intra-backend-1  | User ID from username: 4
intra-backend-1  | Fetching player state for userid: 4
intra-backend-1  | =========> : userid : 4
intra-backend-1  | =========> : rom : { total_xp: 0, level: 0 }
intra-backend-1  | Player state result: { total_xp: 0, level: 0 }
intra-backend-1  | decode user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | decode userid :  4
intra-backend-1  | decode : in friends :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | === UserPlayerStats called ===
intra-backend-1  | Params: NullObject <[Object: null prototype] {}> { username: 'adam' }
intra-backend-1  | Username provided: adam
intra-backend-1  | --> : friends :  []
intra-backend-1  | --> : friend_online_status :  []
intra-backend-1  | User ID from username: 4
intra-backend-1  | Fetching player state for userid: 4
intra-backend-1  | =========> : userid : 4
intra-backend-1  | decode user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | decode userid :  4
intra-backend-1  | decode : in friends :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : friends :  []
intra-backend-1  | --> : friend_online_status :  []
intra-backend-1  | =========> : rom : { total_xp: 0, level: 0 }
intra-backend-1  | Player state result: { total_xp: 0, level: 0 }
intra-backend-1  | history :  []   4
intra-backend-1  | history :  []   4
intra-backend-1  | decode user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | decode userid :  4
intra-backend-1  | --> : friends :  []
intra-backend-1  | --> : friend_online_status :  []
intra-backend-1  | decode user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | decode userid :  4
intra-backend-1  | --> : friends :  []
intra-backend-1  | --> : friend_online_status :  []
intra-backend-1  | decode : in friends :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | decode user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | decode userid :  4
intra-backend-1  | --> : friends :  []
intra-backend-1  | --> : friend_online_status :  []
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: J--Te2mS9zQTA-GIAAAD
intra-backend-1  | User disconnected: J--Te2mS9zQTA-GIAAAD
intra-backend-1  | Socket J--Te2mS9zQTA-GIAAAD disconnected
intra-backend-1  | ---------------> User disconnected: J--Te2mS9zQTA-GIAAAD
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> y9t6QeFaavVs0Q2lAAAF
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  salah false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User salah disconnected and set offline
intra-backend-1  | Socket unmapped: salah
intra-backend-1  | Player disconnected: e9_qXeZQRufVLrl2AAAB
intra-backend-1  | User disconnected: e9_qXeZQRufVLrl2AAAB
intra-backend-1  | Socket e9_qXeZQRufVLrl2AAAB disconnected
intra-backend-1  | ---------------> User disconnected: e9_qXeZQRufVLrl2AAAB
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | 2
intra-backend-1  | 2
intra-backend-1  | User salah connected and set online
intra-backend-1  | Socket mapped: 2 -> foVahBqR9hxoRR1zAAAH
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | No tic-tac-toe settings found, creating default for user: 4
intra-backend-1  | username :  2
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ---> End game reason: disconnect
intra-backend-1  | ---> Winner: salah
intra-backend-1  | ---> Loser: adam
intra-backend-1  | 🧮 Final score -> left: 1 right: 0
intra-backend-1  | reason :  false
intra-backend-1  | winner :  salah
intra-backend-1  | loser :  adam
intra-backend-1  | type :  Tic-Tac
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: y9t6QeFaavVs0Q2lAAAF
intra-backend-1  | User disconnected: y9t6QeFaavVs0Q2lAAAF
intra-backend-1  | Socket y9t6QeFaavVs0Q2lAAAF disconnected
intra-backend-1  | ---------------> User disconnected: y9t6QeFaavVs0Q2lAAAF
intra-backend-1  | ########## gameinfo { win: 1, lose: 4, draw: 0, matches: 5 }
intra-backend-1  | ########## gameinfo { win: 0, lose: 1, draw: 0, matches: 1 }
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> uUy8zzftwkGYjrLCAAAJ
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  salah false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User salah disconnected and set offline
intra-backend-1  | Socket unmapped: salah
intra-backend-1  | Player disconnected: foVahBqR9hxoRR1zAAAH
intra-backend-1  | User disconnected: foVahBqR9hxoRR1zAAAH
intra-backend-1  | Socket foVahBqR9hxoRR1zAAAH disconnected
intra-backend-1  | ---------------> User disconnected: foVahBqR9hxoRR1zAAAH
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | 2
intra-backend-1  | 2
intra-backend-1  | User salah connected and set online
intra-backend-1  | Socket mapped: 2 -> 3q9IbmWJLewsOBvBAAAL
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | username :  4
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | history :  [
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Win'
intra-backend-1  |   }
intra-backend-1  | ]   2
intra-backend-1  | history :  [
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Win'
intra-backend-1  |   }
intra-backend-1  | ]   2
intra-backend-1  | ---> End game reason: timeout
intra-backend-1  | ---> Winner: adam
intra-backend-1  | ---> Loser: salah
intra-backend-1  | 🧮 Final score -> left: 1 right: 0
intra-backend-1  | reason :  false
intra-backend-1  | winner :  adam
intra-backend-1  | loser :  salah
intra-backend-1  | type :  Tic-Tac
intra-backend-1  | ########## gameinfo { win: 1, lose: 1, draw: 0, matches: 2 }
intra-backend-1  | ########## gameinfo { win: 1, lose: 5, draw: 0, matches: 6 }
intra-backend-1  | [INFO] 15:27:13 Restarting: /app/src/modules/socket/tictactoe/game.handlers.ts has been modified
intra-backend-1  | [dotenv@17.2.3] injecting env (12) from .env -- tip: 🔄 add secrets lifecycle management: https://dotenvx.com/ops
intra-backend-1  | 127.0.0.1:3000
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | 2
intra-backend-1  | 2
intra-backend-1  | User salah connected and set online
intra-backend-1  | Socket mapped: 2 -> 2LVpboRL0eyZyXgUAAAB
intra-backend-1  | [INFO] 15:27:15 Restarting: /app/src/modules/socket/tictactoe/game.handlers.ts has been modified
intra-backend-1  | [dotenv@17.2.3] injecting env (12) from .env -- tip: 🔐 prevent building .env in docker: https://dotenvx.com/prebuild
intra-backend-1  | 127.0.0.1:3000
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> DhSLAfThSaxxufYvAAAC
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | 2
intra-backend-1  | 2
intra-backend-1  | User salah connected and set online
intra-backend-1  | Socket mapped: 2 -> GhtjoFAh9Rc4gunlAAAD
intra-backend-1  | decode user :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | decode userid :  2
intra-backend-1  | --> : friends :  [
intra-backend-1  |   {
intra-backend-1  |     id: 3,
intra-backend-1  |     username: 'yassine',
intra-backend-1  |     first_name: 'yassine',
intra-backend-1  |     family_name: 'oubrhich',
intra-backend-1  |     image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg'
intra-backend-1  |   }
intra-backend-1  | ]
intra-backend-1  | -------------> id: 3
intra-backend-1  | -------------> online :  false
intra-backend-1  | -------------> Friend yassine (id: 3) online? false
intra-backend-1  | --> : friend_online_status :  [
intra-backend-1  |   {
intra-backend-1  |     id: 3,
intra-backend-1  |     username: 'yassine',
intra-backend-1  |     first_name: 'yassine',
intra-backend-1  |     family_name: 'oubrhich',
intra-backend-1  |     image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     online: false
intra-backend-1  |   }
intra-backend-1  | ]
intra-backend-1  | decode user :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | decode userid :  2
intra-backend-1  | --> : friends :  [
intra-backend-1  |   {
intra-backend-1  |     id: 3,
intra-backend-1  |     username: 'yassine',
intra-backend-1  |     first_name: 'yassine',
intra-backend-1  |     family_name: 'oubrhich',
intra-backend-1  |     image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg'
intra-backend-1  |   }
intra-backend-1  | ]
intra-backend-1  | -------------> id: 3
intra-backend-1  | -------------> online :  false
intra-backend-1  | -------------> Friend yassine (id: 3) online? false
intra-backend-1  | --> : friend_online_status :  [
intra-backend-1  |   {
intra-backend-1  |     id: 3,
intra-backend-1  |     username: 'yassine',
intra-backend-1  |     first_name: 'yassine',
intra-backend-1  |     family_name: 'oubrhich',
intra-backend-1  |     image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     online: false
intra-backend-1  |   }
intra-backend-1  | ]
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  salah false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User salah disconnected and set offline
intra-backend-1  | Socket unmapped: salah
intra-backend-1  | Player disconnected: GhtjoFAh9Rc4gunlAAAD
intra-backend-1  | User disconnected: GhtjoFAh9Rc4gunlAAAD
intra-backend-1  | Socket GhtjoFAh9Rc4gunlAAAD disconnected
intra-backend-1  | ---------------> User disconnected: GhtjoFAh9Rc4gunlAAAD
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | 2
intra-backend-1  | 2
intra-backend-1  | User salah connected and set online
intra-backend-1  | Socket mapped: 2 -> fDlFJU-mlEPVhlp5AAAF
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: DhSLAfThSaxxufYvAAAC
intra-backend-1  | User disconnected: DhSLAfThSaxxufYvAAAC
intra-backend-1  | Socket DhSLAfThSaxxufYvAAAC disconnected
intra-backend-1  | ---------------> User disconnected: DhSLAfThSaxxufYvAAAC
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> k_Ymu0-Arhim6FEAAAAH
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | username :  2
intra-backend-1  | username :  4
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 2,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : rows :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | ====> : ticTacinfo :  {
intra-backend-1  |   id: 4,
intra-backend-1  |   username: null,
intra-backend-1  |   x_color: '#FF0000',
intra-backend-1  |   o_color: '#0000FF',
intra-backend-1  |   grid_color: '#EEEEEE',
intra-backend-1  |   board_color: '#EEEEEE'
intra-backend-1  | }
intra-backend-1  | history :  [
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Win'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   }
intra-backend-1  | ]   2
intra-backend-1  | history :  [
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Win'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   }
intra-backend-1  | ]   2
intra-backend-1  | ---> End game reason: timeout
intra-backend-1  | ---> Winner: adam
intra-backend-1  | ---> Loser: salah
intra-backend-1  | 🧮 Final score -> left: 1 right: 0
intra-backend-1  | reason :  false
intra-backend-1  | winner :  adam
intra-backend-1  | loser :  salah
intra-backend-1  | type :  Tic-Tac
intra-backend-1  | ########## gameinfo { win: 2, lose: 1, draw: 0, matches: 3 }
intra-backend-1  | ########## gameinfo { win: 1, lose: 6, draw: 0, matches: 7 }
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: k_Ymu0-Arhim6FEAAAAH
intra-backend-1  | User disconnected: k_Ymu0-Arhim6FEAAAAH
intra-backend-1  | Socket k_Ymu0-Arhim6FEAAAAH disconnected
intra-backend-1  | ---------------> User disconnected: k_Ymu0-Arhim6FEAAAAH
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> 4rYF8lj-7xbRJlPUAAAJ
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: 4rYF8lj-7xbRJlPUAAAJ
intra-backend-1  | User disconnected: 4rYF8lj-7xbRJlPUAAAJ
intra-backend-1  | Socket 4rYF8lj-7xbRJlPUAAAJ disconnected
intra-backend-1  | ---------------> User disconnected: 4rYF8lj-7xbRJlPUAAAJ
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> 31dNElENKIBD-cbFAAAL
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  salah false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User salah disconnected and set offline
intra-backend-1  | Socket unmapped: salah
intra-backend-1  | Player disconnected: fDlFJU-mlEPVhlp5AAAF
intra-backend-1  | User disconnected: fDlFJU-mlEPVhlp5AAAF
intra-backend-1  | Socket fDlFJU-mlEPVhlp5AAAF disconnected
intra-backend-1  | ---------------> User disconnected: fDlFJU-mlEPVhlp5AAAF
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | 2
intra-backend-1  | 2
intra-backend-1  | User salah connected and set online
intra-backend-1  | Socket mapped: 2 -> kUM_yVDDS_VCIKEvAAAN
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | history :  [
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Win'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   }
intra-backend-1  | ]   2
intra-backend-1  | history :  [
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Win'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   }
intra-backend-1  | ]   2
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: 31dNElENKIBD-cbFAAAL
intra-backend-1  | User disconnected: 31dNElENKIBD-cbFAAAL
intra-backend-1  | Socket 31dNElENKIBD-cbFAAAL disconnected
intra-backend-1  | ---------------> User disconnected: 31dNElENKIBD-cbFAAAL
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> wAWxMMcMPkjE_-EzAAAP
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: wAWxMMcMPkjE_-EzAAAP
intra-backend-1  | User disconnected: wAWxMMcMPkjE_-EzAAAP
intra-backend-1  | Socket wAWxMMcMPkjE_-EzAAAP disconnected
intra-backend-1  | ---------------> User disconnected: wAWxMMcMPkjE_-EzAAAP
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> ux_1MLkR9oEaw1eHAAAR
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  salah false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User salah disconnected and set offline
intra-backend-1  | Socket unmapped: salah
intra-backend-1  | Player disconnected: kUM_yVDDS_VCIKEvAAAN
intra-backend-1  | User disconnected: kUM_yVDDS_VCIKEvAAAN
intra-backend-1  | Socket kUM_yVDDS_VCIKEvAAAN disconnected
intra-backend-1  | ---------------> User disconnected: kUM_yVDDS_VCIKEvAAAN
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | 2
intra-backend-1  | 2
intra-backend-1  | User salah connected and set online
intra-backend-1  | Socket mapped: 2 -> 4A9iZh4pjUt7opndAAAT
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: ux_1MLkR9oEaw1eHAAAR
intra-backend-1  | User disconnected: ux_1MLkR9oEaw1eHAAAR
intra-backend-1  | Socket ux_1MLkR9oEaw1eHAAAR disconnected
intra-backend-1  | ---------------> User disconnected: ux_1MLkR9oEaw1eHAAAR
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> F4cp16ITFL-9sBI0AAAV
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: F4cp16ITFL-9sBI0AAAV
intra-backend-1  | User disconnected: F4cp16ITFL-9sBI0AAAV
intra-backend-1  | Socket F4cp16ITFL-9sBI0AAAV disconnected
intra-backend-1  | ---------------> User disconnected: F4cp16ITFL-9sBI0AAAV
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> EEod68DOCqeiyXp6AAAX
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: EEod68DOCqeiyXp6AAAX
intra-backend-1  | User disconnected: EEod68DOCqeiyXp6AAAX
intra-backend-1  | Socket EEod68DOCqeiyXp6AAAX disconnected
intra-backend-1  | ---------------> User disconnected: EEod68DOCqeiyXp6AAAX
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> L04gQyr-3P3p2PqGAAAZ
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: L04gQyr-3P3p2PqGAAAZ
intra-backend-1  | User disconnected: L04gQyr-3P3p2PqGAAAZ
intra-backend-1  | Socket L04gQyr-3P3p2PqGAAAZ disconnected
intra-backend-1  | ---------------> User disconnected: L04gQyr-3P3p2PqGAAAZ
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> 0Q7Xrh2VeKuPEJwyAAAb
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: 0Q7Xrh2VeKuPEJwyAAAb
intra-backend-1  | User disconnected: 0Q7Xrh2VeKuPEJwyAAAb
intra-backend-1  | Socket 0Q7Xrh2VeKuPEJwyAAAb disconnected
intra-backend-1  | ---------------> User disconnected: 0Q7Xrh2VeKuPEJwyAAAb
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> e4yLey8uSvCtk0UZAAAd
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: e4yLey8uSvCtk0UZAAAd
intra-backend-1  | User disconnected: e4yLey8uSvCtk0UZAAAd
intra-backend-1  | Socket e4yLey8uSvCtk0UZAAAd disconnected
intra-backend-1  | ---------------> User disconnected: e4yLey8uSvCtk0UZAAAd
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> Do6TDvF4tuyZ_6V1AAAf
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: Do6TDvF4tuyZ_6V1AAAf
intra-backend-1  | User disconnected: Do6TDvF4tuyZ_6V1AAAf
intra-backend-1  | Socket Do6TDvF4tuyZ_6V1AAAf disconnected
intra-backend-1  | ---------------> User disconnected: Do6TDvF4tuyZ_6V1AAAf
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> OlW-FZoQ18ZsonNBAAAh
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: OlW-FZoQ18ZsonNBAAAh
intra-backend-1  | User disconnected: OlW-FZoQ18ZsonNBAAAh
intra-backend-1  | Socket OlW-FZoQ18ZsonNBAAAh disconnected
intra-backend-1  | ---------------> User disconnected: OlW-FZoQ18ZsonNBAAAh
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> 2tj8hgiEMa-ZR3KRAAAj
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: 2tj8hgiEMa-ZR3KRAAAj
intra-backend-1  | User disconnected: 2tj8hgiEMa-ZR3KRAAAj
intra-backend-1  | Socket 2tj8hgiEMa-ZR3KRAAAj disconnected
intra-backend-1  | ---------------> User disconnected: 2tj8hgiEMa-ZR3KRAAAj
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> n_F8kjj5tMNiXRb-AAAl
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: n_F8kjj5tMNiXRb-AAAl
intra-backend-1  | User disconnected: n_F8kjj5tMNiXRb-AAAl
intra-backend-1  | Socket n_F8kjj5tMNiXRb-AAAl disconnected
intra-backend-1  | ---------------> User disconnected: n_F8kjj5tMNiXRb-AAAl
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> HI_kczn27A84YeK6AAAn
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: HI_kczn27A84YeK6AAAn
intra-backend-1  | User disconnected: HI_kczn27A84YeK6AAAn
intra-backend-1  | Socket HI_kczn27A84YeK6AAAn disconnected
intra-backend-1  | ---------------> User disconnected: HI_kczn27A84YeK6AAAn
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> HoEvAEqfc3CcLWiCAAAp
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | [INFO] 15:39:50 Restarting: /app/src/plugins/database.plugin.ts has been modified
intra-backend-1  | [dotenv@17.2.3] injecting env (12) from .env -- tip: 👥 sync secrets across teammates & machines: https://dotenvx.com/ops
intra-backend-1  | 127.0.0.1:3000
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | 2
intra-backend-1  | 2
intra-backend-1  | User salah connected and set online
intra-backend-1  | Socket mapped: 2 -> d-nWDEfXbXi7QrZLAAAC
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> YHjqMLTdgf2ig4pcAAAD
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  salah false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User salah disconnected and set offline
intra-backend-1  | Socket unmapped: salah
intra-backend-1  | Player disconnected: d-nWDEfXbXi7QrZLAAAC
intra-backend-1  | User disconnected: d-nWDEfXbXi7QrZLAAAC
intra-backend-1  | Socket d-nWDEfXbXi7QrZLAAAC disconnected
intra-backend-1  | ---------------> User disconnected: d-nWDEfXbXi7QrZLAAAC
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759937097,
intra-backend-1  |   exp: 1759940697
intra-backend-1  | }
intra-backend-1  | 2
intra-backend-1  | 2
intra-backend-1  | User salah connected and set online
intra-backend-1  | Socket mapped: 2 -> TVsRT-bezre9QjaGAAAF
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | ---------------> allblockreq
intra-backend-1  | []
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: YHjqMLTdgf2ig4pcAAAD
intra-backend-1  | User disconnected: YHjqMLTdgf2ig4pcAAAD
intra-backend-1  | Socket YHjqMLTdgf2ig4pcAAAD disconnected
intra-backend-1  | ---------------> User disconnected: YHjqMLTdgf2ig4pcAAAD
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> U1Lgt6I74sJppmi1AAAH
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  adam false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User adam disconnected and set offline
intra-backend-1  | Socket unmapped: adam
intra-backend-1  | Player disconnected: U1Lgt6I74sJppmi1AAAH
intra-backend-1  | User disconnected: U1Lgt6I74sJppmi1AAAH
intra-backend-1  | Socket U1Lgt6I74sJppmi1AAAH disconnected
intra-backend-1  | ---------------> User disconnected: U1Lgt6I74sJppmi1AAAH
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 4,
intra-backend-1  |   username: 'adam',
intra-backend-1  |   email: 'adam@gmail.com',
intra-backend-1  |   iat: 1759937157,
intra-backend-1  |   exp: 1759940757
intra-backend-1  | }
intra-backend-1  | 4
intra-backend-1  | 4
intra-backend-1  | User adam connected and set online
intra-backend-1  | Socket mapped: 4 -> KwkuBxTQip5_iklTAAAJ
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | history :  [
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Win'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Win'
intra-backend-1  |   }
intra-backend-1  | ]   4
intra-backend-1  | history :  [
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Lose'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Win'
intra-backend-1  |   },
intra-backend-1  |   {
intra-backend-1  |     user_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     opponent_avatar: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
intra-backend-1  |     Score: '1-0',
intra-backend-1  |     result: 'Win'
intra-backend-1  |   }
intra-backend-1  | ]   4
intra-backend-1  | PUT /profile route called
intra-backend-1  | PUT /profile route called
intra-backend-1  | PUT /profile route called
intra-backend-1  | PUT /profile route called
intra-backend-1  | PUT /profile route called
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  4
intra-backend-1  | ----> : userData.username :  adam
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | PUT /profile route called
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | User disconnecting
intra-backend-1  | ====> user is disconnecte :  salah false
intra-backend-1  | ====> his status  :  false
intra-backend-1  | ---> : User salah disconnected and set offline
intra-backend-1  | Socket unmapped: salah
intra-backend-1  | Player disconnected: TVsRT-bezre9QjaGAAAF
intra-backend-1  | User disconnected: TVsRT-bezre9QjaGAAAF
intra-backend-1  | Socket TVsRT-bezre9QjaGAAAF disconnected
intra-backend-1  | ---------------> User disconnected: TVsRT-bezre9QjaGAAAF
intra-backend-1  | ----> : decodedToken :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759938272,
intra-backend-1  |   exp: 1759941872
intra-backend-1  | }
intra-backend-1  | --> : onlineUsers : socket.user 
intra-backend-1  | {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759938272,
intra-backend-1  |   exp: 1759941872
intra-backend-1  | }
intra-backend-1  | userData : socket.user :  {
intra-backend-1  |   userid: 2,
intra-backend-1  |   username: 'salah',
intra-backend-1  |   email: 'salahdiouane964@gmail.com',
intra-backend-1  |   iat: 1759938272,
intra-backend-1  |   exp: 1759941872
intra-backend-1  | }
intra-backend-1  | 2
intra-backend-1  | 2
intra-backend-1  | User salah connected and set online
intra-backend-1  | Socket mapped: 2 -> DVS9fwk4bOyOy2RgAAAL
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | ----> : userData.userid :  2
intra-backend-1  | ----> : userData.username :  salah
intra-backend-1  | PUT /profile route called
