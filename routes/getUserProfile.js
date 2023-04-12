import Router from "express";
import getUserProfile from "../controllers/getUserProfile.js";

const router = Router();

// Ruta '/api/getUserProfile'
router.get("/", getUserProfile)

export default router;