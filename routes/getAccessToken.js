import Router from "express";
import getAccessToken from "../controllers/getAccessToken.js";

const router = Router();

router.disable("x-powered-by");

// Ruta '/getAccessToken'
router.get("/", getAccessToken);

export default router;