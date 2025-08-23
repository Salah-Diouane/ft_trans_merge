import { rejects } from "assert"
import { error } from "console"
import fastify, { FastifyInstance } from "fastify"
import { get, request } from "http"
import { resolve } from "path"
import { profile_setting, game_setting } from './settings.schema'
import { getuser } from "../../utils/userauth.utils"
import { type User } from "../../utils/userauth.utils"
import { UpdateProfile } from "../../utils/settings.utils"
import { v2 as cloudinary } from 'cloudinary';
import { getgameinfo, UpdateGame } from "../../utils/settings.utils"
import type { gameinfo } from "../../utils/settings.utils";

export const profile = async (fastify: FastifyInstance) => {
	fastify.put('/profile', {
		schema: {
			body: profile_setting
		}
	}, async (request, reply) => {
		console.log('PUT /profile route called');
		try {
			const token = request.cookies.accessToken;
			if (!token) {
				return reply.code(401).send({ userinfo: false, message: "No access token in cookies", accesstoken: false, refreshtoken: true });
			}
			const decodetoken = fastify.jwt.decode(token) as { username: string };
			const newuser = request.body as User;
			const user = await getuser(fastify, newuser.username);
			if (user && user.username !== decodetoken.username) {
				return reply.code(400).send({ message: 'this username already token !', type: 'username', login: false });
			}
			const oldurlCover = user?.cover_url?.substring(user?.cover_url?.lastIndexOf('/') + 1).replace(/\.[^/.]+$/, '');
			const oldurlProfile = user?.image_url?.substring(user?.image_url?.lastIndexOf('/') + 1).replace(/\.[^/.]+$/, '');
			await UpdateProfile(fastify, newuser, decodetoken.username);
		} catch (err) {
			console.log("the error : ", err);
			reply.code(500).send({ error: (err as Error).message });
		}
	});
}

export const GetUrlimage = async (fastify: FastifyInstance) => {
	fastify.post('/imageUrl', async (req, reply) => {
		try {
			const data = await req.file();
			if (!data)
				return reply.code(400).send({ message: 'Only image files are allowed' });
			if (!data.mimetype.startsWith('image/'))
				return reply.code(400).send({ message: 'Only image files are allowed' });
			const result = await new Promise((resolve, reject) => {
				const uploadStream = req.server.cloudinary.uploader.upload_stream(
					{ public_id: data?.filename.replace(/\.[^/.]+$/, "") },
					(error, result) => {
						if (error) return reject(error);
						resolve(result);
					}
				);
				data.file.pipe(uploadStream);
			});
			const typedResult = result as { secure_url: string };
			reply.send({ message: 'Image uploaded', url: typedResult.secure_url });
		} catch (err) {
			console.log("the error : ", err);
			reply.code(500).send({ message: (err as Error).message });
		}
	})
}

export const GameSettings = async (fastify: FastifyInstance) => {
	fastify.put('/game', {
		schema: {
			body: game_setting
		}
	}, async (request, reply) => {
		try {
			const token = request.cookies.accessToken;
			if (!token) {
				return reply.code(401).send({ userinfo: false, message: "No access token in cookies", accesstoken: false, refreshtoken: true });
			}
			const decodetoken = fastify.jwt.decode(token) as { username: string };
			const gameinfo = request.body as gameinfo;
			await UpdateGame(fastify, gameinfo, decodetoken.username);
		} catch (err) {
			console.log("hi hi !");
			reply.code(500).send({ message: (err as Error).message });
		}
	})
}

export const GetGameInfo = async (fastify: FastifyInstance) => {
	fastify.get('/gameinfo', async (request, reply) => {
		try {
			const token = request.cookies.accessToken;
			if (!token) {
				return reply.code(401).send({ userinfo: false, message: "No access token in cookies", accesstoken: false, refreshtoken: true });
			}
			const decodetoken = fastify.jwt.decode(token) as { username: string };
			const gameinfo = await getgameinfo(fastify, decodetoken.username);
			return reply.send({ ball_color: gameinfo?.ball_color, paddle_color: gameinfo?.paddle_color, table_color: gameinfo?.table_color });
		} catch (err) {
			reply.code(500).send({ message: (err as Error).message });
		}
	})
}
