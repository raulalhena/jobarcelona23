import Router from "express";
import starRepo from "../controllers/starRepo.js";

const router = Router();

// Ruta '/api/starRepo'
router.get("/", starRepo);

export default router;