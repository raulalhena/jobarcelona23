import Router from "express";
import getUserProfile from "../controllers/getUserProfile.js";

const router = Router();

router.disable("x-powered-by");

// Ruta '/api/getUserProfile'
router.get("/", getUserProfile)

export default router;