import express from "express";
import dotenv from "dotenv";
import apiRouter from "./routes/api.js";
import bodyParser from "body-parser";
import session from "express-session";
import routerLogin from "./routes/login.js";
import routerToken from "./routes/getAccessToken.js";
import routerUserData from "./routes/getUserData.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

// Set de los middlewares y rutas
app.disable("x-powered-by");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use("/login", routerLogin);
app.use("/getAccessToken", routerToken);
app.use("/getUserData", routerUserData);
app.use("/api", apiRouter);

// Endpoint principal
app.get("/", (req, res) => {
    res.status(200).send("GitHub social login implementation");
});

// Ejecución del servidor en puerto 3000
app.listen(PORT || 3000, ()=> {
    console.log(`Server listening on port ${PORT}`);
});