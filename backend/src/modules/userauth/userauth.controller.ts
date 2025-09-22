import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { sendemail, generateAccessToken, generateRefreshToken, generateusername } from './userauth.services'
import { addNewUser, getuser, setTwofAcode, getuser_email, getuserid} from "../../utils/userauth.utils";
import { updateImage } from '../../utils/settings.utils'
import type { User } from '../../utils/userauth.utils';
import { env } from '../../plugins/env.plugin';
import { setdefaultgame } from "../../utils/settings.utils";

export async function handle_Signin(fastify: FastifyInstance, request: FastifyRequest, reply: FastifyReply, user: User) {
	const userinfo: User | null = await getuser(fastify, user.username);

	if (!userinfo)
		return reply.code(400).send({ message: 'User not found !', type: 'username', login: false });
	else if (userinfo.password !== user.password)
		return reply.code(400).send({ message: 'invalid password !', type: 'password', login: false });
	if (userinfo?.twoFA) {
		await sendemail(fastify, userinfo);
		return reply.code(201).send({ message: `send 2FA to ${userinfo.email}`, login: true, twofa: true });
	}
	await generateRefreshToken(fastify, reply, userinfo.username);
	await generateAccessToken(fastify, reply, userinfo);
	return reply.code(200).send({ message: 'done !', login: true, twofa: false });
}

export async function handel_verifytwofa(fastify: FastifyInstance, request: FastifyRequest, reply: FastifyReply) {
	const { username, twofa } = request.body as { username: string, twofa: number };
	const userinfo: User | null = await getuser(fastify, username);

	if (userinfo === null)
		return reply.code(400).send({ message: "user not found", login: false });
	else {
		if (userinfo?.twoFA_code !== twofa) {
			return reply.code(400).send({ message: "your 2fa code not correct try again !", login: false });
		}
		else {
			await generateRefreshToken(fastify, reply, userinfo.username);
			await generateAccessToken(fastify, reply, userinfo);
			return reply.code(200).send({ message: `hello mr.${userinfo.username}`, login: true });
		}
	}
}

export async function handle_googlesign(fastify: FastifyInstance, request: FastifyRequest, reply: FastifyReply) {
	const token = await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);
	const data = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
		headers: {
			Authorization: `Bearer ${token.token.access_token}`
		}
	});

	const userInfo = await data.json() as { email: string, given_name: string, family_name: string, picture: string };
	const user = await getuser_email(fastify, userInfo.email);
	if (!user) {
		const username = generateusername(userInfo.email);
		const newuser: User = { username: username, email: userInfo.email, family_name: userInfo.family_name, first_name: userInfo.given_name }
		await addNewUser(fastify, newuser);
		const id = await getuserid(fastify, newuser.username) || 0;
		await setdefaultgame(fastify, id);
		await updateImage(fastify, username, userInfo.picture);
		await generateRefreshToken(fastify, reply, username);
		await generateAccessToken(fastify, reply, newuser);
	} else {
		await generateRefreshToken(fastify, reply, user.username);
		await generateAccessToken(fastify, reply, user);
	}
	return reply.redirect(`${env.REDERCURL}`);
}
