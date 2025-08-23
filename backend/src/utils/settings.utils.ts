import { FastifyInstance } from 'fastify';
import type { User } from './userauth.utils';
import { resolve } from 'path';
import { rejects } from 'assert';

export interface gameinfo {
	ball_color: string;
	paddle_color: string;
	table_color: string;
};

export async function updateImage(fastify: FastifyInstance, username: string, newImage: string): Promise<void> {
	return new Promise((resolve, reject) => {
		fastify.db.run(
			'UPDATE user_authentication SET image_url = ? WHERE username = ?',
			[
				newImage,
				username
			],
			(err) => {
				if (err) return reject(err);
				resolve();
			}
		);
	})
}

export async function updateCover(fastify: FastifyInstance, username: string, newImage: string): Promise<void> {
	return new Promise((resolve, reject) => {
		fastify.db.run(
			'UPDATE user_authentication SET cover_url = ? WHERE username = ?',
			[
				newImage,
				username
			],
			(err) => {
				if (err) return reject(err);
				resolve();
			}
		);
	})
}

export async function UpdateProfile(fastify: FastifyInstance, user: User, username: string): Promise<void> {
	return new Promise((resolve, reject) => {
		fastify.db.run(
			'UPDATE user_authentication SET  username = ?, first_name = ?, family_name = ?, Language = ?, image_url = ?, cover_url = ?  WHERE username = ?',
			[
				user.username,
				user.first_name,
				user.family_name,
				user.Language,
				user.image_url,
				user.cover_url,
				username
			],
			(err) => {
				if (err) return reject(err);
				resolve();
			}
		);
	})
}

export async function UpdateGame(fastify: FastifyInstance, gameinfo: gameinfo, username: string): Promise<void> {
	return new Promise((resolve, rejects) => {
		fastify.db.run(
			'UPDATE game_settings_table SET ball_color = ?, paddle_color = ? , table_color = ? WHERE username = ?',
			[
				gameinfo.ball_color,
				gameinfo.paddle_color,
				gameinfo.table_color,
				username
			],
			(err) => {
				if (err) return rejects(err);
				resolve();
			}
		)
	})
}

export async function getgameinfo(fastify: FastifyInstance, username: string): Promise<gameinfo | null> {
	return (new Promise((resolve, rejects) => {
		fastify.db.get('SELECT * FROM game_settings_table where username = ? ', [username],
			(err: Error | null, rows: gameinfo) => {
				if (err)
					rejects(err);
				resolve(rows);
			}
		)
	}))
}

export async function setdefaultgame(fastify: FastifyInstance, username: string): Promise<void> {
	return new Promise((resolve, reject) => {
		fastify.db.run(
			`INSERT INTO game_settings_table (username)
					 VALUES (?)`,
			[
				username
			],
			(err) => {
				if (err) return reject(err);
				resolve();
			}
		);
	});
}