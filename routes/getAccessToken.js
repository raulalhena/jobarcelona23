import Router from "express";
import getAccessToken from "../controllers/getAccessToken.js";

const router = Router();

// Ruta '/getAccessToken'
router.get("/", getAccessToken);

export default router;