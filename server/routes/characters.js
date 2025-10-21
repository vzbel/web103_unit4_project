import express from "express";
import CharactersController from "../controllers/characters.js";

const router = express.Router();

/* Routes to get, create, edit, and delete items */
router.get("/", CharactersController.getCharacters); // all character data
router.get("/:id", CharactersController.getCharacter); // a single character's data
router.post("/", CharactersController.createCharacter); // new character
router.put("/:id", CharactersController.updateCharacter); // edit existing character
router.delete("/:id", CharactersController.deleteCharacter); // eliminate character

export default router;
