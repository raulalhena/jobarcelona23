import Router from "express";
import login from "../controllers/login.js";

const router = Router();

router.disable("x-powered-by");

// Ruta '/getAccessToken'
router.get("/", login);

export default router;