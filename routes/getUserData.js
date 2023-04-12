import Router from "express";
import getUserData from "../controllers/getUserData.js";

const router = Router();

router.disable("x-powered-by");

// Ruta '/getUserData'
router.get("/", getUserData);

export default router;