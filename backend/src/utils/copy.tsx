
import { FastifyInstance } from 'fastify';
import type { User } from './userauth.utils';
import { resolve } from 'path';
import { rejects } from 'assert';

export interface gameinfo {
	ball_color: string;
	paddle_color: string;
	table_color: string;
};

export interface ticTacinfo {
	x_color: string;
	o_color: string;
	grid_color: string;
	board_color: string;
};

export interface securityinfo {
	twoFA: boolean;
	oldpassowrd: string;
	password: string;
	confirmpassword: string;
};

export async function getuserid(fastify: FastifyInstance, username: string) : Promise<number | null> {
	return new Promise((resolve, rejects) => {
		fastify.db.get(
			`SELECT id from user_authentication WHERE username = ? `,
			[
				username
			],
			(err : Error, row: { id: number}) => {
				if (err) rejects(err);
				resolve(row.id);
			}
		);
	})
}

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

//Ping Pong
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
			async (err: Error | null, rows: gameinfo) => {
				if (err)
					rejects(err);
				
				// If no record exists, create default one
				if (!rows) {
					console.log("No game settings found, creating default for user:", username);
					await setdefaultgame(fastify, username);
					// Return default values
					resolve({
						ball_color: "#FF0000",
						paddle_color: "#0000FF", 
						table_color: "#EEEEEE"
					});
				} else {
					console.log("rows in ping pong : ", rows);
					resolve(rows);
				}
			}
		)
	}))
}

export async function setdefaultgame(fastify: FastifyInstance, username: string): Promise<void> {
	return new Promise((resolve, reject) => {
		fastify.db.run(
			`INSERT INTO game_settings_table (username, ball_color, paddle_color, table_color)
			VALUES (?, ?, ?, ?)`,
			[
				username,
				"#FF0000", // Default red ball
				"#0000FF", // Default blue paddle
				"#EEEEEE"  // Default light gray table
			],
			(err) => {
				if (err) return reject(err);
				resolve();
			}
		);
	});
}

//Tic Tac - FIXED: Now inserts into correct table
export async function setdefaultTictac(fastify: FastifyInstance, username: string): Promise<void> {
	return new Promise((resolve, reject) => {
		fastify.db.run(
			`INSERT INTO ticTac_settings_table (username, x_color, o_color, grid_color, board_color)
			VALUES (?, ?, ?, ?, ?)`,
			[
				username,
				"#FF0000", // Default red X
				"#0000FF", // Default blue O  
				"#EEEEEE", // Default light gray grid
				"#EEEEEE"  // Default light gray board
			],
			(err) => {
				if (err) return reject(err);
				resolve();
			}
		);
	});
}

export async function getTicTacinfo(fastify: FastifyInstance, username: string): Promise<ticTacinfo | null> {
	return (new Promise((resolve, rejects) => {
		console.log("username : ", username)
		fastify.db.get('SELECT * FROM ticTac_settings_table where username = ? ', [username],
			async (err: Error | null, rows: ticTacinfo) => {
				if (err){
					console.log("err in the getTicTacinfo !!!!!")
					rejects(err);
					return;
				}
				
				// If no record exists, create default one
				if (!rows) {
					console.log("No tic-tac-toe settings found, creating default for user:", username);
					await setdefaultTictac(fastify, username);
					// Return default values
					resolve({
						x_color: "#FF0000",
						o_color: "#0000FF",
						grid_color: "#EEEEEE", 
						board_color: "#EEEEEE"
					});
				} else {
					console.log("====> : rows : ", rows);
					resolve(rows);
				}
			}
		)
	}))
}

export async function UpdateTicTac(fastify: FastifyInstance, ticTacinfo: ticTacinfo, username: string): Promise<void> {
	return new Promise((resolve, rejects) => {
		fastify.db.run(
			'UPDATE ticTac_settings_table SET x_color = ?, o_color = ?, grid_color = ?, board_color = ? WHERE username = ?',
			[
				ticTacinfo.x_color,
				ticTacinfo.o_color,
				ticTacinfo.grid_color,
				ticTacinfo.board_color,
				username
			],
			(err) => {
				if (err) return rejects(err);
				resolve();
			}
		)
	})
}

export async function setpassword(fastify: FastifyInstance, username: string, newpassowrd: string): Promise<void> {
	return new Promise((resolve, rejects) => {
		fastify.db.run(
			'UPDATE user_authentication SET password = ?  WHERE username = ?',
			[
				newpassowrd,
				username
			],
			(err) => {
				if (err) return rejects(err);
				resolve();
			}
		)
	})
}

export async function settwoFA(fastify: FastifyInstance, username: string, newTwofa: boolean): Promise<void> {
	return new Promise((resolve, rejects) => {
		fastify.db.run(
			'UPDATE user_authentication SET twoFA = ?  WHERE username = ?',
			[
				newTwofa,
				username
			],
			(err) => {
				if (err) return rejects(err);
				resolve();
			}
		)
	})
}