import fp from 'fastify-plugin'
import sqlite from 'sqlite3'
import { FastifyInstance , FastifyPluginAsync} from 'fastify';


const  database_plugin : FastifyPluginAsync = async (fastify : FastifyInstance) => {
	const db = new sqlite.Database("./database.db", (err) => {
		if (err)
			throw err;
	});

	const createTablesQuery: string = `
		CREATE TABLE IF NOT EXISTS user_authentication (
    	id INTEGER PRIMARY KEY AUTOINCREMENT,
    	username VARCHAR(25) UNIQUE NOT NULL,
    	email VARCHAR(25) UNIQUE NOT NULL,
    	first_name VARCHAR(25),
    	family_name VARCHAR(25),
    	password TEXT,
		twoFA BOOLEAN DEFAULT true,
		twoFA_code INTEGER ,
    	Language VARCHAR(25) DEFAULT 'english',
    	image_url VARCHAR(200) NOT NULL DEFAULT 'yassine_url',
    	cover_url VARCHAR(200) NOT NULL DEFAULT 'yassine_url'
  		);

	`;

	await new Promise <void>((resolve, rejects)  => {
		db.run(createTablesQuery, (err) => {
			if (err)
				rejects(err);
			resolve();
		})
	});

	fastify.decorate('db', db);
}

export default fp(database_plugin);
