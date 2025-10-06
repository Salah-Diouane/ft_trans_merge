import fastify, { FastifyInstance , FastifyReply} from "fastify";
import { setTwofAcode} from "../../utils/userauth.utils";
import type {User} from '../../utils/userauth.utils'
import nodemailer from 'nodemailer';
import {env} from '../../plugins/env.plugin';

export const generateRefreshToken = async (fastify: FastifyInstance, reply: FastifyReply, username: string) : Promise<string> => {
	const token =  await fastify.jwt.sign({username : `${username}`}, { expiresIn: '7d' });
	reply.setCookie('refreshtoken', token, {
		path: '/api/login/refreshtoken',
		secure: false,
		httpOnly: true,
		sameSite: 'strict'
  });
  return token;
}

export const generateAccessToken = async (fastify: FastifyInstance, reply: FastifyReply, user: User) :  Promise<string>  => {
	const token = await fastify.jwt.sign({userid: user.id, username: user.username, email: user.email}, {expiresIn: '1h'});
	reply.setCookie('accessToken', token, {
		path: '/',
		secure: false,
		httpOnly: true,
		sameSite: 'strict'
  });
  return token;
}

export const sendemail = async (fastify: FastifyInstance, userinfo: User) => {
	const transporter = await nodemailer.createTransport({
		service: 'gmail',
		auth: {
		  user: process.env.GMAIL_ACCOUNT,
		  pass: process.env.GMAIL_PASSWORD
		}
	});
	const code : number = await Math.floor(100000 + Math.random() * 900000);
	const mailOptions = {
		from :  env.GMAIL_ACCOUNT,
		to: `${userinfo.email}`,
		subject: '2fa from my web project',
		text: `the 2FA code ${code.toString()} !`
	}
	await transporter.sendMail(mailOptions);
	await setTwofAcode(fastify, userinfo.username, code);
	console.log("the code : ", code);
}

export const generateusername  =  (email: string) => {
	const username  =  email.replace("@gmail.com", "");
	return (username);
}
