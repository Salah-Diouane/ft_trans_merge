import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const env = {
	CLIENT_ID: process.env.CLIENT_ID,
	CLIENT_SECRUT: process.env.CLIENT_SECRUT,
	GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
	GMAIL_ACCOUNT: process.env.GMAIL_ACCOUNT,
	REFRSH_TOKEN: process.env.REFRSH_TOKEN,
	JWT_SECRET: process.env.JWT_SECRET,
	JWT_SECRET_ACCESS_TOKEN: process.env.JWT_SECRET_ACCESS_TOKEN,
	JWT_SECRET_REFRESH_TOKEN: process.env.JWT_SECRET_REFRESH_TOKEN,
	COOKIE_SECRET: process.env.COOKIE_SECRET,
	DOMAINE_NAME: process.env.DOMAINE_NAME,
	CALLBACKURL: process.env.CALLBACKURL,
	REDERCURL: process.env.REDERCURL
};
