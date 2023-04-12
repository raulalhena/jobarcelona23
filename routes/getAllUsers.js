import Router from "express";
import getAllUsers from "../controllers/getAllUsers.js";

const router = Router();

router.disable("x-powered-by");

// Ruta '/api/getAllUsers'
router.get("/", getAllUsers);

export default router;