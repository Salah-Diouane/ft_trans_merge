import fastify, { FastifyInstance , FastifyReply, FastifyRequest } from 'fastify';
import {sendemail, generateAccessToken, generateRefreshToken, generateusername} from './userauth.services'
import { addNewUser, getuser, setTwofAcode} from "../../utils/userauth.utils";
import type {User} from '../../utils/userauth.utils';

export async function  handle_Signin(fastify: FastifyInstance , request : FastifyRequest,reply : FastifyReply, user: User) {
	const userinfo : User | null =  await getuser(fastify, user.username);

	if (!userinfo)
		return reply.code(400).send('User not found !');
	else if (userinfo.password != user.password)
		return reply.code(400).send('invalid password !');
	if (userinfo?.twoFA) {
		await sendemail(fastify, userinfo);
		return reply.code(201).send({"message" : `send 2FA to ${userinfo.email}`, "login " : "false"});
	}
	await generateAccessToken(fastify, reply, userinfo);
	await generateRefreshToken(fastify, reply, userinfo.username);
	return reply.code(200).send({"message" : 'done !', "login": "true"});
}

export async function handel_verifytwofa(fastify: FastifyInstance , request : FastifyRequest, reply : FastifyReply) {
	const { username , twofa} = request.body as {username: string, twofa: number};
	const userinfo : User | null = await getuser(fastify, username);

	if (userinfo === null)
		return reply.code(400).send({"message " : "user not found"});
	else {
		if (userinfo?.twoFA_code !== twofa) {
			return reply.code(400).send({"message" : "your 2fa code not correct try again !"});
		}
		else {
			await generateAccessToken(fastify, reply, userinfo);
			await generateRefreshToken(fastify, reply, userinfo.username);
			return reply.code(200).send({"message" : `hello mr.${userinfo.username}`, "login " : "true"});
		}
	}
}

export async  function handle_googlesign(fastify: FastifyInstance, request : FastifyRequest, reply : FastifyReply) {
	const token = await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);
	const data  = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
		headers: {
			Authorization: `Bearer ${token.token.access_token}`
		}
	});
	const userInfo = await data.json() as {email: string, given_name: string , family_name: string, picture : string};
	const username = generateusername(userInfo.email);
	const user = await getuser(fastify, username);
	if  (user && user.password)
		return reply.code(400).send({"message " : " invalid email", "login" : "false"});
	else if (!user){
		const newuser : User  = {username: username , email: userInfo.email, family_name: userInfo.family_name,first_name : userInfo.given_name , image_url: userInfo.picture}
		await addNewUser(fastify, newuser);
		return reply.code(201).send({"message " : `welcom mr.${username}`, "login" : "true"});
	}
	return reply.send({"message " : `welcom back mr.${username}`, "login" : "true"});
}
