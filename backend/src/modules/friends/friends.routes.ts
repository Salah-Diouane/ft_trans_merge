import fastify, { FastifyInstance, FastifyPluginCallback, FastifyReply, FastifyRequest } from 'fastify';
import { friend_request, delete_req } from './friends.schema'
import { getuserid, } from '../../utils/userauth.utils';
import { addNewFriendReq, setFriendReq, getFriends, getSentFriendReqUsernames, getReceivedFriendRequests, deleteFriendReq, getBlockUser, unblockUser_utils, getNameById } from '../../utils/friends.utils';
import { Server as IOServer } from "socket.io";
import { userSockets } from "../socket/chat/chat.handlers"



interface SendRequestOptions{
	io: IOServer;
}
  
interface AcceptRequestOptions {
	io: IOServer;
}
  
export const sendRequest: FastifyPluginCallback<SendRequestOptions> =  (fastify, opts, done) => {
	const io = opts.io;
  
	fastify.post("/sendrequest", { schema: { body: friend_request } }, async (req, reply) => {
	  try {
		const token = req.cookies.accessToken;
		if (!token) return reply.code(401).send({ message: "No access token" });
  
		const decode = fastify.jwt.decode(token) as { userid: number };
		const user_recv = req.body as { frined_username: string };
		const id_receiver = await getuserid(fastify, user_recv.frined_username);
  
		if (id_receiver === null) return reply.code(400).send({ message: "Receiver not found" });
  
		await addNewFriendReq(fastify, decode.userid, id_receiver);
		const sender_name = await getNameById(fastify, decode.userid);
		const received_name = await getNameById(fastify, id_receiver);
		
		const sender = sender_name[0].username;
		const receiver = received_name[0].username;
		
		if (!sender || !receiver) {
		  return reply.code(500).send({ message: "User data not found" });
		}
		
		console.log("sender_name-> ", sender)
		console.log("received_name-> ", receiver)
		if (io) {
		  const notification = {
			type: "friend_request",
			senderId: decode.userid,
			recipientId: id_receiver,
			sender, 
			receiver,
			message: "Friend Request",
			timestamp: new Date().toISOString(),
		  };
  
		  const data = JSON.stringify(notification);
		//   id INTEGER PRIMARY KEY AUTOINCREMENT,
		//   id_sender INTEGER NOT NULL,
		//   id_receiver INTEGER NOT NULL,
		//   sender TEXT NOT NULL,
		//   receiver TEXT NOT NULL,
		//   type TEXT NOT NULL,
		//   timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
		  fastify.db.run(
			// "INSERT INTO notification (id_sender, id_receiver, sender, receiver, type) VALUES (?, ?, ?, ?, ?)",
			// [decode.userid, id_receiver, notification.sender, notification.receiver, notification.type],
			"INSERT INTO notification (id_sender, id_receiver, sender, receiver, type, text, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?)",
			[notification.senderId, notification.recipientId, notification.sender, notification.receiver, notification.type, notification.message, notification.timestamp],
			(err: any) => {
			  if (err) console.error("Notification insert error:", err);
			}
		  );
		  
			const recipientSocketId = userSockets.get(id_receiver);
			if (recipientSocketId) {
				io.to(recipientSocketId).emit("notification", notification);
			}
		}
  
		return reply.send({ message: "Friend request sent successfully." });
	  } catch (err) {
		reply.code(500).send({ error: (err as Error).message });
	  }
	});
  
	done();
  };

export const acceptRequest:FastifyPluginCallback<AcceptRequestOptions> =  (fastify, opts, done)  => {
	const io = opts.io;
	fastify.put('/acceptrequest', {
		schema: {
			body: friend_request
		}
	}, async (req, reply) => {
		try {
			console.log("===> : friend_request")
			console.log(friend_request)
			const token = req.cookies.accessToken;
			if (!token)
				return reply.code(401).send({ message: "No access token in cookies", accesstoken: false, refreshtoken: true });
			const decode = fastify.jwt.decode(token) as { userid: number };
			const user_recv = req.body as { frined_username: string }
			const id_receiver = await getuserid(fastify, user_recv.frined_username);
			if (id_receiver === null)
				return reply.code(400).send({ message: "Username of the receiver not found!" });
			await setFriendReq(fastify, id_receiver, decode.userid, true);
			const sender_name = await getNameById(fastify, decode.userid);
			const received_name = await getNameById(fastify, id_receiver);
			
			const sender = sender_name[0].username;
			const receiver = received_name[0].username;
			
			if (!sender || !receiver) {
			  return reply.code(500).send({ message: "User data not found" });
			}
			console.log("SENDER : ", sender)
			console.log("RECEIVER : ", receiver)

			if (io) {
				const notification = {
				  type: "friend_request_accepted",
				  senderId: decode.userid,  // who accepted
				  recipientId: id_receiver, // sender
				  sender: sender,
				  receiver: receiver,
				  message: "Request Accepted",
				  timestamp: new Date().toISOString(),
				};
			  
				// fastify.db.run(
				// 	"INSERT INTO notification (id_sender, id_receiver, sender, receiver, type) VALUES (?, ?, ?, ?, ?)",
				// 	[decode.userid, id_receiver, notification.sender, notification.receiver, notification.type],
				// );
			  
				fastify.db.run(
					"INSERT INTO notification (id_sender, id_receiver, sender, receiver, type , text, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?)",
					[decode.userid, id_receiver, notification.sender, notification.receiver, notification.type, notification.message, notification.timestamp],
				);
				
				const recipientSocketId = userSockets.get(id_receiver);
				if (recipientSocketId) io.to(recipientSocketId).emit("notification", notification);
			  }
			  
			return reply.send({ message: "friend request is accepted !" });
		} catch (err) {
			reply.code(500).send({ error: (err as Error).message });
		}
	});
	done(); 
}

export const allsendreq = async (fastify: FastifyInstance) => {
	fastify.get('/allsendreq', async (req, reply) => {
		try {
			const token = req.cookies.accessToken;
			if (!token)
				return reply.code(401).send({ message: "No access token in cookies", accesstoken: false, refreshtoken: true });
			const decode = fastify.jwt.decode(token) as { userid: number };
			const allrequets = await getSentFriendReqUsernames(fastify, decode.userid);

			return reply.send(allrequets);
		} catch (err) {
			reply.code(500).send({ error: (err as Error).message });
		}
	})
}

export const allrecvreq = async (fastify: FastifyInstance) => {
	fastify.get('/allrecvreq', async (req, reply) => {
		try {
			const token = req.cookies.accessToken;
			if (!token)
				return reply.code(401).send({ message: "No access token in cookies", accesstoken: false, refreshtoken: true });
			const decode = fastify.jwt.decode(token) as { userid: number };
			const allrequets = await getReceivedFriendRequests(fastify, decode.userid);

			return reply.send(allrequets);
		} catch (err) {
			reply.code(500).send({ error: (err as Error).message });
		}
	})
}

export const allfriends = async (fastify: FastifyInstance) => {
	fastify.get('/allfriends', async (req, reply) => {
		try {
			const token = req.cookies.accessToken;
			if (!token)
				return reply.code(401).send({ message: "No access token in cookies", accesstoken: false, refreshtoken: true });
			const decode = fastify.jwt.decode(token) as { userid: number };
			console.log(decode.userid);
			const friends = await getFriends(fastify, decode.userid);
			return reply.send(friends);
		} catch (err) {
			reply.code(500).send({ error: (err as Error).message });
		}
	})
}

export const deleteReq = async (fastify: FastifyInstance) => {
	fastify.delete('/deletereq', {
		schema: {
			body: delete_req
		}
	}, async (req, reply) => {
		try {
			const token = req.cookies.accessToken;
			if (!token)
				return reply.code(401).send({ message: "No access token in cookies", accesstoken: false, refreshtoken: true });
			const decode = fastify.jwt.decode(token) as { userid: number };
			const reqdata = req.body as { frined_username: string, type: string };
			const friend_id = await getuserid(fastify, reqdata.frined_username);
			if (friend_id === null)
				return reply.code(400).send({ message: "Username of the receiver not found!" });
			if (reqdata.type === 'send')
				await deleteFriendReq(fastify, decode.userid, friend_id);
			else
				await deleteFriendReq(fastify, friend_id, decode.userid);
			return (reply.send());
		} catch (err) {
			reply.code(500).send({ error: (err as Error).message });
		}
	})
}

export const blockReq = async (fastify: FastifyInstance) => {
    fastify.get('/blockReq', async (req, reply) => {
        try {
            const token = req.cookies.accessToken;
            if (!token)
                return reply.code(401).send({ message: "No access token in cookies", accesstoken: false, refreshtoken: true });

            const decode = fastify.jwt.decode(token) as { userid: number };
            const blockedUsers = await getBlockUser(fastify, decode.userid);
            console.log("---------------> allblockreq");
            console.log(blockedUsers);

            return reply.send(blockedUsers);
        } catch (err) {
            reply.code(500).send({ error: (err as Error).message });
        }
    })
}


export const unblockUser = async (fastify: FastifyInstance) => {
	fastify.delete('/unblockUser', {
		schema: {
			body: delete_req
		}
	}, async (req, reply) => {
		try {
			const token = req.cookies.accessToken;
			if (!token)
				return reply.code(401).send({ message: "No access token in cookies", accesstoken: false, refreshtoken: true });
			const decode = fastify.jwt.decode(token) as { userid: number };
			const reqdata = req.body as { frined_username: string, type: string };
			const friend_id = await getuserid(fastify, reqdata.frined_username);
			if (friend_id === null)
				return reply.code(400).send({ message: "Username of the receiver not found!" });
			// id_sender: number, id_blocked: number
			if (reqdata.type === 'send')
				await unblockUser_utils(fastify, decode.userid, friend_id);

			return (reply.send());
		} catch (err) {
			reply.code(500).send({ error: (err as Error).message });
		}
	})
}

