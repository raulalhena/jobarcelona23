import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

// Solicitud de token a Github
const getAccessToken = async (req, res, next) => {

    // Set de los parametros de la url que se pasa a github
    const queryParams = `?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${req.query.code}&scope=public_repo,user,repo`;

    try{
        // Solicitud de token oauth
        const response = await fetch(`http://github.com/login/oauth/access_token${queryParams}`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                'X-OAuth-Scopes': 'public_repo'
            }
        });
        const data = await response.json();

        // Redirección para obtener los datos de usuario de Github
        res.redirect(`${process.env.HOST}:${process.env.PORT}/getUserData?token=${data.access_token}`);
        return next();
    }catch(e){
        res.status(400).json({
            code: 400,
            message: "Error retrieving the token"
        });
        console.log(`#=>JoBarcelona23: GetAccessToken: ${e}`);
    }
}

export default getAccessToken;