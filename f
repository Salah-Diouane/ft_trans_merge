docker-compose -f srcs/docker-compose.yml logs backend
srcs-backend-1  | 
srcs-backend-1  | > backend@1.0.0 dev
srcs-backend-1  | > ts-node-dev --respawn --transpile-only src/App.ts
srcs-backend-1  | 
srcs-backend-1  | [INFO] 22:11:35 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.9.3)
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  jwt
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  adam
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 6,
srcs-backend-1  |   username: 'jwt',
srcs-backend-1  |   display_name: 'jwt',
srcs-backend-1  |   email: 'devaye7339@elygifts.com',
srcs-backend-1  |   first_name: 'asdas',
srcs-backend-1  |   family_name: 'asdasdas',
srcs-backend-1  |   password: '$2b$10$TCP3BlGYtaO2ZtVHonw9wuLTWo1pcTtcUIJZp//sBdNvXUnHh6g.e',
srcs-backend-1  |   twoFA: 1,
srcs-backend-1  |   twoFA_code: 733381,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 22:14:47',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   email: 'adam@gmail.com',
srcs-backend-1  |   first_name: 'adam',
srcs-backend-1  |   family_name: 'adam',
srcs-backend-1  |   password: '$2b$10$6yu/ggHOIMGLeNt5lRTpGOWZyXRKcV4m.XhuS1CAmfoL8Hd5EcY3e',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 161009,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:53:35',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 6,
srcs-backend-1  |   username: 'jwt',
srcs-backend-1  |   display_name: 'jwt',
srcs-backend-1  |   iat: 1761171007,
srcs-backend-1  |   exp: 1761174607
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 6,
srcs-backend-1  |   username: 'jwt',
srcs-backend-1  |   display_name: 'jwt',
srcs-backend-1  |   iat: 1761171007,
srcs-backend-1  |   exp: 1761174607
srcs-backend-1  | }
srcs-backend-1  | 6
srcs-backend-1  | 6
srcs-backend-1  | User jwt connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761170997,
srcs-backend-1  |   exp: 1761174597
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761170997,
srcs-backend-1  |   exp: 1761174597
srcs-backend-1  | }
srcs-backend-1  | 3
srcs-backend-1  | 3
srcs-backend-1  | User adam connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761170987,
srcs-backend-1  |   exp: 1761174587
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761170987,
srcs-backend-1  |   exp: 1761174587
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | ----> : userData.userid :  6
srcs-backend-1  | ----> : userData.username :  jwt
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | ----> : userData.userid :  3
srcs-backend-1  | ----> : userData.username :  adam
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  yassineoubrhichee
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   email: 'yassineoubrhichee@gmail.com',
srcs-backend-1  |   first_name: 'Yassine',
srcs-backend-1  |   family_name: 'Oubrhiche',
srcs-backend-1  |   password: null,
srcs-backend-1  |   twoFA: 1,
srcs-backend-1  |   twoFA_code: null,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: null,
srcs-backend-1  |   image_url: 'https://lh3.googleusercontent.com/a/ACg8ocIINaGA6u0TEEkcN3TXu4CTRzNM3QNxis0Q_07KeBS_ZX0jvw=s96-c',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171007,
srcs-backend-1  |   exp: 1761174607
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171007,
srcs-backend-1  |   exp: 1761174607
srcs-backend-1  | }
srcs-backend-1  | undefined
srcs-backend-1  | undefined
srcs-backend-1  | User yassineoubrhichee connected and set online
srcs-backend-1  | TypeError: Cannot read properties of undefined (reading 'toString')
srcs-backend-1  |     at handleChatEvents (/app/src/modules/socket/chat/chat.handlers.ts:42:33)
srcs-backend-1  |     at Namespace.<anonymous> (/app/src/plugins/socket.plugin.ts:25:23)
srcs-backend-1  |     at Namespace.emit (node:events:517:28)
srcs-backend-1  |     at Namespace.emitReserved (/app/node_modules/socket.io/dist/typed-events.js:56:22)
srcs-backend-1  |     at Namespace._doConnect (/app/node_modules/socket.io/dist/namespace.js:276:14)
srcs-backend-1  |     at /app/node_modules/socket.io/dist/namespace.js:238:22
srcs-backend-1  |     at processTicksAndRejections (node:internal/process/task_queues:77:11)
srcs-backend-1  | ----> : userData.userid :  undefined
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [ERROR] 22:11:56 TypeError: Cannot read properties of undefined (reading 'toString')
srcs-backend-1  | [INFO] 22:13:37 Restarting: /app/src/modules/socket/userdata/auth.middleware.ts has been modified
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761170997,
srcs-backend-1  |   exp: 1761174597
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761170997,
srcs-backend-1  |   exp: 1761174597
srcs-backend-1  | }
srcs-backend-1  | 3
srcs-backend-1  | 3
srcs-backend-1  | User adam connected and set online
srcs-backend-1  | [INFO] 22:13:40 Restarting: /app/src/modules/socket/userdata/auth.middleware.ts has been modified
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761170997,
srcs-backend-1  |   exp: 1761174597
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761170997,
srcs-backend-1  |   exp: 1761174597
srcs-backend-1  | }
srcs-backend-1  | 3
srcs-backend-1  | 3
srcs-backend-1  | User adam connected and set online
srcs-backend-1  | [INFO] 22:14:00 Restarting: /app/src/modules/userauth/userauth.routes.ts has been modified
srcs-backend-1  | [INFO] 22:14:02 Restarting: /app/src/modules/userauth/userauth.routes.ts has been modified
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761170997,
srcs-backend-1  |   exp: 1761174597
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761170997,
srcs-backend-1  |   exp: 1761174597
srcs-backend-1  | }
srcs-backend-1  | 3
srcs-backend-1  | 3
srcs-backend-1  | User adam connected and set online
srcs-backend-1  | 
srcs-backend-1  | > backend@1.0.0 dev
srcs-backend-1  | > ts-node-dev --respawn --transpile-only src/App.ts
srcs-backend-1  | 
srcs-backend-1  | [INFO] 22:14:16 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.9.3)
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761170997,
srcs-backend-1  |   exp: 1761174597
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761170997,
srcs-backend-1  |   exp: 1761174597
srcs-backend-1  | }
srcs-backend-1  | 3
srcs-backend-1  | 3
srcs-backend-1  | User adam connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  adam false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User adam disconnected and set offline
srcs-backend-1  | Player disconnected: 4RcATM4_Ns0mZLHHAAAB
srcs-backend-1  | User disconnected: 4RcATM4_Ns0mZLHHAAAB
srcs-backend-1  | ---------------> User disconnected: 4RcATM4_Ns0mZLHHAAAB
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  adam
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   email: 'adam@gmail.com',
srcs-backend-1  |   first_name: 'adam',
srcs-backend-1  |   family_name: 'adam',
srcs-backend-1  |   password: '$2b$10$6yu/ggHOIMGLeNt5lRTpGOWZyXRKcV4m.XhuS1CAmfoL8Hd5EcY3e',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 161009,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:53:35',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761170997,
srcs-backend-1  |   exp: 1761174597
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761170997,
srcs-backend-1  |   exp: 1761174597
srcs-backend-1  | }
srcs-backend-1  | 3
srcs-backend-1  | 3
srcs-backend-1  | User adam connected and set online
srcs-backend-1  | ----> : userData.userid :  3
srcs-backend-1  | ----> : userData.username :  adam
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761170987,
srcs-backend-1  |   exp: 1761174587
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761170987,
srcs-backend-1  |   exp: 1761174587
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/login/google
srcs-backend-1  | [GET] /api/login/google/callback?state=thQ5dBCfc2sxeDa5AksR2Q&code=4%2F0AVGzR1AdDSchdaEEbH2S2pdhAJhJWFyFaVWCecimWuVw2Mg4_PI7w0O4c7z0bvpUPGfsmQ&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&authuser=0&prompt=none
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171264,
srcs-backend-1  |   exp: 1761174864
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171264,
srcs-backend-1  |   exp: 1761174864
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  adam false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User adam disconnected and set offline
srcs-backend-1  | Player disconnected: IYORigaK_-rBOXxqAAAD
srcs-backend-1  | User disconnected: IYORigaK_-rBOXxqAAAD
srcs-backend-1  | ---------------> User disconnected: IYORigaK_-rBOXxqAAAD
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  adam
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   email: 'adam@gmail.com',
srcs-backend-1  |   first_name: 'adam',
srcs-backend-1  |   family_name: 'adam',
srcs-backend-1  |   password: '$2b$10$6yu/ggHOIMGLeNt5lRTpGOWZyXRKcV4m.XhuS1CAmfoL8Hd5EcY3e',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 161009,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:53:35',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761170997,
srcs-backend-1  |   exp: 1761174597
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761170997,
srcs-backend-1  |   exp: 1761174597
srcs-backend-1  | }
srcs-backend-1  | 3
srcs-backend-1  | 3
srcs-backend-1  | User adam connected and set online
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | ----> : userData.userid :  3
srcs-backend-1  | ----> : userData.username :  adam
srcs-backend-1  | [GET] /api/login/google
srcs-backend-1  | [GET] /api/login/google/callback?state=tiFpRltizzmaJM3KKWeK_Q&code=4%2F0AVGzR1A4TWq96vVj7huVeM1A5wt5UnLwQsV2clc5A_4mMOCAn7Nmwb_b9ypyMG5jKMaVTg&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&authuser=0&prompt=none
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  yassineoubrhichee
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   email: 'yassineoubrhichee@gmail.com',
srcs-backend-1  |   first_name: 'Yassine',
srcs-backend-1  |   family_name: 'Oubrhiche',
srcs-backend-1  |   password: null,
srcs-backend-1  |   twoFA: 1,
srcs-backend-1  |   twoFA_code: null,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: null,
srcs-backend-1  |   image_url: 'https://lh3.googleusercontent.com/a/ACg8ocIINaGA6u0TEEkcN3TXu4CTRzNM3QNxis0Q_07KeBS_ZX0jvw=s96-c',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171287,
srcs-backend-1  |   exp: 1761174887
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171287,
srcs-backend-1  |   exp: 1761174887
srcs-backend-1  | }
srcs-backend-1  | 7
srcs-backend-1  | 7
srcs-backend-1  | User yassineoubrhichee connected and set online
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [POST] /api/settings/imageUrl
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [PUT] /api/settings/profile
srcs-backend-1  | PUT /profile route called
srcs-backend-1  | ##### decodetoken.display_name  :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171287,
srcs-backend-1  |   exp: 1761174887
srcs-backend-1  | }
srcs-backend-1  | ###### username username username :  yassineoubrhichee
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   email: 'yassineoubrhichee@gmail.com',
srcs-backend-1  |   first_name: 'Yassine',
srcs-backend-1  |   family_name: 'Oubrhiche',
srcs-backend-1  |   password: null,
srcs-backend-1  |   twoFA: 1,
srcs-backend-1  |   twoFA_code: null,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: null,
srcs-backend-1  |   image_url: 'https://lh3.googleusercontent.com/a/ACg8ocIINaGA6u0TEEkcN3TXu4CTRzNM3QNxis0Q_07KeBS_ZX0jvw=s96-c',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | #### :  en
srcs-backend-1  | ###### username username username :  yassineoubrhichee
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   email: 'yassineoubrhichee@gmail.com',
srcs-backend-1  |   first_name: 'Yassine',
srcs-backend-1  |   family_name: 'Oubrhiche',
srcs-backend-1  |   password: null,
srcs-backend-1  |   twoFA: 1,
srcs-backend-1  |   twoFA_code: null,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: null,
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1760617736/daredevil-born-3440x1440-21610.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/settings/gameinfo
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [PUT] /api/settings/game
srcs-backend-1  | [POST] /api/settings/imageUrl
srcs-backend-1  | [GET] /api/settings/tictacinfo
srcs-backend-1  | username :  7
srcs-backend-1  | No tic-tac-toe settings found, creating default for user: 7
srcs-backend-1  | ====> : ticTacinfo :  {
srcs-backend-1  |   x_color: '#FF0000',
srcs-backend-1  |   o_color: '#0000FF',
srcs-backend-1  |   grid_color: '#EEEEEE',
srcs-backend-1  |   board_color: '#EEEEEE'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/settings/gameinfo
srcs-backend-1  | [PUT] /api/settings/profile
srcs-backend-1  | PUT /profile route called
srcs-backend-1  | ##### decodetoken.display_name  :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761170997,
srcs-backend-1  |   exp: 1761174597
srcs-backend-1  | }
srcs-backend-1  | ###### username username username :  adam
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   email: 'adam@gmail.com',
srcs-backend-1  |   first_name: 'adam',
srcs-backend-1  |   family_name: 'adam',
srcs-backend-1  |   password: '$2b$10$6yu/ggHOIMGLeNt5lRTpGOWZyXRKcV4m.XhuS1CAmfoL8Hd5EcY3e',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 161009,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:53:35',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | #### :  en
srcs-backend-1  | ###### username username username :  adam
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   email: 'adam@gmail.com',
srcs-backend-1  |   first_name: 'adam',
srcs-backend-1  |   family_name: 'adam',
srcs-backend-1  |   password: '$2b$10$6yu/ggHOIMGLeNt5lRTpGOWZyXRKcV4m.XhuS1CAmfoL8Hd5EcY3e',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 161009,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:53:35',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/settings/tictacinfo
srcs-backend-1  | username :  7
srcs-backend-1  | ====> : rows :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: null,
srcs-backend-1  |   x_color: '#FF0000',
srcs-backend-1  |   o_color: '#0000FF',
srcs-backend-1  |   grid_color: '#EEEEEE',
srcs-backend-1  |   board_color: '#EEEEEE'
srcs-backend-1  | }
srcs-backend-1  | ====> : ticTacinfo :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: null,
srcs-backend-1  |   x_color: '#FF0000',
srcs-backend-1  |   o_color: '#0000FF',
srcs-backend-1  |   grid_color: '#EEEEEE',
srcs-backend-1  |   board_color: '#EEEEEE'
srcs-backend-1  | }
srcs-backend-1  | [PUT] /api/settings/tictac
srcs-backend-1  | ---> : ticTacinfo :  {
srcs-backend-1  |   x_color: '#FF0000',
srcs-backend-1  |   o_color: '#0000FF',
srcs-backend-1  |   grid_color: '#EEEEEE',
srcs-backend-1  |   board_color: '#000000'
srcs-backend-1  | }
srcs-backend-1  | [PUT] /api/settings/tictac
srcs-backend-1  | ---> : ticTacinfo :  {
srcs-backend-1  |   x_color: '#FF0000',
srcs-backend-1  |   o_color: '#0000FF',
srcs-backend-1  |   grid_color: '#EEEEEE',
srcs-backend-1  |   board_color: '#000000'
srcs-backend-1  | }
srcs-backend-1  | [PUT] /api/settings/tictac
srcs-backend-1  | ---> : ticTacinfo :  {
srcs-backend-1  |   x_color: '#FF0000',
srcs-backend-1  |   o_color: '#0000FF',
srcs-backend-1  |   grid_color: '#EEEEEE',
srcs-backend-1  |   board_color: '#000000'
srcs-backend-1  | }
srcs-backend-1  | [PUT] /api/settings/tictac
srcs-backend-1  | ---> : ticTacinfo :  {
srcs-backend-1  |   x_color: '#FF0000',
srcs-backend-1  |   o_color: '#0000FF',
srcs-backend-1  |   grid_color: '#EEEEEE',
srcs-backend-1  |   board_color: '#000000'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/settings/gameinfo
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/profile/PlayerHistory/yassineoubrhichee
srcs-backend-1  | [GET] /api/profile/UserPlayerStats/yassineoubrhichee
srcs-backend-1  | [GET] /api/profile/GameStats/yassineoubrhichee
srcs-backend-1  | =========> : userid : 7
srcs-backend-1  | =========> : rom : { total_xp: 0, level: 0 }
srcs-backend-1  | [GET] /api/profile/GameStats/yassineoubrhichee
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/profile/CountGames/yassineoubrhichee
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | [GET] /api/profile/userinfo/yassineoubrhichee
srcs-backend-1  | ###### username username username :  yassineoubrhichee
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   email: 'yassineoubrhichee@gmail.com',
srcs-backend-1  |   first_name: 'Yassine',
srcs-backend-1  |   family_name: 'Oubrhiche',
srcs-backend-1  |   password: null,
srcs-backend-1  |   twoFA: 1,
srcs-backend-1  |   twoFA_code: null,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: null,
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1760617736/daredevil-born-3440x1440-21610.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/settings/gameinfo
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/profile/UserPlayerStats/yassineoubrhichee
srcs-backend-1  | [GET] /api/profile/PlayerHistory/yassineoubrhichee
srcs-backend-1  | [GET] /api/profile/GameStats/yassineoubrhichee
srcs-backend-1  | =========> : userid : 7
srcs-backend-1  | =========> : rom : { total_xp: 0, level: 0 }
srcs-backend-1  | [GET] /api/profile/GameStats/yassineoubrhichee
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | [GET] /api/profile/CountGames/yassineoubrhichee
srcs-backend-1  | [GET] /api/profile/userinfo/yassineoubrhichee
srcs-backend-1  | ###### username username username :  yassineoubrhichee
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   email: 'yassineoubrhichee@gmail.com',
srcs-backend-1  |   first_name: 'Yassine',
srcs-backend-1  |   family_name: 'Oubrhiche',
srcs-backend-1  |   password: null,
srcs-backend-1  |   twoFA: 1,
srcs-backend-1  |   twoFA_code: null,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: null,
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1760617736/daredevil-born-3440x1440-21610.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | [POST] /api/friends/sendrequest
srcs-backend-1  | received notif:seen [
srcs-backend-1  |   {
srcs-backend-1  |     id: 17,
srcs-backend-1  |     type: 'friend_request',
srcs-backend-1  |     id_sender: 2,
srcs-backend-1  |     id_receiver: 7,
srcs-backend-1  |     sender: 'salah',
srcs-backend-1  |     receiver: 'yassineoubrhichee',
srcs-backend-1  |     seen: false,
srcs-backend-1  |     text: 'Friend Request',
srcs-backend-1  |     timestamp: '2025-10-22T22:16:08.944Z'
srcs-backend-1  |   }
srcs-backend-1  | ]
srcs-backend-1  |  Notification 17 marked as seen
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/friends/allrecvreq
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [PUT] /api/friends/acceptrequest
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | [GET] /api/friends/allrecvreq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: 8_j5z-dwoTDZ_5wGAAAF
srcs-backend-1  | User disconnected: 8_j5z-dwoTDZ_5wGAAAF
srcs-backend-1  | ---------------> User disconnected: 8_j5z-dwoTDZ_5wGAAAF
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | [GET] /api/login/google
srcs-backend-1  | [GET] /api/login/google/callback?state=8TZIBJP19WSWe4bF00PQOg&code=4%2F0AVGzR1B431JezWjRRY8KA31o_kBPk3N8sM98Bd2RCsK0Jk-pZ38AcsskzWtT1fDct80o_g&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&authuser=0&prompt=none
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171390,
srcs-backend-1  |   exp: 1761174990
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171390,
srcs-backend-1  |   exp: 1761174990
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  yassineoubrhichee false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User yassineoubrhichee disconnected and set offline
srcs-backend-1  | Player disconnected: 0SmS3QiuLNFySrr4AAAL
srcs-backend-1  | User disconnected: 0SmS3QiuLNFySrr4AAAL
srcs-backend-1  | ---------------> User disconnected: 0SmS3QiuLNFySrr4AAAL
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/profile/GameStats/youbrhic
srcs-backend-1  | [GET] /api/profile/UserPlayerStats/youbrhic
srcs-backend-1  | [GET] /api/profile/PlayerHistory/youbrhic
srcs-backend-1  | =========> : userid : 1
srcs-backend-1  | =========> : rom : { total_xp: 800, level: 4 }
srcs-backend-1  | [GET] /api/profile/GameStats/youbrhic
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | [GET] /api/profile/userinfo/youbrhic
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | [GET] /api/profile/CountGames/youbrhic
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: ON-0tTQ449bysPyYAAAN
srcs-backend-1  | User disconnected: ON-0tTQ449bysPyYAAAN
srcs-backend-1  | ---------------> User disconnected: ON-0tTQ449bysPyYAAAN
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171390,
srcs-backend-1  |   exp: 1761174990
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171390,
srcs-backend-1  |   exp: 1761174990
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/profile/PlayerHistory/salah
srcs-backend-1  | [GET] /api/profile/GameStats/salah
srcs-backend-1  | [GET] /api/profile/UserPlayerStats/salah
srcs-backend-1  | =========> : userid : 2
srcs-backend-1  | [GET] /api/profile/CountGames/salah
srcs-backend-1  | [GET] /api/profile/userinfo/salah
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | =========> : rom : { total_xp: 1200, level: 6 }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/profile/GameStats/salah
srcs-backend-1  | [POST] /api/friends/sendrequest
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/friends/allrecvreq
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [PUT] /api/friends/acceptrequest
srcs-backend-1  | [GET] /api/friends/allrecvreq
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  youbrhic false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User youbrhic disconnected and set offline
srcs-backend-1  | Player disconnected: STreKP4OWdBs49AZAAAH
srcs-backend-1  | User disconnected: STreKP4OWdBs49AZAAAH
srcs-backend-1  | ---------------> User disconnected: STreKP4OWdBs49AZAAAH
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | [GET] /api/login/google
srcs-backend-1  | [GET] /api/login/google/callback?state=fJxpt0S7IrxVV8o6ICQ5-A&code=4%2F0AVGzR1CUPiwCYt_w6tm1Vaace6X-MmpEW9rkHsxehQ6XWT80o1auauQh0OxExrWl4fEbFg&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&authuser=0&prompt=none
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171441,
srcs-backend-1  |   exp: 1761175041
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171441,
srcs-backend-1  |   exp: 1761175041
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  youbrhic false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User youbrhic disconnected and set offline
srcs-backend-1  | Player disconnected: DgpCru9CkQZePxywAAAR
srcs-backend-1  | User disconnected: DgpCru9CkQZePxywAAAR
srcs-backend-1  | ---------------> User disconnected: DgpCru9CkQZePxywAAAR
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/login/google
srcs-backend-1  | [GET] /api/login/google/callback?state=F_wrbzoX1HccYIF70ljfWw&code=4%2F0AVGzR1CJ-Ys7UbMRlpSERYcFoPvI7JORktITNRH8PWeqiy99f2TJi5B_apwuWYzD-TUSkg&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&authuser=0&prompt=none
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171446,
srcs-backend-1  |   exp: 1761175046
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171446,
srcs-backend-1  |   exp: 1761175046
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/login/google
srcs-backend-1  | [GET] /api/login/google/callback?state=XHdw7JTwpPaniINB-3VDlQ&code=4%2F0AVGzR1DenKd5ibSue7o84Bj6Oz-Ok4EMUIh4KfuE0d7Qry-V_B66KRsXfenoUE6zyTEOEA&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&authuser=0&prompt=none
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  yassineoubrhichee
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   email: 'yassineoubrhichee@gmail.com',
srcs-backend-1  |   first_name: 'Yassine',
srcs-backend-1  |   family_name: 'Oubrhiche',
srcs-backend-1  |   password: null,
srcs-backend-1  |   twoFA: 1,
srcs-backend-1  |   twoFA_code: null,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: null,
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1760617736/daredevil-born-3440x1440-21610.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171478,
srcs-backend-1  |   exp: 1761175078
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171478,
srcs-backend-1  |   exp: 1761175078
srcs-backend-1  | }
srcs-backend-1  | 7
srcs-backend-1  | 7
srcs-backend-1  | User yassineoubrhichee connected and set online
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/profile/UserPlayerStats/yassineoubrhichee
srcs-backend-1  | [GET] /api/profile/GameStats/yassineoubrhichee
srcs-backend-1  | [GET] /api/profile/PlayerHistory/yassineoubrhichee
srcs-backend-1  | =========> : userid : 7
srcs-backend-1  | =========> : rom : { total_xp: 0, level: 0 }
srcs-backend-1  | [GET] /api/profile/GameStats/yassineoubrhichee
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/profile/userinfo/yassineoubrhichee
srcs-backend-1  | ###### username username username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | [GET] /api/profile/CountGames/yassineoubrhichee
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   email: 'yassineoubrhichee@gmail.com',
srcs-backend-1  |   first_name: 'Yassine',
srcs-backend-1  |   family_name: 'Oubrhiche',
srcs-backend-1  |   password: null,
srcs-backend-1  |   twoFA: 1,
srcs-backend-1  |   twoFA_code: null,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: null,
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1760617736/daredevil-born-3440x1440-21610.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/profile/GameStats/salah
srcs-backend-1  | [GET] /api/profile/PlayerHistory/salah
srcs-backend-1  | [GET] /api/profile/UserPlayerStats/salah
srcs-backend-1  | [GET] /api/profile/GameStats/salah
srcs-backend-1  | =========> : userid : 2
srcs-backend-1  | =========> : rom : { total_xp: 1200, level: 6 }
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/profile/CountGames/salah
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/profile/userinfo/salah
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/profile/UserPlayerStats/salah
srcs-backend-1  | [GET] /api/profile/GameStats/salah
srcs-backend-1  | =========> : userid : 2
srcs-backend-1  | [GET] /api/profile/PlayerHistory/salah
srcs-backend-1  | =========> : rom : { total_xp: 1200, level: 6 }
srcs-backend-1  | [GET] /api/profile/GameStats/salah
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/profile/CountGames/salah
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | [GET] /api/profile/userinfo/salah
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/settings/gameinfo
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/profile/PlayerHistory/yassineoubrhichee
srcs-backend-1  | [GET] /api/profile/UserPlayerStats/yassineoubrhichee
srcs-backend-1  | [GET] /api/profile/GameStats/yassineoubrhichee
srcs-backend-1  | =========> : userid : 7
srcs-backend-1  | [GET] /api/profile/GameStats/yassineoubrhichee
srcs-backend-1  | =========> : rom : { total_xp: 0, level: 0 }
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/profile/CountGames/yassineoubrhichee
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/profile/userinfo/yassineoubrhichee
srcs-backend-1  | ###### username username username :  yassineoubrhichee
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   email: 'yassineoubrhichee@gmail.com',
srcs-backend-1  |   first_name: 'Yassine',
srcs-backend-1  |   family_name: 'Oubrhiche',
srcs-backend-1  |   password: null,
srcs-backend-1  |   twoFA: 1,
srcs-backend-1  |   twoFA_code: null,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: null,
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1760617736/daredevil-born-3440x1440-21610.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [INFO] 22:19:44 Restarting: /app/src/plugins/socket.plugin.ts has been modified
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | [INFO] 22:19:45 Restarting: /app/src/plugins/socket.plugin.ts has been modified
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171478,
srcs-backend-1  |   exp: 1761175078
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171478,
srcs-backend-1  |   exp: 1761175078
srcs-backend-1  | }
srcs-backend-1  | 7
srcs-backend-1  | 7
srcs-backend-1  | User yassineoubrhichee connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171446,
srcs-backend-1  |   exp: 1761175046
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171446,
srcs-backend-1  |   exp: 1761175046
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171390,
srcs-backend-1  |   exp: 1761174990
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171390,
srcs-backend-1  |   exp: 1761174990
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761171306,
srcs-backend-1  |   exp: 1761174906
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761171306,
srcs-backend-1  |   exp: 1761174906
srcs-backend-1  | }
srcs-backend-1  | 3
srcs-backend-1  | 3
srcs-backend-1  | User adam connected and set online
srcs-backend-1  | [INFO] 22:19:51 Restarting: /app/src/plugins/socket.plugin.ts has been modified
srcs-backend-1  | Compilation error in /app/src/plugins/socket.plugin.ts
srcs-backend-1  | [ERROR] 22:19:51 ⨯ Unable to compile TypeScript:
srcs-backend-1  | src/plugins/socket.plugin.ts(33,67): error TS1003: Identifier expected.
srcs-backend-1  | 
srcs-backend-1  | [INFO] 22:19:53 Restarting: /app/src/plugins/socket.plugin.ts has been modified
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171478,
srcs-backend-1  |   exp: 1761175078
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171478,
srcs-backend-1  |   exp: 1761175078
srcs-backend-1  | }
srcs-backend-1  | 7
srcs-backend-1  | 7
srcs-backend-1  | User yassineoubrhichee connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171446,
srcs-backend-1  |   exp: 1761175046
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171446,
srcs-backend-1  |   exp: 1761175046
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761171306,
srcs-backend-1  |   exp: 1761174906
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761171306,
srcs-backend-1  |   exp: 1761174906
srcs-backend-1  | }
srcs-backend-1  | 3
srcs-backend-1  | 3
srcs-backend-1  | User adam connected and set online
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [INFO] 22:19:56 Restarting: /app/src/plugins/socket.plugin.ts has been modified
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171446,
srcs-backend-1  |   exp: 1761175046
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171446,
srcs-backend-1  |   exp: 1761175046
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171390,
srcs-backend-1  |   exp: 1761174990
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171390,
srcs-backend-1  |   exp: 1761174990
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761171306,
srcs-backend-1  |   exp: 1761174906
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761171306,
srcs-backend-1  |   exp: 1761174906
srcs-backend-1  | }
srcs-backend-1  | 3
srcs-backend-1  | 3
srcs-backend-1  | User adam connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  adam false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User adam disconnected and set offline
srcs-backend-1  | Player disconnected: VUSCdr-P7Ie47EJyAAAF
srcs-backend-1  | User disconnected: VUSCdr-P7Ie47EJyAAAF
srcs-backend-1  |  VUSCdr-P7Ie47EJyAAAF
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761171306,
srcs-backend-1  |   exp: 1761174906
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  adam
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   email: 'adam@gmail.com',
srcs-backend-1  |   first_name: 'adam',
srcs-backend-1  |   family_name: 'adam',
srcs-backend-1  |   password: '$2b$10$6yu/ggHOIMGLeNt5lRTpGOWZyXRKcV4m.XhuS1CAmfoL8Hd5EcY3e',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 161009,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:53:35',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761171306,
srcs-backend-1  |   exp: 1761174906
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761171306,
srcs-backend-1  |   exp: 1761174906
srcs-backend-1  | }
srcs-backend-1  | 3
srcs-backend-1  | 3
srcs-backend-1  | User adam connected and set online
srcs-backend-1  | ----> : userData.userid :  3
srcs-backend-1  | ----> : userData.username :  adam
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171478,
srcs-backend-1  |   exp: 1761175078
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171478,
srcs-backend-1  |   exp: 1761175078
srcs-backend-1  | }
srcs-backend-1  | 7
srcs-backend-1  | 7
srcs-backend-1  | User yassineoubrhichee connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  yassineoubrhichee false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User yassineoubrhichee disconnected and set offline
srcs-backend-1  | Player disconnected: ZsKqe_tvu0bp1NW7AAAJ
srcs-backend-1  | User disconnected: ZsKqe_tvu0bp1NW7AAAJ
srcs-backend-1  |  ZsKqe_tvu0bp1NW7AAAJ
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171478,
srcs-backend-1  |   exp: 1761175078
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [INFO] 22:20:30 Restarting: /app/src/plugins/socket.plugin.ts has been modified
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761171306,
srcs-backend-1  |   exp: 1761174906
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761171306,
srcs-backend-1  |   exp: 1761174906
srcs-backend-1  | }
srcs-backend-1  | 3
srcs-backend-1  | 3
srcs-backend-1  | User adam connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171446,
srcs-backend-1  |   exp: 1761175046
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171446,
srcs-backend-1  |   exp: 1761175046
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | [INFO] 22:20:33 Restarting: /app/src/plugins/socket.plugin.ts has been modified
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171390,
srcs-backend-1  |   exp: 1761174990
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171390,
srcs-backend-1  |   exp: 1761174990
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761171306,
srcs-backend-1  |   exp: 1761174906
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761171306,
srcs-backend-1  |   exp: 1761174906
srcs-backend-1  | }
srcs-backend-1  | 3
srcs-backend-1  | 3
srcs-backend-1  | User adam connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171446,
srcs-backend-1  |   exp: 1761175046
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171446,
srcs-backend-1  |   exp: 1761175046
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | [INFO] 22:20:35 Restarting: /app/src/plugins/socket.plugin.ts has been modified
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171446,
srcs-backend-1  |   exp: 1761175046
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171446,
srcs-backend-1  |   exp: 1761175046
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761171306,
srcs-backend-1  |   exp: 1761174906
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761171306,
srcs-backend-1  |   exp: 1761174906
srcs-backend-1  | }
srcs-backend-1  | 3
srcs-backend-1  | 3
srcs-backend-1  | User adam connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171390,
srcs-backend-1  |   exp: 1761174990
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171390,
srcs-backend-1  |   exp: 1761174990
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | [GET] /api/login/google
srcs-backend-1  | [GET] /api/login/google/callback?state=72IEGAtGjRgAzn0z1IiUsw&code=4%2F0AVGzR1Ac2nJpzBXyKtMPqcW6sQtorH4vOibAFac_YsgKRw6cG-SqrIEBf6zYdj07xH56bg&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&authuser=0&prompt=none
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  yassineoubrhichee
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   email: 'yassineoubrhichee@gmail.com',
srcs-backend-1  |   first_name: 'Yassine',
srcs-backend-1  |   family_name: 'Oubrhiche',
srcs-backend-1  |   password: null,
srcs-backend-1  |   twoFA: 1,
srcs-backend-1  |   twoFA_code: null,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: null,
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1760617736/daredevil-born-3440x1440-21610.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171645,
srcs-backend-1  |   exp: 1761175245
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171645,
srcs-backend-1  |   exp: 1761175245
srcs-backend-1  | }
srcs-backend-1  | 7
srcs-backend-1  | 7
srcs-backend-1  | User yassineoubrhichee connected and set online
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/profile/GameStats/yassineoubrhichee
srcs-backend-1  | [GET] /api/profile/PlayerHistory/yassineoubrhichee
srcs-backend-1  | [GET] /api/profile/UserPlayerStats/yassineoubrhichee
srcs-backend-1  | =========> : userid : 7
srcs-backend-1  | [GET] /api/profile/GameStats/yassineoubrhichee
srcs-backend-1  | =========> : rom : { total_xp: 0, level: 0 }
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/profile/CountGames/yassineoubrhichee
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/profile/userinfo/yassineoubrhichee
srcs-backend-1  | ###### username username username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   email: 'yassineoubrhichee@gmail.com',
srcs-backend-1  |   first_name: 'Yassine',
srcs-backend-1  |   family_name: 'Oubrhiche',
srcs-backend-1  |   password: null,
srcs-backend-1  |   twoFA: 1,
srcs-backend-1  |   twoFA_code: null,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: null,
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1760617736/daredevil-born-3440x1440-21610.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  yassineoubrhichee false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User yassineoubrhichee disconnected and set offline
srcs-backend-1  | Player disconnected: FzAGATt68_J6ZuTwAAAH
srcs-backend-1  | User disconnected: FzAGATt68_J6ZuTwAAAH
srcs-backend-1  |  FzAGATt68_J6ZuTwAAAH
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171645,
srcs-backend-1  |   exp: 1761175245
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/login/google
srcs-backend-1  | [GET] /api/login/google/callback?state=8Tl3uHG1eCt6YTpbPlfXaQ&code=4%2F0AVGzR1C3yC0DcYqAjgQbyWJjRKUc3LZUiVyDnLnS-zL1QOoj_qkJfC2o93kuDaQjTRv3Gw&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&authuser=0&prompt=none
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  yassineoubrhichee
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   email: 'yassineoubrhichee@gmail.com',
srcs-backend-1  |   first_name: 'Yassine',
srcs-backend-1  |   family_name: 'Oubrhiche',
srcs-backend-1  |   password: null,
srcs-backend-1  |   twoFA: 1,
srcs-backend-1  |   twoFA_code: null,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: null,
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1760617736/daredevil-born-3440x1440-21610.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171656,
srcs-backend-1  |   exp: 1761175256
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171656,
srcs-backend-1  |   exp: 1761175256
srcs-backend-1  | }
srcs-backend-1  | 7
srcs-backend-1  | 7
srcs-backend-1  | User yassineoubrhichee connected and set online
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  youbrhic false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User youbrhic disconnected and set offline
srcs-backend-1  | Player disconnected: vGOMhu4u2IYxI7q5AAAB
srcs-backend-1  | User disconnected: vGOMhu4u2IYxI7q5AAAB
srcs-backend-1  |  vGOMhu4u2IYxI7q5AAAB
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171446,
srcs-backend-1  |   exp: 1761175046
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/login/google
srcs-backend-1  | [GET] /api/login/google/callback?state=s0EKXqsRAuSBIRDiahlQIA&code=4%2F0AVGzR1Ax5u2AT33HqebgB7qWaIqGuHFVlNpm8llEZgIdO2JoX0Nq5vIMIFjFlEaJM7K5yQ&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&authuser=0&prompt=none
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171665,
srcs-backend-1  |   exp: 1761175265
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171665,
srcs-backend-1  |   exp: 1761175265
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  youbrhic false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User youbrhic disconnected and set offline
srcs-backend-1  | Player disconnected: yO320FzjbHvgG3PJAAAL
srcs-backend-1  | User disconnected: yO320FzjbHvgG3PJAAAL
srcs-backend-1  |  yO320FzjbHvgG3PJAAAL
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171665,
srcs-backend-1  |   exp: 1761175265
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/login/google
srcs-backend-1  | [GET] /api/login/google/callback?state=bJEaTgvqVWLX1wpYvce5bw&code=4%2F0AVGzR1AGF9rGo8D7-_JqPKkB4npjEXc0z8gswB0it1lAdf8ryJ8i8A3s4w5elotxqjgbgA&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&authuser=0&prompt=none
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171671,
srcs-backend-1  |   exp: 1761175271
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171671,
srcs-backend-1  |   exp: 1761175271
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  youbrhic false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User youbrhic disconnected and set offline
srcs-backend-1  | Player disconnected: OPDfbdHNpoSC35w-AAAN
srcs-backend-1  | User disconnected: OPDfbdHNpoSC35w-AAAN
srcs-backend-1  |  OPDfbdHNpoSC35w-AAAN
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171671,
srcs-backend-1  |   exp: 1761175271
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171671,
srcs-backend-1  |   exp: 1761175271
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171671,
srcs-backend-1  |   exp: 1761175271
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | received notif:seen [
srcs-backend-1  |   {
srcs-backend-1  |     id: 20,
srcs-backend-1  |     id_sender: 2,
srcs-backend-1  |     id_receiver: 1,
srcs-backend-1  |     sender: 'salah',
srcs-backend-1  |     receiver: 'youbrhic',
srcs-backend-1  |     type: 'friend_request_accepted',
srcs-backend-1  |     text: 'Request Accepted',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:17:10.495Z'
srcs-backend-1  |   }
srcs-backend-1  | ]
srcs-backend-1  |  Notification 20 marked as seen
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/settings/gameinfo
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/settings/gameinfo
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | ----> : userData.userid :  3
srcs-backend-1  | ----> : userData.username :  adam
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | [GET] /api/friends/allrecvreq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/profile/PlayerHistory/adam
srcs-backend-1  | [GET] /api/profile/GameStats/adam
srcs-backend-1  | [GET] /api/profile/UserPlayerStats/adam
srcs-backend-1  | =========> : userid : 3
srcs-backend-1  | =========> : rom : { total_xp: 800, level: 4 }
srcs-backend-1  | [GET] /api/profile/GameStats/adam
srcs-backend-1  | [GET] /api/profile/CountGames/adam
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | [GET] /api/profile/userinfo/adam
srcs-backend-1  | ###### username username username :  adam
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   email: 'adam@gmail.com',
srcs-backend-1  |   first_name: 'adam',
srcs-backend-1  |   family_name: 'adam',
srcs-backend-1  |   password: '$2b$10$6yu/ggHOIMGLeNt5lRTpGOWZyXRKcV4m.XhuS1CAmfoL8Hd5EcY3e',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 161009,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:53:35',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [POST] /api/friends/sendrequest
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/friends/allrecvreq
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [PUT] /api/friends/acceptrequest
srcs-backend-1  | [GET] /api/friends/allrecvreq
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | received notif:seen [
srcs-backend-1  |   {
srcs-backend-1  |     id: 34,
srcs-backend-1  |     type: 'friend_request_accepted',
srcs-backend-1  |     id_sender: 3,
srcs-backend-1  |     id_receiver: 1,
srcs-backend-1  |     sender: 'adam',
srcs-backend-1  |     receiver: 'youbrhic',
srcs-backend-1  |     text: 'Request Accepted',
srcs-backend-1  |     seen: false,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:21.963Z'
srcs-backend-1  |   }
srcs-backend-1  | ]
srcs-backend-1  |  Notification 34 marked as seen
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | [GET] /api/friends/allrecvreq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | ----> : userData.userid :  3
srcs-backend-1  | ----> : userData.username :  adam
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  adam false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User adam disconnected and set offline
srcs-backend-1  | Player disconnected: I8DBYLy0e7mUv9wVAAAE
srcs-backend-1  | User disconnected: I8DBYLy0e7mUv9wVAAAE
srcs-backend-1  |  I8DBYLy0e7mUv9wVAAAE
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 3,
srcs-backend-1  |   username: 'adam',
srcs-backend-1  |   display_name: 'adam',
srcs-backend-1  |   iat: 1761171306,
srcs-backend-1  |   exp: 1761174906
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/login/google
srcs-backend-1  | [POST] /api/login/signin
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/settings/gameinfo
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/settings/gameinfo
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | received notif:seen [
srcs-backend-1  |   {
srcs-backend-1  |     id: 58,
srcs-backend-1  |     id_sender: 2,
srcs-backend-1  |     id_receiver: 1,
srcs-backend-1  |     sender: 'salah',
srcs-backend-1  |     receiver: 'youbrhic',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: '2',
srcs-backend-1  |     seen: false,
srcs-backend-1  |     timestamp: '2025-10-22T22:23:17.549Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 57,
srcs-backend-1  |     id_sender: 2,
srcs-backend-1  |     id_receiver: 1,
srcs-backend-1  |     sender: 'salah',
srcs-backend-1  |     receiver: 'youbrhic',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: '2',
srcs-backend-1  |     seen: false,
srcs-backend-1  |     timestamp: '2025-10-22T22:23:17.088Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 56,
srcs-backend-1  |     id_sender: 2,
srcs-backend-1  |     id_receiver: 1,
srcs-backend-1  |     sender: 'salah',
srcs-backend-1  |     receiver: 'youbrhic',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: '5',
srcs-backend-1  |     seen: false,
srcs-backend-1  |     timestamp: '2025-10-22T22:23:16.546Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 55,
srcs-backend-1  |     id_sender: 2,
srcs-backend-1  |     id_receiver: 1,
srcs-backend-1  |     sender: 'salah',
srcs-backend-1  |     receiver: 'youbrhic',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: '3',
srcs-backend-1  |     seen: false,
srcs-backend-1  |     timestamp: '2025-10-22T22:23:15.930Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 54,
srcs-backend-1  |     id_sender: 2,
srcs-backend-1  |     id_receiver: 1,
srcs-backend-1  |     sender: 'salah',
srcs-backend-1  |     receiver: 'youbrhic',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: '2',
srcs-backend-1  |     seen: false,
srcs-backend-1  |     timestamp: '2025-10-22T22:23:15.282Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 53,
srcs-backend-1  |     id_sender: 2,
srcs-backend-1  |     id_receiver: 1,
srcs-backend-1  |     sender: 'salah',
srcs-backend-1  |     receiver: 'youbrhic',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: '1',
srcs-backend-1  |     seen: false,
srcs-backend-1  |     timestamp: '2025-10-22T22:23:14.567Z'
srcs-backend-1  |   }
srcs-backend-1  | ]
srcs-backend-1  |  Notification 58 marked as seen
srcs-backend-1  |  Notification 55 marked as seen
srcs-backend-1  |  Notification 53 marked as seen
srcs-backend-1  |  Notification 54 marked as seen
srcs-backend-1  |  Notification 56 marked as seen
srcs-backend-1  |  Notification 57 marked as seen
srcs-backend-1  | [GET] /api/profile/UserPlayerStats/youbrhic
srcs-backend-1  | [GET] /api/profile/PlayerHistory/youbrhic
srcs-backend-1  | [GET] /api/profile/GameStats/youbrhic
srcs-backend-1  | =========> : userid : 1
srcs-backend-1  | =========> : rom : { total_xp: 800, level: 4 }
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | [GET] /api/profile/CountGames/youbrhic
srcs-backend-1  | [GET] /api/profile/GameStats/youbrhic
srcs-backend-1  | [GET] /api/profile/userinfo/youbrhic
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/settings/gameinfo
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [PUT] /api/settings/profile
srcs-backend-1  | PUT /profile route called
srcs-backend-1  | ##### decodetoken.display_name  :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171390,
srcs-backend-1  |   exp: 1761174990
srcs-backend-1  | }
srcs-backend-1  | ###### username username username :  bnadm
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | #### :  undefined
srcs-backend-1  | ###### username username username :  bnadm
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: Q8JzatZNVKlNPt0xAAAF
srcs-backend-1  | User disconnected: Q8JzatZNVKlNPt0xAAAF
srcs-backend-1  |  Q8JzatZNVKlNPt0xAAAF
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171390,
srcs-backend-1  |   exp: 1761174990
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  bnadm
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User bnadm connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  bnadm
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  bnadm
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: 7uzcDORm4Qyq1lx6AAAR
srcs-backend-1  | User disconnected: 7uzcDORm4Qyq1lx6AAAR
srcs-backend-1  |  7uzcDORm4Qyq1lx6AAAR
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [PUT] /api/settings/profile
srcs-backend-1  | PUT /profile route called
srcs-backend-1  | ##### decodetoken.display_name  :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171656,
srcs-backend-1  |   exp: 1761175256
srcs-backend-1  | }
srcs-backend-1  | ###### username username username :  yassine
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | #### :  undefined
srcs-backend-1  | ###### username username username :  yassine
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: 'yassine',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   email: 'yassineoubrhichee@gmail.com',
srcs-backend-1  |   first_name: 'Yassine',
srcs-backend-1  |   family_name: 'Oubrhiche',
srcs-backend-1  |   password: null,
srcs-backend-1  |   twoFA: 1,
srcs-backend-1  |   twoFA_code: null,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: null,
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1760617736/daredevil-born-3440x1440-21610.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: 1O8X7eVSOu9CfMt-AAAV
srcs-backend-1  | User disconnected: 1O8X7eVSOu9CfMt-AAAV
srcs-backend-1  |  1O8X7eVSOu9CfMt-AAAV
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: cTJVIYJFwjyFYuT3AAAX
srcs-backend-1  | User disconnected: cTJVIYJFwjyFYuT3AAAX
srcs-backend-1  |  cTJVIYJFwjyFYuT3AAAX
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/profile/UserPlayerStats/bnadm
srcs-backend-1  | [GET] /api/profile/GameStats/bnadm
srcs-backend-1  | [GET] /api/profile/PlayerHistory/bnadm
srcs-backend-1  | =========> : userid : 2
srcs-backend-1  | =========> : rom : { total_xp: 1200, level: 6 }
srcs-backend-1  | [GET] /api/profile/GameStats/bnadm
srcs-backend-1  | [GET] /api/profile/CountGames/bnadm
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | [GET] /api/profile/userinfo/bnadm
srcs-backend-1  | ###### username username username :  bnadm
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: gg_37LGNcF-_MVsvAAAZ
srcs-backend-1  | User disconnected: gg_37LGNcF-_MVsvAAAZ
srcs-backend-1  |  gg_37LGNcF-_MVsvAAAZ
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/profile/UserPlayerStats/yassine
srcs-backend-1  | [GET] /api/profile/GameStats/yassine
srcs-backend-1  | [GET] /api/profile/PlayerHistory/yassine
srcs-backend-1  | =========> : userid : 7
srcs-backend-1  | [GET] /api/profile/GameStats/yassine
srcs-backend-1  | =========> : rom : { total_xp: 0, level: 0 }
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassineoubrhichee
srcs-backend-1  | [GET] /api/profile/CountGames/yassine
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | [GET] /api/profile/userinfo/yassine
srcs-backend-1  | ###### username username username :  yassine
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: 'yassine',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   email: 'yassineoubrhichee@gmail.com',
srcs-backend-1  |   first_name: 'Yassine',
srcs-backend-1  |   family_name: 'Oubrhiche',
srcs-backend-1  |   password: null,
srcs-backend-1  |   twoFA: 1,
srcs-backend-1  |   twoFA_code: null,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: null,
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1760617736/daredevil-born-3440x1440-21610.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: 0iqHS3Vc3en_OHRmAAAb
srcs-backend-1  | User disconnected: 0iqHS3Vc3en_OHRmAAAb
srcs-backend-1  |  0iqHS3Vc3en_OHRmAAAb
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: ih3XygZHBlJOuoE9AAAd
srcs-backend-1  | User disconnected: ih3XygZHBlJOuoE9AAAd
srcs-backend-1  |  ih3XygZHBlJOuoE9AAAd
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: 5KiBBUb1aFim_HKrAAAf
srcs-backend-1  | User disconnected: 5KiBBUb1aFim_HKrAAAf
srcs-backend-1  |  5KiBBUb1aFim_HKrAAAf
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: 78sGqzYOKTagJlE-AAAh
srcs-backend-1  | User disconnected: 78sGqzYOKTagJlE-AAAh
srcs-backend-1  |  78sGqzYOKTagJlE-AAAh
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: tJjLli6eJh_43VulAAAj
srcs-backend-1  | User disconnected: tJjLli6eJh_43VulAAAj
srcs-backend-1  |  tJjLli6eJh_43VulAAAj
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: 9v-d3pyJ9egQ56eIAAAl
srcs-backend-1  | User disconnected: 9v-d3pyJ9egQ56eIAAAl
srcs-backend-1  |  9v-d3pyJ9egQ56eIAAAl
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: TMvNuJcsuvBol23lAAAn
srcs-backend-1  | User disconnected: TMvNuJcsuvBol23lAAAn
srcs-backend-1  |  TMvNuJcsuvBol23lAAAn
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: VvNMEhLoyiERsl1NAAAp
srcs-backend-1  | User disconnected: VvNMEhLoyiERsl1NAAAp
srcs-backend-1  |  VvNMEhLoyiERsl1NAAAp
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: H_tFV7rUvfWfqrynAAAr
srcs-backend-1  | User disconnected: H_tFV7rUvfWfqrynAAAr
srcs-backend-1  |  H_tFV7rUvfWfqrynAAAr
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: bMWcISmIbIpXNOl3AAAt
srcs-backend-1  | User disconnected: bMWcISmIbIpXNOl3AAAt
srcs-backend-1  |  bMWcISmIbIpXNOl3AAAt
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: 0udh9ceYVgQ1gWk8AAAv
srcs-backend-1  | User disconnected: 0udh9ceYVgQ1gWk8AAAv
srcs-backend-1  |  0udh9ceYVgQ1gWk8AAAv
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: vMyJD7qe_uPPtIyCAAAx
srcs-backend-1  | User disconnected: vMyJD7qe_uPPtIyCAAAx
srcs-backend-1  |  vMyJD7qe_uPPtIyCAAAx
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: eOjnJ4rIKR_Ca1sqAAAz
srcs-backend-1  | User disconnected: eOjnJ4rIKR_Ca1sqAAAz
srcs-backend-1  |  eOjnJ4rIKR_Ca1sqAAAz
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: JJXRG0WAGyDLbmQaAAA1
srcs-backend-1  | User disconnected: JJXRG0WAGyDLbmQaAAA1
srcs-backend-1  |  JJXRG0WAGyDLbmQaAAA1
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: XHw_U8KdXMhqMoEhAAA3
srcs-backend-1  | User disconnected: XHw_U8KdXMhqMoEhAAA3
srcs-backend-1  |  XHw_U8KdXMhqMoEhAAA3
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: NXPgTkfuNzhiD_g8AAA5
srcs-backend-1  | User disconnected: NXPgTkfuNzhiD_g8AAA5
srcs-backend-1  |  NXPgTkfuNzhiD_g8AAA5
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: zydwXPxPjG1jaEAWAAA7
srcs-backend-1  | User disconnected: zydwXPxPjG1jaEAWAAA7
srcs-backend-1  |  zydwXPxPjG1jaEAWAAA7
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: My5-qx-iG0qN2rdEAAA9
srcs-backend-1  | User disconnected: My5-qx-iG0qN2rdEAAA9
srcs-backend-1  |  My5-qx-iG0qN2rdEAAA9
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: sWvyyVKaOY26LzYfAAA_
srcs-backend-1  | User disconnected: sWvyyVKaOY26LzYfAAA_
srcs-backend-1  |  sWvyyVKaOY26LzYfAAA_
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  bnadm false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User bnadm disconnected and set offline
srcs-backend-1  | Player disconnected: L9J3PE-PiZCprAFtAAAT
srcs-backend-1  | User disconnected: L9J3PE-PiZCprAFtAAAT
srcs-backend-1  |  L9J3PE-PiZCprAFtAAAT
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  bnadm
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User bnadm connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  bnadm
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  bnadm
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  bnadm false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User bnadm disconnected and set offline
srcs-backend-1  | Player disconnected: tmr2cP-94qqVaY4fAABD
srcs-backend-1  | User disconnected: tmr2cP-94qqVaY4fAABD
srcs-backend-1  |  tmr2cP-94qqVaY4fAABD
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  bnadm
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  bnadm
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User bnadm connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  yassineoubrhichee false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User yassineoubrhichee disconnected and set offline
srcs-backend-1  | Player disconnected: 9n984RO7uG9bTtSrAAAJ
srcs-backend-1  | User disconnected: 9n984RO7uG9bTtSrAAAJ
srcs-backend-1  |  9n984RO7uG9bTtSrAAAJ
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassineoubrhichee',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171656,
srcs-backend-1  |   exp: 1761175256
srcs-backend-1  | }
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  bnadm
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  bnadm
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: iLplFfoTgRnCK9mlAABB
srcs-backend-1  | User disconnected: iLplFfoTgRnCK9mlAABB
srcs-backend-1  |  iLplFfoTgRnCK9mlAABB
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: 7Jgd0FQCAdaDigjgAABH
srcs-backend-1  | User disconnected: 7Jgd0FQCAdaDigjgAABH
srcs-backend-1  |  7Jgd0FQCAdaDigjgAABH
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  yassine
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: 'yassine',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   email: 'yassineoubrhichee@gmail.com',
srcs-backend-1  |   first_name: 'Yassine',
srcs-backend-1  |   family_name: 'Oubrhiche',
srcs-backend-1  |   password: null,
srcs-backend-1  |   twoFA: 1,
srcs-backend-1  |   twoFA_code: null,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: null,
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1760617736/daredevil-born-3440x1440-21610.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: kM-IZOvVlOo57R9fAABJ
srcs-backend-1  | User disconnected: kM-IZOvVlOo57R9fAABJ
srcs-backend-1  |  kM-IZOvVlOo57R9fAABJ
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: Jhe2R5jYECE4C9EzAABL
srcs-backend-1  | User disconnected: Jhe2R5jYECE4C9EzAABL
srcs-backend-1  |  Jhe2R5jYECE4C9EzAABL
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: yDWuUQ7HGu25hrvQAABN
srcs-backend-1  | User disconnected: yDWuUQ7HGu25hrvQAABN
srcs-backend-1  |  yDWuUQ7HGu25hrvQAABN
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: ML8PvpXuvV1toba0AABP
srcs-backend-1  | User disconnected: ML8PvpXuvV1toba0AABP
srcs-backend-1  |  ML8PvpXuvV1toba0AABP
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassine',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171960,
srcs-backend-1  |   exp: 1761175560
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassine',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171960,
srcs-backend-1  |   exp: 1761175560
srcs-backend-1  | }
srcs-backend-1  | 7
srcs-backend-1  | 7
srcs-backend-1  | User yassine connected and set online
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassine
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: lEkN1eVUxA02WJr1AABT
srcs-backend-1  | User disconnected: lEkN1eVUxA02WJr1AABT
srcs-backend-1  |  lEkN1eVUxA02WJr1AABT
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: C7sZSanrblt7ifjiAABV
srcs-backend-1  | User disconnected: C7sZSanrblt7ifjiAABV
srcs-backend-1  |  C7sZSanrblt7ifjiAABV
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: pN4-LpHHIAO2_Hm1AABX
srcs-backend-1  | User disconnected: pN4-LpHHIAO2_Hm1AABX
srcs-backend-1  |  pN4-LpHHIAO2_Hm1AABX
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  yassine false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User yassine disconnected and set offline
srcs-backend-1  | Player disconnected: AR7qZBhCsvNmhZrHAABR
srcs-backend-1  | User disconnected: AR7qZBhCsvNmhZrHAABR
srcs-backend-1  |  AR7qZBhCsvNmhZrHAABR
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassine',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171960,
srcs-backend-1  |   exp: 1761175560
srcs-backend-1  | }
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: m9dUDQm8p1yCfYj1AABZ
srcs-backend-1  | User disconnected: m9dUDQm8p1yCfYj1AABZ
srcs-backend-1  |  m9dUDQm8p1yCfYj1AABZ
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  yassine
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: 'yassine',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   email: 'yassineoubrhichee@gmail.com',
srcs-backend-1  |   first_name: 'Yassine',
srcs-backend-1  |   family_name: 'Oubrhiche',
srcs-backend-1  |   password: null,
srcs-backend-1  |   twoFA: 1,
srcs-backend-1  |   twoFA_code: null,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: null,
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1760617736/daredevil-born-3440x1440-21610.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: swS3RWI0RGWiskJIAABb
srcs-backend-1  | User disconnected: swS3RWI0RGWiskJIAABb
srcs-backend-1  |  swS3RWI0RGWiskJIAABb
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: zvqjlxY9HYjpfsHiAABd
srcs-backend-1  | User disconnected: zvqjlxY9HYjpfsHiAABd
srcs-backend-1  |  zvqjlxY9HYjpfsHiAABd
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: TzboWjRcj0abi1ESAABf
srcs-backend-1  | User disconnected: TzboWjRcj0abi1ESAABf
srcs-backend-1  |  TzboWjRcj0abi1ESAABf
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: GPL_oo5V6SqgBqeYAABh
srcs-backend-1  | User disconnected: GPL_oo5V6SqgBqeYAABh
srcs-backend-1  |  GPL_oo5V6SqgBqeYAABh
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: rFt_-nM6gXzWYjlAAABj
srcs-backend-1  | User disconnected: rFt_-nM6gXzWYjlAAABj
srcs-backend-1  |  rFt_-nM6gXzWYjlAAABj
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassine',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171960,
srcs-backend-1  |   exp: 1761175560
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassine',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171960,
srcs-backend-1  |   exp: 1761175560
srcs-backend-1  | }
srcs-backend-1  | 7
srcs-backend-1  | 7
srcs-backend-1  | User yassine connected and set online
srcs-backend-1  | ----> : userData.userid :  7
srcs-backend-1  | ----> : userData.username :  yassine
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: x1TNuYB7I6NvZHf2AABn
srcs-backend-1  | User disconnected: x1TNuYB7I6NvZHf2AABn
srcs-backend-1  |  x1TNuYB7I6NvZHf2AABn
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: Rohdh4Y_jVj35jmAAABp
srcs-backend-1  | User disconnected: Rohdh4Y_jVj35jmAAABp
srcs-backend-1  |  Rohdh4Y_jVj35jmAAABp
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: siUJQV5-u9HMse0vAABr
srcs-backend-1  | User disconnected: siUJQV5-u9HMse0vAABr
srcs-backend-1  |  siUJQV5-u9HMse0vAABr
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: lEuruGMBUwkaWWkiAABt
srcs-backend-1  | User disconnected: lEuruGMBUwkaWWkiAABt
srcs-backend-1  |  lEuruGMBUwkaWWkiAABt
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: ZUD7Hkc2wl6mO4vcAABv
srcs-backend-1  | User disconnected: ZUD7Hkc2wl6mO4vcAABv
srcs-backend-1  |  ZUD7Hkc2wl6mO4vcAABv
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: MXz7rRUfAdBiUJXUAABx
srcs-backend-1  | User disconnected: MXz7rRUfAdBiUJXUAABx
srcs-backend-1  |  MXz7rRUfAdBiUJXUAABx
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: ornFXkr7lcN1Uno9AABz
srcs-backend-1  | User disconnected: ornFXkr7lcN1Uno9AABz
srcs-backend-1  |  ornFXkr7lcN1Uno9AABz
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: uDmHPBgPAchG-qwMAAB1
srcs-backend-1  | User disconnected: uDmHPBgPAchG-qwMAAB1
srcs-backend-1  |  uDmHPBgPAchG-qwMAAB1
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: 5AKUBYC2haS4D41dAAB3
srcs-backend-1  | User disconnected: 5AKUBYC2haS4D41dAAB3
srcs-backend-1  |  5AKUBYC2haS4D41dAAB3
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: wwf4ZxueXV42iRM5AAB5
srcs-backend-1  | User disconnected: wwf4ZxueXV42iRM5AAB5
srcs-backend-1  |  wwf4ZxueXV42iRM5AAB5
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: AtC4N6OC4CXdXkDqAAB7
srcs-backend-1  | User disconnected: AtC4N6OC4CXdXkDqAAB7
srcs-backend-1  |  AtC4N6OC4CXdXkDqAAB7
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: DB-tesaPAi1Yi_6RAAB9
srcs-backend-1  | User disconnected: DB-tesaPAi1Yi_6RAAB9
srcs-backend-1  |  DB-tesaPAi1Yi_6RAAB9
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: Pn6i6igwUtsrzpHhAAB_
srcs-backend-1  | User disconnected: Pn6i6igwUtsrzpHhAAB_
srcs-backend-1  |  Pn6i6igwUtsrzpHhAAB_
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: f51kZAC-U_cPJT3IAACB
srcs-backend-1  | User disconnected: f51kZAC-U_cPJT3IAACB
srcs-backend-1  |  f51kZAC-U_cPJT3IAACB
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: ya1yU7RgcDLYhPPNAACD
srcs-backend-1  | User disconnected: ya1yU7RgcDLYhPPNAACD
srcs-backend-1  |  ya1yU7RgcDLYhPPNAACD
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: 7Lna-u5OsMShUZOgAACF
srcs-backend-1  | User disconnected: 7Lna-u5OsMShUZOgAACF
srcs-backend-1  |  7Lna-u5OsMShUZOgAACF
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: hvinlq6RLHt04mRbAACH
srcs-backend-1  | User disconnected: hvinlq6RLHt04mRbAACH
srcs-backend-1  |  hvinlq6RLHt04mRbAACH
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: npWdT8rnVkMOXlu8AACJ
srcs-backend-1  | User disconnected: npWdT8rnVkMOXlu8AACJ
srcs-backend-1  |  npWdT8rnVkMOXlu8AACJ
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: 7ms0z9Ge0UfWnfTxAACL
srcs-backend-1  | User disconnected: 7ms0z9Ge0UfWnfTxAACL
srcs-backend-1  |  7ms0z9Ge0UfWnfTxAACL
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: K2TiMbQbNHCF0L57AACN
srcs-backend-1  | User disconnected: K2TiMbQbNHCF0L57AACN
srcs-backend-1  |  K2TiMbQbNHCF0L57AACN
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: cSqCDDHyI_N_8dVuAACP
srcs-backend-1  | User disconnected: cSqCDDHyI_N_8dVuAACP
srcs-backend-1  |  cSqCDDHyI_N_8dVuAACP
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: drvNtb8lcT6-9A_8AACR
srcs-backend-1  | User disconnected: drvNtb8lcT6-9A_8AACR
srcs-backend-1  |  drvNtb8lcT6-9A_8AACR
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: ZEaCaJk5oXh_WrAuAACT
srcs-backend-1  | User disconnected: ZEaCaJk5oXh_WrAuAACT
srcs-backend-1  |  ZEaCaJk5oXh_WrAuAACT
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: KcXPo_KCyG-GigHzAACV
srcs-backend-1  | User disconnected: KcXPo_KCyG-GigHzAACV
srcs-backend-1  |  KcXPo_KCyG-GigHzAACV
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: 4KgtjYhIyo1dv6oIAACX
srcs-backend-1  | User disconnected: 4KgtjYhIyo1dv6oIAACX
srcs-backend-1  |  4KgtjYhIyo1dv6oIAACX
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: hCnYYdVuF91ABAqtAACZ
srcs-backend-1  | User disconnected: hCnYYdVuF91ABAqtAACZ
srcs-backend-1  |  hCnYYdVuF91ABAqtAACZ
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: LxUePxkE75JfbnnGAACb
srcs-backend-1  | User disconnected: LxUePxkE75JfbnnGAACb
srcs-backend-1  |  LxUePxkE75JfbnnGAACb
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: XDELZoN9HqWZG9qBAACd
srcs-backend-1  | User disconnected: XDELZoN9HqWZG9qBAACd
srcs-backend-1  |  XDELZoN9HqWZG9qBAACd
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  bnadm false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User bnadm disconnected and set offline
srcs-backend-1  | Player disconnected: iSuTuFWmnbUmuDgJAABF
srcs-backend-1  | User disconnected: iSuTuFWmnbUmuDgJAABF
srcs-backend-1  |  iSuTuFWmnbUmuDgJAABF
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  bnadm
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User bnadm connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  bnadm
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  bnadm
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: TTrjZeJBJiO72zvkAACf
srcs-backend-1  | User disconnected: TTrjZeJBJiO72zvkAACf
srcs-backend-1  |  TTrjZeJBJiO72zvkAACf
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: KpiVVA4Nz8BOMu3EAACj
srcs-backend-1  | User disconnected: KpiVVA4Nz8BOMu3EAACj
srcs-backend-1  |  KpiVVA4Nz8BOMu3EAACj
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: J2fvH9BLKlz6lcY3AACl
srcs-backend-1  | User disconnected: J2fvH9BLKlz6lcY3AACl
srcs-backend-1  |  J2fvH9BLKlz6lcY3AACl
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: wOxuvP5ahMLIxQPLAACn
srcs-backend-1  | User disconnected: wOxuvP5ahMLIxQPLAACn
srcs-backend-1  |  wOxuvP5ahMLIxQPLAACn
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: F3mRXhgHtMTBGdz1AACp
srcs-backend-1  | User disconnected: F3mRXhgHtMTBGdz1AACp
srcs-backend-1  |  F3mRXhgHtMTBGdz1AACp
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: pL0nV5xYr6FZ4KKfAACs
srcs-backend-1  | User disconnected: pL0nV5xYr6FZ4KKfAACs
srcs-backend-1  |  pL0nV5xYr6FZ4KKfAACs
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: _hQmcvkxKmiA0LRrAACu
srcs-backend-1  | User disconnected: _hQmcvkxKmiA0LRrAACu
srcs-backend-1  |  _hQmcvkxKmiA0LRrAACu
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: uFOGZ7My2qNFzvaHAACw
srcs-backend-1  | User disconnected: uFOGZ7My2qNFzvaHAACw
srcs-backend-1  |  uFOGZ7My2qNFzvaHAACw
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: J2TliikAi2AYDT5pAACy
srcs-backend-1  | User disconnected: J2TliikAi2AYDT5pAACy
srcs-backend-1  |  J2TliikAi2AYDT5pAACy
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: IKw37oKhXh89ybYSAAC0
srcs-backend-1  | User disconnected: IKw37oKhXh89ybYSAAC0
srcs-backend-1  |  IKw37oKhXh89ybYSAAC0
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: 2PfRlbUi3q_3oejJAAC2
srcs-backend-1  | User disconnected: 2PfRlbUi3q_3oejJAAC2
srcs-backend-1  |  2PfRlbUi3q_3oejJAAC2
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171787,
srcs-backend-1  |   exp: 1761175387
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/login/refreshtoken
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | [GET] /api/login/google
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/profile/UserPlayerStats/youbrhic
srcs-backend-1  | =========> : userid : 1
srcs-backend-1  | =========> : rom : { total_xp: 800, level: 4 }
srcs-backend-1  | [GET] /api/profile/userinfo/youbrhic
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/profile/GameStats/youbrhic
srcs-backend-1  | [GET] /api/profile/PlayerHistory/youbrhic
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | [GET] /api/profile/CountGames/youbrhic
srcs-backend-1  | [GET] /api/profile/GameStats/youbrhic
srcs-backend-1  | [POST] /api/login/signin
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/settings/gameinfo
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [POST] /api/login/signin
srcs-backend-1  | ###### username username username :  bnadm
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  bnadm
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172055,
srcs-backend-1  |   exp: 1761175655
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172055,
srcs-backend-1  |   exp: 1761175655
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User bnadm connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  bnadm
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [PUT] /api/settings/game
srcs-backend-1  | [GET] /api/settings/tictacinfo
srcs-backend-1  | username :  1
srcs-backend-1  | ====> : rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: null,
srcs-backend-1  |   x_color: '#FF0000',
srcs-backend-1  |   o_color: '#0000FF',
srcs-backend-1  |   grid_color: '#EEEEEE',
srcs-backend-1  |   board_color: '#000000'
srcs-backend-1  | }
srcs-backend-1  | ====> : ticTacinfo :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: null,
srcs-backend-1  |   x_color: '#FF0000',
srcs-backend-1  |   o_color: '#0000FF',
srcs-backend-1  |   grid_color: '#EEEEEE',
srcs-backend-1  |   board_color: '#000000'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [PUT] /api/settings/profile
srcs-backend-1  | PUT /profile route called
srcs-backend-1  | ##### decodetoken.display_name  :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171671,
srcs-backend-1  |   exp: 1761175271
srcs-backend-1  | }
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | #### :  en
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'fr',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/settings/gameinfo
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/settings/gameinfo
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [PUT] /api/settings/profile
srcs-backend-1  | PUT /profile route called
srcs-backend-1  | ##### decodetoken.display_name  :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172060,
srcs-backend-1  |   exp: 1761175660
srcs-backend-1  | }
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'fr',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | #### :  fr
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/settings/gameinfo
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [PUT] /api/settings/profile
srcs-backend-1  | PUT /profile route called
srcs-backend-1  | ##### decodetoken.display_name  :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172055,
srcs-backend-1  |   exp: 1761175655
srcs-backend-1  | }
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | #### :  undefined
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/settings/gameinfo
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  bnadm false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User bnadm disconnected and set offline
srcs-backend-1  | Player disconnected: 7mhkrCSJFTpcQ6cjAACh
srcs-backend-1  | User disconnected: 7mhkrCSJFTpcQ6cjAACh
srcs-backend-1  |  7mhkrCSJFTpcQ6cjAACh
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  bnadm
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User bnadm connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  bnadm
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  bnadm false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User bnadm disconnected and set offline
srcs-backend-1  | Player disconnected: f8gAzW3DGmUhWIksAAC6
srcs-backend-1  | User disconnected: f8gAzW3DGmUhWIksAAC6
srcs-backend-1  |  f8gAzW3DGmUhWIksAAC6
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  bnadm
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User bnadm connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  bnadm
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  bnadm false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User bnadm disconnected and set offline
srcs-backend-1  | Player disconnected: 85DZxD9njR0Scu_bAAC8
srcs-backend-1  | User disconnected: 85DZxD9njR0Scu_bAAC8
srcs-backend-1  |  85DZxD9njR0Scu_bAAC8
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  bnadm
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User bnadm connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  bnadm
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  bnadm false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User bnadm disconnected and set offline
srcs-backend-1  | Player disconnected: UGow_mX-UzNP1vr7AAC-
srcs-backend-1  | User disconnected: UGow_mX-UzNP1vr7AAC-
srcs-backend-1  |  UGow_mX-UzNP1vr7AAC-
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761171931,
srcs-backend-1  |   exp: 1761175531
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | [POST] /api/login/signin
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | [PUT] /api/settings/profile
srcs-backend-1  | PUT /profile route called
srcs-backend-1  | ##### decodetoken.display_name  :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172074,
srcs-backend-1  |   exp: 1761175674
srcs-backend-1  | }
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | #### :  undefined
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: d8ytEsRrVvB1LTFJAADA
srcs-backend-1  | User disconnected: d8ytEsRrVvB1LTFJAADA
srcs-backend-1  |  d8ytEsRrVvB1LTFJAADA
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: fEXpV5Rj5s-hafdTAADC
srcs-backend-1  | User disconnected: fEXpV5Rj5s-hafdTAADC
srcs-backend-1  |  fEXpV5Rj5s-hafdTAADC
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  bnadm false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User bnadm disconnected and set offline
srcs-backend-1  | Player disconnected: e7FpTDjh2Xq34fyCAAC4
srcs-backend-1  | User disconnected: e7FpTDjh2Xq34fyCAAC4
srcs-backend-1  |  e7FpTDjh2Xq34fyCAAC4
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'bnadm',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172055,
srcs-backend-1  |   exp: 1761175655
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172110,
srcs-backend-1  |   exp: 1761175710
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172110,
srcs-backend-1  |   exp: 1761175710
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User diiii connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  diiii
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: 9mm8oY4GYjUVFtIHAADE
srcs-backend-1  | User disconnected: 9mm8oY4GYjUVFtIHAADE
srcs-backend-1  |  9mm8oY4GYjUVFtIHAADE
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: fFE1YkX4PxsHFer4AADI
srcs-backend-1  | User disconnected: fFE1YkX4PxsHFer4AADI
srcs-backend-1  |  fFE1YkX4PxsHFer4AADI
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  yassine false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User yassine disconnected and set offline
srcs-backend-1  | Player disconnected: vQOAHFeCmYFog6NNAABl
srcs-backend-1  | User disconnected: vQOAHFeCmYFog6NNAABl
srcs-backend-1  |  vQOAHFeCmYFog6NNAABl
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 7,
srcs-backend-1  |   username: 'yassine',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   iat: 1761171960,
srcs-backend-1  |   exp: 1761175560
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/login/refreshtoken
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | [GET] /api/login/google
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/login/google/callback?state=LsbbaYfUW9_vh8f86-jApQ&code=4%2F0AVGzR1AIQW-w3QDxbDXvLPjV0d3Yg8Q5COMNjtPIGsJOwEQ-uYvFMIZaAE4K-0A2kqIcMw&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&authuser=0&prompt=none
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172175,
srcs-backend-1  |   exp: 1761175775
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172175,
srcs-backend-1  |   exp: 1761175775
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [PUT] /api/settings/profile
srcs-backend-1  | PUT /profile route called
srcs-backend-1  | ##### decodetoken.display_name  :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172175,
srcs-backend-1  |   exp: 1761175775
srcs-backend-1  | }
srcs-backend-1  | ###### username username username :  yassine
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: 'yassine',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   email: 'yassineoubrhichee@gmail.com',
srcs-backend-1  |   first_name: 'Yassine',
srcs-backend-1  |   family_name: 'Oubrhiche',
srcs-backend-1  |   password: null,
srcs-backend-1  |   twoFA: 1,
srcs-backend-1  |   twoFA_code: null,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: null,
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1760617736/daredevil-born-3440x1440-21610.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | #### :  en
srcs-backend-1  | [PUT] /api/settings/profile
srcs-backend-1  | PUT /profile route called
srcs-backend-1  | ##### decodetoken.display_name  :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172175,
srcs-backend-1  |   exp: 1761175775
srcs-backend-1  | }
srcs-backend-1  | ###### username username username :  yassine42
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | #### :  undefined
srcs-backend-1  | ###### username username username :  yassine42
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/profile/UserPlayerStats/youbrhic
srcs-backend-1  | [GET] /api/profile/PlayerHistory/youbrhic
srcs-backend-1  | [GET] /api/profile/GameStats/youbrhic
srcs-backend-1  |  No user found for username: youbrhic
srcs-backend-1  |  No user found for username: youbrhic
srcs-backend-1  |  No user found for username: youbrhic
srcs-backend-1  | [GET] /api/profile/GameStats/youbrhic
srcs-backend-1  |  No user found for username: youbrhic
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | [GET] /api/profile/CountGames/youbrhic
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | [GET] /api/profile/userinfo/youbrhic
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  |  No user found for username: youbrhic
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  youbrhic false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User youbrhic disconnected and set offline
srcs-backend-1  | Player disconnected: un-0PzKPs4WKyIBmAAAP
srcs-backend-1  | User disconnected: un-0PzKPs4WKyIBmAAAP
srcs-backend-1  |  un-0PzKPs4WKyIBmAAAP
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761171671,
srcs-backend-1  |   exp: 1761175271
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  youbrhic false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User youbrhic disconnected and set offline
srcs-backend-1  | Player disconnected: 14JQ8lQ7agnB1ExeAADO
srcs-backend-1  | User disconnected: 14JQ8lQ7agnB1ExeAADO
srcs-backend-1  |  14JQ8lQ7agnB1ExeAADO
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  youbrhic false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User youbrhic disconnected and set offline
srcs-backend-1  | Player disconnected: -5g6pK4iCxccBRK0AADQ
srcs-backend-1  | User disconnected: -5g6pK4iCxccBRK0AADQ
srcs-backend-1  |  -5g6pK4iCxccBRK0AADQ
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  youbrhic false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User youbrhic disconnected and set offline
srcs-backend-1  | Player disconnected: D-QzvWSHJHJfTdFiAADS
srcs-backend-1  | User disconnected: D-QzvWSHJHJfTdFiAADS
srcs-backend-1  |  D-QzvWSHJHJfTdFiAADS
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  youbrhic false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User youbrhic disconnected and set offline
srcs-backend-1  | Player disconnected: 2tKalH7e67sI3baVAADU
srcs-backend-1  | User disconnected: 2tKalH7e67sI3baVAADU
srcs-backend-1  |  2tKalH7e67sI3baVAADU
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  youbrhic false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User youbrhic disconnected and set offline
srcs-backend-1  | Player disconnected: jpaKjS8qFu23WDxeAADW
srcs-backend-1  | User disconnected: jpaKjS8qFu23WDxeAADW
srcs-backend-1  |  jpaKjS8qFu23WDxeAADW
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  youbrhic false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User youbrhic disconnected and set offline
srcs-backend-1  | Player disconnected: EEO-ZVDhJkOGU_WXAADY
srcs-backend-1  | User disconnected: EEO-ZVDhJkOGU_WXAADY
srcs-backend-1  |  EEO-ZVDhJkOGU_WXAADY
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  youbrhic false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User youbrhic disconnected and set offline
srcs-backend-1  | Player disconnected: zttNCLpis1Fn3OPEAADa
srcs-backend-1  | User disconnected: zttNCLpis1Fn3OPEAADa
srcs-backend-1  |  zttNCLpis1Fn3OPEAADa
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  youbrhic false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User youbrhic disconnected and set offline
srcs-backend-1  | Player disconnected: Y4814tGE2PSYuUhqAADc
srcs-backend-1  | User disconnected: Y4814tGE2PSYuUhqAADc
srcs-backend-1  |  Y4814tGE2PSYuUhqAADc
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  youbrhic false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User youbrhic disconnected and set offline
srcs-backend-1  | Player disconnected: SG9boS6vZ-DY6r3XAADe
srcs-backend-1  | User disconnected: SG9boS6vZ-DY6r3XAADe
srcs-backend-1  |  SG9boS6vZ-DY6r3XAADe
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  diiii false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User diiii disconnected and set offline
srcs-backend-1  | Player disconnected: zb63KlNAc4tXKEXxAADG
srcs-backend-1  | User disconnected: zb63KlNAc4tXKEXxAADG
srcs-backend-1  |  zb63KlNAc4tXKEXxAADG
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172110,
srcs-backend-1  |   exp: 1761175710
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172110,
srcs-backend-1  |   exp: 1761175710
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172110,
srcs-backend-1  |   exp: 1761175710
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User diiii connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  diiii
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  youbrhic false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User youbrhic disconnected and set offline
srcs-backend-1  | Player disconnected: PwprOfWDW0g9YOmgAADg
srcs-backend-1  | User disconnected: PwprOfWDW0g9YOmgAADg
srcs-backend-1  |  PwprOfWDW0g9YOmgAADg
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172070,
srcs-backend-1  |   exp: 1761175670
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/login/refreshtoken
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  diiii false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User diiii disconnected and set offline
srcs-backend-1  | Player disconnected: ZGHJdkSiwAR_E0dlAADi
srcs-backend-1  | User disconnected: ZGHJdkSiwAR_E0dlAADi
srcs-backend-1  |  ZGHJdkSiwAR_E0dlAADi
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172110,
srcs-backend-1  |   exp: 1761175710
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172110,
srcs-backend-1  |   exp: 1761175710
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172110,
srcs-backend-1  |   exp: 1761175710
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User diiii connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  diiii
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  youbrhic false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User youbrhic disconnected and set offline
srcs-backend-1  | Player disconnected: 5xtpzxBLlmEQSZfxAADM
srcs-backend-1  | User disconnected: 5xtpzxBLlmEQSZfxAADM
srcs-backend-1  |  5xtpzxBLlmEQSZfxAADM
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172175,
srcs-backend-1  |   exp: 1761175775
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  yassine42
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172187,
srcs-backend-1  |   exp: 1761175787
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172187,
srcs-backend-1  |   exp: 1761175787
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User yassine42 connected and set online
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  yassine42
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  yassine42 false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User yassine42 disconnected and set offline
srcs-backend-1  | Player disconnected: YHYoWImzeF7tSOqGAADm
srcs-backend-1  | User disconnected: YHYoWImzeF7tSOqGAADm
srcs-backend-1  |  YHYoWImzeF7tSOqGAADm
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172187,
srcs-backend-1  |   exp: 1761175787
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  yassine42
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172187,
srcs-backend-1  |   exp: 1761175787
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172187,
srcs-backend-1  |   exp: 1761175787
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User yassine42 connected and set online
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  yassine42
srcs-backend-1  | [GET] /api/login/google
srcs-backend-1  | [GET] /api/login/google/callback?state=UAJ_WGXEuCz55I_2QYLtGA&code=4%2F0AVGzR1CPnTFKTTqjhCvQEgSJBej87GOQJ7YQq1BMuGzIMMQxl7ufat9Ho4TvMkuPTjV9uw&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&authuser=0&prompt=none
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  yassine42
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172583,
srcs-backend-1  |   exp: 1761176183
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172583,
srcs-backend-1  |   exp: 1761176183
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User yassine42 connected and set online
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  yassine42
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  yassine42
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [PUT] /api/settings/profile
srcs-backend-1  | PUT /profile route called
srcs-backend-1  | ##### decodetoken.display_name  :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172187,
srcs-backend-1  |   exp: 1761175787
srcs-backend-1  | }
srcs-backend-1  | ###### username username username :  yassine
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 7,
srcs-backend-1  |   username: 'yassine',
srcs-backend-1  |   display_name: 'yassineoubrhichee',
srcs-backend-1  |   email: 'yassineoubrhichee@gmail.com',
srcs-backend-1  |   first_name: 'Yassine',
srcs-backend-1  |   family_name: 'Oubrhiche',
srcs-backend-1  |   password: null,
srcs-backend-1  |   twoFA: 1,
srcs-backend-1  |   twoFA_code: null,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: null,
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1760617736/daredevil-born-3440x1440-21610.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | #### :  en
srcs-backend-1  | [PUT] /api/settings/profile
srcs-backend-1  | PUT /profile route called
srcs-backend-1  | ##### decodetoken.display_name  :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172187,
srcs-backend-1  |   exp: 1761175787
srcs-backend-1  | }
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | #### :  undefined
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/settings/gameinfo
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  |  No user found for username: yassine42
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  yassine42
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  yassine42
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/friends/blockReq
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ===> : Blocked rows: []
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  yassine42
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/profile/PlayerHistory/yassine42
srcs-backend-1  | [GET] /api/profile/GameStats/yassine42
srcs-backend-1  | [GET] /api/profile/UserPlayerStats/yassine42
srcs-backend-1  |  No user found for username: yassine42
srcs-backend-1  |  No user found for username: yassine42
srcs-backend-1  |  No user found for username: yassine42
srcs-backend-1  | [GET] /api/profile/GameStats/yassine42
srcs-backend-1  |  No user found for username: yassine42
srcs-backend-1  | [GET] /api/profile/CountGames/yassine42
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  yassine42
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | [GET] /api/profile/userinfo/yassine42
srcs-backend-1  | ###### username username username :  yassine42
srcs-backend-1  |  No user found for username: yassine42
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/profile/PlayerHistory/yassine42
srcs-backend-1  | [GET] /api/profile/GameStats/yassine42
srcs-backend-1  | [GET] /api/profile/UserPlayerStats/yassine42
srcs-backend-1  |  No user found for username: yassine42
srcs-backend-1  |  No user found for username: yassine42
srcs-backend-1  |  No user found for username: yassine42
srcs-backend-1  | [GET] /api/profile/GameStats/yassine42
srcs-backend-1  |  No user found for username: yassine42
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  yassine42
srcs-backend-1  | [GET] /api/profile/CountGames/yassine42
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | [GET] /api/profile/userinfo/yassine42
srcs-backend-1  | ###### username username username :  yassine42
srcs-backend-1  |  No user found for username: yassine42
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: DukU4JcP8o6Osa-sAADK
srcs-backend-1  | User disconnected: DukU4JcP8o6Osa-sAADK
srcs-backend-1  |  DukU4JcP8o6Osa-sAADK
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  yassine42 false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User yassine42 disconnected and set offline
srcs-backend-1  | Player disconnected: siIrOWKQYW1VrkStAADq
srcs-backend-1  | User disconnected: siIrOWKQYW1VrkStAADq
srcs-backend-1  |  siIrOWKQYW1VrkStAADq
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172583,
srcs-backend-1  |   exp: 1761176183
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  yassine42
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172583,
srcs-backend-1  |   exp: 1761176183
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172583,
srcs-backend-1  |   exp: 1761176183
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User yassine42 connected and set online
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  yassine42
srcs-backend-1  | [GET] /api/profile/GameStats/undefined
srcs-backend-1  | [GET] /api/profile/PlayerHistory/undefined
srcs-backend-1  | [GET] /api/profile/UserPlayerStats/undefined
srcs-backend-1  |  No user found for username: undefined
srcs-backend-1  |  No user found for username: undefined
srcs-backend-1  |  No user found for username: undefined
srcs-backend-1  | [GET] /api/profile/GameStats/undefined
srcs-backend-1  |  No user found for username: undefined
srcs-backend-1  | [GET] /api/profile/CountGames/undefined
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  yassine42
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | [GET] /api/profile/userinfo/undefined
srcs-backend-1  | ###### username username username :  undefined
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  |  No user found for username: undefined
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  yassine42 false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User yassine42 disconnected and set offline
srcs-backend-1  | Player disconnected: U3_KXsAjHs5JRxY9AADu
srcs-backend-1  | User disconnected: U3_KXsAjHs5JRxY9AADu
srcs-backend-1  |  U3_KXsAjHs5JRxY9AADu
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172583,
srcs-backend-1  |   exp: 1761176183
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  yassine42
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172583,
srcs-backend-1  |   exp: 1761176183
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172583,
srcs-backend-1  |   exp: 1761176183
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User yassine42 connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  yassine42 false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User yassine42 disconnected and set offline
srcs-backend-1  | Player disconnected: EGT-J--cMn5gm56LAADw
srcs-backend-1  | User disconnected: EGT-J--cMn5gm56LAADw
srcs-backend-1  |  EGT-J--cMn5gm56LAADw
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172583,
srcs-backend-1  |   exp: 1761176183
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  yassine42
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172583,
srcs-backend-1  |   exp: 1761176183
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172583,
srcs-backend-1  |   exp: 1761176183
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User yassine42 connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  yassine42 false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User yassine42 disconnected and set offline
srcs-backend-1  | Player disconnected: A-nc10yJ3Om6tW1yAADy
srcs-backend-1  | User disconnected: A-nc10yJ3Om6tW1yAADy
srcs-backend-1  |  A-nc10yJ3Om6tW1yAADy
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172583,
srcs-backend-1  |   exp: 1761176183
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  yassine42
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172583,
srcs-backend-1  |   exp: 1761176183
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172583,
srcs-backend-1  |   exp: 1761176183
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User yassine42 connected and set online
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  yassine42 false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User yassine42 disconnected and set offline
srcs-backend-1  | Player disconnected: oNle_fhkTJuVvvMDAAD0
srcs-backend-1  | User disconnected: oNle_fhkTJuVvvMDAAD0
srcs-backend-1  |  oNle_fhkTJuVvvMDAAD0
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'yassine42',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172583,
srcs-backend-1  |   exp: 1761176183
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/login/refreshtoken
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  diiii false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User diiii disconnected and set offline
srcs-backend-1  | Player disconnected: eXrR97NhHz2YPqxxAADk
srcs-backend-1  | User disconnected: eXrR97NhHz2YPqxxAADk
srcs-backend-1  |  eXrR97NhHz2YPqxxAADk
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172110,
srcs-backend-1  |   exp: 1761175710
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172110,
srcs-backend-1  |   exp: 1761175710
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172110,
srcs-backend-1  |   exp: 1761175710
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User diiii connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  diiii
srcs-backend-1  | [INFO] 22:39:59 Restarting: /app/src/App.ts has been modified
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172596,
srcs-backend-1  |   exp: 1761176196
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172596,
srcs-backend-1  |   exp: 1761176196
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172110,
srcs-backend-1  |   exp: 1761175710
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172110,
srcs-backend-1  |   exp: 1761175710
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User diiii connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: I0jyHS7FaGPxkdxsAAAF
srcs-backend-1  | User disconnected: I0jyHS7FaGPxkdxsAAAF
srcs-backend-1  |  I0jyHS7FaGPxkdxsAAAF
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: EUYyKTGCUmyATQ9IAAAH
srcs-backend-1  | User disconnected: EUYyKTGCUmyATQ9IAAAH
srcs-backend-1  |  EUYyKTGCUmyATQ9IAAAH
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | [GET] /api/lgout
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: wU6NzeZjLLhgDJRxAAAJ
srcs-backend-1  | User disconnected: wU6NzeZjLLhgDJRxAAAJ
srcs-backend-1  |  wU6NzeZjLLhgDJRxAAAJ
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172103,
srcs-backend-1  |   exp: 1761175703
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/login/refreshtoken
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | [GET] /api/login/google
srcs-backend-1  | [GET] /api/login/google/callback?state=jVJERBIBf6wpxl5win1zgQ&code=4%2F0AVGzR1BDo5R9En8cVmRVn-WbIN7Wc0FFyQ8kzV2QtziSCFAsUlNvCUEDKpt8ab7aUTMnKg&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&authuser=0&prompt=none
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User diiii connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  diiii
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [PUT] /api/settings/profile
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | PUT /profile route called
srcs-backend-1  | ##### decodetoken.display_name  :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172110,
srcs-backend-1  |   exp: 1761175710
srcs-backend-1  | }
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | #### :  undefined
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  diiii false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User diiii disconnected and set offline
srcs-backend-1  | Player disconnected: 3Ij-5nImgRa6gGBcAAAL
srcs-backend-1  | User disconnected: 3Ij-5nImgRa6gGBcAAAL
srcs-backend-1  |  3Ij-5nImgRa6gGBcAAAL
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User diiii connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  diiii
srcs-backend-1  | received notif:seen [
srcs-backend-1  |   {
srcs-backend-1  |     id: 97,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'fgsfhegd',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:32.843Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 96,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'daggfs',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:31.615Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 95,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:28.942Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 94,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:28.611Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 93,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:28.282Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 92,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:27.931Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 91,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:27.596Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 90,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:27.124Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 89,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:26.461Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 88,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:26.112Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 87,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:25.778Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 86,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:25.457Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 85,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:25.147Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 84,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:24.869Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 83,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:24.570Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 82,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:24.274Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 81,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:23.970Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 80,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:23.634Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 79,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:23.096Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 78,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:22.778Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 77,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:22.491Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 76,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:22.201Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 75,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:21.923Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 74,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:21.640Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 73,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:21.336Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 72,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:21.057Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 71,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:20.761Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 70,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:20.458Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 69,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:20.160Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 68,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:19.848Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 67,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:19.528Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 66,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:19.188Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 65,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:18.821Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 64,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:18.372Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 63,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:17.458Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 62,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:15.787Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 61,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:13.169Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 60,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:12.430Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 59,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:10.271Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 52,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'd',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:39.023Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 51,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'd',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:38.679Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 50,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'd',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:38.320Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 49,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'dffd',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:37.861Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 48,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'df',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:36.711Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 47,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'df',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:36.430Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 46,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'fd',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:36.156Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 45,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'fd',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:35.886Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 44,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'fd',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:35.629Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 43,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'fd',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:35.388Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 42,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'fd',
srcs-backend-1  |     seen: 0,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:35.117Z'
srcs-backend-1  |   }
srcs-backend-1  | ]
srcs-backend-1  |  Notification 97 marked as seen
srcs-backend-1  |  Notification 93 marked as seen
srcs-backend-1  |  Notification 92 marked as seen
srcs-backend-1  |  Notification 91 marked as seen
srcs-backend-1  |  Notification 96 marked as seen
srcs-backend-1  |  Notification 89 marked as seen
srcs-backend-1  |  Notification 88 marked as seen
srcs-backend-1  |  Notification 87 marked as seen
srcs-backend-1  |  Notification 86 marked as seen
srcs-backend-1  |  Notification 85 marked as seen
srcs-backend-1  |  Notification 84 marked as seen
srcs-backend-1  |  Notification 94 marked as seen
srcs-backend-1  |  Notification 82 marked as seen
srcs-backend-1  |  Notification 81 marked as seen
srcs-backend-1  |  Notification 95 marked as seen
srcs-backend-1  |  Notification 80 marked as seen
srcs-backend-1  |  Notification 78 marked as seen
srcs-backend-1  |  Notification 77 marked as seen
srcs-backend-1  |  Notification 76 marked as seen
srcs-backend-1  |  Notification 75 marked as seen
srcs-backend-1  |  Notification 74 marked as seen
srcs-backend-1  |  Notification 73 marked as seen
srcs-backend-1  |  Notification 72 marked as seen
srcs-backend-1  |  Notification 71 marked as seen
srcs-backend-1  |  Notification 70 marked as seen
srcs-backend-1  |  Notification 69 marked as seen
srcs-backend-1  |  Notification 68 marked as seen
srcs-backend-1  |  Notification 67 marked as seen
srcs-backend-1  |  Notification 66 marked as seen
srcs-backend-1  |  Notification 65 marked as seen
srcs-backend-1  |  Notification 64 marked as seen
srcs-backend-1  |  Notification 63 marked as seen
srcs-backend-1  |  Notification 62 marked as seen
srcs-backend-1  |  Notification 61 marked as seen
srcs-backend-1  |  Notification 60 marked as seen
srcs-backend-1  |  Notification 59 marked as seen
srcs-backend-1  |  Notification 52 marked as seen
srcs-backend-1  |  Notification 51 marked as seen
srcs-backend-1  |  Notification 50 marked as seen
srcs-backend-1  |  Notification 49 marked as seen
srcs-backend-1  |  Notification 48 marked as seen
srcs-backend-1  |  Notification 46 marked as seen
srcs-backend-1  |  Notification 47 marked as seen
srcs-backend-1  |  Notification 45 marked as seen
srcs-backend-1  |  Notification 44 marked as seen
srcs-backend-1  |  Notification 83 marked as seen
srcs-backend-1  |  Notification 42 marked as seen
srcs-backend-1  |  Notification 79 marked as seen
srcs-backend-1  |  Notification 43 marked as seen
srcs-backend-1  |  Notification 90 marked as seen
srcs-backend-1  | [GET] /api/settings/gameinfo
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  |  No user found for username: diiii
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  diiii false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User diiii disconnected and set offline
srcs-backend-1  | Player disconnected: fJqyNn29rZcQOwqBAAAN
srcs-backend-1  | User disconnected: fJqyNn29rZcQOwqBAAAN
srcs-backend-1  |  fJqyNn29rZcQOwqBAAAN
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User diiii connected and set online
srcs-backend-1  | [GET] /api/profile/GameStats/salah
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | [GET] /api/profile/UserPlayerStats/salah
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | [GET] /api/profile/PlayerHistory/salah
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =========> : userid : 2
srcs-backend-1  | =========> : rom : { total_xp: 1200, level: 6 }
srcs-backend-1  | [GET] /api/profile/GameStats/salah
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  diiii
srcs-backend-1  | [GET] /api/profile/CountGames/salah
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | [GET] /api/friends/allfriends
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | [GET] /api/profile/userinfo/salah
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | [GET] /api/friends/allsendreq
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [INFO] 22:41:18 Restarting: /app/src/App.ts has been modified
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User diiii connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172848,
srcs-backend-1  |   exp: 1761176448
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172848,
srcs-backend-1  |   exp: 1761176448
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172596,
srcs-backend-1  |   exp: 1761176196
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172596,
srcs-backend-1  |   exp: 1761176196
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | [INFO] 22:41:24 Restarting: /app/src/App.ts has been modified
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172596,
srcs-backend-1  |   exp: 1761176196
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172596,
srcs-backend-1  |   exp: 1761176196
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User diiii connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172848,
srcs-backend-1  |   exp: 1761176448
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172848,
srcs-backend-1  |   exp: 1761176448
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | [INFO] 22:41:31 Restarting: /app/src/App.ts has been modified
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172848,
srcs-backend-1  |   exp: 1761176448
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172848,
srcs-backend-1  |   exp: 1761176448
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | [INFO] 22:41:33 Restarting: /app/src/App.ts has been modified
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User diiii connected and set online
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172848,
srcs-backend-1  |   exp: 1761176448
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172848,
srcs-backend-1  |   exp: 1761176448
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172596,
srcs-backend-1  |   exp: 1761176196
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172596,
srcs-backend-1  |   exp: 1761176196
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User diiii connected and set online
srcs-backend-1  | [INFO] 22:41:39 Restarting: /app/src/App.ts has been modified
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User diiii connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172848,
srcs-backend-1  |   exp: 1761176448
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172848,
srcs-backend-1  |   exp: 1761176448
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172596,
srcs-backend-1  |   exp: 1761176196
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172596,
srcs-backend-1  |   exp: 1761176196
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | [INFO] 22:41:42 Restarting: /app/src/App.ts has been modified
srcs-backend-1  | 127.0.0.1:3000
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172596,
srcs-backend-1  |   exp: 1761176196
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172596,
srcs-backend-1  |   exp: 1761176196
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User diiii connected and set online
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172848,
srcs-backend-1  |   exp: 1761176448
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172848,
srcs-backend-1  |   exp: 1761176448
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | ###### username username username :  diiii
srcs-backend-1  | ###### : the user user :   Promise { <pending> }
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  diiii false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User diiii disconnected and set offline
srcs-backend-1  | Player disconnected: 8Skff801QUdEbx8_AAAD
srcs-backend-1  | User disconnected: 8Skff801QUdEbx8_AAAD
srcs-backend-1  |  8Skff801QUdEbx8_AAAD
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'diiii',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172841,
srcs-backend-1  |   exp: 1761176441
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | [GET] /api/login/refreshtoken
srcs-backend-1  | [GET] /api/logout
srcs-backend-1  | [GET] /api/login/google
srcs-backend-1  | [GET] /api/login/google/callback?state=XXIPkxurvgXt9T0OVtz_DQ&code=4%2F0AVGzR1BPouF6192OIAWtiyFQZT49M8gXugrlQpt_XUuN9rdl17d1gK483yF8l6MdnKBcXw&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&authuser=0&prompt=none
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ###### : the user user :   Promise { <pending> }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ###### : the user user :   Promise { <pending> }
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172926,
srcs-backend-1  |   exp: 1761176526
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172926,
srcs-backend-1  |   exp: 1761176526
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | [GET] /api/home/HistoryHome/10
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ###### : the user user :   Promise { <pending> }
srcs-backend-1  | [GET] /api/home/Leaderboard/12
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ###### : the user user :   Promise { <pending> }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ###### : the user user :   Promise { <pending> }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ###### : the user user :   Promise { <pending> }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  youbrhic false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User youbrhic disconnected and set offline
srcs-backend-1  | Player disconnected: w_iJUjP61E0Q0LMNAAAB
srcs-backend-1  | User disconnected: w_iJUjP61E0Q0LMNAAAB
srcs-backend-1  |  w_iJUjP61E0Q0LMNAAAB
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172596,
srcs-backend-1  |   exp: 1761176196
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ###### : the user user :   Promise { <pending> }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ###### : the user user :   Promise { <pending> }
srcs-backend-1  | ###### username username username :  youbrhic
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   email: 'oubrhichyassine@gmail.com',
srcs-backend-1  |   first_name: 'yassine',
srcs-backend-1  |   family_name: 'oubrhich',
srcs-backend-1  |   password: '$2b$10$eICiaCoaCcU35l0EDGjUv.E2yzovE7.N.1pd6s9nkt3L7QfaZwEL2',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 516526,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-21 18:35:37',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759823457/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172596,
srcs-backend-1  |   exp: 1761176196
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 1,
srcs-backend-1  |   username: 'youbrhic',
srcs-backend-1  |   display_name: 'hhh',
srcs-backend-1  |   iat: 1761172596,
srcs-backend-1  |   exp: 1761176196
srcs-backend-1  | }
srcs-backend-1  | 1
srcs-backend-1  | 1
srcs-backend-1  | User youbrhic connected and set online
srcs-backend-1  | ----> : userData.userid :  1
srcs-backend-1  | ----> : userData.username :  youbrhic
srcs-backend-1  | [PUT] /api/settings/profile
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ###### : the user user :   Promise { <pending> }
srcs-backend-1  | PUT /profile route called
srcs-backend-1  | ##### decodetoken.display_name  :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172848,
srcs-backend-1  |   exp: 1761176448
srcs-backend-1  | }
srcs-backend-1  | ###### username username username :  salah42
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | #### :  undefined
srcs-backend-1  | ###### username username username :  salah42
srcs-backend-1  | ##### the rows :  {
srcs-backend-1  |   id: 2,
srcs-backend-1  |   username: 'salah42',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   email: 'salahdiouane964@gmail.com',
srcs-backend-1  |   first_name: 'salah',
srcs-backend-1  |   family_name: 'salah',
srcs-backend-1  |   password: '$2b$10$5N4CubvWwvTpLejYZQKqXu12mXTQnCG08Mx1Y9HUqm/PoglhE0IGK',
srcs-backend-1  |   twoFA: 0,
srcs-backend-1  |   twoFA_code: 965380,
srcs-backend-1  |   twoFA_count: 0,
srcs-backend-1  |   Language: 'en',
srcs-backend-1  |   twoFA_expiry: '2025-10-22 16:52:18',
srcs-backend-1  |   image_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1759417996/bg2.png',
srcs-backend-1  |   cover_url: 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
srcs-backend-1  | }
srcs-backend-1  | received notif:seen [
srcs-backend-1  |   {
srcs-backend-1  |     id: 97,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'fgsfhegd',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:32.843Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 96,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'daggfs',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:31.615Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 95,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:28.942Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 94,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:28.611Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 93,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:28.282Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 92,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:27.931Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 91,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:27.596Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 90,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:27.124Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 89,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:26.461Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 88,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:26.112Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 87,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:25.778Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 86,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:25.457Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 85,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:25.147Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 84,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:24.869Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 83,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:24.570Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 82,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:24.274Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 81,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:23.970Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 80,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:23.634Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 79,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:23.096Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 78,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:22.778Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 77,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:22.491Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 76,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:22.201Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 75,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:21.923Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 74,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:21.640Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 73,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:21.336Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 72,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:21.057Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 71,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:20.761Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 70,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:20.458Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 69,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:20.160Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 68,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:19.848Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 67,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:19.528Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 66,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:19.188Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 65,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:18.821Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 64,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:18.372Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 63,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:17.458Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 62,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:15.787Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 61,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:13.169Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 60,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:12.430Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 59,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra venenatis erat et congue. Etiam sagittis vestibulum libero, ut tristique nulla venenatis nec. Aenean volutpat blandit mauris id blandit. Vivamus porttitor augue eget metus pulvinar pellentesque. Nulla rutrum tellus sit amet laoreet.',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:24:10.271Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 52,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'd',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:39.023Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 51,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'd',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:38.679Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 50,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'd',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:38.320Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 49,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'dffd',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:37.861Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 48,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'df',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:36.711Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 47,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'df',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:36.430Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 46,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'fd',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:36.156Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 45,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'fd',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:35.886Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 44,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'fd',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:35.629Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 43,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'fd',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:35.388Z'
srcs-backend-1  |   },
srcs-backend-1  |   {
srcs-backend-1  |     id: 42,
srcs-backend-1  |     id_sender: 1,
srcs-backend-1  |     id_receiver: 2,
srcs-backend-1  |     sender: 'youbrhic',
srcs-backend-1  |     receiver: 'salah',
srcs-backend-1  |     type: 'message',
srcs-backend-1  |     text: 'fd',
srcs-backend-1  |     seen: 1,
srcs-backend-1  |     timestamp: '2025-10-22T22:22:35.117Z'
srcs-backend-1  |   }
srcs-backend-1  | ]
srcs-backend-1  |  Notification 97 marked as seen
srcs-backend-1  |  Notification 96 marked as seen
srcs-backend-1  |  Notification 92 marked as seen
srcs-backend-1  |  Notification 91 marked as seen
srcs-backend-1  |  Notification 90 marked as seen
srcs-backend-1  |  Notification 89 marked as seen
srcs-backend-1  |  Notification 88 marked as seen
srcs-backend-1  |  Notification 87 marked as seen
srcs-backend-1  |  Notification 86 marked as seen
srcs-backend-1  |  Notification 85 marked as seen
srcs-backend-1  |  Notification 84 marked as seen
srcs-backend-1  |  Notification 83 marked as seen
srcs-backend-1  |  Notification 82 marked as seen
srcs-backend-1  |  Notification 81 marked as seen
srcs-backend-1  |  Notification 80 marked as seen
srcs-backend-1  |  Notification 79 marked as seen
srcs-backend-1  |  Notification 93 marked as seen
srcs-backend-1  |  Notification 77 marked as seen
srcs-backend-1  |  Notification 76 marked as seen
srcs-backend-1  |  Notification 73 marked as seen
srcs-backend-1  |  Notification 75 marked as seen
srcs-backend-1  |  Notification 74 marked as seen
srcs-backend-1  |  Notification 72 marked as seen
srcs-backend-1  |  Notification 71 marked as seen
srcs-backend-1  |  Notification 70 marked as seen
srcs-backend-1  |  Notification 69 marked as seen
srcs-backend-1  |  Notification 68 marked as seen
srcs-backend-1  |  Notification 67 marked as seen
srcs-backend-1  |  Notification 66 marked as seen
srcs-backend-1  |  Notification 64 marked as seen
srcs-backend-1  |  Notification 65 marked as seen
srcs-backend-1  |  Notification 63 marked as seen
srcs-backend-1  |  Notification 62 marked as seen
srcs-backend-1  |  Notification 61 marked as seen
srcs-backend-1  |  Notification 60 marked as seen
srcs-backend-1  |  Notification 59 marked as seen
srcs-backend-1  |  Notification 51 marked as seen
srcs-backend-1  |  Notification 50 marked as seen
srcs-backend-1  |  Notification 52 marked as seen
srcs-backend-1  |  Notification 49 marked as seen
srcs-backend-1  |  Notification 48 marked as seen
srcs-backend-1  |  Notification 47 marked as seen
srcs-backend-1  |  Notification 46 marked as seen
srcs-backend-1  |  Notification 45 marked as seen
srcs-backend-1  |  Notification 44 marked as seen
srcs-backend-1  |  Notification 43 marked as seen
srcs-backend-1  |  Notification 42 marked as seen
srcs-backend-1  |  Notification 94 marked as seen
srcs-backend-1  |  Notification 78 marked as seen
srcs-backend-1  |  Notification 95 marked as seen
srcs-backend-1  | User disconnecting
srcs-backend-1  | ====> user is disconnecte :  salah false
srcs-backend-1  | ====> his status  :  false
srcs-backend-1  | ---> : User salah disconnected and set offline
srcs-backend-1  | Player disconnected: y51T81IT5j0IOMtNAAAH
srcs-backend-1  | User disconnected: y51T81IT5j0IOMtNAAAH
srcs-backend-1  |  y51T81IT5j0IOMtNAAAH
srcs-backend-1  | ---------------> User disconnected: {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172926,
srcs-backend-1  |   exp: 1761176526
srcs-backend-1  | }
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ###### : the user user :   Promise { <pending> }
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | [GET] /api/userinfo
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ###### : the user user :   Promise { <pending> }
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | ##### the rows :  undefined
srcs-backend-1  | =================> : google user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172926,
srcs-backend-1  |   exp: 1761176526
srcs-backend-1  | }
srcs-backend-1  | userData : socket.user :  {
srcs-backend-1  |   userid: 2,
srcs-backend-1  |   username: 'salah',
srcs-backend-1  |   display_name: 'salah',
srcs-backend-1  |   iat: 1761172926,
srcs-backend-1  |   exp: 1761176526
srcs-backend-1  | }
srcs-backend-1  | 2
srcs-backend-1  | 2
srcs-backend-1  | User salah connected and set online
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | ----> : userData.userid :  2
srcs-backend-1  | ----> : userData.username :  salah
srcs-backend-1  | [GET] /api/hello
srcs-backend-1  | ###### username username username :  salah
srcs-backend-1  | ###### : the user user :   Promise { <pending> }
srcs-backend-1  | ##### the rows :  undefined
