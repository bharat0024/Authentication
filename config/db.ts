import mysql from "mysql2/promise";
import { config } from "dotenv";

config();
const connection = async () => {
  return await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 3306,
  });
};
export default connection;
