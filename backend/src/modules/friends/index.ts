// import { FastifyInstance } from "fastify";
// import {friend_request} from './friends.schema'
// import {sendRequest, acceptRequest, allfriends, allsendreq, allrecvreq, deleteReq, blockReq, unblockUser} from './friends.routes'


// export default function friends(fastify: FastifyInstance) {
	// 	fastify.register(sendRequest, {prefix: '/friends'});
	// fastify.register(acceptRequest, {prefix: '/friends'});
	// fastify.register(allfriends, {prefix: '/friends'});
	// fastify.register(allsendreq, {prefix: "/friends"});
	// fastify.register(allrecvreq, {prefix: "/friends"});
	// fastify.register(deleteReq, {prefix: "/friends"});
	// fastify.register(blockReq, {prefix: "/friends"});
	// fastify.register(unblockUser, {prefix: "/friends"});
	// }
	
	
import { FastifyInstance, FastifyPluginCallback } from 'fastify';
import { sendRequest, acceptRequest, allfriends, allsendreq, allrecvreq, deleteReq, blockReq, unblockUser } from './friends.routes';
import { Server as IOServer } from 'socket.io';

interface FriendsPluginOptions {
	io: IOServer;
}

const friends: FastifyPluginCallback<FriendsPluginOptions> = (fastify, opts, done) => {
	const io = opts.io;

	fastify.register(sendRequest, { prefix: '/friends', io });
	fastify.register(acceptRequest, { prefix: '/friends', io});
	fastify.register(allfriends, { prefix: '/friends' });
	fastify.register(allsendreq, { prefix: '/friends' });
	fastify.register(allrecvreq, { prefix: '/friends' });
	fastify.register(deleteReq, { prefix: '/friends' });
	fastify.register(blockReq, { prefix: '/friends' });
	fastify.register(unblockUser, { prefix: '/friends' });

	done();
};

	export default friends;
	

