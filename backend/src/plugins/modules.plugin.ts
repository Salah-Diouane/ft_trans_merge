import userauth  from '../modules/userauth'
import { FastifyInstance } from 'fastify'

export default function allmodulesPlugins(fastify: FastifyInstance) {
	fastify.register(userauth);
}
