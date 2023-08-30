import pkg from "pg";
const {Pool} = pkg
import dotenv from 'dotenv'

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

const query = async (text, params) => {
  try {
    const { rows } = await pool.query(text, params);
    return rows;
  } catch (error) {
    throw error;
  }
};

export default query