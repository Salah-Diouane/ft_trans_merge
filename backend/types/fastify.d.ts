
import 'fastify';
import sqlite3 from 'sqlite3';

declare module 'fastify' {
  interface FastifyInstance {
    db: sqlite3.Database;
  }
}

declare module 'fastify' {
  interface FastifyInstance {
    googleOAuth2: import('@fastify/oauth2').OAuth2Namespace;
  }
}
