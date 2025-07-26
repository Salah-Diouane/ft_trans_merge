import { FastifyInstance } from "fastify";

export async function getAllUsers(db: FastifyInstance["db"]) {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM user_authentication ORDER BY id ASC", (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}
