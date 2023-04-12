import dotenv from "dotenv";

dotenv.config();

// Solicitud del código a Github enviando el id de cliente
const login = (req, res, next) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}`);
    return next();
};

export default login;