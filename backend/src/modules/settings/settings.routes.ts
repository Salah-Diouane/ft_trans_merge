import { rejects } from "assert"
import { error } from "console"
import fastify, { FastifyInstance } from "fastify"
import { get, request } from "http"
import { resolve } from "path"
import { profile_setting, game_setting, security_settings, tictac_setting } from './settings.schema'
import { getuser } from "../../utils/userauth.utils"
import { type User } from "../../utils/userauth.utils"
import { UpdateProfile } from "../../utils/settings.utils"
import { v2 as cloudinary } from 'cloudinary';
import { getgameinfo, UpdateGame, UpdateTicTac, getTicTacinfo } from "../../utils/settings.utils"
import type { gameinfo, securityinfo, ticTacinfo } from "../../utils/settings.utils";
import { setpassword } from "../../utils/settings.utils"
import { settwoFA } from "../../utils/settings.utils"

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

// PING PONG
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


//TIC TAC
export const TicTacSettings = async (fastify: FastifyInstance) => {
	fastify.put('/tictac', {
		schema: {
			body: tictac_setting
		}
	}, async (request, reply) => {
		try {
			const token = request.cookies.accessToken;
			if (!token) {
				return reply.code(401).send({ userinfo: false, message: "No access token in cookies", accesstoken: false, refreshtoken: true });
			}
			const decodetoken = fastify.jwt.decode(token) as { username: string };
			const ticTacinfo = request.body as ticTacinfo;
			console.log("---> : ticTacinfo : ", ticTacinfo)
			await UpdateTicTac(fastify, ticTacinfo, decodetoken.username);
		} catch (err) {
			reply.code(500).send({ message: (err as Error).message });
		}
	})
}

export const GetTicTacInfo = async (fastify: FastifyInstance) => {
	fastify.get('/tictacinfo', async (request, reply) => {
		try {
			const token = request.cookies.accessToken;
			if (!token) {
				return reply.code(401).send({ userinfo: false, message: "No access token in cookies", accesstoken: false, refreshtoken: true });
			}
			const decodetoken = fastify.jwt.decode(token) as { username: string };
			const ticTacinfo = await getTicTacinfo(fastify, decodetoken.username);
			console.log("====> : ticTacinfo : ", ticTacinfo);
			return reply.send({ x_color: ticTacinfo?.x_color, o_color: ticTacinfo?.o_color, grid_color: ticTacinfo?.grid_color, board_color: ticTacinfo?.board_color });
		} catch (err) {
			reply.code(500).send({ message: (err as Error).message });
		}
	})
}


export const UpateSecurity = async (fastify: FastifyInstance) => {
	fastify.put('/security', {
		schema: {
			body: security_settings
		}
	}, async (request, reply) => {
		try {
			const body = request.body as securityinfo;
			const token = request.cookies.accessToken;
			if (!token)
				return reply.code(401).send({ userinfo: false, message: "No access token in cookies", accesstoken: false, refreshtoken: true });
			const decodetoken = fastify.jwt.decode(token) as { username: string };
			const user = await getuser(fastify, decodetoken.username);
			if (body.password !== undefined) {
				console.log("the password : ", user?.password);
				console.log("old password : ", body.oldpassowrd);
				console.log("the current password : ", body.password);
				console.log("the confure passowrd : ", body.confirmpassword);
				if (user?.password !== body.oldpassowrd)
					return (reply.code(400).send({ type: "oldpassowrd", message: "the current password is invalid" }));
				else if (body.password !== body.confirmpassword)
					return (reply.code(400).send({ type: 'confirmpassword', message: 'password and confirmpassword are not the same !' }));
				await setpassword(fastify, user.username, body.password);
			}
			if (body.twoFA !== undefined) {
				console.log("the twofa : ", body.twoFA);
				await settwoFA(fastify, user?.username || "", body.twoFA);
			}
		} catch (err) {
			console.log("error : ", err);
			reply.code(500).send({ message: (err as Error).message });
		}
	})
}
