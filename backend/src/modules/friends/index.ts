import { FastifyInstance } from "fastify";
import {friend_request} from './friends.schema'
import {sendRequest, acceptRequest, allfriends, allsendreq, allrecvreq, deleteReq, blockReq} from './friends.routes'


export default function friends(fastify: FastifyInstance) {
	fastify.register(sendRequest, {prefix: '/friends'});
	fastify.register(acceptRequest, {prefix: '/friends'});
	fastify.register(allfriends, {prefix: '/friends'});
	fastify.register(allsendreq, {prefix: "/friends"});
	fastify.register(allrecvreq, {prefix: "/friends"});
	fastify.register(deleteReq, {prefix: "/friends"});
	fastify.register(blockReq, {prefix: "/friends"});
}
