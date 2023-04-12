import Router from "express";
import starRepo from "../controllers/starRepo.js";

const router = Router();

router.disable("x-powered-by");

// Ruta '/api/starRepo'
router.get("/", starRepo);

export default router;