import userauth  from '../modules/userauth'
import settings from '../modules/settings';
import friends from '../modules/friends'
import { FastifyInstance } from 'fastify'

export default function allmodulesPlugins(fastify: FastifyInstance) {
	fastify.register(userauth);
	fastify.register(settings);
	fastify.register(friends);
}
