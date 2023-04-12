import fetch from "node-fetch";
import dotenv from "dotenv";
import { User } from "../db/dbConnection.js";

dotenv.config();

// Solicitud de la información de usuario a través de la API de Github
const getUserData = async (req, res) => {

    // Obtención del token devuelto por Github en la URL
    const token = req.query.token;

    try{
        // Solicitud de los datos del usuario autentificado
        const response = await fetch("https://api.github.com/user", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await response.json();

        // Comprobación si ya existe el usuario en la BBDD
        let user = await User.findOne({
            where: {
                githubId: data.id
            }
        });

        // Check si existe el usario en la BBDD, si no, se guarda la información
        if(!user) {
            user = await User.create({ login: data.login, email: data.email, githubId: data.id, token: req.query.token});
            req.session.userId = user.userId;
            req.session.login = user.login;
            req.session.githubId = user.githubId;
            req.session.email = user.email;
            req.session.token = user.token;
        }

        // Redirección por defecto al endpoint /api/profile para envío de información a frontend
        res.redirect(`${process.env.HOST}:${process.env.PORT}/api/profile`);
    }catch(e){
        res.status(400).json({
            code: 400,
            message: "Error retrieving the user data"
        });
        console.log(`#=> JoBarcelon23: GetUserData: ${e}`);
    }
}

export default getUserData;