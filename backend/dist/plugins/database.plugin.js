"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const sqlite3_1 = __importDefault(require("sqlite3"));
const database_plugin = async (fastify) => {
    const db = new sqlite3_1.default.Database("./database.db", (err) => {
        if (err)
            throw err;
    });
    const createTablesQuery = `
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
    const createMessageTable = `
		CREATE TABLE IF NOT EXISTS messages (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		sender TEXT NOT NULL,
		recipient TEXT NOT NULL,
		text TEXT NOT NULL,
		timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
		);
	`;
    const createUserTable = `
		CREATE TABLE IF NOT EXISTS users (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			username TEXT NOT NULL UNIQUE
		);
	`;
    await new Promise((resolve, rejects) => {
        db.run(createTablesQuery, (err) => {
            if (err)
                rejects(err);
            resolve();
        });
    });
    fastify.decorate('db', db);
};
exports.default = (0, fastify_plugin_1.default)(database_plugin);
