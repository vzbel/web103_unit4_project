import { pool } from "../config/database.js";

// Send JSON with all characters data
const getCharacters = async (req, res) => {
  try {
    const results = await pool.query(
      `SELECT * FROM characters ORDER BY id ASC`
    );
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getCharacter = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `
        SELECT * FROM characters
        WHERE id = $1
      `,
      [id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

// Create a new character given character info
const createCharacter = async (req, res) => {
  const { name, class: characterClass, weapon, ability } = req.body;
  try {
    const result = await pool.query(
      `
        INSERT INTO characters (name, class, weapon, ability)
        VALUES ($1, $2, $3, $4)
        RETURNING *
      `,
      [name, characterClass, weapon, ability]
    );

    // Return the newly created character
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

// Modify a character's attributes
const updateCharacter = async (req, res) => {
  const { name, class: characterClass, weapon, ability } = req.body;
  const { id } = req.params;
  try {
    const result = await pool.query(
      `
        UPDATE characters
        SET name = $1, class = $2, weapon = $3, ability = $4
        WHERE id = $5
        RETURNING *
      `,
      [name, characterClass, weapon, ability, id]
    );

    // Return the updated character
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

// Remove character from DB
const deleteCharacter = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `
        DELETE FROM characters
        WHERE id = $1
        RETURNING *
      `,
      [id]
    );
    res.json({ deleted: result.rows[0] });
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getCharacters,
  getCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
