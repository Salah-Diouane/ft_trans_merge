import fp from 'fastify-plugin'
import sqlite from 'sqlite3'
import { FastifyInstance, FastifyPluginAsync } from 'fastify';

const database_plugin: FastifyPluginAsync = async (fastify: FastifyInstance) => {
	const db = new sqlite.Database("./database.db", (err) => {
		if (err) throw err;
	});
	
	const user_authentication_table: string = `
		CREATE TABLE IF NOT EXISTS user_authentication (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			username VARCHAR(25) UNIQUE NOT NULL,
			email VARCHAR(25) UNIQUE NOT NULL,
			first_name VARCHAR(25),
			family_name VARCHAR(25),
			password VARCHAR(25),
			twoFA BOOLEAN DEFAULT true,
			twoFA_code INTEGER,
			Language VARCHAR(25) DEFAULT 'english',
			image_url VARCHAR(200) NOT NULL DEFAULT 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901100/defaultprofile.jpg',
			cover_url VARCHAR(200) NOT NULL DEFAULT 'https://res.cloudinary.com/dgwo1ehtt/image/upload/v1754901213/defaultcover.jpg'
	  	);
	`;

	const game_settings_table: string = `
		CREATE TABLE IF NOT EXISTS game_settings_table (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			username VARCHAR(25),
			ball_color VARCHAR(25) DEFAULT '#FF0000',
			paddle_color VARCHAR(25) DEFAULT '#0000FF',
			table_color VARCHAR(25) DEFAULT '#EEEEEE',
			FOREIGN KEY(username) REFERENCES user_authentication(username)
	  	);
	`;

	const createBlockedUsersTable = `
		CREATE TABLE IF NOT EXISTS blocked_users (
			blocker TEXT NOT NULL,
			blocked TEXT NOT NULL,
			UNIQUE(blocker, blocked)
		);
	`;

	const createMessageTable: string = `
		CREATE TABLE IF NOT EXISTS messages (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			sender TEXT NOT NULL,
			recipient TEXT NOT NULL,
			text TEXT NOT NULL,
			timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
		);
	`;

	const friendship: string = `
		CREATE TABLE IF NOT EXISTS friendship (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			id_sender INTEGER NOT NULL,
			id_receiver INTEGER NOT NULL,
			accepted BOOLEAN DEFAULT false,
			FOREIGN KEY(id_sender) REFERENCES user_authentication(id),
			FOREIGN KEY(id_receiver) REFERENCES user_authentication(id),
			UNIQUE(id_sender, id_receiver),
			CHECK (id_sender != id_receiver)
		);
	`;

	await new Promise<void>((resolve, reject) => {
		db.run(user_authentication_table, (err) => {
			if (err) return reject(err);
			resolve();
		});

		db.run(game_settings_table, (err2) => {
			if (err2) return reject(err2);
			resolve();
		});

		db.run(createBlockedUsersTable, (err) => {
			if (err)
				reject(err);
			resolve();
		});

		db.run(createMessageTable, (err) => {
			if (err)
				reject(err);
			resolve();
		})

		db.run(friendship, (err) => {
			if (err)
				reject(err);
			resolve();
		})
	});

	fastify.decorate('db', db);
};

export default fp(database_plugin);
