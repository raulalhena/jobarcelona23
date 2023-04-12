import Router from "express";
import usersRouter from "./getAllUsers.js";
import userProfile from "./getUserProfile.js";
import starRepo from "./starRepo.js";
import authorized from "../middlewares/authorization.js";

const router = Router();

router.disable("x-powered-by");

// Check de funcionamiento de ruta
router.get("/", (req, res) => {
    res.status(200).json({
        code: 200,
        message: "Api working"
    });
});

// Rutas de los endpoints con middleware 'authorized'
router.use("/users", authorized, usersRouter);
router.use("/profile", authorized, userProfile);
router.use("/star", authorized, starRepo);

export default router;