import "./dotenv.js";
import { pool } from "./database.js";

// Create table holding data for each RPG character
const createCharactersTable = async () => {
  const createTableQuery = `
        CREATE TABLE IF NOT EXISTS characters (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            class VARCHAR(255) NOT NULL,
            weapon VARCHAR(255) NOT NULL,
            ability VARCHAR(255) NOT NULL
        );
    `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("Characters table created successfully!");
  } catch (err) {
    console.error("Error creating characters table", err);
  }
};

// Drop the table before creating it
const runReset = async () => {
  await pool.query(`DROP TABLE IF EXISTS characters`);
  await createCharactersTable();
};

runReset();
