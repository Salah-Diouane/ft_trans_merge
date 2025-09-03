import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { friend_request, delete_req } from './friends.schema'
import { getuserid, } from '../../utils/userauth.utils';
import { addNewFriendReq, setFriendReq, getFriends, getSentFriendReqUsernames, getReceivedFriendRequests, deleteFriendReq, getBlockUser, unblockUser_utils } from '../../utils/friends.utils';


export const sendRequest = async (fastify: FastifyInstance) => {
	fastify.post('/sendrequest', {
		schema: {
			body: friend_request
		}  
	},
		async (req, reply) => {
			try {
				const token = req.cookies.accessToken;
				if (!token)
					return reply.code(401).send({ message: "No access token in cookies", accesstoken: false, refreshtoken: true });
				const decode = fastify.jwt.decode(token) as { userid: number };
				const user_recv = req.body as { frined_username: string }
				const id_receiver = await getuserid(fastify, user_recv.frined_username);
				if (id_receiver === null)
					return reply.code(400).send({ message: "Username of the receiver not found!" });
				await addNewFriendReq(fastify, decode.userid, id_receiver);
				return reply.send({ message: "Friend request has been sent successfully." });
			} catch (err) {
				reply.code(500).send({ error: (err as Error).message });
			}
		});
}

export const acceptRequest = async (fastify: FastifyInstance) => {
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
			return reply.send({ message: "friend request is accepted !" });
		} catch (err) {
			reply.code(500).send({ error: (err as Error).message });
		}
	})
}

export const allsendreq = async (fastify: FastifyInstance) => {
	fastify.get('/allsendreq', async (req, reply) => {
		try {
			const token = req.cookies.accessToken;
			if (!token)
				return reply.code(401).send({ message: "No access token in cookies", accesstoken: false, refreshtoken: true });
			const decode = fastify.jwt.decode(token) as { userid: number };
			const allrequets = await getSentFriendReqUsernames(fastify, decode.userid);
			console.log("---------------> allsendreq")
			console.log(allrequets)
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
			console.log("---------------> allrecvreq")
			console.log(allrequets)
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
