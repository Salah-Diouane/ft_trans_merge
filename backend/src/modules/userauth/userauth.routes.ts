import fastify, { FastifyInstance } from "fastify";
import { request } from "http";
import {user_signup, user_signin, user_Verify2fa} from './userauth.schema'
import {addNewUser, getuser} from '../../utils/userauth.utils'
import type {User} from '../../utils/userauth.utils'
import {handle_Signin, handel_verifytwofa, handle_googlesign} from './userauth.controller'
import {generateAccessToken, generateRefreshToken} from './userauth.services'

export const SignUp = async (fastify : FastifyInstance) => {
	fastify.post('/signup', {
		schema: {
		  body: user_signup,
		  response: {
			201: user_signup,
		  }
		}
	  }, async (request, reply) => {
			const user = request.body as User;
			try {
				if (user.password != user.confirmpassword)
					throw ('the password  and confirm password are not the same !');
				else {
					await addNewUser(fastify, user);
					reply.send('done !')
				}
			} catch(err) {
				reply.code(400).send(err);
			}
	  });
}

export const Signin = async (fastify: FastifyInstance) => {
	fastify.post('/signin', {
		schema : {
			body: user_signin
		}
	}
	,
	async (request, reply) => {
		try {
			const user = request.body as User;
			await handle_Signin(fastify, request, reply, user);
		} catch(err) {
			reply.code(400).send(err);
		}
	})
}

export const Verify2fa = async (fastify: FastifyInstance) => {
	fastify.post('/verify2fa',{
		schema: {
			body: user_Verify2fa
		}
	},
	async (request, reply) => {
		try {
			await handel_verifytwofa(fastify, request, reply);
		} catch(err){
			reply.code(400).send(err);
		}
	})
}

export const RefreshToken = async (fastify: FastifyInstance) => {
	fastify.post('/refreshtoken', async (request, reply) => {
		try {
			const refreshtoken = request.cookies.refreshtoken;
			console.log(refreshtoken);
			if (!refreshtoken) {
				return reply.code(400).send({
					message: "Refresh token expired",
					"refreshtoken": "false"
				});
			}
			const decoded = fastify.jwt.verify(refreshtoken) as {username: string};
			const user: User | null = await getuser(fastify, decoded.username);
			if (!user) {
				return reply.code(404).send({ message: "User not found" , "refreshtoken" : "true"});
			}
			const accessToken = await generateAccessToken(fastify, reply, user);
			console.log("new token : ",accessToken);
			return reply.send({ accessToken });
		} catch (err) {
			return reply.code(400).send({ message: "Invalid refresh token", error: err , "refreshtoken " : "false"});
	  }
	});
};

export const GoogleSign = async (fastify: FastifyInstance) => {
	fastify.get('/google/callback' , async (request, reply) => {
		try {
			await handle_googlesign(fastify, request, reply);
		} catch (err) {
			reply.code(400).send(err);
		}
	});
}
