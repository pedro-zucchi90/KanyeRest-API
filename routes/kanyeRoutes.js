import express from "express";
import { kanyePost, kanyeGet, kanyeDelete } from "../controllers/kanyeController.js";

const router = express.Router();
router.use(express.json());

router.post("/", kanyePost);
router.get("/", kanyeGet);
router.delete("/:id", kanyeDelete);

export default router;