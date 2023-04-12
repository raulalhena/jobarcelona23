import Router from "express";
import login from "../controllers/login.js";

const router = Router();

// Ruta '/getAccessToken'
router.get("/", login);

export default router;