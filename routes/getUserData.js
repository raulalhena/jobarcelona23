import Router from "express";
import getUserData from "../controllers/getUserData.js";

const router = Router();

// Ruta '/getUserData'
router.get("/", getUserData);

export default router;