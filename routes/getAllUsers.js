import Router from "express";
import getAllUsers from "../controllers/getAllUsers.js";

const router = Router();

// Ruta '/api/getAllUsers'
router.get("/", getAllUsers);

export default router;