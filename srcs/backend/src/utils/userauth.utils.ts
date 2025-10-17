import { rejects } from 'assert';
import { FastifyInstance } from 'fastify';
import { resolve } from 'path';

export interface User {
	id?: number;
	username: string;
	display_name: string;
	email: string;
	first_name: string;
	family_name: string;
	password?: string;
	confirmpassword?: string;
	image_url?: string;
	cover_url?: string
	twoFA?: boolean;
	twoFA_code?: number;
	twoFA_count: number;
	Language?: string;
}

export async function getUserLanguage(fastify: FastifyInstance, username: string): Promise<string | null> {
	return new Promise((resolve, reject) => {
		fastify.db.get(
			`SELECT Language FROM user_authentication WHERE username = ?`,
			[username],
			(err: Error, row: { Language: string }) => {
				if (err) return reject(err);
				resolve(row?.Language || null);
			}
		);
	});
}

export async function setTwoFACountById(fastify: FastifyInstance, id: number, value: number): Promise<void> {
	return new Promise((resolve, reject) => {
		fastify.db.run(
			`UPDATE user_authentication
       SET twoFA_count = ?
       WHERE id = ?`,
			[value, id],
			function (err: Error | null) {
				if (err) return reject(err);
				resolve();
			}
		);
	});
}

export async function getuserid(fastify: FastifyInstance, username: string): Promise<number | null> {
	return new Promise((resolve, rejects) => {
		fastify.db.get(
			`SELECT id from user_authentication WHERE username = ? `,
			[
				username
			],
			(err: Error, row: { id: number }) => {
				if (err) rejects(err);
				resolve(row.id);
			}
		);
	})
}

export async function getUserName(fastify: FastifyInstance, id: string): Promise<string | null> {
	return new Promise((resolve, rejects) => {
		fastify.db.get(
			`SELECT username from user_authentication WHERE id = ? `,
			[
				id
			],
			(err: Error, row: { username: string }) => {
				if (err) rejects(err);
				resolve(row.username);
			}
		);
	})
}

export async function getUserImage(fastify: FastifyInstance, id: string): Promise<string | null> {
	return new Promise((resolve, rejects) => {
		fastify.db.get(
			`SELECT image_url from user_authentication WHERE id = ? `,
			[
				id
			],
			(err: Error, row: { image_url: string }) => {
				if (err) rejects(err);
				resolve(row.image_url);
			}
		);
	})
}

export async function getuser(fastify: FastifyInstance, username: string): Promise<User | null> {
	return (new Promise((resolve, rejects) => {
		fastify.db.get('SELECT * FROM user_authentication WHERE username = ?', [username],
			(err: Error | null, rows: User) => {
				if (err)
					rejects(err);
				resolve(rows);
			})
	}))
}

export async function addNewUser(fastify: FastifyInstance, newuser: User): Promise<void> {
	return new Promise((resolve, reject) => {
		fastify.db.run(
			`INSERT INTO user_authentication (username, display_name , email, first_name, family_name, password)
		 VALUES (?, ?, ?, ?, ?, ?)`,
			[
				newuser.username,
				newuser.username,
				newuser.email,
				newuser.first_name,
				newuser.family_name,
				newuser.password
			],
			(err) => {
				if (err) return reject(err);
				resolve();
			}
		);
	});
}

export async function getuser_email(fastify: FastifyInstance, email: string): Promise<User | null> {
	return (new Promise((resolve, rejects) => {
		fastify.db.get('SELECT * FROM user_authentication WHERE email = ?', [email],
			(err: Error | null, rows: User) => {
				if (err)
					rejects(err);
				resolve(rows);
			})
	}))
}

export async function setTwofAcode(fastify: FastifyInstance, username: string, code: number): Promise<void> {
	return new Promise((resolve, rejects) => {
		fastify.db.run(
			`UPDATE user_authentication SET twoFA_code = ? WHERE username = ?`,
			[code, username],
			(err) => {
				if (err) {
					return rejects(err);
				}
				resolve();
			}
		);
	})
}
